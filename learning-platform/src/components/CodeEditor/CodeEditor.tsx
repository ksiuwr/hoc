import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
}

const CodeEditor = ({ code, onChange }: CodeEditorProps) => {
  return (
    <div className="border-2 border-indigo-300 rounded-lg shadow-sm overflow-hidden mb-3">
      <CodeMirror
        value={code}
        height="400px"
        extensions={[python()]}
        onChange={(value) => onChange(value)}
        theme="light"
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
