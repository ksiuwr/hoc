import { Task } from "../components/TaskPanel/TaskPanel";

export const bonusTasks: Task[] = [
  {
    title: "Zadanie 1",
    description: `Napisz prostą grę: program losuje liczbę od 1 do 100, użytkownik zgaduje, a program podpowiada „za mało”, „za dużo” lub „trafione” aż do odgadnięcia.
  Wskazówka:
  import random
  num = random.randint(1, 100)`,
    completed: false,
    category: "Zadanie dodatkowe",
    difficulty: "Średnie",
  },
  {
    title: "Zadanie 2",
    description: `Narysuj połowę piramidy, jak na rysunku poniżej. Wskazówka: użyj pętli, aby wyświetlić odpowiednią liczbę gwiazdek.`,
    completed: false,
    category: "Zadanie dodatkowe",
    difficulty: "Trudne",
  },
  {
    title: "Zadanie 2",
    description: `Wypisz tabliczkę mnożenia od 1 do 10. Wskazówka: użyj dwukrotnie pętli.`,
    completed: false,
    category: "Zadanie dodatkowe",
    difficulty: "Trudne",
  },
];