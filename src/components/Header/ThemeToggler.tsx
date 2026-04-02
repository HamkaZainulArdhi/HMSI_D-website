import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button
      aria-label="theme toggler"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-gray-2 dark:bg-dark-bg flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-black md:h-14 md:w-14 dark:text-white"
    >
      <Moon className="h-5 w-5 md:h-6 md:w-6 dark:hidden" />

      {/* Dark mode icon */}
      <Sun className="hidden h-5 w-5 md:h-6 md:w-6 dark:block" />
    </button>
  );
};

export default ThemeToggler;
