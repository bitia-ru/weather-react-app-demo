import React from 'react';
import Row from '../Base/Row';
import Item from '../Base/Item';
import ItemWrapper from '../Base/ItemWrapper';
import AppMenu from '../../components/AppMenu'
import TodayBar from '../../components/TodayBar';
import {GenericChildrenType} from '../../../Utils';


const MainLayout = ({children}) => (
  <Row style={rowStyle}>
    <ItemWrapper fixedSize>
      <AppMenu />
    </ItemWrapper>
    <Item>
      <div style={contentStyle}>
        {children}
      </div>
    </Item>
    <Item fixedSize style={{...contentStyle, ...todayBarContainerStyle}}>
      <TodayBar />
    </Item>
  </Row>
);

const rowStyle = {
  height: '100%',
};

const contentStyle = {
  backgroundColor: '#F2FBFF',
  height: '100%',
  boxSizing: 'border-box',
  padding: '5vh',
};

const todayBarContainerStyle = {
  padding: '5vh',
  boxSizing: 'border-box',
};

MainLayout.propTypes = {
  children: GenericChildrenType,
};

export default MainLayout;
