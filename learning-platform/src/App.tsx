import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { Navbar } from "./navigation/Navbar/Navbar";
import { tasks } from "./data/tasks";
import Tasks from "./views/Tasks/Tasks";

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
      </Routes>
    </Router>
  );
}

export default App;
