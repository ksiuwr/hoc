import { useEffect, useState } from "react";
import Playground from "../../components/Playground/Playground";
import TaskPanel, { Task } from "../../components/TaskPanel/TaskPanel";

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

  return (
    <div className="flex flex-col pt-14 h-screen bg-gradient-to-b from-indigo-400">
      {/* Category selector */}
      <div className="px-4 py-3 overflow-x-auto">
        <div className="flex space-x-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 whitespace-nowrap py-1 rounded-full transition duration-200 ease-in-out ${
                category === selectedCategory
                  ? "bg-white text-indigo-600"
                  : "bg-indigo-200 text-white hover:bg-indigo-300 cursor-pointer"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Task list */}
        <div className="w-1/3 p-2 overflow-y-auto">
          {selectedCategory && (
            <section>
              <div className="space-y-2">
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
              </div>
            </section>
          )}
        </div>

        {/* Playground */}
        <div className="w-2/3 p-2">
          <Playground />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
