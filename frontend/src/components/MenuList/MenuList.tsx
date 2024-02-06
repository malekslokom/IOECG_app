import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import "./MenuLists.css";
import {
  ProjectOutlined,
  HistoryOutlined,
  DatabaseOutlined,
  BookOutlined,
} from "@ant-design/icons";
interface Props {
  theme: boolean;
}
const MenuList = ({ theme }: Props) => {
  const menuItems = [
    {
      label: "Projets",
      key: "project",
      icon: <ProjectOutlined />,
      children: [
        {
          label: <Link to="/projets/catalogues">Catalogues</Link>,
          key: "catalogue",
        },
        {
          label: <Link to="/projets/datasets">Datasets</Link>,
          key: "datasets",
        },
        {
          label: <Link to="/projets/analyses">Analyses</Link>,
          key: "analyses",
        },
        {
          label: <Link to="/projets/rapports">Rapports</Link>,
          key: "rapports",
        },
      ],
    },
    {
      label: "Mes Datasets",
      key: "mes-datasets",
      icon: <DatabaseOutlined />,
    },
    {
      label: "Mes Catalogues",
      key: "mes-catalogues",
      icon: <BookOutlined />,
    },
    {
      label: "Historique",
      key: "historique",
      icon: <HistoryOutlined />,
    },
  ];
  return (
    <Menu mode="inline" theme="light" className="menu-bar">
      <Menu.SubMenu
        title="Projets"
        key="project"
        onTitleClick={() => console.log("clicked")}
        icon={<ProjectOutlined />}
      >
        <Menu.Item key="catalogue">Catalogues</Menu.Item>
        <Menu.Item key="datasets">Datasets</Menu.Item>
        <Menu.Item key="analyses">Analyses</Menu.Item>
        <Menu.Item key="rapports">Rapports</Menu.Item>
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
