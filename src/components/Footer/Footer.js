import React from "react";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  Small,
  StyledFooter,
} from "../styles/Footer.styled";
import { animateScroll as scroll } from "react-scroll";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>

      <FooterBigLinkContainer>
        <FooterBigLink
          href="mailto:shivamjmp2@gmail.com"
          data-hover="Let's talk!"
        >
          Need a developer?
        </FooterBigLink>
      </FooterBigLinkContainer>
      <FooterContacts>
        <FooterContact>
          <ContactHeader>Call me</ContactHeader>
          <ContactLink href="tel:+917362006858">+917362006858</ContactLink>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Social</ContactHeader>{" "}
          <FooterSocials>
            <ContactLink
              href="https://github.com/Shivamkumar-33"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              GitHub
            </ContactLink>
            <ContactLink
              href="https://www.linkedin.com/in/shivam-kumar-34471224b/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="https://www.instagram.com/shivamkumar_rudra?igsh=MXFydXNlc2J4YzBleg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              Instagram
            </ContactLink>
          </FooterSocials>
        </FooterContact>
        <FooterContact>
          <ContactHeader>Let's grab a coffee.</ContactHeader>
          <ContactLink href="mailto:shivamjmp2@gmail.com">
            shivamjmp2@gmail.com
          </ContactLink>
        </FooterContact>
      </FooterContacts>

      <FooterArrowLine>
        <FooterLine />
        <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
      </FooterArrowLine>

      <Copyright>
        <small>
          &copy; Copyright {year},{" "}
          <Small
            href="https://github.com/Shivamkumar-33"
            target="_blank"
            rel="noopener noreferrer"
          >
            Shivam Kumar
          </Small>
        </small>
      </Copyright>
    </StyledFooter>
  );
};

export default Footer;
