import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MotiView } from 'moti';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function NotificationsScreen() {
  const alerts = [
    { id: '1', type: 'high', title: 'New App Installed', desc: 'TikTok was installed on Leo\'s iPad.', time: '10m ago', color: '#EF4444' },
    { id: '2', type: 'info', title: 'Daily Report', desc: 'Family screen time reduced by 12% today.', time: '2h ago', color: '#3B82F6' },
    { id: '3', type: 'safe', title: 'System Synced', desc: 'All devices are up to date and protected.', time: '4h ago', color: '#10B981' },
  ];

  return (
    <View className="flex-1 bg-[#F8FAFC] dark:bg-black">
      <SafeAreaView edges={['top']} className="flex-1">
        <ScrollView contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 40 }} showsVerticalScrollIndicator={false}>
          <MotiView
            from={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            className="mb-8"
          >
            <Text className="text-4xl font-bold text-black dark:text-white mb-2 font-[PlusJakartaSans-Bold]">Alerts</Text>
            <Text className="text-lg text-gray-500 dark:text-gray-400 font-[Manrope-Regular]">Staying in tune with your family</Text>
          </MotiView>

          {/* Mood Cloud */}
          <SanctuaryCard variant="highest" className="mb-8">
            <Text className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-tighter mb-1">Mood Cloud</Text>
            <Text className="text-3xl font-bold text-black dark:text-white mb-2 font-[PlusJakartaSans-Bold]">Balance Found</Text>
            <Text className="text-base text-gray-600 dark:text-gray-400 leading-relaxed font-[Manrope-Regular]">
              Digital activity is stabilizing. Educational apps are seeing 20% more engagement this morning.
            </Text>
          </SanctuaryCard>

          {/* Alert List */}
          <View className="gap-y-3">
            {alerts.map((alert, index) => (
              <MotiView
                key={alert.id}
                from={{ opacity: 0, translateX: -20 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ type: 'timing', duration: 400, delay: index * 100 }}
              >
                <SanctuaryCard variant="low" className="p-4">
                  <View className="flex-row gap-x-4">
                    <View className="w-1 rounded-full" style={{ backgroundColor: alert.color }} />
                    <View className="flex-1">
                      <View className="flex-row justify-between items-center mb-1">
                        <Text className="text-lg font-bold text-black dark:text-white font-[PlusJakartaSans-Bold]">{alert.title}</Text>
                        <Text className="text-xs text-gray-400 font-[Manrope-Regular]">{alert.time}</Text>
                      </View>
                      <Text className="text-sm text-gray-600 dark:text-gray-400 leading-snug font-[Manrope-Regular]">
                        {alert.desc}
                      </Text>
                    </View>
                  </View>
                </SanctuaryCard>
              </MotiView>
            ))}
          </View>

          <View className="h-[120]" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
