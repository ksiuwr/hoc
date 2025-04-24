import Playground from "./components/Playground/Playground";
import TaskPanel, { Task } from "./components/TaskPanel/TaskPanel";
import "./App.css";

function App() {
  const sampleTask: Task = {
    title: "Sample Task",
    description: "This is a sample task.",
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 overflow-auto">
        <Playground />
      </div>

      <div className="w-1/3 p-4 bg-gray-50 overflow-auto">
        <TaskPanel task={sampleTask} />
      </div>
    </div>
  );
}

export default App;
