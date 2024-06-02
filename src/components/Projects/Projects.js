import React from "react";
import { Button } from "../../globalStyles";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  ProjectsSection,
  ProjectsWrapper,
  ProjectsHeading,
  ProjectsContainer,
  ProjectsCard,
  ProjectsCardInfo,
  ProjectsCardIcon,
  ProjectsCardPlan,
  ProjectsCardCost,
  ProjectsCardLength,
  ProjectsCardFeatures,
  ProjectsCardFeature,
} from "./Projects.elements";

const Projects = () => {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <ProjectsSection>
        <ProjectsWrapper>
          <ProjectsHeading>Our Projects</ProjectsHeading>
          <ProjectsContainer>
            <ProjectsCard to="#spiral-av">
              <ProjectsCardInfo>
                <ProjectsCardIcon>
                  <GiRock />
                </ProjectsCardIcon>
                {/* <ProjectsCardPlan>SpiralAV</ProjectsCardPlan> */}
                <ProjectsCardLength>SpiralAV</ProjectsCardLength>
                <ProjectsCardFeatures>
                  <ProjectsCardFeature>
                    describe what we did for threm
                  </ProjectsCardFeature>
                  <ProjectsCardFeature>Testimony </ProjectsCardFeature>
                </ProjectsCardFeatures>
                <Button primary>view site</Button>
              </ProjectsCardInfo>
            </ProjectsCard>
            <ProjectsCard to="#spiral-av">
              <ProjectsCardInfo>
                <ProjectsCardIcon>
                  <GiRock />
                </ProjectsCardIcon>
                {/* <ProjectsCardPlan>SpiralAV</ProjectsCardPlan> */}
                <ProjectsCardLength>Brunch Problems</ProjectsCardLength>
                <ProjectsCardFeatures>
                  <ProjectsCardFeature>
                    describe what we did for threm
                  </ProjectsCardFeature>
                  <ProjectsCardFeature>Testimony </ProjectsCardFeature>
                </ProjectsCardFeatures>
                <Button primary>view site</Button>
              </ProjectsCardInfo>
            </ProjectsCard>
            <ProjectsCard to="#spiral-av">
              <ProjectsCardInfo>
                <ProjectsCardIcon>
                  <GiRock />
                </ProjectsCardIcon>
                {/* <ProjectsCardPlan>SpiralAV</ProjectsCardPlan> */}
                <ProjectsCardLength>SpiralAV</ProjectsCardLength>
                <ProjectsCardFeatures>
                  <ProjectsCardFeature>
                    describe what we did for threm
                  </ProjectsCardFeature>
                  <ProjectsCardFeature>Testimony </ProjectsCardFeature>
                </ProjectsCardFeatures>
                <Button primary>view site</Button>
              </ProjectsCardInfo>
            </ProjectsCard>
          </ProjectsContainer>
        </ProjectsWrapper>
      </ProjectsSection>
    </IconContext.Provider>
  );
};

export default Projects;
