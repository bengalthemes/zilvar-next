import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLinkedinIn,
} from "react-icons/fa";
export const siteSettings = {
  name: "Zilvar",
  description:
    "Fastest E-commerce template built with React, NextJS, TypeScript, React-Query and Tailwind CSS.",
  author: {
    name: "BengalThemes",
    websiteUrl: "https://themeforest.net/user/bengalthemes/portfolio",
    address: "PO Box 223158 Oliver Street <br/>East Victoria 2006 UK",
    email: "zilbardemo@demo.com",
    phone: "+011 1235 6542",
  },
  logo: {
    url: "assets/images/logo.png",
    alt: "Zilvar",
    href: "/",
    width: 48,
    height: 34,
  },
  footerLogo: {
    url: "assets/images/logo-white.png",
    alt: "Zilvar",
    href: "/",
    width: 64,
    height: 44,
  },
  socialProfile: [
    {
      id: 1,
      label: "facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
    },
    {
      id: 2,
      label: "twitter",
      icon: <FaTwitter />,
      link: "https://www.twitter.com/",
    },
    {
      id: 3,
      label: "linkedin",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/",
    },
    {
      id: 4,
      label: "pinterest",
      icon: <FaPinterest />,
      link: "https://www.pinterest.com/",
    },
    {
      id: 5,
      label: "instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/",
    },
  ],
  homeMenu: [
    { id: 1, path: "home", label: "Home" },
    { id: 2, path: "services", label: "Services" },
    { id: 3, path: "works", label: "Portfolio" },
    { id: 4, path: "client", label: "Client" },
    { id: 5, path: "blog", label: "Blog" },
  ],
};
