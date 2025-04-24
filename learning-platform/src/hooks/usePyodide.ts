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
      if (!pyodide) return "Loading Python...";
      try {
        const result = pyodide.runPython(code);
        return String(result ?? "");
      } catch (err: any) {
        return err.toString();
      }
    },
    [pyodide]
  );

  return { run, loading };
}
