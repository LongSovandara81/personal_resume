import React from "react";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  {
    id: 1,
    label: "Home",
    path: "#home",
  },
  {
    id: 2,
    label: "About",
    path: "#about",
  },
  {
    label: "Knowledge",
    path: "#know",
  },
  {
    label: "Service",
    path: "#services",
  },
  {
    label: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="top-page">
      <nav className="navagation">
        <img className="logo" src="images/logo.png" alt="" />
        <span className="icon-toggler" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </span>
        <ul className={isOpen ? "nav-lists show" : "nav-lists"}>
          {links.map((link) => (
            <li
              className="nav-links"
              onClick={() => setIsOpen(false)}
              key={link.label}
            >
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
          <button className="connectBtn">Sign In</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
