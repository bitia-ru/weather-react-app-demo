import React from 'react';


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

  if (typeof BaseComponent === 'function') {
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
      super.componentDidMount.apply(this, args);

      installEffect();
    }
  };
};

export default withClickableEffect;
