import { GiCutDiamond, GiRock } from "react-icons/gi";

export const productOne = {
  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  // topLine: "View Our Products",
  headline: "Why MM Digital?",
  description: "Our beneficial statement",
  // buttonLabel: "Shop Now",
  // imgStart: "",
  // img: require("../../images/svg-1.svg"),
  // alt: "Credit Card",
};

export const productTwo = {
  lightBg: true,
  lightText: false,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: "*Best Offer",
  id: "testimonial",
  headline: "Quote from business client plus link to their site/name",

  description: "",
  list: [
    {
      id: 1,
      text: "",
    },
  ],
  buttonLabel: "View Site",
  imgStart: "start",
  // img: require("../../images/diamant.svg"), Picture of business or site
  alt: "Vault",
};

export const productThree = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  isContactForm: true,
  topLine: "Contact Form",
  headline: "Contact Us",
  // for businesses w existing sites/social media/apps/etc
  // starting price
  // additional +$$.$$ depending on service needed (up to 3 different services)
  id: "contact-us-form",
  description: "",
  list: [
    {
      id: 1,
      text: "",
    },
  ],
  buttonLabel: "",
  imgStart: "start",
  img: require("../../images/contact-info.png"),
  alt: "",
  contactSubheading: "Contact Us",
};
