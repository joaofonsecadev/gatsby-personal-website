import twitterLogo from "../assets/twitter.png";
import githubLogo from "../assets/github.png";

const siteConfig = {
  title: "João Fonseca",
  titleSep: "| João Fonseca",
  url: "https://joaofonseca.dev",
  // siteLogo: '/logo.png',
  description:
    "Game developer based in Lisbon, Portugal. Welcome to my personal website where you will find articles and some info about me.",
  socials: [
    {
      url: "https://github.com/joaofonsecadev",
      icon: githubLogo,
      label: "Github",
    },
    {
      url: "https://twitter.com/joaofonsecadev",
      icon: twitterLogo,
      label: "Twitter",
    },
  ],
};

export default siteConfig;
