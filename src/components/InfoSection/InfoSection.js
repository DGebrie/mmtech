import React, { useState, useEffect } from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  List,
  ListItems,
  ContactSec,
  Form,
  FormInput,
  FooterSubHeading,
  FooterSubText,
  FooterSubscription,
} from "./InfoSection.elements";
import { Container, Button } from "../../globalStyles";
import { Link } from "react-router-dom";

const InfoSection = ({
  contactSubheading,
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  list,
  id,
  isContactForm,
}) => {
  var size = document.documentElement.clientWidth;
  const [pageWidth, setPageWidth] = useState(
    document.documentElement.clientWidth
  );
  useEffect(() => {
    const handleResize = () => {
      setPageWidth(document.documentElement.clientWidth);
    };
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!isContactForm ? (
        <InfoSec lightBg={lightBg} id={id}>
          <Container pageWidth={pageWidth}>
            <InfoRow imgStart={imgStart}>
              <InfoColumn>
                <TextWrapper>
                  <TopLine
                    lightTopLine={lightTopLine}
                    dangerouslySetInnerHTML={{ __html: topLine }}
                  />
                  <Heading lightText={lightText}>{headline}</Heading>
                  <Subtitle
                    lightTextDesc={lightTextDesc}
                    dangerouslySetInnerHTML={{ __html: description }}
                  />
                  <List>
                    {list
                      ? list.map((l) => (
                          <ListItems lightTextDesc={lightTextDesc} key={l.id}>
                            <i>{l.text}</i>
                          </ListItems>
                        ))
                      : ""}
                  </List>
                  {buttonLabel && (
                    <Link to="/sign-up">
                      <Button big fontBig primary={primary}>
                        {buttonLabel}
                      </Button>
                    </Link>
                  )}
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      ) : (
        <ContactSec lightBg={lightBg} id={id}>
          <Container pageWidth={pageWidth}>
            <InfoRow imgStart={imgStart}>
              <InfoColumn>
                <FooterSubscription>
                  <FooterSubHeading>{contactSubheading}</FooterSubHeading>
                  <FooterSubText>
                    You can unsubscribe at any time.
                  </FooterSubText>
                  <Form>
                    <FormInput
                      name="email"
                      type="email"
                      placeholder="Your Name"
                    />
                    <FormInput
                      name="email"
                      type="email"
                      placeholder="Your Email"
                    />
                    <FormInput
                      name="email"
                      type="email"
                      placeholder="Your Phone Number"
                    />
                    <Button fontBig>Subscribe</Button>
                  </Form>
                </FooterSubscription>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper start={start}>
                  <Img src={img} alt={alt} />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </ContactSec>
      )}
    </>
  );
};

export default InfoSection;
