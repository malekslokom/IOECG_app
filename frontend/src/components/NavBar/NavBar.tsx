import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css";
import DropdownItem from "../DropDownItem/DropDownItem"; // Make sure to adjust the import path
import user from "../../assets/user.png";
import userExemple from "../../assets/exemple-user.png";
import edit from "../../assets/edit.png";
import logo from "../../assets/IRD.png";
import inbox from "../../assets/envelope.png";
import settings from "../../assets/settings.png";
import help from "../../assets/question.png";
import logout from "../../assets/log-out.png";
const NavBar = () => {
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
          <img style={{ height: "80px", width: "auto" }} src={logo} />
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
              <DropdownItem img={settings} text="Settings" />
              <DropdownItem img={logout} text="Logout" />
            </ul>
          </div>
        </div>
        <img src="../assets/logo.png" alt="" className="logo" />
      </nav>
    </div>
  );
};

export default NavBar;
