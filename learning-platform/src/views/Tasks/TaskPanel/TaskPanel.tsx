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
                transition duration-300 ease-in-out hover:-translate-y-0.5`}
    >
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-bold flex items-center">
          {task.title}
          {task.difficulty === "Łatwe" && (
            <span className="ml-2 px-2 py-0.5 text-sm font-medium text-green-800 bg-green-200 rounded">
              Łatwe
            </span>
          )}
          {task.difficulty === "Średnie" && (
            <span className="ml-2 px-2 py-0.5 text-sm font-medium text-yellow-800 bg-yellow-200 rounded">
              Średnie
            </span>
          )}
          {task.difficulty === "Trudne" && (
            <span className="ml-2 px-2 py-0.5 text-sm font-medium text-red-800 bg-red-200 rounded">
              Trudne
            </span>
          )}
          {isDone && (
            <span className="ml-2 px-2 py-0.5 text-sm font-medium text-green-800 bg-green-200 rounded">
              Zrobione!
            </span>
          )}
        </h2>
      </div>
      <p className="text-gray-700 text-xl">{task.description}</p>
    </div>
  );
};

export default TaskPanel;
