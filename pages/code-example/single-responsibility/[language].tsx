import { useRouter } from "next/router";
import CodeSnippet from "@/components/CodeSnippet";
import styled from "styled-components";
import { dataMapping } from "@/data/SingleResponsibility"; // Adjust this import based on your actual data file's location and structure.
import Link from "next/link";

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
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
  padding: 0;
`;
type LanguageTabProps = {
  isActive: boolean;
};
const LanguageTab = styled(Link)<LanguageTabProps>`
  cursor: pointer;
  padding: 1rem 2rem;
  margin: 0 5px;
  display: inline-block;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ isActive }) => (isActive ? "#0070f3" : "#666")};
  transition: background-color 0.2s ease;
  text-decoration: none;

  &:hover {
    background-color: #0070f3;
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
        {[
          "pseudocode",
          "javascript",
          "java",
          "python",
          "csharp",
          "php",
          "cpp",
          "go",
          "swift",
          "ruby",
          "rust",
        ].map((lang) => {
          const isActive = lang === language; // Add your condition for active tab here based on your logic or URL

          return (
            <LanguageTab
              key={lang}
              href={
                lang === "pseudocode"
                  ? "/"
                  : `/code-example/single-responsibility/${lang}`
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
