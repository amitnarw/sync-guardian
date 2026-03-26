import { type ViewProps } from 'react-native';
import { MotiView } from 'moti';

import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  className?: string;
};

export function ThemedView({ style, lightColor, darkColor, className, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return (
    <MotiView 
      animate={{ backgroundColor }}
      transition={{ type: 'timing', duration: 400 }}
      style={[{ backgroundColor }, style]} 
      className={className} 
      {...otherProps} 
    />
  );
}
