import React from 'react';


const isReactClassComponent = c => typeof c === 'function' && !!c.prototype.isReactComponent;

const withClickableEffect = BaseComponent => {
  const installEffect = () => {
    document.body.onclick = e => {
      e = window.event ? event.srcElement : e.target;
      if (e.className && e.className.indexOf('clickable') != -1) {
        const el = document.activeElement;
        if (el != document.body) setTimeout(() => el.blur(), 100);
      }
    }
  };

  if (!isReactClassComponent(BaseComponent)) {
    return class ClickableEffectWrapper extends React.PureComponent {
      componentDidMount() {
        installEffect();
      }

      render() {
        return BaseComponent(this.props);
      }
    };
  }

  return class ClickableEffectWrapper extends BaseComponent {
    componentDidMount(...args) {
      super.componentDidMount?.apply(this, args);

      installEffect();
    }
  };
};

export default withClickableEffect;
