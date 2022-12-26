import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula as theme } from 'react-syntax-highlighter/dist/cjs/styles/prism';
// import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
// SyntaxHighlighter.registerLanguage('jsx', jsx);
export const CodeBlock = ({code, children}) =>  <details style={{marginTop: "2rem" }}><summary>Code</summary><SyntaxHighlighter language="jsx" style={theme} customStyle={
  {borderRadius: "12px", marginBottom:"3rem", maxWidth: "calc(100vw - 6rem)"}}>{code}</SyntaxHighlighter></details>
