import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

interface PillButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function PillButton({ title, onPress, variant = 'primary', className = "" }: PillButtonProps) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const isPrimary = variant === 'primary';

  return (
    <Pressable onPress={onPress}>
      {({ pressed }: { pressed: boolean }) => (
        <MotiView
          animate={{ scale: pressed ? 0.98 : 1 }}
          transition={{ type: 'spring', damping: 15, stiffness: 300 }}
          className={`rounded-full overflow-hidden ${className}`}
        >
          {isPrimary ? (
            <LinearGradient
              colors={[theme.primary, theme.primaryContainer || theme.primary]} 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              className="px-8 py-3 items-center justify-center"
            >
              <Text className="text-white font-display font-bold text-lg">{title}</Text>
            </LinearGradient>
          ) : (
            <View className="px-8 py-3 items-center justify-center border-2 border-primary/20 bg-surface">
              <Text className="text-primary font-display font-bold text-lg">{title}</Text>
            </View>
          )}
        </MotiView>
      )}
    </Pressable>
  );
}
