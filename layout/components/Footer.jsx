import { animateScroll as scroll } from "react-scroll";
import styled from "styled-components";
import Link from "next/link";
import NextImage from "@/tokens/NextImage";

const FooterContainer = styled.div`
  background-color: hsl(218, 84%, 64%);
`;

const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;
const FooterLinksContainer = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
    flex-direction: column;
  }
`;

const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const FooterTextWrapper = styled.div`
  color: white;
  width: 50%;
  p {
    font-size: 1.6rem;
  }
  @media screen and (max-width: 820px) {
    font-size: 1.4rem;
    width: 100%;
  }
`;
const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-out;
  }
`;

const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
`;
const WebsiteRights = styled.p`
  color: #fff;
  margin-bottom: 16px;
  font-size: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

const SocialIconLink = styled.a`
  font-size: 24px;
`;
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterTextWrapper>
            <p>
              SolidPrinciples is a website dedicated to SOLID Principles. We
              want to ensure developers really the understand SOLID Principles
              and understand how to apply them in their code. It is both
              beginner and intermediate level friendly.
            </p>
          </FooterTextWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Links</FooterLinkTitle>
              <FooterLink href='/about'>About Us</FooterLink>
              <FooterLink href='https://github.com/rharshit82/SolidPrinciples'>
                Contribute on Github
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo href='/' onClick={toggleHome}>
              SolidPrinciples
            </SocialLogo>
            <WebsiteRights>
              SolidPrinciples &copy; {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' area-label='Email'>
                <NextImage
                  src='/assets/email.svg'
                  height='3rem'
                  width='3rem'
                  alt='email'
                />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' area-label='twitter'>
                <NextImage
                  src='/assets/twitter.svg'
                  height='3rem'
                  width='3rem'
                  alt='email'
                />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' area-label='Linkedin'>
                <NextImage
                  src='/assets/linkedin.svg'
                  height='3rem'
                  width='3rem'
                  alt='email'
                />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
