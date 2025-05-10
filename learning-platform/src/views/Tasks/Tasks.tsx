import { useMemo, useState } from "react";
import Playground from "../../components/Playground/Playground";
import TaskPanel, { Task } from "../../components/TaskPanel/TaskPanel";

export type Tasks = {
  id: string;
  title: string;
};

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

  const initialCompletion = useMemo(() => {
    const map: Record<string, boolean> = {};
    categories.forEach((category) => {
      tasksByCategory[category].forEach((task, idx) => {
        map[`${category}-${idx}`] = task.completed;
      });
    });
    return map;
  }, [tasksByCategory, categories]);

  const [completion, setCompletion] =
    useState<Record<string, boolean>>(initialCompletion);
  const handleToggle = (key: string) => {
    setCompletion((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex h-screen bg-gradient-to-b from-indigo-400">
      <div className="flex-1">
        <Playground />
      </div>
      <div className="w-1/3 p-4 overflow-y-scroll space-y-2">
        {/* Category selector */}
        <div className="flex space-x-2 mb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1 rounded-full transition duration-200 ease-in-out ${
                category === selectedCategory
                  ? "bg-white text-indigo-600 "
                  : "bg-indigo-200 text-white hover:bg-indigo-300 cursor-pointer"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tasks list for selected category */}
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
    </div>
  );
};

export default Tasks;
