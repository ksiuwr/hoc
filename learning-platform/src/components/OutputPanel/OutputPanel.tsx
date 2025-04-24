import React, { FC } from "react";

interface OutputPanelProps {
  output: string;
}

const OutputPanel = ({ output }: OutputPanelProps) => (
  <pre className="mt-4 w-full max-w-2xl p-4 bg-gray-100 border rounded text-sm whitespace-pre-wrap font-mono">
    {output}
  </pre>
);

export default OutputPanel;
