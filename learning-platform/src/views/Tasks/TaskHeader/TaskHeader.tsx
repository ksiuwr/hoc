interface TasksHeaderProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (cat: string) => void;
  categoryCompletion: Record<string, boolean>;
  showScript: boolean;
  toggleShowScript: () => void;
}

const TasksHeader = ({
  categories,
  selectedCategory,
  onCategorySelect,
  categoryCompletion,
  showScript,
  toggleShowScript,
}: TasksHeaderProps) => {
  const baseButtonClasses =
    "px-4 whitespace-nowrap py-1 rounded-full transition duration-200 ease-in-out cursor-pointer";
  return (
    <div className="px-4 py-3 bg-violet-900 flex items-center justify-between overflow-x-auto">
      <div className="flex space-x-3">
        {categories.map((category) => {
          const isDone = categoryCompletion[category];
          const isSelected = category === selectedCategory;
          let categoryClasses;
          if (isSelected && !isDone) {
            categoryClasses = "bg-white text-indigo-600 hover:cursor-default";
          } else if (!isSelected && isDone) {
            categoryClasses = "bg-green-200 text-green-900 hover:bg-green-100 hover:-translate-y-0.5";
          } else if (isSelected && isDone) {
            categoryClasses =
              "bg-green-600 text-green-200 hover:cursor-default";
          } else {
            categoryClasses =
              "bg-indigo-300 text-violet-900 hover:bg-indigo-100 hover:-translate-y-0.5";
          }
          return (
            <button
              key={category}
              onClick={() => onCategorySelect(category)}
              className={`${baseButtonClasses} ${categoryClasses}`}
            >
              {category}
            </button>
          );
        })}
      </div>
      <button
        onClick={toggleShowScript}
        className={` ${baseButtonClasses} ml-2 hover:-translate-y-0.5 ${
          !showScript
            ? "bg-indigo-300 text-violet-900 hover:bg-indigo-100"
            : "bg-white text-indigo-600 hover:bg-indigo-100 hover:text-violet-900"
        }`}
      >
        {showScript ? "Ukryj skrypt" : "Pokaż skrypt"}
      </button>
    </div>
  );
};

export default TasksHeader;
