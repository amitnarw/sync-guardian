import React, { useState } from "react";
import { TextInput, View, Text } from "react-native";
import { MotiView } from "moti";

interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  className?: string;
  error?: string;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  className = "",
  error,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View className={`mb-4 ${className}`}>
      {label && (
        <Text className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 ml-1">
          {label}
        </Text>
      )}
      <MotiView
        animate={{
          borderColor: error ? "#EF4444" : isFocused ? "#10B981" : "#E5E7EB",
          borderWidth: isFocused ? 2 : 1.5,
          scale: isFocused ? 1.01 : 1,
        }}
        transition={{ type: "timing", duration: 200 }}
        className="bg-white dark:bg-[#1C1C1E] rounded-2xl overflow-hidden px-4 py-1"
      >
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholderTextColor="#9CA3AF"
          className="h-12 text-black dark:text-white text-base"
        />
      </MotiView>
      {error && (
        <Text className="text-red-500 text-xs mt-1 ml-1">{error}</Text>
      )}
    </View>
  );
};
