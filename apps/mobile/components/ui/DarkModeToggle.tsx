import React from "react";
import { Pressable, View } from "react-native";
import { MotiView } from "moti";
import { useColorScheme } from "nativewind";
import { IconSymbol } from "./icon-symbol";

export const DarkModeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <View className="mb-4 self-end">
      <Pressable
        onPress={toggleColorScheme}
        className="bg-surface-container rounded-full p-1 w-16 h-9 flex-row items-center border border-outline/10 shadow-sm"
      >
        <MotiView
          animate={{
            translateX: isDark ? 28 : 0,
            backgroundColor: isDark ? "#486730" : "#9f402d",
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 150,
          }}
          className="w-7 h-7 rounded-full items-center justify-center shadow-md bg-primary"
        >
          <IconSymbol
            name={isDark ? "moon.fill" : "sun.max.fill"}
            size={16}
            color="#fbfbe2"
          />
        </MotiView>
        <View className="flex-1 flex-row justify-around px-2 items-center absolute w-full h-full pointer-events-none">
          {!isDark && (
            <View className="flex-1 items-end pr-1">
              <IconSymbol
                name="moon.fill"
                size={12}
                className="text-text/20"
                color="#1b1d0e33"
              />
            </View>
          )}
          {isDark && (
            <View className="flex-1 items-start pl-1">
              <IconSymbol
                name="sun.max.fill"
                size={12}
                className="text-text/20"
                color="#fbfbe233"
              />
            </View>
          )}
        </View>
      </Pressable>
    </View>
  );
};
