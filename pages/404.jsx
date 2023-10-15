import React, { useEffect, useState, useContext } from 'react';
import Image from 'next/image';

import styled, { keyframes } from 'styled-components';
import { useRouter } from 'next/router';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const GhostContainer = styled.div`
    height: 25rem;
    width: 40rem;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ghostAnimation = keyframes`
 0% { top: 0rem; }
 50% { top: -3rem;  }
 100% {  top: 0rem;  }
`;

const GhostImage = styled(Image)`
    animation-name: ${ghostAnimation};
    animation-duration: 3s;
    animation-iteration-count: infinite;
    height: 10rem;
    position: absolute;
    border-radius: 20%;
`;

const HeaderTextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const HeaderText = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #8e8e93;
    text-align: center;
`;

const Text = styled.span`
    font-style: normal;
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 1.7rem;
    color: #636366;
    max-width: 45.2rem;
    text-align: center;
    margin-top: 4.575rem;
`;

const StyledButton = styled.div`
    width: 17.2rem;
    height: 4.1rem;
    border-radius: 10rem;
    overflow: hidden;
    margin-top: 4.15rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #111111;
    cursor: pointer;
`;

const ButtonTitle = styled.span`
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 2.4rem;
    align-items: center;
    color: #ffffff;
`;

export default function Custom404() {
    const router = useRouter();
    return (
        <Container>
            <GhostContainer>
                <GhostImage src="/assets/404.png" alt="404 - Page Not Found" fill />
            </GhostContainer>
            <HeaderTextContainer>
                <HeaderText style={{ marginTop: '1rem' }}>Oops!</HeaderText>
                <HeaderText style={{ marginTop: '1rem' }}>The page you are looking for does not exist.</HeaderText>
            </HeaderTextContainer>
            <StyledButton
                onClick={() => {
                    router.push('/');
                }}
            >
                <ButtonTitle>Go to home</ButtonTitle>
            </StyledButton>
        </Container>
    );
}
