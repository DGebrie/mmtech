import React from "react";
import { InfoSection } from "../../components";
import Projects from "../../components/Projects/Projects";
import { productOne, productTwo, productThree } from "./Data";

function Products() {
  return (
    <>
      <InfoSection {...productOne} />
      <InfoSection {...productTwo} />
      <InfoSection {...productThree} />
    </>
  );
}

export default Products;
