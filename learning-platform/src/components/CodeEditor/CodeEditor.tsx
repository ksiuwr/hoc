import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

const CodeEditor = ({ code, onChange }: CodeEditorProps) => {
  return (
    <div className="border rounded shadow-sm overflow-hidden">
      <CodeMirror
        value={code}
        height="600px"
        extensions={[python()]}
        onChange={(value) => onChange(value)}
        theme="dark"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          highlightActiveLineGutter: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
