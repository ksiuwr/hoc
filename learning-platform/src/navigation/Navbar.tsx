import { NavLink } from "react-router-dom";

type NavLinkItem = {
  label: string;
  to: string;
};

const links: NavLinkItem[] = [
  { label: "Zadania", to: "/zadania" },
  { label: "Test wiedzy", to: "/test-wiedzy" },
  { label: "Skrypt", to: "/skrypt" },
];

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-indigo-900 to-violet-900 text-white px-6 py-4 flex items-center justify-center">
      <ul className="flex space-x-8 text-lg">
        {links.map(({ label, to }) => (
          <li
            key={to}
            className="hover:underline hover:-translate-y-0.5 hover:scale-105 transition-transform duration-200
                       ease-in-out hover:text-violet-100"
          >
            <NavLink
              to={to}
              end
              className={({ isActive }) =>
                `px-4 py-1 rounded-2xl transition duration-200 ease-in-out ${
                  isActive
                    ? "bg-indigo-950"
                    : ""
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
