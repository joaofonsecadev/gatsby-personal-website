import IconTwitter from "../assets/comp-twitter";
import IconGithub from "../assets/comp-github";
import IconMastodon from "../assets/comp-mastodon";

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
      icon: IconGithub,
      label: "Github",
    },
    {
      url: "https://twitter.com/joaofonsecadev",
      icon: IconTwitter,
      label: "Twitter",
    },
    {
      url: "https://fosstodon.org/@joaofonsecadev",
      icon: IconMastodon,
      label: "Mastodon",
    },
  ],
};

export default siteConfig;
