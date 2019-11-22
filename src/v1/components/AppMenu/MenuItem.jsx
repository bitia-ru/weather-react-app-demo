import React from 'react';
import Radium from 'radium';
import { withRouter } from 'react-router-dom';


const MenuItem = ({icon, url, urlExactMatch, match, history}) => {
  const selected = urlExactMatch ? match.url === url : match.url.startsWith(url);

  const conditionalStyle = {
    borderRightColor: selected ? '#4293EB' : 'rgba(255,255,255,0)',
    opacity: selected ? '100%' : '50%',
    ':hover': {
      backgroundColor: selected ? 'white' : '#F4F9FA',
      borderRightColor: selected ? '#4293EB' : '#F0F0F0',
      opacity: selected ? '100%' : '75%',
    },
  };

  return (
    <div
      className={selected ? 'clickable-disabled' : 'clickable clickable-dark'}
      tabIndex={0}
      style={{...style, ...conditionalStyle}}
      onClick={() => { history.push(url) }}
    >
      <img style={{paddingLeft: '3px'}} width={24} height={24} src={icon} />
    </div>
  );
};

const style = {
  paddingBottom: '20px',
  paddingTop: '20px',
  height: '40px',
  width: '97px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRight: 'solid 3px #4293EB',
  borderLeft: 'solid 3px rgba(255,255,255,0)',
  marginRight: '3px',
  transition: '0.5s',
};

export default withRouter(Radium(MenuItem));
