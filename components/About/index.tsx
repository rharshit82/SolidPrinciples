import styled from "styled-components";
import content from './content.md'
import MarkdownContent from "../MarkdownContent";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4rem 20rem;
`;

const AboutComponent = () => {
  return <Container>
    <MarkdownContent content={content} />
  </Container>;
};
export default AboutComponent;
