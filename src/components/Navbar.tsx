import React from "react";
import { Link } from "gatsby";

import articlesIcon from "../assets/scroll.png";
import aboutIcon from "../assets/helmet.png";
import bookIcon from "../assets/openBook.png";

const navMainItems = [
  { url: "/articles", icon: articlesIcon, label: "Articles" },
  { url: "/photos", icon: articlesIcon, label: "Photos" },
  { url: "/about", icon: aboutIcon, label: "About Me" },
];

const navSocialItems = [
  { url: "https://github.com/joaofonsecadev", icon: bookIcon, label: "Github" },
  {
    url: "https://twitter.com/joaofonsecadev",
    icon: bookIcon,
    label: "Twitter",
  },
];

export default function Navbar() {
  return (
    <header className="navigation">
      <div className="navigation-inner">
        <nav className="brand-section">
          <Link to="/" className="brand">
            <span>João Fonseca</span>
          </Link>
        </nav>
        <div>
          <nav>
            {navMainItems.map((item) => (
              <Link to={item.url} key={item.label} activeClassName="active">
                <img src={item.icon} alt={item.label} />
                <div className="tooltip">{item.label}</div>
              </Link>
            ))}
          </nav>
        </div>
        <div className="toolbar-section">
          <nav className="social-nav">
            {navSocialItems.map((item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                key={item.label}
              >
                <img src={item.icon} alt={item.label} />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
