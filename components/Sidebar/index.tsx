import NextImage from "@/tokens/NextImage";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background: #FF594F;
  width: 15%;
  color: white;
  min-height: 100vh;
  @media screen and (max-width: 769px){
    display: none;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Sidebar = () => {
  return (
    <Container>
      <Link href='/'>
        <ImageContainer>
          <NextImage
            src='/assets/branding/solidprinciples.png'
            alt='Solid Principles'
            height='15rem'
            width='15rem'
          />
        </ImageContainer>
      </Link>
    </Container>
  );
};

export default Sidebar;
