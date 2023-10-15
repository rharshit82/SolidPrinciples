import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/cjs/styles/hljs";
const CodeSamples: React.FC<{ code: string }> = ({ code }) => {
    return (
      <SyntaxHighlighter style={docco}>
        {code}
      </SyntaxHighlighter>
    );
  };
export default CodeSamples;
