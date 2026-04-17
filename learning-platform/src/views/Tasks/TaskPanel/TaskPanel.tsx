import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import remarkGfm from "remark-gfm";

export interface Task {
  title: string;
  description: string;
  completed: boolean;
  category: string;
  difficulty: string;
}

interface TaskPanelProps {
  task: Task;
  isDone: boolean;
  onToggle: () => void;
}

const TaskPanel = ({ task, isDone, onToggle }: TaskPanelProps) => {
  const bgClass = isDone ? "bg-green-100" : "bg-slate-50";

  return (
    <div
      onClick={onToggle}
      className={`p-5 ${bgClass} shadow rounded-lg w-full cursor-pointer
                transition duration-300 ease-in-out hover:-translate-y-0.5`}>
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-bold flex items-center">
          {task.title}
          {task.difficulty === "Łatwe" && (
            <span className="ml-2 px-2 py-0.5 text-sm font-medium text-green-800 bg-green-200 rounded">Łatwe</span>
          )}
          {task.difficulty === "Średnie" && (
            <span className="ml-2 px-2 py-0.5 text-sm font-medium text-yellow-800 bg-yellow-200 rounded">Średnie</span>
          )}
          {task.difficulty === "Trudne" && (
            <span className="ml-2 px-2 py-0.5 text-sm font-medium text-red-800 bg-red-200 rounded">Trudne</span>
          )}
          {isDone && (
            <span className="ml-2 px-2 py-0.5 text-sm font-medium text-green-800 bg-green-200 rounded">Zrobione!</span>
          )}
        </h2>
      </div>
      <div className="prose prose-code:before:content-none prose-code:after:content-none max-w-none">
        <ReactMarkdown
          children={task.description}
          remarkPlugins={[remarkGfm]}
          components={{
            p({ children }) {
              return <p className="mb-4 last:mb-0">{children}</p>;
            },
            pre({ children }) {
              return (
                <pre className="bg-gray-100 border border-gray-200 rounded-md p-4 my-4 overflow-x-auto text-sm text-gray-800 whitespace-pre-wrap font-mono">
                  {children}
                </pre>
              );
            },
            code({ className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  PreTag="div"
                  language={match[1]}
                  customStyle={{ margin: 0, padding: 0, fontSize: "0.9rem", background: "transparent" }}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={`${className || ""} font-mono text-sm`} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </div>
    </div>
  );
};

export default TaskPanel;
