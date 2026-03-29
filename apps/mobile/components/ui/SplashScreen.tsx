import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Animated, Dimensions, Text, SafeAreaView, Easing } from "react-native";
import Svg, { Path, Defs, LinearGradient, Stop, Circle, RadialGradient } from "react-native-svg";
import { MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

interface SplashScreenProps {
  isReady: boolean;
  onHide?: () => void;
}

const SPLASH_COLORS = {
  background: '#fff8f0',
  onSurface: '#363228',
  onSurfaceVariant: '#645e53',
  primary: '#44674d',
  primaryContainer: '#c5eccc',
  secondaryContainer: '#ffdad3',
  tertiaryContainer: '#d3fbda',
  onPrimary: '#e8ffea',
  surfaceContainerHighest: '#eae1d2',
};

// Exact replica of the CSS border-radius: 42% 58% 70% 30% / 45% 45% 55% 55% mapping to an SVG 0-100 ViewBox.
const hearthBlobPath = "M42,0 C74.2,0 100,20.1 100,45 C100,69.8 86.5,100 55,100 C23.5,100 0,75.3 0,45 C0,14.6 9.7,0 42,0 Z";

export function SplashScreenComponent({ isReady, onHide }: SplashScreenProps) {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const contentFadeAnim = useRef(new Animated.Value(0)).current; 
  const contentTranslateAnim = useRef(new Animated.Value(20)).current;
  const loadingProgress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Initial entrance fade matching the pure HTML presence style
    Animated.parallel([
      Animated.timing(contentFadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(contentTranslateAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      })
    ]).start();

    if (isReady) {
      // Animate loading bar smoothly
      Animated.timing(loadingProgress, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: false,
      }).start();
      
      // After animation, fade out splash
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }).start(() => {
          setAnimationComplete(true);
          onHide?.();
        });
      }, 2500);
    }
  }, [isReady]);

  if (animationComplete) {
    return null;
  }

  const blobSize = Math.min(width * 0.65, 320);

  return (
    <Animated.View 
      style={[
        styles.container, 
        { opacity: fadeAnim }
      ]}
    >
      <View style={StyleSheet.absoluteFillObject} pointerEvents="none" />

      <SafeAreaView style={styles.safeArea}>
        {/* Decorative Floating Elements (Converted HTML blurred divs) */}
        <Animated.View style={[styles.contentWrapper, { opacity: contentFadeAnim, transform: [{ translateY: contentTranslateAnim }] }]}>
          
          <View style={styles.centralIdentityCluster}>
            {/* Top right floating element */}
            <View style={[styles.floatingElement, { top: -32, right: -32, opacity: 0.4 }]}>
              <Svg height="128" width="128" viewBox="0 0 128 128">
                <Defs>
                  <RadialGradient id="blur1" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%">
                    <Stop offset="0%" stopColor={SPLASH_COLORS.primaryContainer} stopOpacity="1" />
                    <Stop offset="100%" stopColor={SPLASH_COLORS.primaryContainer} stopOpacity="0" />
                  </RadialGradient>
                </Defs>
                <Circle cx="64" cy="64" r="64" fill="url(#blur1)" />
              </Svg>
            </View>

            {/* Bottom left floating element */}
            <View style={[styles.floatingElement, { bottom: -40, left: -40, opacity: 0.3 }]}>
              <Svg height="160" width="160" viewBox="0 0 160 160">
                <Defs>
                  <RadialGradient id="blur2" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%">
                    <Stop offset="0%" stopColor={SPLASH_COLORS.tertiaryContainer} stopOpacity="1" />
                    <Stop offset="100%" stopColor={SPLASH_COLORS.tertiaryContainer} stopOpacity="0" />
                  </RadialGradient>
                </Defs>
                <Circle cx="80" cy="80" r="80" fill="url(#blur2)" />
              </Svg>
            </View>

            {/* Soft Shadow Backing */}
            <View style={[styles.absoluteCenter, { transform: [{ scale: 1.25 }] }]}>
              <Svg width={blobSize} height={blobSize} viewBox="0 0 100 100">
                <Path d={hearthBlobPath} fill={SPLASH_COLORS.onSurface} fillOpacity={0.04} />
              </Svg>
            </View>

            {/* The Logo Container (Organic Blob) */}
            <View style={[styles.hearthContainer, { shadowColor: '#363228' }]}>
              <Svg width={blobSize} height={blobSize} viewBox="0 0 100 100">
                <Defs>
                  <LinearGradient id="hearthGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <Stop offset="0%" stopColor={SPLASH_COLORS.primary} stopOpacity="1" />
                    <Stop offset="100%" stopColor={SPLASH_COLORS.primaryContainer} stopOpacity="1" />
                  </LinearGradient>
                </Defs>
                <Path d={hearthBlobPath} fill="url(#hearthGrad)" />
              </Svg>
              <View style={styles.iconOverlay}>
                <MaterialIcons name="spa" size={blobSize * 0.35} color={SPLASH_COLORS.onPrimary} />
                <MaterialIcons 
                  name="eco" 
                  size={blobSize * 0.45} 
                  color={SPLASH_COLORS.onPrimary} 
                  style={{ position: 'absolute', opacity: 0.2, transform: [{ scale: 1.5 }, { rotate: '12deg' }] }}
                />
              </View>
            </View>
          </View>

          {/* Footer Identity */}
          <View style={styles.footerIdentity}>
            <Text style={styles.brandTitle}>
              Nurturing Atelier
            </Text>
            <Text style={styles.brandSubtitle}>
              Cultivate your digital sanctuary.
            </Text>
            
            {/* Loading Indicator */}
            <View style={styles.loadingContainer}>
              <Animated.View 
                style={[
                  styles.loadingBar,
                  {
                    width: loadingProgress.interpolate({
                      inputRange: [0, 1],
                      outputRange: ["33%", "100%"]
                    })
                  }
                ]}
              />
            </View>
          </View>

        </Animated.View>

        {/* Decorative Ambient Backgrounds */}
        <View style={styles.ambientBottomLeft} pointerEvents="none">
           <Svg height={width * 1.5} width={width * 1.5} viewBox={`0 0 ${width} ${width}`}>
              <Defs>
                <RadialGradient id="ambient1" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%">
                  <Stop offset="0%" stopColor={SPLASH_COLORS.primaryContainer} stopOpacity="0.2" />
                  <Stop offset="100%" stopColor={SPLASH_COLORS.primaryContainer} stopOpacity="0" />
                </RadialGradient>
              </Defs>
              <Circle cx={width/2} cy={width/2} r={width/2} fill="url(#ambient1)" />
            </Svg>
        </View>

        <View style={styles.ambientTopRight} pointerEvents="none">
           <Svg height={width * 1.2} width={width * 1.2} viewBox={`0 0 ${width} ${width}`}>
              <Defs>
                <RadialGradient id="ambient2" cx="50%" cy="50%" rx="50%" ry="50%" fx="50%" fy="50%">
                  <Stop offset="0%" stopColor={SPLASH_COLORS.secondaryContainer} stopOpacity="0.1" />
                  <Stop offset="100%" stopColor={SPLASH_COLORS.secondaryContainer} stopOpacity="0" />
                </RadialGradient>
              </Defs>
              <Circle cx={width/2} cy={width/2} r={width/2} fill="url(#ambient2)" />
            </Svg>
        </View>

      </SafeAreaView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: SPLASH_COLORS.background,
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 64,
  },
  contentWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 10,
  },
  centralIdentityCluster: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 48,
  },
  floatingElement: {
    position: 'absolute',
  },
  absoluteCenter: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hearthContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 0, height: 32 },
    shadowOpacity: 0.08,
    shadowRadius: 64,
    elevation: 16,
  },
  iconOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerIdentity: {
    alignItems: 'center',
    marginBottom: 40,
  },
  brandTitle: {
    fontFamily: 'PlusJakartaSans-Bold',
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    opacity: 0.9,
    color: SPLASH_COLORS.onSurface,
    marginBottom: 8,
  },
  brandSubtitle: {
    fontFamily: 'Manrope-Regular',
    fontSize: 14,
    opacity: 0.6,
    letterSpacing: 0.5,
    color: SPLASH_COLORS.onSurfaceVariant,
  },
  loadingContainer: {
    marginTop: 48,
    width: 128,
    height: 3,
    backgroundColor: SPLASH_COLORS.surfaceContainerHighest,
    borderRadius: 2,
    overflow: 'hidden',
  },
  loadingBar: {
    height: '100%',
    backgroundColor: SPLASH_COLORS.primary,
    borderRadius: 2,
  },
  ambientBottomLeft: {
    position: 'absolute',
    bottom: -width * 0.5,
    left: -width * 0.5,
    zIndex: 1,
  },
  ambientTopRight: {
    position: 'absolute',
    top: -width * 0.3,
    right: -width * 0.3,
    zIndex: 1,
  },
});