import { useRouter } from "next/router";
import CodeSnippet from "@/components/CodeSnippet";
import styled from "styled-components";
import {
  withoutSingleResponsibility,
  withSingleResponsibility,
} from "./data/SingleResponsibility";

const Container = styled.div`
    
    h2{
        font-size: 2.5rem;
    }
`
const Tabs = styled.div`
  display: flex;
  @media screen and (max-width: 769px){
    flex-wrap: wrap;
  }
`;

type TabProps = {
  isActive: boolean;
};

const Tab = styled.h3<TabProps>`
  padding: 1rem;
  font-size: 1.6rem;
  font-weight: 400;
  background-color: ${({ isActive }) => (isActive ? "black" : "grey")};
  color: white;
  cursor: pointer;
  &:hover {
    background-color: black;
  }
  @media screen and (max-width: 769px){
    font-size: 1rem;
  }
`;

const tabMap = {
  "": "Pseudocode",
  javascript: "Javascript",
  java: "Java",
  python: "Python",
  csharp: "C#",
  php: "PHP",
  cpp: "C++",
  go: "Go",
  swift: "Swift",
  ruby: "Ruby",
  rust: "Rust",
};

const CodesWrapper = styled.div`
  display: flex;
  width: 100%;
  @media screen and (max-width :769px){
    flex-direction: column;
  }
`;
const CodeExampleContainer = styled.div`
  width: 50%;
  @media screen and (max-width :769px){
    width: 100%;
  }
`;
const CodeSamples = () => {
  const { query } = useRouter();
  const activeLanguage = query.language || "";

  return (
    <Container>
      <h2>Code Examples</h2>
      <Tabs>
        {Object.entries(tabMap).map(([key, value]) => (
          <Tab key={key} isActive={key === activeLanguage}>
            {value}
          </Tab>
        ))}
      </Tabs>
      <CodesWrapper>
        <CodeExampleContainer>
          <h2>Without Single Responsibility Principle</h2>
          <CodeSnippet codeString={withoutSingleResponsibility} />
        </CodeExampleContainer>
        <CodeExampleContainer>
          <h2>With Single Responsibility Principle</h2>
          <CodeSnippet codeString={withSingleResponsibility} />
        </CodeExampleContainer>
      </CodesWrapper>
    </Container>
  );
};

export default CodeSamples;
