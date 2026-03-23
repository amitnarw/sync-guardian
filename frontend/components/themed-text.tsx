import { StyleSheet, Text, type TextProps } from 'react-native';

import { useThemeColor } from '@/hooks/use-theme-color';
import { Fonts } from '@/constants/theme';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'display' | 'headline';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'display' ? styles.display : undefined,
        type === 'headline' ? styles.headline : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontFamily: Fonts.body,
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontFamily: Fonts.body,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontFamily: Fonts.title,
    fontSize: 24,
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: Fonts.title,
    fontSize: 20,
    lineHeight: 28,
  },
  display: {
    fontFamily: Fonts.display,
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.64,
  },
  headline: {
    fontFamily: Fonts.headline,
    fontSize: 18,
    lineHeight: 26,
  },
  link: {
    fontFamily: Fonts.body,
    lineHeight: 30,
    fontSize: 16,
    color: '#486730', // primary color
  },
});
