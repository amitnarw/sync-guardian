import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { NurturingHeader } from '@/components/ui/NurturingHeader';
import { useThemeColor } from '@/hooks/use-theme-color';
import { ScreenWrapper } from '@/components/navigation/ScreenWrapper';
import { HearthBlob } from '@/components/ui/HearthBlob';

const CHILD_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCurR4XH40Z01u0tqCA7rmHjrvlhqSTCSbg__UGwkervZcTGQyoia3SYT_bqDvFo49SulW7S1IffaIa8F0yhbcuRDx79xMcdGTBwxwr4A_BTWHNdepu6KOnFdAJNz7vpsJaZXRfMCxW0V9J-2xrtoa8g6hVCclDBAKJlodGhGpaohP935-CNMpZUqGjuL0bRdPgij3YL821CeYi4U5msMqjc0OYzryW2-lcVN9XbaIuDn48kljO1I6z6vJEjKaZAHP5Z1G-_C-_FPk';

const apps = [
  { name: 'Khan Academy', time: '45m', icon: 'school', barColor: 'bg-primary', barWidth: '85%' as const, iconColor: 'var(--primary)' },
  { name: 'YouTube Kids', time: '20m', icon: 'smart_display', barColor: 'bg-secondary', barWidth: '40%' as const, iconColor: 'var(--secondary)' },
  { name: 'Duolingo', time: '15m', icon: 'translate', barColor: 'bg-primary', barWidth: '30%' as const, iconColor: 'var(--primary)' },
];

