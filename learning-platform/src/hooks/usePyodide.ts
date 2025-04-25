import { loadPyodide, PyodideInterface } from "pyodide";
import { useCallback, useEffect, useState } from "react";

export function usePyodide() {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPyodide({
      indexURL: "https://cdn.jsdelivr.net/pyodide/v0.27.5/full/",
    }).then((py) => {
      setPyodide(py);
      setLoading(false);
    });
  }, []);

  const run = useCallback(
    async (code: string): Promise<string> => {
      if (!pyodide) return "Interpreter is still loading...";
      try {
        const wrapped = `
          import sys
          from io import StringIO
          from js import prompt
          import builtins
          builtins.input = lambda propmt_text='': prompt(propmt_text)
          buf = StringIO()
          sys.stdout = buf
          sys.stderr = buf
          exec(${JSON.stringify(code)}, globals())
          buf.getvalue()
          `;

        const result = await pyodide.runPythonAsync(wrapped);
        return String(result ?? "");
      } catch (err: any) {
        return err.toString();
      }
    },
    [pyodide]
  );

  return { run, loading };
}
