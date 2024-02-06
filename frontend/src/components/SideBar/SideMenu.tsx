import React from "react";
import { Layout } from "antd";
import Logo from "../../assets/logo.png";
import MenuList from "../MenuList/MenuList";
import "./SideMenu.css";
const { Sider } = Layout;
interface Props {
  theme: boolean;
}
const SideMenu = ({ theme }: Props) => {
  return (
    <Sider className="sidebar">
      <MenuList theme={theme} />
    </Sider>
  );
};

export default SideMenu;
