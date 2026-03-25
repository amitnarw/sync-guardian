import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { NurturingHeader } from '@/components/ui/NurturingHeader';
import { ScreenWrapper } from '@/components/navigation/ScreenWrapper';

type NotifItem = {
  icon: string;
  iconColor: string;
  iconBg: string;
  title: string;
  time: string;
  body: string;
  cardClass?: string;
};

type Group = {
  label: string;
  dotColor: string;
  badge?: string;
  items: NotifItem[];
};

const groups: Group[] = [
  {
    label: 'Learning Journey',
    dotColor: 'bg-primary',
    badge: 'Just now',
    items: [
      {
        icon: 'school',
        iconColor: 'var(--primary)',
        iconBg: 'bg-primary/10',
        title: 'Duolingo ABC',
        time: '10:42 AM',
        body: 'Leo just completed "The Brave Lion" story! He earned 15 stars for perfect pronunciation.',
        cardClass: 'bg-white dark:bg-stone-900 shadow-sm',
      },
      {
        icon: 'palette',
        iconColor: 'var(--primary)',
        iconBg: 'bg-primary/10',
        title: 'Art Academy',
        time: '09:15 AM',
        body: 'A new masterpiece was saved to the gallery. "Sunset over Mountains" uses beautiful warm tones.',
        cardClass: 'bg-surface-container-low dark:bg-stone-800',
      },
    ],
  },
  {
    label: 'Care & Boundaries',
    dotColor: 'bg-secondary',
    items: [
      {
        icon: 'timer',
        iconColor: 'var(--secondary)',
        iconBg: 'bg-secondary/10',
        title: 'Screen Guardian',
        time: '08:00 AM',
        body: 'Morning focus time has ended. The tablet is now available for educational use.',
        cardClass: 'bg-white dark:bg-stone-900 shadow-sm border-l-4 border-secondary/20',
      },
      {
        icon: 'health_and_safety',
        iconColor: 'var(--secondary)',
        iconBg: 'bg-secondary/10',
        title: 'Digital Wellbeing',
        time: 'Yesterday',
        body: 'Weekly report is ready. Screen time decreased by 12% this week compared to last.',
        cardClass: 'bg-surface-container-high dark:bg-stone-800',
      },
    ],
  },
  {
    label: 'Shared Moments',
    dotColor: 'bg-tertiary',
    items: [
      {
        icon: 'group',
        iconColor: 'var(--tertiary)',
        iconBg: 'bg-tertiary-container/30',
        title: 'PlayGroup App',
        time: 'Yesterday',
        body: "The Friday Nature Walk has been confirmed. Don't forget sturdy boots for the children!",
        cardClass: 'bg-white dark:bg-stone-900 shadow-sm',
      },
    ],
  },
];

export default function NotificationsScreen() {
  return (
    <ScreenWrapper className="flex-1 bg-background dark:bg-stone-950">
      <SafeAreaView edges={['top']} className="flex-1">
        <NurturingHeader />
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero */}
          <View className="mb-8 text-center items-center pt-2">
            <ThemedText
              className="text-3xl font-extrabold tracking-tight text-on-surface mb-1"
              style={{ fontFamily: 'PlusJakartaSans-Bold' }}
            >
              Rhythm of the Day
            </ThemedText>
            <ThemedText className="text-on-surface-variant font-medium text-center">
              A gentle flow of your child's digital world
            </ThemedText>
          </View>

          {/* Notification Feed */}
          <View className="gap-8">
            {groups.map((group, gi) => (
              <View key={gi} className="gap-4">
                {/* Group header */}
                <View className="flex-row items-center justify-between px-1">
                  <View className="flex-row items-center gap-2">
                    <View className={`w-1.5 h-1.5 rounded-full ${group.dotColor}`} />
                    <ThemedText
                      className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60"
                      style={{ fontFamily: 'PlusJakartaSans-Bold' }}
                    >
                      {group.label}
                    </ThemedText>
                  </View>
                  {group.badge && (
                    <ThemedText className="text-xs font-semibold text-primary">{group.badge}</ThemedText>
                  )}
                </View>

                {/* Items */}
                {group.items.map((item, ii) => (
                  <TouchableOpacity
                    key={ii}
                    activeOpacity={0.8}
                    className={`${item.cardClass} rounded-card p-4 flex-row items-start gap-4`}
                  >
                    <View className={`w-12 h-12 rounded-full ${item.iconBg} items-center justify-center flex-shrink-0`}>
                      <IconSymbol name={item.icon as any} size={22} color={item.iconColor} />
                    </View>
                    <View className="flex-1">
                      <View className="flex-row justify-between items-baseline mb-1">
                        <ThemedText className="font-bold text-on-surface" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                          {item.title}
                        </ThemedText>
                        <ThemedText className="text-[10px] text-on-surface-variant opacity-50 font-bold uppercase">
                          {item.time}
                        </ThemedText>
                      </View>
                      <ThemedText className="text-on-surface-variant text-sm leading-relaxed">{item.body}</ThemedText>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScreenWrapper>
  );
}
