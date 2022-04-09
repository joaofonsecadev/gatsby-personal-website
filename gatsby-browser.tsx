import React from "react";
import type { GatsbyBrowser } from "gatsby";
import Layout from "./src/components/Layout";

import "./src/styles/styles.scss";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <Layout>{element}</Layout>;
};
