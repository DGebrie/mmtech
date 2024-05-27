import { GiCutDiamond, GiRock } from "react-icons/gi";

export const homeObjOne = {
  lightBg: false,
  lightText: true,
  lightTopLine: true,
  lightTextDesc: true,
  topLine: "View Our Products",
  headline: "Shop through our catalog of products",
  description: "Diamond, Gold, Starter",
  buttonLabel: "Shop Now",
  imgStart: "",
  img: require("../../images/svg-1.svg"),
  alt: "Credit Card",
};

export const homeObjTwo = {
  lightBg: true,
  lightText: false,
  lightTopLine: false,
  lightTextDesc: false,
  topLine: "*Best Offer",
  headline: "Diamond Membership",
  description:
    "Ensure comprehensive digital solutions, from app and website creation to social media consultation, all designed to elevate your online presence and drive business growth.",
  list: [
    {
      id: 1,
      text: "Mobile Application",
    },
    {
      id: 2,
      text: "Fully Functional Webpage",
    },
    {
      id: 3,
      text: "Social Media Creation and Consultation",
    },
    {
      id: 4,
      text: "Fully Functional Webpage",
    },
  ],
  buttonLabel: "Learn More",
  imgStart: "start",
  img: require("../../images/diamant.svg"),
  alt: "Vault",
};

export const homeObjThree = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Easy Setup",
  headline: "Starter Pack",
  description: "Quick set up, only requiring minimal information.",
  buttonLabel: "Start Now",
  imgStart: "start",
  img: require("../../images/fistbump.svg"),
  alt: "Vault",
};

export const homeObjFour = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: "DATA ANALYTICS",
  headline: "Gold Membership",
  description:
    "Never ever have to worry again about saved reciepts. We store your data, so you can access it anytime.",
  buttonLabel: "Sign Up Now",
  imgStart: "start",
  img: require("../../images/whitegoldbar.svg"),
  alt: "Vault",
};
