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
          import sys, traceback
          import builtins
          from io import StringIO
          from js import prompt

          builtins.input = lambda propmt_text='': prompt(propmt_text)
          out_buf = StringIO()
          err_buf = StringIO()
          sys.stdout = out_buf
          sys.stderr = err_buf

          try:
            exec(${JSON.stringify(code)}, globals())
          except Exception:
            traceback.print_exc(file=err_buf)

          result = out_buf.getvalue()
          errors = err_buf.getvalue()
          result + (f"\\n--- ERROR ---\\n{errors}" if errors else "")
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
