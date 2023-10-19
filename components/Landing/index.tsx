import styled from "styled-components";
import intro from "./intro.md";
import MarkdownContent from "@/components/MarkdownContent";
import SolidPreview from "./components/SolidPreview";
import CodeSamples from "./components/CodeSamples";
import { useState } from "react";
const Container = styled.div``;
type Principle = "SRP" | "OCP" | "LSP" | "ISP" | "DIP"; // Add or remove codes as needed.

const Landing: React.FC = () => {
  const [currentPrinciple, setCurrentPrinciple] = useState<Principle>("SRP");
  return (
    <Container>
      <MarkdownContent content={intro} />
      <SolidPreview
        currentPrinciple={currentPrinciple}
        setCurrentPrinciple={setCurrentPrinciple}
      />
      <CodeSamples currentPrinciple={currentPrinciple}/>
    </Container>
  );
};

export default Landing;
