import React from 'react';
import { View, ScrollView, Dimensions, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { LinearGradient } from 'expo-linear-gradient';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { NurturingHeader } from '@/components/ui/NurturingHeader';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ScreenWrapper } from '@/components/navigation/ScreenWrapper';
import { HearthBlob } from '@/components/ui/HearthBlob';

const BAR_HEIGHTS = [0.17, 0.08, 0.13, 0.25, 0.42, 0.67, 1, 0.83, 0.58, 0.42, 0.5, 0.67, 0.92, 0.67, 0.33, 0.5, 0.83, 0.58, 0.42, 0.33, 0.17, 0.25, 0.13, 0.08];
const FOCUS_BARS = [0.5, 0.67, 0.75, 0.5, 1, 0.67, 0.5];
const NURTURED_APPS = [
  { icon: 'menu_book', label: 'Learning Portal', time: '2h 14m today', bg: 'bg-primary-container', color: 'var(--primary)' },
  { icon: 'palette', label: 'Creative Studio', time: '1h 45m today', bg: 'bg-secondary-container', color: 'var(--secondary)' },
  { icon: 'mindfulness', label: 'Quiet Space', time: '48m today', bg: 'bg-tertiary-container', color: 'var(--tertiary)' },
];

export default function InsightsScreen() {
  const { width } = Dimensions.get('window');
  const heatmapBarW = Math.floor((width - 48 - 23) / 24);

  return (
    <ScreenWrapper className="bg-background dark:bg-stone-950">
      <SafeAreaView edges={['top']} className="flex-1">
        <NurturingHeader />
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero */}
          <View className="py-6 items-center gap-4 mb-4">
            <ThemedText className="text-xs tracking-widest text-secondary uppercase font-semibold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Your Perspective
            </ThemedText>
            <ThemedText className="text-on-background text-center leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold', fontSize: 36, lineHeight: 42 }}>
              Weekly Rhythm
            </ThemedText>
            <ThemedText className="text-on-surface-variant text-center text-base max-w-xs">
              A gentle reflection of digital habits and mindful connections over the last seven days.
            </ThemedText>

            {/* Hearth Blob Container — Reusable Component */}
            <HearthBlob 
              icon="eco"
              value="84%"
              label="CALM ALIGNMENT"
            />
          </View>

          {/* Calm Focus Card */}
          <SanctuaryCard variant="lowest" className="p-6 mb-4 overflow-hidden relative">
            {/* Accent blob */}
            <View className="absolute -right-12 -top-12 w-48 h-48 bg-tertiary-container/30 rounded-full" />
            <View className="relative z-10">
              <ThemedText className="text-lg font-bold text-on-surface mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                Calm Focus Observed
              </ThemedText>
              <ThemedText className="text-on-surface-variant leading-relaxed text-sm">
                There was a significant 12% increase in uninterrupted focus sessions between 4 PM and 7 PM. The household atmosphere felt particularly grounded.
              </ThemedText>
            </View>
            {/* Mini bar chart */}
            <View className="flex-row items-end gap-2 mt-6" style={{ height: 80 }}>
              {FOCUS_BARS.map((h, i) => (
                <MotiView
                  key={i}
                  from={{ height: 0 }}
                  animate={{ height: h * 80 }}
                  transition={{ type: 'spring', delay: i * 60 }}
                  className="flex-1 bg-primary/40 rounded-t-full"
                  style={{ opacity: 0.3 + h * 0.7 }}
                />
              ))}
            </View>
          </SanctuaryCard>

          {/* Gentle Notifications radial */}
          <SanctuaryCard variant="high" className="p-6 mb-4 items-center">
            <ThemedText className="text-lg font-bold text-on-surface mb-5" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Gentle Notifications
            </ThemedText>
            {/* Pure-RN radial arc: two half-circle masks */}
            <View style={{ width: 144, height: 144, position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
              {/* Track ring */}
              <View style={{
                position: 'absolute', width: 144, height: 144,
                borderRadius: 72, borderWidth: 10,
                borderColor: '#f5ede0',
              }} />
              {/* Progress: ~57% (120/283 ≈ 42% empty → 58% filled) */}
                  <View style={{ position: 'absolute', width: 144, height: 144, overflow: 'hidden' }}>
                    <View 
                      className="border-brand-accent"
                      style={{
                        width: 144, height: 144, borderRadius: 72,
                        borderWidth: 10,
                        borderRightColor: 'transparent', borderBottomColor: 'transparent',
                        transform: [{ rotate: '-45deg' }],
                      }} 
                    />
                  </View>
                  {/* Right half mask (covers right side partially) */}
                  <View style={{ position: 'absolute', width: 72, height: 144, right: 0, overflow: 'hidden' }}>
                    <View 
                      className="border-brand-accent"
                      style={{
                        width: 144, height: 144, borderRadius: 72,
                        borderWidth: 10,
                        borderLeftColor: 'transparent', borderTopColor: 'transparent',
                        transform: [{ rotate: '0deg' }],
                      }} 
                    />
                  </View>
              <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                <ThemedText className="text-2xl font-bold text-on-surface" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>42</ThemedText>
                <ThemedText className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Daily Avg</ThemedText>
              </View>
            </View>
            <ThemedText className="mt-5 text-sm text-on-surface-variant italic text-center">
              "30% fewer than last week's peaks."
            </ThemedText>
          </SanctuaryCard>

          {/* Daily Energy Flow Heatmap */}
          <SanctuaryCard variant="low" className="p-6 mb-4">
            <View className="flex-row justify-between items-end mb-5">
              <View>
                <ThemedText className="text-lg font-bold text-on-surface" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Daily Energy Flow</ThemedText>
                <ThemedText className="text-sm text-on-surface-variant">Activity intensity by time of day</ThemedText>
              </View>
              <View className="flex-row gap-2">
                <View className="w-3 h-3 rounded-full bg-primary" />
                <View className="w-3 h-3 rounded-full bg-primary opacity-60" />
                <View className="w-3 h-3 rounded-full bg-primary opacity-20" />
              </View>
            </View>
            {/* Heatmap bars */}
            <View className="flex-row items-end" style={{ height: 72, gap: 2 }}>
              {BAR_HEIGHTS.map((h, i) => {
                const opacity = Math.max(0.05, h);
                const isSecondary = i === 16;
                return (
                  <View
                    key={i}
                    className={isSecondary ? "bg-brand-accent" : "bg-tertiary"}
                    style={{ flex: 1, height: h * 72, borderRadius: 2, opacity }}
                  />
                );
              })}
            </View>
            <View className="flex-row justify-between mt-2 px-0.5">
              {['12am', '6am', '12pm', '6pm', '12am'].map((l, i) => (
                <ThemedText key={`${l}-${i}`} className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">{l}</ThemedText>
              ))}
            </View>
          </SanctuaryCard>

          {/* Nurtured Apps */}
          <View className="gap-3">
            <ThemedText className="text-lg font-bold text-on-surface px-1" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Nurtured Apps</ThemedText>
            {NURTURED_APPS.map((app, i) => (
              <SanctuaryCard key={i} variant="lowest" className="p-4 flex-row items-center gap-4">
                <View className={`w-12 h-12 ${app.bg} rounded-sm items-center justify-center`}>
                  <IconSymbol name={app.icon as any} size={22} color={app.color} />
                </View>
                <View>
                  <ThemedText className="font-bold text-sm text-on-surface" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>{app.label}</ThemedText>
                  <ThemedText className="text-xs text-on-surface-variant">{app.time}</ThemedText>
                </View>
              </SanctuaryCard>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWrapper>
  );
}
