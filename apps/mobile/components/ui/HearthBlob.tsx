import React from 'react';
import { View, StyleSheet, DimensionValue } from 'react-native';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { IconSymbol } from './icon-symbol';
import { ThemedText } from '../themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';

interface HearthBlobProps {
  size?: number;
  icon?: string;
  label?: string;
  value?: string;
  children?: React.ReactNode;
}

export function HearthBlob({ 
  size = 256, 
  icon, 
  label, 
  value, 
  children 
}: HearthBlobProps) {
  const primary = useThemeColor({}, 'primary');
  const tertiaryContainer = useThemeColor({}, 'primaryContainer');
  const secondary = useThemeColor({}, 'secondary');
  const background = useThemeColor({}, 'background');

  // Keyframes from the CSS "blob-loader" snippet
  // Ratios: 0%: [52, 48, 66, 34], 25%: [64, 36, 52, 48], 50%: [58, 42, 42, 58], 75%: [42, 58, 58, 42]
  const getRadii = (ratio: number) => size * (ratio / 100);

  const keyframes = {
    tL: [getRadii(52), getRadii(64), getRadii(58), getRadii(42), getRadii(52)],
    tR: [getRadii(48), getRadii(36), getRadii(42), getRadii(58), getRadii(48)],
    bR: [getRadii(66), getRadii(52), getRadii(42), getRadii(58), getRadii(66)],
    bL: [getRadii(34), getRadii(48), getRadii(58), getRadii(42), getRadii(34)],
  };

  return (
    <View style={{ width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Glow Layer 1 */}
      <MotiView
        animate={{
          borderTopLeftRadius: keyframes.tL,
          borderTopRightRadius: keyframes.tR,
          borderBottomRightRadius: keyframes.bR,
          borderBottomLeftRadius: keyframes.bL,
          scale: [1, 1.1, 1],
        }}
        transition={{ loop: true, duration: 4000, type: 'timing' }}
        style={{
          position: 'absolute',
          width: size,
          height: size,
          backgroundColor: primary,
          opacity: 0.3,
          shadowColor: primary,
          shadowRadius: 30,
          shadowOpacity: 0.5,
        }}
      />

      {/* Glow Layer 2 */}
      <MotiView
        animate={{
          borderTopLeftRadius: keyframes.tR, // offset sequence
          borderTopRightRadius: keyframes.bR,
          borderBottomRightRadius: keyframes.bL,
          borderBottomLeftRadius: keyframes.tL,
          scale: [1.1, 1, 1.1],
        }}
        transition={{ loop: true, duration: 4000, type: 'timing' }}
        style={{
          position: 'absolute',
          width: size,
          height: size,
          backgroundColor: tertiaryContainer,
          opacity: 0.3,
          shadowColor: primary,
          shadowRadius: 30,
          shadowOpacity: 0.5,
        }}
      />

      {/* Main Morphing Blob */}
      <MotiView
        animate={{ 
          borderTopLeftRadius: keyframes.tL,
          borderTopRightRadius: keyframes.tR,
          borderBottomRightRadius: keyframes.bR,
          borderBottomLeftRadius: keyframes.bL,
        }}
        transition={{ loop: true, duration: 4000, type: 'timing' }}
        style={{
          width: size,
          height: size,
          overflow: 'hidden',
          shadowColor: primary,
          shadowOffset: { width: 0, height: 12 },
          shadowOpacity: 0.2,
          shadowRadius: 24,
          elevation: 8,
        }}
      >
        <LinearGradient
          colors={[primary, tertiaryContainer]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={StyleSheet.absoluteFillObject}
        />
        
        <View style={[
          StyleSheet.absoluteFillObject,
          { alignItems: 'center', justifyContent: 'center', gap: 4, padding: 20 }
        ]}>
          {children || (
            <>
              {icon && (
                <IconSymbol 
                  name={icon as any} 
                  size={value ? 44 : 60} 
                  color={background}
                />
              )}
              {value && (
                <ThemedText style={{
                  color: background,
                  fontFamily: 'PlusJakartaSans-Bold',
                  fontSize: 32,
                  lineHeight: 38,
                }}>
                  {value}
                </ThemedText>
              )}
              {label && (
                <ThemedText style={{
                  color: background,
                  fontFamily: 'PlusJakartaSans-Bold',
                  fontSize: value ? 10 : 20,
                  lineHeight: value ? 14 : 28,
                  textAlign: 'center',
                  letterSpacing: value ? 1.5 : 0,
                  opacity: value ? 0.85 : 1,
                  textTransform: value ? 'uppercase' : 'none',
                }}>
                  {label}
                </ThemedText>
              )}
            </>
          )}
        </View>
      </MotiView>
    </View>
  );
}
