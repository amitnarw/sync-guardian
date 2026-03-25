import React from "react";
import { Pressable, View } from "react-native";
import { MotiView, AnimatePresence } from "moti";
import { useColorScheme } from "nativewind";
import { IconSymbol } from "./icon-symbol";
import { useThemeColor } from "@/hooks/use-theme-color";
import * as Haptics from "expo-haptics";

export const DarkModeToggle = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";
  
  const primary = useThemeColor({}, "primary");

  const handleToggle = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleColorScheme();
  };

  return (
    <Pressable
      onPress={handleToggle}
    >
      <MotiView
        animate={{
          backgroundColor: isDark ? "#12140a" : "#f5f5dc",
          borderColor: isDark ? "#303221" : "#e4e4cc",
        }}
        transition={{ type: "timing", duration: 250 }}
        style={{
          width: 52,
          height: 28,
          borderRadius: 20,
          borderWidth: 1.5,
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 4,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Atmos */}
        <AnimatePresence>
          {isDark ? (
            <MotiView
              key="stars"
              from={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{
                position: 'absolute',
                left: 6,
                width: 14,
                height: '100%',
                justifyContent: 'center',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 2
              }}
            >
              {[0, 1, 2].map((i) => (
                <MotiView
                  key={i}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, i === 1 ? 1.4 : 1.2, 1],
                  }}
                  transition={{
                    loop: true,
                    type: "timing",
                    duration: 1500 + i * 300,
                  }}
                  style={{
                    width: 2,
                    height: 2,
                    borderRadius: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                  }}
                />
              ))}
            </MotiView>
          ) : (
            <MotiView
              key="rays"
              from={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                right: 6,
                width: 14,
                height: '100%',
                justifyContent: 'center',
                gap: 2
              }}
            >
              {[0, 1].map((i) => (
                <MotiView
                  key={i}
                  animate={{ translateX: i % 2 === 0 ? [-2, 2, -2] : [2, -2, 2] }}
                  transition={{ loop: true, type: "timing", duration: 3000 + i * 800 }}
                  style={{
                    width: i === 0 ? 10 : 7,
                    height: 2,
                    borderRadius: 1,
                    backgroundColor: 'rgba(132, 169, 140, 0.3)',
                    marginLeft: i * 2
                  }}
                />
              ))}
            </MotiView>
          )}
        </AnimatePresence>

        {/* Sliding Indicator */}
        <MotiView
          animate={{
            translateX: isDark ? 20 : 0,
            backgroundColor: isDark ? "#2a2c1a" : "#ffffff",
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 250,
          }}
          style={{
            width: 20,
            height: 20,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: isDark ? primary : "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.3,
            shadowRadius: 2,
            elevation: 3,
            zIndex: 10
          }}
        >
          <MotiView
            animate={{
              rotate: isDark ? "360deg" : "0deg",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <IconSymbol
              name={isDark ? "moon.fill" : "sun.max.fill"}
              size={12}
              color={isDark ? primary : "#9f402d"}
            />
          </MotiView>
        </MotiView>
      </MotiView>
    </Pressable>
  );
};
