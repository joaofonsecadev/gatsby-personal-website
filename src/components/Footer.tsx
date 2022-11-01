import React from "react";
import config from "../utils/config";

export default function Footer() {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="copyright">© João Fonseca</span>
        </nav>
        <nav>
          {config.socials.map((item) => {
            return (
              <a
                href={item.url}
                title={item.label}
                target="_blank"
                rel="noopener noreferrer"
                key={item.url}
              >
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>
      </section>
    </footer>
  );
}
