import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css";
import DropdownItem from "../DropDownItem/DropDownItem"; // Make sure to adjust the import path
import userExemple from "../../assets/exemple-user.png";
import logo from "../../assets/IRD.png";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import Toggle from "../Toggle/Toggle";
import useLocalStorage from "use-local-storage";
interface Props {
  theme: boolean;
  onThemeChange: (isDark: boolean) => void;
}
const NavBar = ({ theme, onThemeChange }: Props) => {
  const [isDark, setIsDark] = useLocalStorage("isDark", theme);

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="menu-container" ref={menuRef}>
          <img style={{ height: "70px", width: "auto" }} src={logo} />

          <div className="menu-trigger" onClick={handleToggle}>
            <p>Andy</p>
            <img src={userExemple} />
          </div>

          <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
            <h3>
              Andy
              <br />
              <span>andy@gmail.com</span>
            </h3>
            <ul>
              <DropdownItem
                icon={<SettingOutlined />}
                text="Paramètres"
                color={isDark}
              />
              <DropdownItem
                icon={<LogoutOutlined />}
                text="Déconnexion"
                color={isDark}
              />
            </ul>
          </div>
        </div>
        <Toggle
          isChecked={isDark}
          handleChange={(isChecked) => {
            setIsDark(isChecked);
            onThemeChange(isChecked);
          }}
        />
      </nav>
    </div>
  );
};

export default NavBar;
