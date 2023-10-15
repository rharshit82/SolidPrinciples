import styled from "styled-components";
import intro from "./intro.md";
import MarkdownContent from "@/components/MarkdownContent";
import SolidPreview from "./components/SolidPreview";
import CodeSamples from './components/CodeSamples'
const Container = styled.div`
  padding: 2rem 5rem;
`;

const Landing: React.FC = () => {
  return (
    <Container>
      <MarkdownContent content={intro} />
      <SolidPreview />
      <CodeSamples />
    </Container>
  );
};

export default Landing;
