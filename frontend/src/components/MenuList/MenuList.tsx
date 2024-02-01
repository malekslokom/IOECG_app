import React from "react";
import { Menu } from "antd";
import "./MenuLists.css";
import {
  ProjectOutlined,
  HistoryOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
const MenuList = () => {
  return (
    <Menu mode="inline" theme="light" className="menu-bar">
      <Menu.SubMenu title="Projets" key="project" icon={<ProjectOutlined />}>
        <Menu.Item key="catalogue">Catalogues</Menu.Item>
        <Menu.Item key="datasets">Datasets</Menu.Item>
        <Menu.Item key="analyses">Analyses</Menu.Item>
        <Menu.Item key="rapports">Rappotrs</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="mes-datasets" icon={<DatabaseOutlined />}>
        Mes Datasets
      </Menu.Item>
      <Menu.Item key="historique" icon={<HistoryOutlined />}>
        Historique
      </Menu.Item>
    </Menu>
  );
};

export default MenuList;
