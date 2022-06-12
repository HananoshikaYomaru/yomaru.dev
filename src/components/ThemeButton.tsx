import { Sun, MoonStars } from "tabler-icons-react";
import useLayout from "../contexts/layout";
import { useTheme } from "../contexts/theme";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();
  const { setShowMenu } = useLayout();
  return (
    <button
      onClick={() => {
        toggleTheme();
        setShowMenu(false);
      }}
      className="flex rounded-full dark:hover:bg-yellow-100/30 hover:bg-gray-300/30 transition ease-in-out duration-300 w-12 h-12 border-2 border-gray-600/20 hover:border-gray-600 dark:border-yellow-500/20 dark:hover:border-yellow-500 overflow-hidden  items-center justify-center"
    >
      {theme == "dark" ? (
        <Sun className="text-yellow-500" data-aos="fade-down"></Sun>
      ) : (
        <MoonStars className="text-gray-600" data-aos="fade-down"></MoonStars>
      )}
    </button>
  );
};

export default ThemeButton;
