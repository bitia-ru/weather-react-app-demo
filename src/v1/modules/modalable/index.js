import React from 'react';

const isReactClassComponent = c => typeof c === 'function' && !!c.prototype.isReactComponent;

const withModals = BaseComponent => {
  if (!isReactClassComponent(BaseComponent)) {
    throw new Error('modalable should be used with React.Component or PureComponent only.');
  }

  return class ModalWrapper extends BaseComponent {
    componentDidMount(...args) {
      super.componentDidMount?.apply(this, args);

      if (this.props.history) {
        this.modalWrapperRouterHistoryListenerUnlisten = this.props.history.listen(location => {
          const hash = location.hash.slice(1);

          if (hash && super.modals()[hash]) {
            this.openModal(hash);
          }
        });
      }
    }

    componentWillUnmount(...args) {
      super.componentWillUnmount?.apply(this, args);

      if (this.modalWrapperRouterHistoryListenerUnlisten)
        this.modalWrapperRouterHistoryListenerUnlisten();
    }

    isModalShown = (name) => {
      const { modals } = this.state;
      return modals[name] && modals[name].isShown;
    };

    modalArgs = (name) => {
      const { modals } = this.state;
      return modals[name] ? modals[name].args : null;
    };

    openModal = (name, args) => {
      this.setState({
        modals: {
          [name]: {
            isShown: true,
            args,
          },
        },
      });
    };

    closeModal = (name) => {
      this.setState({
        modals: {
          [name]: false,
          args: null,
        },
      });
    };

    switchModal = (name) => {
      this.setState({
        modals: {
          [name]: {
            isShown: !this.state?.modals[name]?.isShown,
            args: null,
          },
        },
      });
    };

    modalWrapper = (name, body, args) => {
      const wrappedBody = typeof body === 'function' ?
        body({modalArguments: args}) : React.cloneElement(body, {modalArguments: args});

      return (
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(16, 14, 59, 0.45)',
            zIndex: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => this.closeModal(name)}
        >
          {wrappedBody}
        </div>
      );
    };

    renderModal() {
      const modalDescriptions = super.modals();
      const modalStates = this.state?.modals;

      if (!modalStates)
        return;

      for (const name in modalDescriptions) {
        if (modalStates[name]?.isShown)
          return this.modalWrapper(name, modalDescriptions[name].body, modalStates[name]?.args);
      }

      return null;
    }

    render() {
      return (
        <>
          {this.renderModal()}
          {super.render()}
        </>
      );
    }
  };
};

export default withModals;
