import { useState } from "react";
import "./Navbar.css";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsGithub,
} from "react-icons/bs";
import ThemeSwitch from "../themeSwitch/ThemeSwitch";

const navItems = [
  { id: 1, link: "3", label: "Home" },
  { id: 2, link: "3", label: "About" },
  { id: 3, link: "3", label: "Skills" },
  { id: 4, link: "3", label: "Portfolio" },
  { id: 5, link: "3", label: "Contact" },
];
const socialIcons = [
  { id: 1, link: "#", icon: <BsFacebook /> },
  { id: 2, link: "#", icon: <BsTwitter /> },
  { id: 3, link: "#", icon: <BsLinkedin /> },
  { id: 4, link: "#", icon: <BsInstagram /> },
  { id: 5, link: "#", icon: <BsGithub /> },
];

const Navbar = () => {
  const [active, setActive] = useState<string>("nav__center");
  const [icon, setIcon] = useState<string>("toggle-icon");
  const handleToggle = () => {
    if (active === "nav__center") {
      setActive("nav__center nav-collapse");
    } else setActive("nav__center");

    // Icon Toggler
    if (icon === "toggle-icon") {
      setIcon("toggle-icon btnToggle");
    } else setIcon("toggle-icon");
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <div className="nav__left">
            <a href="#" className="nav__brand">
              Herdoy
            </a>
          </div>
          <div className={active}>
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.id} className="nav__item">
                  <a href={item.link} className="nav__link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav__right">
            <div className="social-nav">
              {socialIcons.map((item) => (
                <a key={item.id} href={item.link}>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="nav__toggler">
            <ThemeSwitch />
            <div onClick={handleToggle} className={icon}>
              <div className="toggle-icon-1"></div>
              <div className="toggle-icon-2"></div>
              <div className="toggle-icon-3"></div>
            </div>
          </div>
          <div className="theme__switch">
            <ThemeSwitch />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
