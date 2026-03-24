import { Tabs } from 'expo-router';
import React from 'react';
import { BlurView } from 'expo-blur';
import { StyleSheet, View, Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: theme.icon,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: 'transparent',
          height: 80,
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 40,
          overflow: 'hidden',
        },
        tabBarBackground: () => (
          <BlurView
            intensity={80}
            tint={colorScheme === 'dark' ? 'dark' : 'light'}
            style={[
              StyleSheet.absoluteFill,
              {
                backgroundColor: colorScheme === 'dark' ? 'rgba(16, 14, 9, 0.7)' : 'rgba(255, 255, 255, 0.7)',
              },
            ]}
          />
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="dashboard" color={color} />,
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Activity',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="analytics" color={color} />,
        }}
      />
      <Tabs.Screen
        name="insights"
        options={{
          title: 'Insights',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="insights" color={color} />,
        }}
      />
      <Tabs.Screen
        name="rules"
        options={{
          title: 'Rules',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gavel" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="settings" color={color} />,
        }}
      />
    </Tabs>
  );
}
