import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { tasks } from "./data/tasks";
import Tasks from "./views/Tasks/Tasks";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/zadania" replace />}
        />
        <Route path="/zadania" element={<Tasks tasks={tasks} />} />
      </Routes>
    </Router>
  );
}

export default App;
