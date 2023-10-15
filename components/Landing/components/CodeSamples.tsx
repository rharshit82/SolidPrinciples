import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const CodeSamples = () => {
  const codeString = "(num) => num + 1";
  return (
    <SyntaxHighlighter language='javascript' style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};
export default CodeSamples;
