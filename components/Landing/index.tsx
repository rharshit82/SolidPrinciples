import styled from "styled-components";
import intro from "./intro.md";
import MarkdownContent from "@/components/MarkdownContent";
import SolidPreview from "./components/SolidPreview";
import CodeSamples from "./components/CodeSamples";
import { useState } from "react";
const Container = styled.div``;
type Principle = "SRP" | "OCP" | "LSP" | "ISP" | "DIP";

type LandingTypes = {
  currentPrinciple: string;
  currentLanguage: string;
};
const Landing: React.FC<LandingTypes> = ({
  currentPrinciple,
  currentLanguage,
}) => {
  return (
    <Container>
      <MarkdownContent content={intro} />
      <SolidPreview currentPrinciple={currentPrinciple} />
      <CodeSamples
        currentPrinciple={currentPrinciple}
        currentLanguage={currentLanguage}
      />
    </Container>
  );
};

export default Landing;
