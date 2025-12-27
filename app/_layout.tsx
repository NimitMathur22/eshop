// // import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// // import { Stack } from 'expo-router';
// // import { StatusBar } from 'expo-status-bar';
// // import 'react-native-reanimated';

// // import { useColorScheme } from '@/hooks/use-color-scheme';

// // export const unstable_settings = {
// //   anchor: '(tabs)',
// // };

// // export default function RootLayout() {
// //   const colorScheme = useColorScheme();

// //   return (
// //     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
// //       <Stack>
// //         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
// //         <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
// //       </Stack>
// //       <StatusBar style="auto" />
// //     </ThemeProvider>
// //   );
// // }


// import useColorScheme from "@/hooks/use-color-scheme";
// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";

// export default function RootLayout() {
//   const theme = useColorScheme();

//   return (
//     <>
//       <Stack
//         screenOptions={{
//           headerShown: true,
//           headerStyle: { backgroundColor: "#2196F3" },
//           headerTintColor: "#fff",
//           headerTitleAlign: "center",
//         }}
//       >
//         <Stack.Screen
//           name="index"
//           options={{
//             title: "E-Shop By Swil Jaipur",
//             headerTitleStyle: {
//               fontSize: 22,
//               fontWeight: "bold",
//             },
//           }}
//         />
//       </Stack>

//       {/* Status Bar */}
//       <StatusBar style={theme === "dark" ? "light" : "dark"} />
//     </>
//   );
// }



// import { store } from "@/store/store";
// import { Stack } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { Provider } from "react-redux";

// export default function RootLayout() {
//   return (
//     <Provider store={store}>
//       <Stack
//         screenOptions={{
//           headerShown: true,
//           headerStyle: { backgroundColor: "#2196F3" },
//           headerTintColor: "#fff",
//           headerTitleAlign: "center",
//         }}
//       >
//         <Stack.Screen
//           name="index"
//           options={{
//             title: "E-Shop By Swil Jaipur",
//             headerTitleStyle: { fontSize: 22, fontWeight: "bold" },
//           }}
//         />

//         <Stack.Screen
//           name="cart"
//           options={{
//             title: "My Cart",
//             headerTitleStyle: { fontSize: 22, fontWeight: "bold" },
//           }}
//         />
//       </Stack>

//       <StatusBar style="light" />
//     </Provider>
//   );
// }



import { store } from "@/store/store";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
  screenOptions={{
    headerShown: true,
    headerStyle: { 
      backgroundColor: "#F8F1F1", // soft pastel background
      shadowColor: "transparent", // remove shadow for flat look
      elevation: 0, // for Android flat look
    },
    headerTintColor: "#333", // dark text color
    headerTitleAlign: "center",
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: "600",
      color: "#333",
      fontFamily: "System", // optional, or use a custom font
    },
  }}
>
  <Stack.Screen
    name="index"
    options={{
      title: "E-Shop By Swil Jaipur",
    }}
  />

  <Stack.Screen
    name="cart"
    options={{
      title: "My Cart",
    }}
  />

      {/* <Stack
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: "#2196F3" },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            title: "E-Shop By Swil Jaipur",
            headerTitleStyle: { fontSize: 22, fontWeight: "bold" },
          }}
        />

        <Stack.Screen
          name="cart"
          options={{
            title: "My Cart",
            headerTitleStyle: { fontSize: 22, fontWeight: "bold" },
          }}
        /> */}
      </Stack>

      <StatusBar style="light" />
    </Provider>
  );
}





