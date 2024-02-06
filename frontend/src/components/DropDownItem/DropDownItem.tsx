import React from "react";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";

interface Props {
  icon: React.ReactNode;
  text: string;
  color: boolean; // Utilisez un booléen pour le thème
}

function DropdownItem({ icon, text, color }: Props) {
  // Style conditionnel en fonction du thème
  const iconStyle = { color: color ? "#fff" : "#000" };

  return (
    <li className="dropdownItem">
      <span style={iconStyle}>{icon}</span>
      <a>{text}</a>
    </li>
  );
}

export default DropdownItem;
