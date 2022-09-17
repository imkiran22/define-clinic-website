import { Content, Footer } from "antd/lib/layout/layout";
import { InstagramOutlined, FacebookFilled } from "@ant-design/icons";
import { Layout as L } from "antd";
import React from "react";
import HeaderComponent from "../Header/Header";

export default function Layout({ children }: any) {
  return (
    <>
      <L>
        <HeaderComponent />
        <Content
          className="site-layout"
          style={{
            padding: "0",
            marginTop: 64,
          }}
        >
          <div
            className="site-layout-background"
          >
            {children}
          </div>
        </Content>
        <Footer className="footer">
          <div className="copyright">Define skin hair and laser clinic ©2022 All rights reserved </div>
          <div className="socialMedia">
            <span className="title">Follow us on</span> 
            <a target={'_blank'} rel="noreferrer"  href={'https://www.instagram.com/define.skin.hair.clinic'}><FacebookFilled/></a>
            <a target={'_blank'} rel="noreferrer"  href={'https://www.instagram.com/define.skin.hair.clinic'}><InstagramOutlined /></a>
          </div>
        </Footer>
      </L>
    </>
  );
}
