import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 1.5rem;
`;

const Title = styled.h2``;

const Subtitle = styled.h3``;

const Text = styled.p``;

type ContentProps = {
  content: string;
};

const Content: React.FC<ContentProps> = ({ content }) => {
  const formattedContent = content.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return <Container>{formattedContent}</Container>;
};

export default Content;
