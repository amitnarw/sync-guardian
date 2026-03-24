import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';

interface PillButtonProps {
  title: string;
  onPress: () => void;
  className?: string;
}

export function PillButton({ title, onPress, className = "" }: PillButtonProps) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }: { pressed: boolean }) => (
        <MotiView
          animate={{ scale: pressed ? 0.98 : 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
          className={`rounded-full overflow-hidden ${className}`}
        >
          <LinearGradient
            colors={['#10B981', '#059669']} // Example theme colors
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            className="px-8 py-4 items-center justify-center"
          >
            <Text className="text-white font-bold text-lg">{title}</Text>
          </LinearGradient>
        </MotiView>
      )}
    </Pressable>
  );
}
