import { useTheme as useNextTheme } from "next-themes";
import { createContext, useContext, useEffect } from "react";

type ThemeContextState = {
  themes: string[];
  forcedTheme?: string | undefined;
  theme: "light" | "dark";
  resolvedTheme?: string | undefined;
  systemTheme?: "light" | "dark" | undefined;
  toggleTheme: () => Promise<void>;
  setTheme: (theme: string) => void;
};

const themeContext = createContext({} as ThemeContextState);

/**
 * use this hook rather than the `next-theme` hook
 */
export const useTheme = () => useContext(themeContext);

type Props = {
  children: React.ReactNode;
};

/**
 * This is a patch of the next theme which provide class dark mode for tailwind and `toggleTheme` function
 */
export const ThemeProvider = ({ children }: Props) => {
  let theme = useNextTheme().theme as "light" | "dark";
  const { setTheme, ...others } = useNextTheme();

  useEffect(() => {
    if (theme == "dark") document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, []);

  return (
    <themeContext.Provider
      value={{
        ...others,
        toggleTheme: async () => {
          if (theme == "dark") {
            setTheme("light");
            document.body.classList.remove("dark");
          } else {
            setTheme("dark");
            document.body.classList.add("dark");
          }
        },
        setTheme: setTheme,
        theme,
      }}
    >
      {children}
    </themeContext.Provider>
  );
};