export default function DashboardScreen() {
  const primary = useThemeColor({}, 'primary');
  const tertiaryContainer = useThemeColor({}, 'primaryContainer'); // Approximate fixed-dim
  const secondary = useThemeColor({}, 'secondary');
  const onSurface = useThemeColor({}, 'onSurface');
  const surface = useThemeColor({}, 'surface');
  const background = useThemeColor({}, 'background');
  const onPrimary = useThemeColor({}, 'onPrimary');
  const onPrimaryContainer = useThemeColor({}, 'onPrimaryContainer');

  return (
    <ScreenWrapper style={{ backgroundColor: background }}>
      <SafeAreaView edges={['top']} className="flex-1">
        <NurturingHeader />
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Section */}
          <View style={{ paddingVertical: 32 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
              {/* Heart Blob Container — Reusable Component */}
              <HearthBlob 
                icon="verified_user"
                label="All is well"
              />
            </View>

            {/* Text Below Blob */}
            <ThemedText
              className="text-xs tracking-widest text-secondary uppercase font-semibold mb-2"
              style={{ fontFamily: 'PlusJakartaSans-Bold' }}
            >
              Morning, Sarah
            </ThemedText>
            <ThemedText
              className="text-on-surface leading-tight mb-2"
              style={{ fontFamily: 'PlusJakartaSans-Bold', fontSize: 40, lineHeight: 48 }}
            >
              Everything is{' '}
              <ThemedText style={{ color: primary, fontStyle: 'italic', fontSize: 40, fontFamily: 'PlusJakartaSans-Bold' }}>
                at peace
              </ThemedText>
              .
            </ThemedText>
            <ThemedText className="text-on-surface-variant text-base max-w-xs">
              Leo's digital environment is balanced. High focus levels detected during study hours.
            </ThemedText>
          </View>

          {/* Leo Status Card */}
          <SanctuaryCard variant="lowest" className="p-6 mb-4">
            <View className="items-center mb-4">
              <View className="relative">
                <View 
                  className="w-32 h-32 rounded-full border-4 p-1"
                  style={{ borderColor: '#d3fbda' }} // --tertiary-container for that light green ring
                >
                  <Image 
                    source={{ uri: CHILD_AVATAR }} 
                    className="w-full h-full rounded-full" 
                    resizeMode="cover" 
                  />
                </View>
                {/* Online indicator — Ring style from reference */}
                <View className="absolute bottom-1 right-1 w-8 h-8 bg-tertiary rounded-full border-4 border-surface items-center justify-center">
                  <View className="w-2 h-2 bg-surface rounded-full" />
                </View>
              </View>
            </View>
            <ThemedText className="text-center text-xl font-bold text-on-surface mb-1" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Leo is Online
            </ThemedText>
            <ThemedText className="text-center text-on-surface-variant mb-4">
              Currently using <ThemedText className="text-primary font-semibold">Khan Academy</ThemedText>
            </ThemedText>
            {/* Pill badges */}
            <View className="flex-row gap-3 justify-center mb-6">
              <View className="bg-surface-container-low dark:bg-stone-800 px-5 py-3 rounded-full flex-row items-center gap-2">
                <IconSymbol name="battery_charging_80" size={18} color="var(--primary)" />
                <ThemedText className="text-base font-medium text-on-surface">84%</ThemedText>
              </View>
              <View className="bg-surface-container-low dark:bg-stone-800 px-5 py-3 rounded-full flex-row items-center gap-2">
                <IconSymbol name="location_on" size={18} color="var(--primary)" />
                <ThemedText className="text-base font-medium text-on-surface">Home</ThemedText>
              </View>
            </View>
            {/* Harmony Sync */}
            <View className="border-t border-surface-variant pt-6 items-center">
              <ThemedText 
                className="text-6xl font-bold text-brand-accent" 
                style={{ fontFamily: 'PlusJakartaSans-Bold' }}
              >
                92%
              </ThemedText>
              <ThemedText className="text-[10px] tracking-widest uppercase text-on-surface-variant opacity-60 mt-1">
                Harmony Sync
              </ThemedText>
            </View>
          </SanctuaryCard>

          {/* Bedtime CTA Card */}
          <View 
            className="md:col-span-4 bg-primary rounded-card p-8 mb-4 min-h-[180px] flex flex-col justify-between shadow-lg shadow-primary/20"
          >
            <View>
              <IconSymbol name="auto_awesome" size={32} color={onPrimary} />
            </View>
            <View className="gap-2">
              <ThemedText 
                className="text-xl font-bold leading-tight"
                style={{ color: onPrimary, fontFamily: 'PlusJakartaSans-Bold' }}
              >
                Bedtime Routine starts in 2h
              </ThemedText>
              <ThemedText 
                className="text-sm font-medium"
                style={{ color: onPrimaryContainer, opacity: 0.8 }}
              >
                Devices will automatically enter Focus Mode at 8:00 PM.
              </ThemedText>
            </View>
          </View>

          {/* Most Active Apps */}
          <SanctuaryCard variant="low" className="p-6 mb-4">
            <View className="flex-row justify-between items-center mb-5">
              <ThemedText className="text-lg font-bold text-on-surface" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Most active apps</ThemedText>
              <ThemedText className="text-sm font-medium text-primary">View all</ThemedText>
            </View>
            <View className="gap-4">
              {apps.map((app, i) => (
                <View key={i} className="flex-row items-center gap-4">
                  <View className="w-12 h-12 bg-surface-container-highest dark:bg-stone-800 rounded-sm items-center justify-center">
                    <IconSymbol name={app.icon as any} size={22} color={app.iconColor} />
                  </View>
                  <View className="flex-1 gap-1">
                    <View className="flex-row justify-between">
                      <ThemedText className="text-sm font-bold">{app.name}</ThemedText>
                      <ThemedText className="text-sm text-on-surface-variant">{app.time}</ThemedText>
                    </View>
                    <View className="h-2 bg-surface-variant rounded-full overflow-hidden">
                      <View className={`h-full ${app.barColor} rounded-full`} style={{ width: app.barWidth }} />
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </SanctuaryCard>

          {/* Daily Insights Card */}
          <View className="bg-surface-container-highest dark:bg-stone-800 rounded-card p-6 relative overflow-hidden mb-4">
            {/* Ghost icon */}
            <View className="absolute right-4 top-4 opacity-20">
              <IconSymbol name="insights" size={80} color="var(--on-surface)" />
            </View>
            <View className="gap-3 relative z-10">
              <View className="bg-surface-container-highest dark:bg-stone-700 self-start px-3 py-1 rounded-full">
                <ThemedText className="text-[10px] font-bold uppercase tracking-tight text-on-surface-variant">Daily Insights</ThemedText>
              </View>
              <ThemedText className="text-2xl font-bold text-on-surface leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                Healthy Balance {'\n'}Achieved Today.
              </ThemedText>
              <ThemedText className="text-on-surface-variant text-sm">
                Educational content outpaced entertainment by 3:1 today. Great job guiding Leo's journey!
              </ThemedText>
              <TouchableOpacity className="bg-on-surface self-start px-6 py-3 rounded-button">
                <ThemedText style={{ color: background, fontFamily: 'PlusJakartaSans-Bold', fontSize: 13 }} className="font-bold text-sm">
                  Explore Detailed Insights
                </ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWrapper>
  );
}
