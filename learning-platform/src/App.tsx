import React, { useState, useEffect } from "react";
import { loadPyodide, PyodideInterface } from "pyodide";

const App: React.FC = () => {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  const [code, setCode] = useState<string>('print("Hello, world!")');
  const [output, setOutput] = useState<string>("Loading Python…");

  useEffect(() => {
    loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/",
    }).then((py) => {
      setPyodide(py);
      setOutput("Python ready!");
    });
  }, []);

  const runCode = async () => {
    if (!pyodide) {
      setOutput("Python is still loading…");
      return;
    }
    try {
      const result = pyodide.runPython(code);
      setOutput(String(result));
    } catch (err: any) {
      setOutput(err.toString());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-2xl font-semibold mb-4">Python Playground</h1>

      <textarea
        className="w-full max-w-xl h-48 p-2 border rounded shadow-sm focus:outline-none focus:ring"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <button
        onClick={runCode}
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Run ▶️
      </button>

      <pre className="w-full max-w-xl mt-4 p-3 bg-gray-100 border rounded text-sm whitespace-pre-wrap">
        {output}
      </pre>
    </div>
  );
};

export default App;
