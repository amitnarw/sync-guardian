import React from 'react';
import { View, ScrollView, Dimensions, Text } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { PillButton } from '@/components/ui/PillButton';
import { IconSymbol } from '@/components/ui/icon-symbol';

const { width } = Dimensions.get('window');

export default function DashboardScreen() {
  return (
    <View className="flex-1 bg-[#F8FAFC] dark:bg-black">
      <SafeAreaView edges={['top']} className="flex-1">
        <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 40 }} showsVerticalScrollIndicator={false}>
          {/* Header Section */}
          <MotiView 
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ type: 'timing', duration: 600 }}
            className="mb-10"
          >
            <Text className="text-5xl font-bold text-black dark:text-white mb-2 font-[PlusJakartaSans-Bold]">
              Everything is{"\n"}at peace
            </Text>
            <Text className="text-xl text-gray-500 dark:text-gray-400 font-[Manrope-Regular]">
              All systems synced & secure
            </Text>
          </MotiView>

          {/* Progress Orbs (Signature Component) */}
          <View className="items-center justify-center mb-10 h-[260]">
            <MotiView
              from={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.1 }}
              transition={{ type: 'spring', damping: 20 }}
              className="absolute w-[280] h-[280] border-[20px] border-emerald-500 rounded-full"
            />
            <MotiView
              from={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 15, delay: 200 }}
              className="absolute w-[200] h-[200] border-[12px] border-emerald-600 rounded-full items-center justify-center bg-white dark:bg-zinc-900 shadow-xl"
            >
              <Text className="text-5xl font-bold text-emerald-600">98%</Text>
              <Text className="text-xs font-bold tracking-widest text-emerald-700/60 uppercase">Synced</Text>
            </MotiView>
          </View>

          {/* Action Cards */}
          <View className="gap-y-4">
            <SanctuaryCard variant="low">
              <View className="flex-row items-center gap-x-4 mb-4">
                <View className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 items-center justify-center">
                  <IconSymbol name="house.fill" size={24} color="#10B981" />
                </View>
                <Text className="text-xl font-bold text-black dark:text-white font-[PlusJakartaSans-Bold]">Guardian Status</Text>
              </View>
              <Text className="text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed font-[Manrope-Regular]">
                Active scanning is protecting 3 devices and 12 applications across your family group.
              </Text>
              <PillButton title="View Details" onPress={() => {}} className="self-start" />
            </SanctuaryCard>

            <View className="flex-row gap-x-4">
              <SanctuaryCard variant="high" className="flex-1 p-5 gap-y-1">
                <Text className="text-sm font-semibold text-gray-500 uppercase tracking-tighter">Activity</Text>
                <Text className="text-3xl font-bold text-emerald-600">2.4h</Text>
                <Text className="text-xs text-gray-400 font-[Manrope-Regular]">Screen Time</Text>
              </SanctuaryCard>

              <SanctuaryCard variant="highest" className="flex-1 p-5 gap-y-1">
                <Text className="text-sm font-semibold text-gray-500 uppercase tracking-tighter">Health</Text>
                <Text className="text-3xl font-bold text-blue-500">Good</Text>
                <Text className="text-xs text-gray-400 font-[Manrope-Regular]">Sync Quality</Text>
              </SanctuaryCard>
            </View>

            <SanctuaryCard variant="lowest" className="border-l-4 border-emerald-800">
              <Text className="text-xl font-bold text-black dark:text-white font-[PlusJakartaSans-Bold] mb-2">Digital Ritual</Text>
              <Text className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-[Manrope-Regular]">
                "Rhythm of the Day" is active. Focus sessions ending in 15 minutes.
              </Text>
            </SanctuaryCard>
          </View>

          {/* Bottom Padding for Floating Tab Bar */}
          <View className="h-[120]" />
        </ScrollView>
      </SafeAreaView>
      
      {/* Background Organic Shapes */}
      <View className="absolute top-[-100] right-[-100] w-[400] h-[400] rounded-full bg-emerald-100/20 dark:bg-emerald-950/20 -z-10" />
      <View className="absolute bottom-[100] left-[-150] w-[400] h-[400] rounded-full bg-blue-100/10 dark:bg-blue-950/10 -z-10" />
    </View>
  );
}
