import React from "react";
import { Pressable, Text, StyleSheet, ViewStyle } from "react-native";
import { MotiView, AnimatePresence } from "moti";
import { LinearGradient } from "expo-linear-gradient";
import * as Haptics from "expo-haptics";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { Colors, Fonts } from "@/constants/theme";
import { IconSymbol } from "./icon-symbol";

interface MainButtonProps {
  label: string;
  onPress: () => void;
  icon?: string;
  variant?: "primary" | "secondary" | "accent";
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle;
  className?: string;
}

/**
 * MainButton is the canonical CTA button for "The Digital Sanctuary".
 * Features: High-fidelity gradients, spring-loaded animations, building haptics,
 * and support for icons and loading states.
 */
export const MainButton = ({
  label,
  onPress,
  icon,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
  className = "",
}: MainButtonProps) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];

  const handlePress = () => {
    if (disabled || loading) return;
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress();
  };

  const getColors = (): [string, string] => {
    switch (variant) {
      case "primary":
        return [theme.primary, theme.primaryContainer || theme.primary];
      case "secondary":
        return [theme.surfaceContainerHigh, theme.surfaceContainerHighest];
      case "accent":
        return [theme.brandAccent, theme.secondary];
      default:
        return [theme.primary, theme.primaryContainer || theme.primary];
    }
  };

  const getTextColor = () => {
    if (variant === "secondary") return theme.onSurface;
    if (variant === "accent") return "#FFFFFF";
    return theme.onPrimary;
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled || loading}
      style={[{ width: '100%' }, style]}
    >
      {({ pressed }) => (
        <MotiView
          animate={{
            scale: pressed ? 0.97 : 1,
            opacity: disabled ? 0.6 : 1,
          }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 300,
          }}
          className={`overflow-hidden rounded-full shadow-lg ${className}`}
          style={{
            shadowColor: variant === "primary" ? theme.primary : "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 10,
            elevation: 8,
          }}
        >
          <LinearGradient
            colors={getColors()}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <AnimatePresence>
              {loading ? (
                <MotiView
                  key="loading"
                  from={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute"
                >
                  <MotiView
                    animate={{ rotate: "360deg" }}
                    transition={{
                      loop: true,
                      type: "timing",
                      duration: 1000,
                    }}
                  >
                    <IconSymbol name="sparkles" size={24} color={getTextColor()} />
                  </MotiView>
                </MotiView>
              ) : (
                <MotiView
                  key="content"
                  from={{ opacity: 0, translateY: 5 }}
                  animate={{ opacity: 1, translateY: 0 }}
                  exit={{ opacity: 0, translateY: -5 }}
                  className="flex-row items-center justify-center gap-2"
                >
                  <Text
                    style={[
                      styles.text,
                      { color: getTextColor(), fontFamily: Fonts.title },
                    ]}
                  >
                    {label}
                  </Text>
                  {icon && (
                    <IconSymbol name={icon as any} size={20} color={getTextColor()} />
                  )}
                </MotiView>
              )}
            </AnimatePresence>
          </LinearGradient>
        </MotiView>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  gradient: {
    paddingVertical: 18,
    paddingHorizontal: 32,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 64,
  },
  text: {
    fontSize: 18,
    fontWeight: "900",
    letterSpacing: -0.2,
  },
});
