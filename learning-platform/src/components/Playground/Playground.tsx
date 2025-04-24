import { useState } from "react";
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
    <div className="items-center ml-4 my-4 p-4 bg-slate-50 rounded-xl">
      {loading ? (
        <div>Loading Python...</div>
      ) : (
        <>
          <CodeEditor code={code} onChange={setCode} />
          <button
            className="px-20 py-2 rounded bg-indigo-500 text-white hover:bg-violet-600 transition
                       hover:-translate-y-0.5 hover:cursor-pointer duration-300 ease-in-out"
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
