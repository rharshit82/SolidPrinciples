import styled from "styled-components";
import Markdown from "markdown-to-jsx";

const ContentContainer = styled.div`
  max-width: 85vw;
  pre {
    white-space: normal !important;
  }
  h2 {
    font-size: 3rem;
  }
  h1 {
    font-size: 6rem;
  }
  p {
    font-size: 1.8rem;
  }
  code {
    font-size: 1.6rem;
  }
  article {
    font-size: 1.6rem;
  }
`;

type MarkdownContentProps = {
  content: string;
};
const MarkdownContent: React.FC<MarkdownContentProps> = ({ content }) => {
  return (
    <ContentContainer>
      <Markdown options={{ wrapper: "article" }}>{content}</Markdown>
    </ContentContainer>
  );
};

export default MarkdownContent;
