import styled from "styled-components";
import intro from "./content.md";
import MarkdownContent from "@/components/MarkdownContent";
const Container = styled.div`
  padding-bottom: 4rem;
`;

const Landing: React.FC = () => {
  return (
    <Container>
      <MarkdownContent content={intro} />
    </Container>
  );
};

export default Landing;
