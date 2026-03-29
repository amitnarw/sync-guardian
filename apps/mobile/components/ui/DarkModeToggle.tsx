import React from "react";
import { Pressable, View } from "react-native";
import { MotiView } from "moti";
import { useColorScheme } from "nativewind";
import { IconSymbol } from "./icon-symbol";
import * as Haptics from "expo-haptics";

export const DarkModeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const handleToggle = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleColorScheme();
  };

  return (
    <Pressable
      onPress={handleToggle}
      style={{
        width: 51,
        height: 31,
        borderRadius: 16,
        backgroundColor: isDark ? "#2a2c1a" : "#e9e9e1",
        borderWidth: 1,
        borderColor: isDark ? "#3a3c2e" : "#d1d1c7",
        padding: 2,
        justifyContent: 'center',
      }}
    >
      {/* Sliding circle - iOS style */}
      <MotiView
        animate={{
          translateX: isDark ? 21 : 0,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
        }}
        style={{
          position: 'absolute',
          left: 2,
          width: 27,
          height: 27,
          borderRadius: 14,
          backgroundColor: '#ffffff',
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.15,
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        {/* Icon in the circle */}
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* In dark mode: show sun (switch to light), in light mode: show moon (switch to dark) */}
          <MotiView
            animate={{
              opacity: isDark ? 0.9 : 0.7,
            }}
          >
            <IconSymbol
              name={isDark ? "sun.max.fill" : "moon.fill"}
              size={15}
              color={isDark ? "#8a7a5a" : "#8a8a8a"}
            />
          </MotiView>
        </View>
      </MotiView>
    </Pressable>
  );
};
