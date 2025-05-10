import { useEffect, useMemo, useState } from "react";
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

  return (
    <div className="flex flex-col pt-14 h-screen bg-gradient-to-b from-indigo-400">
      {/* Category selector */}
      <div className="px-4 py-2 overflow-x-auto bg-violet-900">
        <div className="flex space-x-2">
          {categories.map((category) => {
            const isDone = categoryCompletion[category];
            const isSelected = category === selectedCategory;
            const baseClasses =
              "px-4 whitespace-nowrap py-1 rounded-full transition duration-200 ease-in-out cursor-pointer";
            let categoryClasses;
            if (isSelected && !isDone) {
              categoryClasses = "bg-white text-indigo-600 hover:cursor-default";
            } else if (!isSelected && isDone) {
              categoryClasses =
                "bg-green-200 text-green-900 hover:bg-green-100";
            } else if (isSelected && isDone) {
              categoryClasses =
                "bg-green-600 text-green-200 hover:cursor-default";
            } else {
              categoryClasses =
                "bg-indigo-300 text-violet-900 hover:bg-indigo-100";
            }
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`${baseClasses} ${categoryClasses}`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden py-2">
        {/* Task list */}
        <div className="w-1/3 px-2 overflow-y-auto">
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
        <div className="w-2/3 px-2">
          <Playground />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
