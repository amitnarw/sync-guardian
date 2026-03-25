import { useColorScheme as useNativeWindColorScheme } from 'nativewind';
import { useColorScheme as useRNColorScheme } from 'react-native';

export function useColorScheme() {
  const { colorScheme } = useNativeWindColorScheme();
  const systemScheme = useRNColorScheme();
  return colorScheme ?? systemScheme ?? 'light';
}
