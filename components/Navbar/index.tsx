import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from "next/link";

const { Sider } = Layout;

export default function Navbar({ collapsed }: { collapsed: boolean }) {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState("/home");

  const menus = [
    // {
    //   name: "Inicio",
    //   path: "/home",
    //   icon: <UserOutlined />,
    // },
    {
      name: "Ver despesa",
      path: "/debits",
      icon: <VideoCameraOutlined />,
    },
    {
      name: "Lançar despesa",
      path: "/debits/new",
      icon: <VideoCameraOutlined />,
    },
    // {
    //   name: "Sair",
    //   path: "/logout",
    //   icon: <UploadOutlined />,
    // },
  ];

  useEffect(() => {
    setSelectedKey(router.pathname);
  }, [router]);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">Sistema Lançamento</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        selectedKeys={[selectedKey]}
      >
        {menus.map((menu) => (
          <Menu.Item key={menu.path} icon={menu.icon}>
            <Link href={menu.path}>{menu.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Sider>
  );
}
