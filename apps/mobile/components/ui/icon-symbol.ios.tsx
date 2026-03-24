import { SymbolView, SymbolViewProps, SymbolWeight } from 'expo-symbols';
import { StyleProp, ViewStyle, OpaqueColorValue } from 'react-native';
import { cssInterop } from 'react-native-css-interop';

cssInterop(SymbolView, {
  className: 'style',
});

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  className,
  weight = 'regular',
}: {
  name: SymbolViewProps['name'];
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  className?: string;
  weight?: SymbolWeight;
}) {
  return (
    <SymbolView
      weight={weight}
      tintColor={color}
      resizeMode="scaleAspectFit"
      name={name}
      style={[
        {
          width: size,
          height: size,
        },
        style,
      ]}
      className={className}
    />
  );
}
