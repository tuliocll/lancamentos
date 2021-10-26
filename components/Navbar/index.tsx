import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import {
  UserOutlined,
  FileTextOutlined,
  FundProjectionScreenOutlined,
  UserAddOutlined,
  LogoutOutlined,
  CloudUploadOutlined,
  CloudServerOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import Link from "next/link";
import { signOut } from "next-auth/react";

const { Sider } = Layout;

export default function Navbar({ collapsed }: { collapsed: boolean }) {
  const router = useRouter();
  const [selectedKey, setSelectedKey] = useState("/home");

  const menus = [
    {
      name: "Ver despesa",
      path: "/debits",
      icon: <FundProjectionScreenOutlined />,
    },
    {
      name: "Lançar despesa",
      path: "/debits/new",
      icon: <FileTextOutlined />,
    },
    {
      name: "Cadastrar usuário",
      path: "/users/new",
      icon: <UserAddOutlined />,
    },
    {
      name: "Ver usuários",
      path: "/users",
      icon: <UserOutlined />,
    },
    {
      name: "Cadastrar serviço",
      path: "/services/new",
      icon: <CloudUploadOutlined />,
    },
    {
      name: "Ver serviços",
      path: "/services",
      icon: <CloudServerOutlined />,
    },
    {
      name: "Sair",
      path: "/logout",
      icon: <LogoutOutlined className="danger" />,
    },
  ];

  function handleSignout() {
    signOut();
  }

  useEffect(() => {
    setSelectedKey(router.pathname);
  }, [router]);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">{collapsed ? "LAN" : "LANÇAMENTOS"}</div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[selectedKey]}
        selectedKeys={[selectedKey]}
      >
        {menus.map((menu) => {
          if (menu.path === "/logout") {
            return (
              <Menu.Item key={menu.path} icon={menu.icon}>
                <a className="danger" onClick={handleSignout}>
                  {menu.name}
                </a>
              </Menu.Item>
            );
          }

          return (
            <Menu.Item key={menu.path} icon={menu.icon}>
              <Link href={menu.path}>{menu.name}</Link>
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
}
