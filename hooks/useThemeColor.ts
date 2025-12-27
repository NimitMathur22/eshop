// import { useColorScheme as _useColorScheme } from "react-native";

// export function useColorScheme() {
//   return _useColorScheme() ?? "light";
// }
import Colors from "@/constants/Colors";
import useColorScheme from "./use-color-scheme";

export function useThemeColor() {
  const scheme = useColorScheme();
  return Colors[scheme];
}
