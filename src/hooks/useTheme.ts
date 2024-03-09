import { useState, useEffect, useLayoutEffect } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

// type ThemeState = Theme | Dispatch<SetStateAction<Theme>>;

const useTheme = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  useEffect(() => {
    const platformTheme = window?.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? Theme.DARK
      : Theme.LIGHT;

    setTheme(platformTheme);
  }, []);

  const changeTheme = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  };

  return [theme, changeTheme];
};

export { useTheme, Theme };
