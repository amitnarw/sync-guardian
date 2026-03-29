import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "nativewind";
import { SafeAreaProvider } from "react-native-safe-area-context";

// Fast fix for tslib interop issues in Metro web
try {
  const tslib = require("tslib");
  if (tslib && !tslib.default) {
    tslib.default = tslib;
  }
} catch (e) {}

import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_700Bold,
} from "@expo-google-fonts/plus-jakarta-sans";
import {
  Manrope_400Regular,
  Manrope_700Bold,
} from "@expo-google-fonts/manrope";

import { Colors } from "@/constants/theme";
import { SplashScreenComponent } from "@/components/ui/SplashScreen";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  initialRouteName: "(onboarding)",
};

export default function RootLayout() {
  const { colorScheme } = useColorScheme();
  const [loaded, error] = useFonts({
    "PlusJakartaSans-Regular": PlusJakartaSans_400Regular,
    "PlusJakartaSans-Bold": PlusJakartaSans_700Bold,
    "Manrope-Regular": Manrope_400Regular,
    "Manrope-Bold": Manrope_700Bold,
  });

  const [splashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const handleSplashHide = () => {
    setSplashVisible(false);
  };

  if (!loaded && !error) {
    return null;
  }

  if (splashVisible) {
    return <SplashScreenComponent isReady={true} onHide={handleSplashHide} />;
  }

  const CustomDefaultTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.light.background,
      primary: Colors.light.primary,
      text: Colors.light.text,
      card: Colors.light.surfaceContainer,
      border: Colors.light.outline,
    },
  };

  const CustomDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: Colors.dark.background,
      primary: Colors.dark.primary,
      text: Colors.dark.text,
      card: Colors.dark.surfaceContainer,
      border: Colors.dark.outline,
    },
  };

  return (
    <SafeAreaProvider>
      <ThemeProvider
        value={colorScheme === "dark" ? CustomDarkTheme : CustomDefaultTheme}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(onboarding)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen
            name="modal"
            options={{ presentation: "modal", title: "Modal" }}
          />
        </Stack>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
