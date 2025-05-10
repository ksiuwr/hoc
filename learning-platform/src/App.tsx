import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Navbar } from "./navigation/Navbar";
import { tasks } from "./data/tasks";
import Tasks from "./views/Tasks/Tasks";
import BonusTasks from "./views/BonusTasks/BonusTasks";
import { bonusTasks } from "./data/bonusTasks";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/zadania-podstawowe" replace />}
        />
        <Route path="/zadania-podstawowe" element={<Tasks tasks={tasks} />} />
        <Route path="/zadania-dodatkowe" element={<BonusTasks tasks={bonusTasks} />} />
      </Routes>
    </Router>
  );
}

export default App;
