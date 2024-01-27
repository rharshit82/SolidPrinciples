import React from "react";
import styled from "styled-components";
import intro from "./intro.md";
import MarkdownContent from "@/components/MarkdownContent";
import SolidPreview from "./components/SolidPreview";
import CodeSamples from "./components/CodeSamples";
import introContent from "@/data/mlContent/introContent.json";
import summaryContent from "@/data/mlContent/summaryContent.json";
import commonMistakesContent from "@/data/mlContent/commonMistakesContent.json";
import Content from "./components/Content";
import { reversePrincipleNamesMapping } from "@/data/constants/GlobalConstants";

const Container = styled.div``;

type LandingTypes = {
  currentPrinciple: string | null;
  currentLanguage: string | null;
};

const Landing: React.FC<LandingTypes> = ({
  currentPrinciple,
  currentLanguage,
}) => {
  const principleKey = currentPrinciple
    ? reversePrincipleNamesMapping[
        currentPrinciple as keyof typeof reversePrincipleNamesMapping
      ]
    : null;

  return (
    <Container>
      <MarkdownContent content={intro} />
      <SolidPreview currentPrinciple={currentPrinciple} />
      {principleKey && currentLanguage && (
        <Content
          content={
            introContent[principleKey][
              currentLanguage as keyof (typeof introContent)[typeof principleKey]
            ]
          }
        />
      )}
      <CodeSamples
        currentPrinciple={currentPrinciple}
        currentLanguage={currentLanguage}
      />

      {principleKey && currentLanguage && (
        <Content
          content={
            summaryContent[principleKey][
              currentLanguage as keyof (typeof introContent)[typeof principleKey]
            ]
          }
        />
      )}
      {principleKey && currentLanguage && (
        <Content
          content={
            commonMistakesContent[principleKey][
              currentLanguage as keyof (typeof introContent)[typeof principleKey]
            ]
          }
        />
      )}
    </Container>
  );
};

export default Landing;
