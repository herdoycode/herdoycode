import { useState } from "react";
import "./Navbar.css";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div className="nav__wrapper">
      <nav className="nav container">
        <a href="#" className="nav__brand">
          herdoy
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Home
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Portfolio
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Skills
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Contact
            </a>
          </li>
          <li className="nav__item">
            <ThemeSwitch />
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
