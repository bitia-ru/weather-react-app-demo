import React from 'react';
import ItemWrapper from '../../layouts/Base/ItemWrapper';
import Item from '../../layouts/Base/Item';
import Col from '../../layouts/Base/Col';
import MenuItem from './MenuItem';
import Logo from '../../components/Logo';
import Avatar from '../../components/Avatar';
import LanguageSwitcher from '../../components/LanguageSwitcher';


const AppMenu = () => (
  <div style={style}>
    <Col style={{alignItems: 'center'}}>
      <ItemWrapper fixedSize>
        <Logo />
      </ItemWrapper>
      <Item style={{display: 'flex', alignItems: 'center', flexFlow: 'column'}}>
        <MenuItem urlExactMatch icon={require('./icons/home.svg')} url={'/'} />
        <MenuItem icon={require('./icons/cities.svg')} url={'/cities'} />
      </Item>
      <ItemWrapper fixedSize>
        <LanguageSwitcher />
      </ItemWrapper>
      <ItemWrapper fixedSize>
        <Avatar onClick={() => go('#profile')} />
      </ItemWrapper>
    </Col>
  </div>
);

const style = {
  width: '100px',
  height: '100%',
  paddingTop: '5vh',
  paddingBottom: '5vh',
  boxSizing: 'border-box',
};

export default AppMenu;
