import React from "react";
import { InfoSection, Pricing } from "../../components";
import { productFour, productThree, productTwo, homeObjOne } from "./Data";

function Services() {
  return (
    <>
      <Pricing />
      {/* <InfoSection {...homeObjOne} /> */}
      <InfoSection {...productTwo} />
      <InfoSection {...productFour} />
      <InfoSection {...productThree} />
    </>
  );
}

export default Services;
