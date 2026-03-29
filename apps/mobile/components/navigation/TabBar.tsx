import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  Platform,
} from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { IconSymbol } from "../ui/icon-symbol";
import { Colors, Fonts } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { MotiView } from "moti";
import { BlurView } from "expo-blur";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import * as Haptics from "expo-haptics";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { width: SCREEN_WIDTH } = useWindowDimensions();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? "light"];
  const insets = useSafeAreaInsets();

  const TAB_BAR_MARGIN = 16;
  const TAB_BAR_WIDTH = SCREEN_WIDTH - TAB_BAR_MARGIN * 2;
  const numTabs = state.routes.length;
  const TAB_WIDTH = TAB_BAR_WIDTH / numTabs;

  const getIconName = (name: string) => {
    switch (name) {
      case "index":
        return "dashboard";
      case "notifications":
        return "analytics";
      case "insights":
        return "insights";
      case "rules":
        return "gavel";
      case "settings":
        return "settings";
      default:
        return "dashboard";
    }
  };

  const handlePress = (route: any, isFocused: boolean) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params);
    }
  };

  return (
    <View style={styles.tabBarWrapper}>
      <View
        style={[
          styles.tabBarContainer,
          {
            paddingBottom: Math.max(insets.bottom, 12),
          },
        ]}
      >
        <BlurView
          experimentalBlurMethod="dimezisBlurView"
          intensity={100}
          tint={colorScheme === "dark" ? "dark" : "light"}
          style={StyleSheet.absoluteFill}
        />
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              backgroundColor:
                colorScheme === "dark"
                  ? "rgba(27, 29, 14, 0.65)" /* theme.surface dark */
                  : "rgba(255, 248, 240, 0.65)", /* theme.surface light */
              ...Platform.select({
                web: {
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                },
              }),
            },
          ]}
        />

        <View style={[styles.tabContentWrapper, { width: TAB_BAR_WIDTH }]}>
          {/* Fluid Background Indicator */}
          <MotiView
            animate={{
              translateX: state.index * TAB_WIDTH,
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
            }}
            style={[
              styles.indicator,
              {
                width: TAB_WIDTH,
                backgroundColor:
                  colorScheme === "dark"
                    ? "rgba(132, 169, 140, 0.25)"
                    : "rgba(132, 169, 140, 0.15)",
              },
            ]}
          >
            {/* Subtle Glow/Inner shadow effect for active indicator */}
            <MotiView
              animate={{ opacity: [0.1, 0.2, 0.1] }}
              transition={{ loop: true, duration: 2000 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 24,
                borderWidth: 1.2,
                borderColor: theme.primary,
                opacity: 0.1,
              }}
            />
          </MotiView>

          {/* Interaction Layer */}
          <View style={styles.tabItemsContainer}>
            {state.routes.map((route, index) => {
              const { options } = descriptors[route.key];
              const label =
                options.title !== undefined ? options.title : route.name;
              const isFocused = state.index === index;

              return (
                <TouchableOpacity
                  key={route.key}
                  onPress={() => handlePress(route, isFocused)}
                  style={[styles.tabItem, { width: TAB_WIDTH }]}
                  activeOpacity={1}
                >
                  <MotiView
                    animate={{
                      scale: isFocused ? 1.15 : 1,
                      translateY: isFocused ? -3 : 0,
                    }}
                    transition={{
                      type: "spring",
                      damping: 15,
                      stiffness: 350,
                    }}
                    style={styles.iconContainer}
                  >
                    <IconSymbol
                      name={getIconName(route.name) as any}
                      color={
                        isFocused ? theme.tabIconSelected : theme.tabIconDefault
                      }
                      size={22}
                    />
                  </MotiView>

                  <MotiView
                    animate={{
                      opacity: isFocused ? 1 : 0.6,
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.label,
                        {
                          color: isFocused
                            ? theme.tabIconSelected
                            : theme.tabIconDefault,
                          fontFamily: Fonts.title,
                          fontWeight: isFocused ? "900" : "600",
                        },
                      ]}
                    >
                      {label.toUpperCase()}
                    </Text>
                  </MotiView>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarWrapper: {
    shadowColor: "#363228", /* Deep Umber for Ambient Shadow */
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.06,
    shadowRadius: 40,
    elevation: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    backgroundColor: "transparent",
  },
  tabBarContainer: {
    paddingTop: 8,
    alignItems: "center",
    width: "100%",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    overflow: "hidden",
  },
  tabContentWrapper: {
    height: 64,
    position: "relative",
    marginTop: 4,
  },
  indicator: {
    position: "absolute",
    height: 52,
    top: 6,
    borderRadius: 24,
    zIndex: 0,
  },
  tabItemsContainer: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  tabItem: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    fontSize: 8,
    marginTop: 1,
    letterSpacing: 0.6,
  },
});
