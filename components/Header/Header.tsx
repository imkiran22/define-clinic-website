import React from 'react';
import HeaderStyle from './Header.module.scss';
import { Layout, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import { HEADER_MENU_ITEMS, TREATMENTS_MENU } from '../../constants/menu';
const { Header } = Layout;


const HeaderComponent: React.FC = () => {
    const renderMenu = (menus: Array<{key: string, label: string}>) => (
        menus.map(menu => (
            <Menu.Item key={menu.key}>
                {menu.label}
            </Menu.Item>
        ))
    );
    return (
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
        }}
      >
        <div className="logo" />
        <Menu triggerSubMenuAction='click' theme="dark" mode="horizontal" defaultSelectedKeys={["home"]}>
          {renderMenu(HEADER_MENU_ITEMS)}
          <Menu.SubMenu className={HeaderStyle.treatmentMenu} key="SubMenu" title="Treatments" icon={<CaretDownOutlined />}>
            {renderMenu(TREATMENTS_MENU)}
          </Menu.SubMenu>
        </Menu>
        
      </Header>
    );
};

export default HeaderComponent;