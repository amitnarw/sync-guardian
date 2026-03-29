// Fallback for using MaterialIcons on Android and web.

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight, SymbolViewProps } from 'expo-symbols';
import { ComponentProps } from 'react';
import { OpaqueColorValue, type StyleProp, type TextStyle } from 'react-native';
import { cssInterop } from 'react-native-css-interop';

type IconMapping = Record<string, ComponentProps<typeof MaterialIcons>['name']>;
type IconSymbolName = keyof typeof MAPPING;

/**
 * Add your SF Symbols to Material Icons mappings here.
 * - see Material Icons in the [Icons Directory](https://icons.expo.fyi).
 * - see SF Symbols in the [SF Symbols](https://developer.apple.com/sf-symbols/) app.
 */
const MAPPING = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'sun.max.fill': 'wb-sunny',
  'moon.fill': 'bedtime',
  'moon.zzz.fill': 'nights-stay',
  'heart.fill': 'favorite',
  'thermometer.medium': 'device-thermostat',
  'cup.and.saucer.fill': 'coffee',
  'sparkles': 'auto-awesome',
  'chart.bar.fill': 'bar-chart',
  'bell.fill': 'notifications',
  'person.fill': 'person',
  'leaf.fill': 'eco',
  'person.2.fill': 'people',
  'creditcard.fill': 'credit-card',
  'lock.fill': 'lock',
  'paintbrush.fill': 'brush',
  'gearshape.fill': 'settings',
  'checkmark.shield.fill': 'verified',
  'timer': 'timer',
  'app.badge': 'apps',
  'calendar': 'calendar-today',
  'star.fill': 'star',
  'notifications_active': 'notifications-active',
  'bedtime': 'nights-stay',
  'favorite': 'favorite',
  'device_thermostat': 'device-thermostat',
  'restaurant': 'restaurant',
  'wash': 'wash',
  'history_edu': 'history-edu',
  'tips_and_updates': 'tips-and-updates',
  'dashboard': 'dashboard',
  'analytics': 'analytics',
  'insights': 'insights',
  'gavel': 'gavel',
  'settings': 'settings',
  'search': 'search',
  'auto_awesome': 'auto-awesome',
  'calendar_today': 'calendar-today',
  'forum': 'forum',
  'history': 'history',
  'chevron_right': 'chevron-right',
  'auto_stories': 'auto-stories',
  'verified_user': 'verified-user',
  'battery_charging_80': 'battery-charging-full',
  'location_on': 'place',
  'spa': 'spa',
  'nest_eco_leaf': 'eco',
} as IconMapping;

cssInterop(MaterialIcons, {
  className: 'style',
});

/**
 * An icon component that uses native SF Symbols on iOS, and Material Icons on Android and web.
 * This ensures a consistent look across platforms, and optimal resource usage.
 * Icon `name`s are based on SF Symbols and require manual mapping to Material Icons.
 */
export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  className,
}: {
  name: IconSymbolName;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<TextStyle>;
  className?: string;
  weight?: SymbolWeight;
}) {
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={MAPPING[name]}
      style={style}
      className={className}
    />
  );
}
