import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby";
import siteConfig from "../utils/config";

export default function NotFound() {
  return (
    <>
      <Helmet title={`404 - Not found ${siteConfig.titleSep}`} />
      <article>
        <header>
          <div className="container">
            <h1>404</h1>
            <p className="description">What are you doing here?</p>
            <Link to="/">Go back!</Link>
          </div>
        </header>
      </article>
    </>
  );
}
