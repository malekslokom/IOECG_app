import React from "react";
import { Layout } from "antd";
import Logo from "../../assets/logo.png";
import MenuList from "../MenuList/MenuList";
const { Header, Sider } = Layout;
const SideMenu = () => {
  return (
    <Layout>
      <Sider className="sidebar">
        <MenuList />
      </Sider>
    </Layout>
  );
};

export default SideMenu;
