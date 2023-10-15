import styled from "styled-components";
import content from "./content.md";
import MarkdownContent from "@/components/MarkdownContent";
const Container = styled.div`
  padding-bottom: 4rem;
`;

const Landing: React.FC = () => {
  return (
    <Container>
      <MarkdownContent content={content} />
    </Container>
  );
};

export default Landing;
