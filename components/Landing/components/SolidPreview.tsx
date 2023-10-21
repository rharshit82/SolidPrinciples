import NextImage from "@/tokens/NextImage";
import Link from "next/link";
import styled from "styled-components";

const Container = styled.div`
  h3 {
    font-size: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  p {
    font-size: 1.6rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
const SingleResponsibility = styled.div<{ isSelected: boolean }>`
  border: 1px solid black;
  border-radius: 2rem;
  background-color: ${(props) =>
    props.isSelected ? "#ADD8E6" : "transparent"};
  cursor: pointer;
`;
const OpenClosedPrinciple = styled.div<{ isSelected: boolean }>`
  border: 1px solid black;
  border-radius: 2rem;
  background-color: ${(props) =>
    props.isSelected ? "#ADD8E6" : "transparent"};
  cursor: pointer;
`;
const LiskovSubstitutionPrinciple = styled.div<{ isSelected: boolean }>`
  border: 1px solid black;
  border-radius: 2rem;
  background-color: ${(props) =>
    props.isSelected ? "#ADD8E6" : "transparent"};
  cursor: pointer;
`;
const InterfaceSegregationPrinciple = styled.div<{ isSelected: boolean }>`
  border: 1px solid black;
  border-radius: 2rem;
  background-color: ${(props) =>
    props.isSelected ? "#ADD8E6" : "transparent"};
  cursor: pointer;
`;
const DependencyInversionPrinciple = styled.div<{ isSelected: boolean }>`
  border: 1px solid black;
  border-radius: 2rem;
  background-color: ${(props) =>
    props.isSelected ? "#ADD8E6" : "transparent"};
  cursor: pointer;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  column-gap: 2rem;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

type SolidPreviewProps = {
  currentPrinciple: string | null;
};

const SolidPreview: React.FC<SolidPreviewProps> = ({ currentPrinciple }) => {
  const isSelected = (principle: string) => currentPrinciple === principle;
  return (
    <Container>
      <Row>
        <Link href='/code-example/single-responsibility'>
          <SingleResponsibility
            isSelected={isSelected("single-responsibility")}
          >
            <h3>Single Responsibility</h3>
            <p>
              A class should do one thing and therefore it should have only a
              single reason to change
            </p>
          </SingleResponsibility>
        </Link>
        <Link href='/code-example/open-closed-principle'>
          <OpenClosedPrinciple isSelected={isSelected("open-closed-principle")}>
            <h3>Open Closed Principle</h3>
            <p>
              Classes should be open for extension and closed to modification
            </p>
          </OpenClosedPrinciple>
        </Link>
        <Link href='/code-example/liskov-substitution-principle'>
          <LiskovSubstitutionPrinciple
            isSelected={isSelected("liskov-substitution-principle")}
          >
            <h3>Liskov Substitution Principle</h3>
            <p>
              Objects of a superclass shall be replaceable with objects of its
              subclasses without breaking the application
            </p>
          </LiskovSubstitutionPrinciple>
        </Link>
      </Row>
      <NextImage
        src='/assets/coding_solid_principles.png'
        alt='Solid Principles Coding'
        height='20rem'
        width='30rem'
        margin='auto'
      />
      <Row>
        <Link href='/code-example/interface-segragation-principle'>
          <InterfaceSegregationPrinciple
            isSelected={isSelected("interface-segragation-principle")}
          >
            <h3>Interface Segregation Principle</h3>
            <p>
              Clients should not be forced to depend upon interfaces that they
              do not use.
            </p>
          </InterfaceSegregationPrinciple>
        </Link>
        <Link href='/code-example/dependency-inversion-principle'>
          <DependencyInversionPrinciple
            isSelected={isSelected("dependency-inversion-principle")}
          >
            <h3>Dependency Inversion Principle</h3>
            <p>
              High-level modules should not depend on low-level modules. Both
              should depend on abstractions. Abstractions should not depend on
              details. Details should depend on abstractions.
            </p>
          </DependencyInversionPrinciple>
        </Link>
      </Row>
    </Container>
  );
};

export default SolidPreview;
