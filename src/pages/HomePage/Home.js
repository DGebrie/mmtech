import React from "react";
import { InfoSection, Pricing } from "../../components";
import Projects from "../../components/Projects/Projects";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from "./Data";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
