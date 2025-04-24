import React, { useState } from "react";
import { usePyodide } from "../../hooks/usePyodide";
import CodeEditor from "../CodeEditor/CodeEditor";
import OutputPanel from "../OutputPanel/OutputPanel";

const Playground = () => {
  const { run, loading } = usePyodide();
  const [code, setCode] = useState<string>('print("Hello, world!")');
  const [output, setOutput] = useState("");

  const handleRun = async () => {
    setOutput(await run(code));
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-3xl font-semibold">Python Playground</h1>
      {loading ? (
        <div>Loading Python...</div>
      ) : (
        <>
          <CodeEditor code={code} onChange={setCode} />
          <button
            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            onClick={handleRun}
          >
            Run
          </button>
          <OutputPanel output={output} />
        </>
      )}
    </div>
  );
};

export default Playground;
