import "./App.css";
import { tasks } from "./data/tasks";
import Tasks from "./views/Tasks/Tasks";

function App() {
  return (
    <Tasks tasks={tasks} />
  );
}

export default App;
