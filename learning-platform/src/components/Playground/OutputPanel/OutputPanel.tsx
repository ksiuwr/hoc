interface OutputPanelProps {
  output: string;
}

const OutputPanel = ({ output }: OutputPanelProps) => (
  <div
    className="mt-4 w-full p-4 bg-indigo-50 border-2 border-indigo-300 rounded-lg
               text-lg shadow-sm whitespace-pre-wrap font-mono"
  >
    {output}
  </div>
);

export default OutputPanel;
