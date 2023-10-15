import React from "react";
import NextImage from "@/tokens/NextImage";
import styled from "styled-components";
const Container = styled.div`
  h3 {
    font-size: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  p{
    font-size: 1.6rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const SingleResponsibility = styled.div``;
const OpenClosedPrinciple = styled.div``;
const LiskovSubstitutionPrinciple = styled.div``;
const InterfaceSegregationPrinciple = styled.div``;
const DependencyInversionPrinciple = styled.div``;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;
const SolidPreview = () => {
  return (
    <Container>
      <Row>
        <SingleResponsibility>
          <h3>Single Responsibility</h3>
          <p>
            A class should do one thing and therefore it should have only a
            single reason to change
          </p>
        </SingleResponsibility>
        <OpenClosedPrinciple>
          <h3>Open Closed Principle</h3>
          <p>Classes should be open for extension and closed to modification</p>
        </OpenClosedPrinciple>
        <LiskovSubstitutionPrinciple>
          <h3>Liskov Substitution Principle</h3>
          <p>
            Objects of a superclass shall be replaceable with objects of its
            subclasses without breaking the application
          </p>
        </LiskovSubstitutionPrinciple>
      </Row>
      <NextImage
        src='/assets/coding_solid_principles.png'
        alt='Solid Principles Coding'
        height='20rem'
        width='30rem'
        margin='auto'
      />
      <Row>
        <InterfaceSegregationPrinciple>
          <h3>Interface Segregation Principle</h3>
          <p>
            Clients should not be forced to depend upon interfaces that they do
            not use.
          </p>
        </InterfaceSegregationPrinciple>
        <DependencyInversionPrinciple>
          <h3>Dependency Inversion Principle</h3>
          <p>
            High-level modules should not depend on low-level modules. Both
            should depend on abstractions. Abstractions should not depend on
            details. Details should depend on abstractions.
          </p>
        </DependencyInversionPrinciple>
      </Row>
    </Container>
  );
};

export default SolidPreview;
