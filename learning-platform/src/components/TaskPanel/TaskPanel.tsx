import { useState } from "react";

export interface Task {
  title: string;
  description: string;
  completed: boolean;
}

interface TaskPanelProps {
  task: Task;
}

const TaskPanel = ({ task }: TaskPanelProps) => {
  const [isDone, setIsDone] = useState(task.completed);
  const bgClass = isDone ? "bg-green-100" : "bg-slate-50";

  return (
    <div
      onClick={() => setIsDone((d) => !d)}
      className={`p-4 ${bgClass} shadow rounded-lg w-full cursor-pointer
                transition duration-300 ease-in-out hover:-translate-y-0.5`}
    >
      <div className="flex items-center mb-2">
        <h2 className="text-xl font-bold flex items-center">
          {task.title}
          {isDone && (
            <span className="ml-2 px-2 py-0.5 text-sm font-medium text-green-800 bg-green-200 rounded">
              Zrobione!
            </span>
          )}
        </h2>
      </div>
      <p className="text-gray-700">{task.description}</p>
    </div>
  );
};

export default TaskPanel;
