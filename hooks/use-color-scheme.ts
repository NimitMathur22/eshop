// export { useColorScheme } from 'react-native';
import { useEffect, useState } from "react";
import { useColorScheme as _useColorScheme, Appearance } from "react-native";

export default function useColorScheme() {
  const system = _useColorScheme();
  const [theme, setTheme] = useState(system ?? "light");

  useEffect(() => {
    const listener = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme) setTheme(colorScheme);
    });
    return () => listener.remove();
  }, []);

  return theme; // "light" | "dark"
}



