import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import Navbar from "../Navbar";

const { Header, Content } = Layout;

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactChild;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [render, setRender] = useState(false);

  function toggle() {
    setCollapsed(!collapsed);
  }

  useEffect(() => {
    setRender(true);
  }, []);

  if (!render) return null;

  return (
    <Layout>
      <Navbar collapsed={collapsed} />
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggle,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
