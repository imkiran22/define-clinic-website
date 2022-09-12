import { Content, Footer } from "antd/lib/layout/layout";
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
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </L>
    </>
  );
}
