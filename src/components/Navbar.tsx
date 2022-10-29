import React from "react";
import { Link } from "gatsby";

import retroPc from "../assets/retropc.png";

import config from "../utils/config";

const navMainItems = [
  { url: "/blog", label: "Writting" },
  { url: "/photos", label: "Photos" },
  { url: "/about", label: "About Me" },
];

export default function Navbar() {
  return (
    <header className="navigation">
      <div className="container">
        <nav>
          <Link to="/" className="brand">
            <img src={retroPc} className="logo" alt="João Fonseca" />
            <span className="desktop-only">João Fonseca</span>
          </Link>
          {navMainItems.map((item) => (
            <Link to={item.url} key={item.label} activeClassName="active">
              <div className="tooltip">{item.label}</div>
            </Link>
          ))}
        </nav>
        <div className="toolbar-section desktop-only">
          <nav className="social-nav">
            {config.socials.map((item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={item.label}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
