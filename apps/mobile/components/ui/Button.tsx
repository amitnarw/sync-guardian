import React from "react";
import { Pressable, Text, View } from "react-native";
import { MotiView } from "moti";

interface ButtonProps {
  label: string;
  onPress: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  className?: string;
  textClassName?: string;
  disabled?: boolean;
}

export const Button = ({
  label,
  onPress,
  variant = "primary",
  className = "",
  textClassName = "",
  disabled = false,
}: ButtonProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-black dark:bg-white";
      case "secondary":
        return "bg-gray-200 dark:bg-gray-800";
      case "outline":
        return "border border-black dark:border-white bg-transparent";
      case "ghost":
        return "bg-transparent";
      default:
        return "bg-black dark:bg-white";
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "primary":
        return "text-white dark:text-black";
      case "secondary":
      case "outline":
      case "ghost":
        return "text-black dark:text-white";
      default:
        return "text-white dark:text-black";
    }
  };

  return (
    <MotiView
      animate={{
        scale: disabled ? 1 : 1,
        opacity: disabled ? 0.5 : 1,
      }}
      transition={{ type: "timing", duration: 150 }}
    >
      <Pressable
        onPress={onPress}
        disabled={disabled}
        className={`px-6 py-4 rounded-button flex-row items-center justify-center ${getVariantStyles()} ${className}`}
      >
        {({ pressed }) => (
          <MotiView
            animate={{ scale: pressed ? 0.96 : 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 300 }}
            className="flex-row items-center justify-center w-full"
          >
            <Text
              className={`text-lg font-bold ${getTextColor()} ${textClassName}`}
            >
              {label}
            </Text>
          </MotiView>
        )}
      </Pressable>
    </MotiView>
  );
};
