import CodeSnippet from "@/components/CodeSnippet";
import styled from "styled-components";
import { dataMapping } from "@/data/MappingConstants";
import Link from "next/link";
import {
  supportedLanguages,
  urlNameMapping,
} from "@/data/constants/GlobalConstants";

const Container = styled.div`
  h2 {
    font-size: 2.5rem;
  }
`;

const CodesWrapper = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;
const CodeExampleContainer = styled.div`
  width: 50%;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
`;
const LanguageTabsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  row-gap: 1rem;
`;
type LanguageTabProps = {
  isActive: boolean;
};
const LanguageTab = styled(Link)<LanguageTabProps>`
  cursor: pointer;
  padding: 1rem 1rem;
  margin: 0 5px;
  display: inline-block;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ isActive }) => (isActive ? "#4CAF50" : "#9E9E9E")};
  transition: background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: #0070f3;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 8px;
  }
`;
type CodeSamplesProps = {
  currentPrinciple: string;
  currentLanguage: string;
};
const CodeSamples: React.FC<CodeSamplesProps> = ({
  currentPrinciple,
  currentLanguage,
}) => {
  return (
    currentPrinciple && (
      <Container>
        <h2>Code Example</h2>
        <LanguageTabsContainer>
          {supportedLanguages.map((lang) => {
            const isActive = lang === currentLanguage; // Add your condition for active tab here based on your logic or URL

            return (
              <LanguageTab
                key={lang}
                href={
                  lang === "pseudocode"
                    ? "/"
                    : `/code-example/${currentPrinciple}/${lang}`
                }
                isActive={isActive}
              >
                {lang}
              </LanguageTab>
            );
          })}
        </LanguageTabsContainer>
        <CodesWrapper>
          <CodeExampleContainer>
            <h2>Without {urlNameMapping[currentPrinciple]} Principle</h2>
            <CodeSnippet
              codeString={
                dataMapping[currentPrinciple][currentLanguage].without
              }
            />
          </CodeExampleContainer>
          <CodeExampleContainer>
            <h2>With {urlNameMapping[currentPrinciple]} Principle</h2>
            <CodeSnippet
              codeString={dataMapping[currentPrinciple][currentLanguage].with}
            />
          </CodeExampleContainer>
        </CodesWrapper>
      </Container>
    )
  );
};
export default CodeSamples;
