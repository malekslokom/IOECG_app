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
      label: <Link to="/projets/catalogues">Mes Catalogues</Link>,
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
    <Menu
      mode="inline"
      theme={theme ? "dark" : "light"}
      className="menu-bar"
      items={menuItems}
    ></Menu>
  );
};

export default MenuList;
