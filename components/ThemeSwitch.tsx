import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const setDarkTheme = () => {
    setTheme("dark");
  };

  const setLightTheme = () => {
    setTheme("light");
  };

  return (
    <>
      {theme === "light" ? (
        <button onClick={() => setDarkTheme()}>
          <MdLightMode size="24" />
        </button>
      ) : (
        <button onClick={() => setLightTheme()}>
          <MdDarkMode size="24" />
        </button>
      )}
    </>
  );
};

export default ThemeSwitch;
