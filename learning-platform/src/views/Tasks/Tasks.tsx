import { useEffect, useMemo, useState } from "react";
import Playground from "../../components/Playground/Playground";
import TaskPanel, { Task } from "../../components/TaskPanel/TaskPanel";
import Script from "../Script/Script";
import TasksHeader from "../../components/TaskHeader/TaskHeader";

interface TasksProps {
  tasks: Task[];
}

const groupByCategory = (tasks: Task[]) => {
  return tasks.reduce<Record<string, Task[]>>((acc, task) => {
    const key = task.category || "Brak kategorii";
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(task);
    return acc;
  }, {});
};

const Tasks = ({ tasks }: TasksProps = { tasks: [] }) => {
  const tasksByCategory = groupByCategory(tasks);
  const categories = Object.keys(tasksByCategory);
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categories[0] || ""
  );

  const getInitialCompletion = (): Record<string, boolean> => {
    const saved = localStorage.getItem("tasksCompletion");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    const map: Record<string, boolean> = {};
    categories.forEach((category) => {
      tasksByCategory[category].forEach((task, idx) => {
        map[`${category}-${idx}`] = task.completed;
      });
    });
    return map;
  };

  const [completion, setCompletion] =
    useState<Record<string, boolean>>(getInitialCompletion);

  useEffect(() => {
    localStorage.setItem("tasksCompletion", JSON.stringify(completion));
  }, [completion]);

  const handleToggle = (key: string) => {
    setCompletion((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const categoryCompletion = useMemo(
    () =>
      categories.reduce<Record<string, boolean>>((acc, category) => {
        const allDone = tasksByCategory[category].every((_, idx) =>
          Boolean(completion[`${category}-${idx}`])
        );
        acc[category] = allDone;
        return acc;
      }, {}),
    [categories, tasksByCategory, completion]
  );

  const [showScript, setShowScript] = useState(false);

  return (
    <div className="flex flex-col pt-14 h-screen bg-gradient-to-b from-indigo-400">
      <TasksHeader
        categories={categories}
        selectedCategory={selectedCategory}
        onCategorySelect={setSelectedCategory}
        categoryCompletion={categoryCompletion}
        showScript={showScript}
        toggleShowScript={() => setShowScript(!showScript)}
      />

      {/* Main content area */}
      <div className="relative flex flex-1 overflow-hidden py-2">
        {/* Slide-in script panel */}
        <div
          className={`absolute inset-y-0 left-0 w-1/3 px-2 bg-white shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
            showScript ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <Script />
        </div>

        {/* Task list (hidden when script open) */}
        <div
          className={`w-1/3 px-2 overflow-y-auto transition-opacity duration-300 ease-in-out ${
            showScript ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          {selectedCategory && (
            <section className="space-y-2">
              {tasksByCategory[selectedCategory].map((task, idx) => {
                const key = `${selectedCategory}-${idx}`;
                return (
                  <TaskPanel
                    key={key}
                    task={task}
                    isDone={completion[key]}
                    onToggle={() => handleToggle(key)}
                  />
                );
              })}
            </section>
          )}
        </div>

        {/* Playground */}
        <div className="w-2/3 px-2">
          <Playground />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
