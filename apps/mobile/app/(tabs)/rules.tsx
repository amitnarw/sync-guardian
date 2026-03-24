import React, { useState } from 'react';
import { View, ScrollView, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { NurturingHeader } from '@/components/ui/NurturingHeader';
import { IconSymbol } from '@/components/ui/icon-symbol';

type RuleItem = {
  icon: string;
  iconColor: string;
  iconBg: string;
  title: string;
  desc: string;
};

const RULES: RuleItem[] = [
  { icon: 'bedtime', iconColor: 'var(--primary)', iconBg: 'bg-primary/10', title: 'Bedtime Mode', desc: 'Devices enter quiet mode at 8:00 PM' },
  { icon: 'school', iconColor: 'var(--primary)', iconBg: 'bg-primary/10', title: 'Study Focus', desc: 'Block entertainment apps 4–6 PM' },
  { icon: 'block', iconColor: 'var(--secondary)', iconBg: 'bg-secondary/10', title: 'Content Filter', desc: 'Safe-search enabled on all browsers' },
  { icon: 'location_on', iconColor: 'var(--secondary)', iconBg: 'bg-secondary/10', title: 'Location Sharing', desc: "Leo's location always visible to parents" },
  { icon: 'timer', iconColor: 'var(--tertiary)', iconBg: 'bg-tertiary-container', title: 'Daily Screen Limit', desc: 'Maximum 3 hours of recreational screen time' },
];

const SCHEDULES = [
  { icon: 'wb_sunny', color: 'var(--primary)', title: 'Morning Free Time', time: '7:00 AM – 8:00 AM', badge: 'Active', badgeBg: 'bg-primary/10', badgeText: 'text-primary' },
  { icon: 'nights_stay', color: 'var(--secondary)', title: 'Bedtime Restriction', time: '8:00 PM – 7:00 AM', badge: 'Scheduled', badgeBg: 'bg-secondary/10', badgeText: 'text-secondary' },
  { icon: 'weekend', color: 'var(--on-surface-variant)', title: 'Weekend Bonus Hour', time: 'Sat & Sun only', badge: 'Upcoming', badgeBg: 'bg-surface-container', badgeText: 'text-on-surface-variant' },
];

function RuleToggleRow({ rule }: { rule: RuleItem }) {
  const [enabled, setEnabled] = useState(true);
  return (
    <SanctuaryCard variant="lowest" className="p-4 mb-3">
      <View className="flex-row items-center gap-4">
        <View className={`w-12 h-12 rounded-full ${rule.iconBg} items-center justify-center flex-shrink-0`}>
          <IconSymbol name={rule.icon as any} size={22} color={rule.iconColor} />
        </View>
        <View className="flex-1">
          <ThemedText className="font-bold text-on-surface" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>{rule.title}</ThemedText>
          <ThemedText className="text-sm text-on-surface-variant">{rule.desc}</ThemedText>
        </View>
        <Switch
          value={enabled}
          onValueChange={setEnabled}
          trackColor={{ false: '#eae1d2', true: '#44674d' }}
          thumbColor="#ffffff"
        />
      </View>
    </SanctuaryCard>
  );
}

export default function RulesScreen() {
  return (
    <ThemedView className="flex-1 bg-background dark:bg-stone-950">
      <SafeAreaView edges={['top']} className="flex-1">
        <NurturingHeader />
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero */}
          <View className="items-center py-6 gap-2 mb-4">
            <ThemedText className="text-xs tracking-widest text-secondary uppercase font-semibold" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Digital Boundaries
            </ThemedText>
            <ThemedText className="text-4xl font-extrabold text-on-surface tracking-tight text-center" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
              Household Rules
            </ThemedText>
            <ThemedText className="text-on-surface-variant text-center max-w-xs">
              Gentle boundaries that nurture Leo's well-being and balance.
            </ThemedText>
          </View>

          {/* Rule Cards */}
          {RULES.map((rule, i) => (
            <RuleToggleRow key={i} rule={rule} />
          ))}

          {/* Add New Rule */}
          <TouchableOpacity
            activeOpacity={0.7}
            className="border-2 border-dashed border-outline-variant dark:border-stone-700 rounded-lg p-4 flex-row items-center justify-center gap-3 mb-8 mt-2 bg-surface-container dark:bg-stone-900"
          >
            <IconSymbol name="add_circle" size={22} color="var(--primary)" />
            <ThemedText className="font-semibold text-on-surface-variant">Add a New Rule</ThemedText>
          </TouchableOpacity>

          {/* Scheduled Boundaries */}
          <ThemedText className="text-lg font-bold text-on-surface mb-3 px-1" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
            Scheduled Boundaries
          </ThemedText>
          {SCHEDULES.map((s, i) => (
            <View key={i} className="bg-surface-container-low dark:bg-stone-900 rounded-lg p-4 flex-row items-center justify-between mb-3">
              <View className="flex-row items-center gap-3">
                <IconSymbol name={s.icon as any} size={22} color={s.color} />
                <View>
                  <ThemedText className="font-semibold text-sm text-on-surface" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>{s.title}</ThemedText>
                  <ThemedText className="text-xs text-on-surface-variant">{s.time}</ThemedText>
                </View>
              </View>
              <View className={`${s.badgeBg} px-3 py-1 rounded-full`}>
                <ThemedText className={`text-xs font-bold uppercase tracking-widest ${s.badgeText}`}>{s.badge}</ThemedText>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
