import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(auth)/onboard",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Extralight: require("../assets/fonts/Quicksand-Light.ttf"),
    Light: require("../assets/fonts/Quicksand-Regular.ttf"),
    Regular: require("../assets/fonts/Quicksand-Medium.ttf"),
    Semibold: require("../assets/fonts/Quicksand-SemiBold.ttf"),
    Bold: require("../assets/fonts/Quicksand-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
