import Playground from "./components/Playground/Playground";
import TaskPanel from "./components/TaskPanel/TaskPanel";
import "./App.css";
import { tasks } from "./data/tasks";

function App() {
  return (
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
}

export default App;
