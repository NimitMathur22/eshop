import Colors from "@/constants/Colors";
import useColorScheme from "@/hooks/use-color-scheme";
import React from "react";
import { Text as RNText, View as RNView, TextProps, ViewProps } from "react-native";

// Themed View
export function ThemedView(props: ViewProps & { style?: any; children?: React.ReactNode }) {
  const theme = useColorScheme();
  const bgColor = Colors[theme].background;

  return <RNView {...props} style={[{ backgroundColor: bgColor }, props.style]}>{props.children}</RNView>;
}

// Themed Text
export function ThemedText(props: TextProps & { style?: any; children?: React.ReactNode }) {
  const theme = useColorScheme();
  const color = Colors[theme].text;

  return <RNText {...props} style={[{ color }, props.style]}>{props.children}</RNText>;
}
