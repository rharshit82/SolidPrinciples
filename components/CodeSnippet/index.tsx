import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const CodeSnippet: React.FC<{codeString: string}> = ({codeString}) => {
  return (
    <SyntaxHighlighter language='javascript' style={docco}>
      {codeString}
    </SyntaxHighlighter>
  );
};
export default CodeSnippet;
