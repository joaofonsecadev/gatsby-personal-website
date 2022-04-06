import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import SEO from '../components/SEO';
import SiteConfig from '../utils/config';
import profilePicture from '../assets/pfp.jpg';

export default function WebIndex() {
  return (
    <>
      <Helmet title={`${SiteConfig.title} - Game Developer`} />
      <SEO />
      <article className="hero">
        <header>
          <div className="container">
            <div className="flex-content">
              <div>
                <h1>Hey, I&apos;m João.</h1>
                <p className="subtitle small">
                  I&apos;m a game developer from Lisbon, Portugal.
                  Currently working as an Automation Test Engineer at Funcom, for the{' '}
                  <a
                    href="https://pr.funcom.com/Unannounced-Dune-survival-game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    open-world survival Dune game.
                  </a>
                </p>
              </div>
              <img src={profilePicture} alt="Me" className="main-image" />
            </div>
            <p className="hero-buttons">
              <Link to="/about" className="hero-button">
                <img src={profilePicture} alt="Me" />
                More about me
              </Link>
            </p>
          </div>
        </header>
      </article>
    </>
  );
}
