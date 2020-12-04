import React from "react";
import {
  FooterContainer,
  SectionUp,
  LeftSide,
  RightSide,
  TwitterButton,
  FacebookButton,
  GoogleButton,
  InstagramButton,
} from "./style";
import TWITTER from "../../images/svg/twitter.svg";
import FB from "../../images/svg/facebook.svg";
import GOOGLE from "../../images/svg/googleplus.svg";
import INSTAGRAM from "../../images/svg/instagram.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <SectionUp>
        <LeftSide>
          <a href="/#">About Us</a>
          <a href="/#">Press</a>
          <a href="/#">Blog</a>
          <a href="/#">iOS</a>
          <a href="/#">Android</a>
        </LeftSide>
        <RightSide>
          <TwitterButton src={FB}></TwitterButton>
          <FacebookButton src={TWITTER}></FacebookButton>
          <GoogleButton src={GOOGLE}></GoogleButton>
          <InstagramButton src={INSTAGRAM}></InstagramButton>
        </RightSide>
      </SectionUp>
    </FooterContainer>
  );
};

export default Footer;
