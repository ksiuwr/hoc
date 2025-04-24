import Playground from "./components/Playground/Playground";
import TaskPanel, { Task } from "./components/TaskPanel/TaskPanel";
import "./App.css";

function App() {
  const sampleTask: Task = {
    title: "Zadanie 1",
    description: `Napisz program, który wczytuje dwie liczby i wypisuje ich sumę (+).`,
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-indigo-400">
      <div className="flex-1">
        <Playground />
      </div>

      <div className="w-1/3 p-4 overflow-auto">
        <TaskPanel task={sampleTask} />
      </div>
    </div>
  );
}

export default App;
