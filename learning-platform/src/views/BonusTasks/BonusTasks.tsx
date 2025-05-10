import { useEffect, useState } from "react";
import Playground from "../../components/Playground/Playground";
import TaskPanel, { Task } from "../../components/TaskPanel/TaskPanel";

interface BonusTasksProps {
  tasks: Task[];
}

const BonusTasks = ({ tasks }: BonusTasksProps = { tasks: [] }) => {
  const getInitialCompletion = (): Record<string, boolean> => {
    const saved = localStorage.getItem("tasksCompletion");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {}
    }
    const map: Record<string, boolean> = {};
    tasks.forEach((task, idx) => {
      map[`bonus-${idx}`] = task.completed;
    });
    return map;
  };

  const [completion, setCompletion] =
    useState<Record<string, boolean>>(getInitialCompletion);

  useEffect(() => {
    localStorage.setItem("bonusTasksCompletion", JSON.stringify(completion));
  }, [completion]);

  const handleToggle = (key: string) => {
    setCompletion((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex flex-col pt-15 h-screen bg-gradient-to-b from-indigo-400">
      <div className="flex flex-1 overflow-hidden">
        {/* Task list */}
        <div className="w-1/3 p-2 overflow-y-auto">
          <section>
            <div className="space-y-2">
              {tasks.map((task, idx) => {
                const key = `bonus-${idx}`;
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
        </div>

        {/* Playground */}
        <div className="w-2/3 p-2">
          <Playground />
        </div>
      </div>
    </div>
  );
};

export default BonusTasks;
