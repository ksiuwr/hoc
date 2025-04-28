import Playground from "../../components/Playground/Playground";
import TaskPanel, { Task } from "../../components/TaskPanel/TaskPanel";

export type Tasks = {
  id: string;
  title: string;
};

interface TasksProps {
  tasks: Task[];
}

const Tasks = ({ tasks }: TasksProps = { tasks: [] }) => (
  <div className="flex h-screen bg-gradient-to-b from-indigo-400">
    <div className="flex-1">
      <Playground />
    </div>
    <div className="w-1/3 p-4 overflow-y-scroll space-y-2">
      {tasks.map((task, index) => (
        <TaskPanel key={index} task={task} />
      ))}
    </div>
  </div>
);

export default Tasks;
