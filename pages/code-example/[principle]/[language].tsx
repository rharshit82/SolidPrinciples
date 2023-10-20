import { useRouter } from "next/router";
import CodeSnippet from "@/components/CodeSnippet";
import styled from "styled-components";
import { dataMapping } from "@/data/SingleResponsibility"; // Adjust this import based on your actual data file's location and structure.
import Link from "next/link";
import { supportedLanguages } from "@/data/constants/GlobalConstants";
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

type LanguageKey =
  | "pseudocode"
  | "javascript"
  | "java"
  | "python"
  | "csharp"
  | "php"
  | "cpp"
  | "go"
  | "swift"
  | "ruby"
  | "rust";

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
  background-color: ${({ isActive }) =>
    isActive ? "#4CAF50" : "#9E9E9E"}; // green active, gray inactive
  transition: background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: #0070f3;
  }
  @media (max-width: 600px) {
    font-size: 0.8rem; // smaller font size for smaller screens
    padding: 8px; // even smaller padding
  }
`;
const LanguageSpecificPage = () => {
  const router = useRouter();
  const language: LanguageKey =
    (router.query.language as LanguageKey) || "pseudocode";

  const codeExamples = dataMapping[language];

  if (!codeExamples) {
    return <div>Code examples for the specified language not found.</div>;
  }

  return (
    <Container>
      <h2>Code Example: {language.toUpperCase()}</h2>
      <LanguageTabsContainer>
        {supportedLanguages.map((lang) => {
          const isActive = lang === language;

          return (
            <LanguageTab
              key={lang}
              href={
                lang === "pseudocode"
                  ? "/"
                  : `/code-example/dependency-inversion-principle/${lang}`
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
          <h2>Without Single Responsibility Principle</h2>
          <CodeSnippet codeString={codeExamples.without} />
        </CodeExampleContainer>
        <CodeExampleContainer>
          <h2>With Single Responsibility Principle</h2>
          <CodeSnippet codeString={codeExamples.with} />
        </CodeExampleContainer>
      </CodesWrapper>
    </Container>
  );
};

export default LanguageSpecificPage;
