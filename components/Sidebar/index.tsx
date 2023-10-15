import NextImage from "@/tokens/NextImage";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  background: #e74c3c;
  width: 25%;
  color: white;
  min-height: 100vh;
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
            height='20rem'
            width='20rem'
          />
        </ImageContainer>
      </Link>
    </Container>
  );
};

export default Sidebar;
