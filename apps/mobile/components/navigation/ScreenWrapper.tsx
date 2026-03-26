import React from 'react';
import { MotiView } from 'moti';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, ViewStyle } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

/**
 * ScreenWrapper provides a snappy, modern fade-and-slide transition
 * when switching between tabs. It uses focus state to trigger animations.
 */
interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
  className?: string;
}

export function ScreenWrapper({ children, style, className }: ScreenWrapperProps) {
  const isFocused = useIsFocused();
  const themeBackground = useThemeColor({}, 'background');

  const backgroundColor = (style as any)?.backgroundColor ?? themeBackground;

  return (
    <MotiView
      from={{ 
        opacity: 0, 
        scale: 0.96,
        translateY: 10,
      }}
      animate={{
        opacity: isFocused ? 1 : 0,
        scale: isFocused ? 1 : 0.92,
        translateY: isFocused ? 0 : 20,
        backgroundColor,
      }}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 300,
        backgroundColor: {
          type: 'timing',
          duration: 400,
        }
      }}
      style={[styles.container, style]}
      className={className}
    >
      {children}
    </MotiView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
