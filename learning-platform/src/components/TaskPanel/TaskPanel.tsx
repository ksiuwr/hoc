export interface Task {
  title: string;
  description: string;
}

interface TaskPanelProps {
  task: Task;
}

const TaskPanel = ({ task }: TaskPanelProps) => {
  return (
    <div className="p-4 bg-slate-50 shadow rounded-lg w-full">
      <h2 className="text-xl font-bold mb-2">{task.title}</h2>
      <p className="text-gray-700">{task.description}</p>
    </div>
  );
};

export default TaskPanel;
