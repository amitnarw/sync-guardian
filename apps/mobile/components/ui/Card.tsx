import React from "react";
import { View, Text } from "react-native";
import { MotiView } from "moti";

interface CardProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  animate?: boolean;
}

export const Card = ({
  children,
  title,
  description,
  className = "",
  animate = true,
}: CardProps) => {
  return (
    <MotiView
      from={animate ? { opacity: 0, scale: 0.95, translateY: 10 } : undefined}
      animate={animate ? { opacity: 1, scale: 1, translateY: 0 } : undefined}
      transition={{ type: "timing", duration: 500 }}
      className={`bg-[#F5F5F7] dark:bg-[#1C1C1E] p-6 rounded-card overflow-hidden ${className}`}
    >
      {title && (
        <Text className="text-2xl font-bold mb-1 text-black dark:text-white font-[PlusJakartaSans-Bold]">
          {title}
        </Text>
      )}
      {description && (
        <Text className="text-base text-gray-500 dark:text-gray-400 mb-4 font-[Manrope-Regular]">
          {description}
        </Text>
      )}
      {children}
    </MotiView>
  );
};
