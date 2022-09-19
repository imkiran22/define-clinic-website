import React from 'react';
import HeaderStyle from './Header.module.scss';
import { Layout, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Image from 'next/image';
import { HEADER_MENU_ITEMS, TREATMENTS_MENU } from '../../constants/menu';
const { Header } = Layout;


const HeaderComponent: React.FC = () => {
    const renderMenu = (menus: Array<{key: string, label: string}>) => (
      menus.map(menu => (
          <Menu.Item key={menu.key}>
            <Link href={'/' + menu.key}> 
              {menu.label}
            </Link>
          </Menu.Item>
      ))
    );
    return (
      <Header className={HeaderStyle.header}>
        <div className={HeaderStyle.logo}>
          <Link href={'/'}><Image alt={'logo'} src={'/logo.jpg'} width={'70%'} height={'64%'} layout="fixed"/></Link>
        </div>
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