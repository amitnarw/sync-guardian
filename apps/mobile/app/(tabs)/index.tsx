import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { PillButton } from '@/components/ui/PillButton';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function DashboardScreen() {
  return (
    <ThemedView className="flex-1">
      <SafeAreaView edges={['top']} className="flex-1">
        <ScrollView 
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 40 }} 
          showsVerticalScrollIndicator={false}
        >
          {/* Header Section */}
          <MotiView 
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 600 }}
            className="mb-10"
          >
            <ThemedText className="text-5xl font-display mb-2">
              Everything is{"\n"}at peace
            </ThemedText>
            <ThemedText className="text-xl opacity-60 font-body">
              All systems synced & secure
            </ThemedText>
          </MotiView>

          {/* Progress Orbs (Signature Component) */}
          <View className="items-center justify-center mb-10 h-[260px]">
            <MotiView
              from={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute w-[280px] h-[280px] border-[20px] border-primary rounded-full"
            />
            <MotiView
              from={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 15, delay: 200 }}
              className="absolute w-[200px] h-[200px] border-[12px] border-primary rounded-full items-center justify-center bg-surface shadow-xl"
            >
              <ThemedText className="text-5xl font-display text-primary">98%</ThemedText>
              <ThemedText className="text-xs font-display tracking-widest text-primary/60 uppercase">Synced</ThemedText>
            </MotiView>
          </View>

          {/* Action Cards */}
          <View className="gap-y-4">
            <SanctuaryCard variant="low">
              <View className="flex-row items-center gap-x-4 mb-4">
                <View className="w-12 h-12 rounded-full bg-primary/10 items-center justify-center">
                  <IconSymbol name="house.fill" size={24} color="var(--primary)" />
                </View>
                <ThemedText type="subtitle">Guardian Status</ThemedText>
              </View>
              <ThemedText className="mb-6 leading-relaxed opacity-70">
                Active scanning is protecting 3 devices and 12 applications across your family group.
              </ThemedText>
              <PillButton title="View Details" onPress={() => {}} className="self-start" />
            </SanctuaryCard>

            <View className="flex-row gap-x-4">
              <SanctuaryCard variant="high" className="flex-1 p-5 gap-y-1">
                <ThemedText className="text-sm font-semibold opacity-50 uppercase tracking-tighter">Activity</ThemedText>
                <ThemedText className="text-3xl font-display text-primary">2.4h</ThemedText>
                <ThemedText className="text-xs opacity-50">Screen Time</ThemedText>
              </SanctuaryCard>

              <SanctuaryCard variant="highest" className="flex-1 p-5 gap-y-1">
                <ThemedText className="text-sm font-semibold opacity-50 uppercase tracking-tighter">Health</ThemedText>
                <ThemedText className="text-3xl font-display text-secondary">Good</ThemedText>
                <ThemedText className="text-xs opacity-50">Sync Quality</ThemedText>
              </SanctuaryCard>
            </View>

            <SanctuaryCard variant="lowest" className="border-l-4 border-primary">
              <ThemedText type="subtitle" className="mb-2">Digital Ritual</ThemedText>
              <ThemedText className="leading-relaxed opacity-70">
                "Rhythm of the Day" is active. Focus sessions ending in 15 minutes.
              </ThemedText>
            </SanctuaryCard>
          </View>

          {/* Bottom Padding for Floating Tab Bar */}
          <View className="h-[120px]" />
        </ScrollView>
      </SafeAreaView>
      
      {/* Background Organic Shapes */}
      <View className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-primary/5 -z-10" />
      <View className="absolute bottom-[100px] left-[-150px] w-[400px] h-[400px] rounded-full bg-secondary/5 -z-10" />
    </ThemedView>
  );
}
