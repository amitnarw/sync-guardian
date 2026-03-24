import { Text, type TextProps } from 'react-native';
import { useThemeColor } from '@/hooks/use-theme-color';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'display' | 'headline';
  className?: string; // Standard NativeWind className
};

const typeClasses = {
  default: "font-body text-base leading-6",
  defaultSemiBold: "font-body text-base leading-6 font-semibold",
  title: "font-title text-2xl leading-8",
  subtitle: "font-title text-xl leading-7",
  display: "font-display text-4xl leading-10 tracking-[-0.64px]",
  headline: "font-headline text-lg leading-[26px]",
  link: "font-body text-base leading-[30px] text-primary",
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  className = "",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      className={`${typeClasses[type]} ${className}`}
      style={[{ color }, style]}
      {...rest}
    />
  );
}
