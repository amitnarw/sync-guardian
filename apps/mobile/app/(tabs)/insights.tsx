import React from 'react';
import { View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';

export default function InsightsScreen() {
  const activityData = [40, 60, 30, 80, 50, 70, 45]; // Mock data for bar chart

  return (
    <ThemedView className="flex-1">
      <SafeAreaView edges={['top']} className="flex-1">
        <ScrollView 
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 40 }} 
          showsVerticalScrollIndicator={false}
        >
          <View className="mb-8">
            <ThemedText type="display">Family Rhythm</ThemedText>
            <ThemedText type="headline" className="opacity-70">Insights from the last 7 days</ThemedText>
          </View>

          {/* Activity Chart */}
          <SanctuaryCard variant="low" className="mb-6">
            <ThemedText type="subtitle" className="mb-6">Daily Activity</ThemedText>
            <View className="flex-row items-end justify-between h-[150px] px-2">
              {activityData.map((val, i) => (
                <View key={i} className="items-center gap-2">
                  <View 
                    className="w-6 rounded-full bg-primary/40" 
                    style={{ height: val * 1.5 }} 
                  />
                  <ThemedText className="text-xs opacity-50">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                  </ThemedText>
                </View>
              ))}
            </View>
          </SanctuaryCard>

          {/* Detailed Stats */}
          <View className="flex-row gap-4 mb-8">
            <SanctuaryCard variant="high" className="flex-1 gap-2">
              <ThemedText type="defaultSemiBold">Focus Time</ThemedText>
              <ThemedText type="title">18h 40m</ThemedText>
            </SanctuaryCard>
            <SanctuaryCard variant="high" className="flex-1 gap-2">
              <ThemedText type="defaultSemiBold">Social</ThemedText>
              <ThemedText type="title">4h 15m</ThemedText>
            </SanctuaryCard>
          </View>

          {/* Wellness Suggestions */}
          <ThemedText type="subtitle" className="mb-4">Digital Wellness</ThemedText>
          <SanctuaryCard variant="lowest" className="gap-2 border-r-4 border-secondary">
            <ThemedText type="defaultSemiBold" className="text-secondary">Tip of the day</ThemedText>
            <ThemedText className="leading-snug opacity-80">
              Setting a 'Digital Sunset' 30 minutes before bedtime can improve sleep quality for the whole family.
            </ThemedText>
          </SanctuaryCard>

          <View className="h-[120px]" />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
