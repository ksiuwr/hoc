type NavLink = {
  label: string;
  href: string;
};

const links: NavLink[] = [
  { label: "Zadania podstawowe", href: "#zadania-podstawowe" },
  { label: "Zadania dodatkowe", href: "#zadania-dodatkowe" },
  { label: "Test wiedzy", href: "#test-wiedzy" },
  { label: "Skrypt", href: "#skrypt" },
];

export const Navbar = () => {
  return (
    <nav className="sticky bg-gradient-to-b from-indigo-900 to-violet-900 text-white px-6 py-4 flex items-center justify-center">
      <ul className="flex space-x-8 text-lg">
        {links.map(({ label, href }) => (
          <li
            key={href}
            className="hover:underline hover:-translate-y-0.5 hover:scale-105 transition-transform duration-200
                       ease-in-out hover:text-violet-100"
          >
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
