import { Task } from "../views/Tasks/TaskPanel/TaskPanel";
import basicRaw from "./tasks/basic.md?raw";

function parseCategory(raw: string, category: string): Task[] {
  // Normalize line endings
  const text = raw.replace(/\r\n/g, "\n");

  // Split on "## " at start of line
  const sections = text.split(/^## /m).filter((s) => s.trim().length > 0);

  return sections.map((section) => {
    // First line is for example "Zadanie 1 (Łatwe)"
    const [headingLine, ...rest] = section.split("\n");

    // Match up to the first "(" and capture difficulty inside
    const m = headingLine.match(/^(.*?)\s*\(([^)]+)\)/);
    const title = m ? m[1].trim() : headingLine.trim();
    const difficulty = m ? m[2].trim() : "Średnie";

    // The rest is just the markdown description
    const description = rest.join("\n").trim();

    return { title, description, completed: false, category, difficulty };
  });
}

export const tasks: Task[] = [
  ...parseCategory(basicRaw, "Podstawy programowania"),
];
