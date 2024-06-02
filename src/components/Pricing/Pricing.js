import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";

const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Services</PricingHeading>
          <PricingContainer>
            <PricingCard to="/services/#starter">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardLength>*contact for pricing</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Fully Built Webpage</PricingCardFeature>
                  <PricingCardFeature>Contact Form</PricingCardFeature>
                  <PricingCardFeature>
                    3 Social Media Accounts
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/services/#gold">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Member</PricingCardPlan>
                <PricingCardLength>*contact for pricing</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Fully Built Webpage</PricingCardFeature>
                  <PricingCardFeature>Contact Form</PricingCardFeature>
                  <PricingCardFeature>
                    3 Social Media Accounts
                  </PricingCardFeature>
                  <PricingCardFeature>
                    Free Social Media Consultation
                  </PricingCardFeature>
                  <PricingCardFeature>
                    2 Addiontal Blog Pages
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/services/#diamond">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Member</PricingCardPlan>
                <PricingCardLength>*contact for pricing</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Fully Built Webpage</PricingCardFeature>
                  <PricingCardFeature>Contact Form</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                  <PricingCardFeature>
                    Free Social Media Consultation
                  </PricingCardFeature>
                  <PricingCardFeature>
                    2 Addiontal Blog Pages
                  </PricingCardFeature>
                  <PricingCardFeature>
                    1 Month Social Media Handling
                  </PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
};

export default Pricing;
