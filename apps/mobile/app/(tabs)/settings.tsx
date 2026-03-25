import React, { useState } from 'react';
import { View, ScrollView, Image, Switch, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { NurturingHeader } from '@/components/ui/NurturingHeader';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { ScreenWrapper } from '@/components/navigation/ScreenWrapper';

const PARENT_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPQb5lxw9FNMopXWtHzS7ezCTLNjhGt08cTzxTy-qMiB5S2JfxBi1zpoU1o99jwkynaervk8ELraHHm59-SZvAIX1t5h8H33E_VLB7tP-V1xk6T7LagW1NxohbtIunWLLsatgNSAzy3f-IAWpFAYJ4BELE-bPyEWJlU4pZIN3yiRar5WIxE6HygejNyCPysMmCc8x7iG6YIjILAEW5ToClbbs_e_d7xs9muLUcztGqtZH_9b-dxRpcTTDB-aHEviczH2evXv7nX5A';
const CHILD_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCurR4XH40Z01u0tqCA7rmHjrvlhqSTCSbg__UGwkervZcTGQyoia3SYT_bqDvFo49SulW7S1IffaIa8F0yhbcuRDx79xMcdGTBwxwr4A_BTWHNdepu6KOnFdAJNz7vpsJaZXRfMCxW0V9J-2xrtoa8g6hVCclDBAKJlodGhGpaohP935-CNMpZUqGjuL0bRdPgij3YL821CeYi4U5msMqjc0OYzryW2-lcVN9XbaIuDn48kljO1I6z6vJEjKaZAHP5Z1G-_C-_FPk';

type SettingRow =
  | { kind: 'toggle'; icon: string; iconColor: string; label: string; defaultOn: boolean }
  | { kind: 'value'; icon: string; iconColor: string; label: string; value: string }
  | { kind: 'chevron'; icon: string; iconColor: string; label: string; danger?: boolean };

type Section = { heading: string; rows: SettingRow[] };

const SECTIONS: Section[] = [
  {
    heading: 'Appearance',
    rows: [
      { kind: 'toggle', icon: 'dark_mode', iconColor: 'var(--primary)', label: 'Dark Mode', defaultOn: false },
      { kind: 'value', icon: 'text_fields', iconColor: 'var(--primary)', label: 'Font Size', value: 'Medium' },
    ],
  },
  {
    heading: 'Notifications',
    rows: [
      { kind: 'toggle', icon: 'notifications', iconColor: 'var(--primary)', label: 'Push Notifications', defaultOn: true },
      { kind: 'toggle', icon: 'volume_up', iconColor: 'var(--primary)', label: 'Alert Sounds', defaultOn: true },
      { kind: 'toggle', icon: 'do_not_disturb_on', iconColor: 'var(--secondary)', label: 'Do Not Disturb', defaultOn: false },
    ],
  },
  {
    heading: 'Privacy & Security',
    rows: [
      { kind: 'chevron', icon: 'lock', iconColor: 'var(--primary)', label: 'Change PIN' },
      { kind: 'toggle', icon: 'fingerprint', iconColor: 'var(--primary)', label: 'Biometric Login', defaultOn: true },
      { kind: 'value', icon: 'privacy_tip', iconColor: 'var(--on-surface-variant)', label: 'Data Sharing', value: 'Minimal' },
    ],
  },
  {
    heading: 'About',
    rows: [
      { kind: 'value', icon: 'info', iconColor: 'var(--on-surface-variant)', label: 'App Version', value: '2.4.1' },
      { kind: 'chevron', icon: 'description', iconColor: 'var(--on-surface-variant)', label: 'Privacy Policy' },
      { kind: 'chevron', icon: 'logout', iconColor: 'var(--secondary)', label: 'Sign Out', danger: true },
    ],
  },
];

function ToggleRow({ row }: { row: Extract<SettingRow, { kind: 'toggle' }> }) {
  const [val, setVal] = useState(row.defaultOn);
  return (
    <View className="flex-row items-center justify-between px-4 py-3">
      <View className="flex-row items-center gap-3">
        <IconSymbol name={row.icon as any} size={20} color={row.iconColor} />
        <ThemedText className="font-medium text-on-surface">{row.label}</ThemedText>
      </View>
      <Switch value={val} onValueChange={setVal} trackColor={{ false: '#eae1d2', true: '#44674d' }} thumbColor="#ffffff" />
    </View>
  );
}

export default function SettingsScreen() {
  return (
    <ScreenWrapper className="flex-1 bg-background dark:bg-stone-950">
      <SafeAreaView edges={['top']} className="flex-1">
        <NurturingHeader />
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Parent Profile Card */}
          <SanctuaryCard variant="lowest" className="p-5 mb-4">
            <View className="flex-row items-center gap-4">
              <View className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary-container flex-shrink-0">
                <Image source={{ uri: PARENT_AVATAR }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
              </View>
              <View className="flex-1">
                <ThemedText className="text-xl font-bold text-on-surface" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Sarah Mitchell</ThemedText>
                <ThemedText className="text-sm text-on-surface-variant">sarah@family.home</ThemedText>
                <View className="bg-primary/10 self-start px-3 py-1 rounded-full mt-2">
                  <ThemedText className="text-xs font-bold uppercase tracking-widest text-primary">Parent Account</ThemedText>
                </View>
              </View>
              <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full bg-surface-container dark:bg-stone-800">
                <IconSymbol name="edit" size={18} color="var(--on-surface-variant)" />
              </TouchableOpacity>
            </View>
          </SanctuaryCard>

          {/* Child Profile Card */}
          <View className="bg-surface-container dark:bg-stone-800 rounded-card p-4 flex-row items-center gap-4 mb-4">
            <View className="relative flex-shrink-0">
              <View className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary-container">
                <Image source={{ uri: CHILD_AVATAR }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
              </View>
              <View className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full border-2 border-surface-container" />
            </View>
            <View className="flex-1">
              <ThemedText className="font-bold text-on-surface" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>Leo</ThemedText>
              <ThemedText className="text-xs text-on-surface-variant">Age 8 · iPad Mini</ThemedText>
            </View>
            <TouchableOpacity>
              <ThemedText className="text-sm font-semibold text-primary">Manage</ThemedText>
            </TouchableOpacity>
          </View>

          {/* Harmony Score Widget */}
          <View className="bg-primary rounded-card p-6 flex-row items-center justify-between mb-6 overflow-hidden">
            <View className="gap-1">
              <ThemedText style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, letterSpacing: 1.5, fontFamily: 'PlusJakartaSans-Bold' }}>
                FAMILY HARMONY SCORE
              </ThemedText>
              <ThemedText style={{ color: 'white', fontSize: 40, fontFamily: 'PlusJakartaSans-Bold' }}>92%</ThemedText>
              <ThemedText style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13 }}>Your household is beautifully in sync.</ThemedText>
            </View>
            <View className="opacity-30">
              <IconSymbol name="favorite" size={72} color="white" />
            </View>
          </View>

          {/* Settings Sections */}
          {SECTIONS.map((section, si) => (
            <View key={si} className="mb-6">
              <ThemedText className="text-xs font-bold uppercase tracking-widest text-on-surface-variant opacity-60 px-2 mb-2" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                {section.heading}
              </ThemedText>
              <View className="bg-surface-container-lowest dark:bg-stone-900 rounded-card overflow-hidden shadow-sm divide-y divide-surface-variant dark:divide-stone-800">
                {section.rows.map((row, ri) => (
                  <View key={ri}>
                    {row.kind === 'toggle' && <ToggleRow row={row} />}
                    {row.kind === 'value' && (
                      <TouchableOpacity activeOpacity={0.7} className="flex-row items-center justify-between px-4 py-3">
                        <View className="flex-row items-center gap-3">
                          <IconSymbol name={row.icon as any} size={20} color={row.iconColor} />
                          <ThemedText className="font-medium text-on-surface">{row.label}</ThemedText>
                        </View>
                        <View className="flex-row items-center gap-1">
                          <ThemedText className="text-sm text-on-surface-variant">{row.value}</ThemedText>
                          <IconSymbol name="chevron_right" size={18} color="var(--on-surface-variant)" />
                        </View>
                      </TouchableOpacity>
                    )}
                    {row.kind === 'chevron' && (
                      <TouchableOpacity activeOpacity={0.7} className="flex-row items-center justify-between px-4 py-3">
                        <View className="flex-row items-center gap-3">
                          <IconSymbol name={row.icon as any} size={20} color={row.iconColor} />
                          <ThemedText className={`font-medium ${row.danger ? 'text-secondary' : 'text-on-surface'}`}>{row.label}</ThemedText>
                        </View>
                        <IconSymbol name="chevron_right" size={18} color="var(--on-surface-variant)" />
                      </TouchableOpacity>
                    )}
                  </View>
                ))}
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </ScreenWrapper>
  );
}
