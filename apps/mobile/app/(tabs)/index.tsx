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

/**
 * HEARTH SHAPE — Dashboard blob
 * CSS: border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%
 * RN doesn't support elliptical radii, so we use the horizontal values.
 * For a 256px box: TL=60%→154, TR=40%→102, BR=30%→77, BL=70%→179
 */
const HEARTH_SIZE = 256;
const HEARTH_RADIUS = {
  borderTopLeftRadius: 154,
  borderTopRightRadius: 102,
  borderBottomRightRadius: 77,
  borderBottomLeftRadius: 179,
};


const CHILD_AVATAR = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCurR4XH40Z01u0tqCA7rmHjrvlhqSTCSbg__UGwkervZcTGQyoia3SYT_bqDvFo49SulW7S1IffaIa8F0yhbcuRDx79xMcdGTBwxwr4A_BTWHNdepu6KOnFdAJNz7vpsJaZXRfMCxW0V9J-2xrtoa8g6hVCclDBAKJlodGhGpaohP935-CNMpZUqGjuL0bRdPgij3YL821CeYi4U5msMqjc0OYzryW2-lcVN9XbaIuDn48kljO1I6z6vJEjKaZAHP5Z1G-_C-_FPk';

const apps = [
  { name: 'Khan Academy', time: '45m', icon: 'school', barColor: 'bg-primary', barWidth: '85%' as const, iconColor: 'var(--primary)' },
  { name: 'YouTube Kids', time: '20m', icon: 'smart_display', barColor: 'bg-secondary', barWidth: '40%' as const, iconColor: 'var(--secondary)' },
  { name: 'Duolingo', time: '15m', icon: 'translate', barColor: 'bg-primary', barWidth: '30%' as const, iconColor: 'var(--primary)' },
];

export default function DashboardScreen() {
  return (
    <ThemedView className="flex-1 bg-background dark:bg-stone-950">
      <SafeAreaView edges={['top']} className="flex-1">
        <NurturingHeader />
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 16, paddingBottom: 120 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero Section */}
          <View style={{ paddingVertical: 32 }}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginBottom: 32 }}>
              {/* Heart Blob Container */}
              <View style={{ width: HEARTH_SIZE, height: HEARTH_SIZE }}>
                {/* Ambient glow (bg-secondary/10 hearth-shape blur-3xl scale-125 translate-x-4 translate-y-4) */}
                <View
                  style={[
                    HEARTH_RADIUS,
                    {
                      position: 'absolute',
                      width: HEARTH_SIZE,
                      height: HEARTH_SIZE,
                      backgroundColor: 'rgba(160, 65, 45, 0.12)', // secondary/10
                      transform: [
                        { scale: 1.25 },
                        { translateX: 16 },
                        { translateY: 16 }
                      ],
                      // Rough equivalent of blur-3xl for the blob glow
                      shadowColor: '#a0412d',
                      shadowOffset: { width: 0, height: 0 },
                      shadowOpacity: 0.8,
                      shadowRadius: 40,
                    },
                  ]}
                />

                {/* Hearth blob — MotiView clips, LinearGradient fills */}
                <MotiView
                  from={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', duration: 800 }}
                  style={[
                    HEARTH_RADIUS,
                    {
                      width: HEARTH_SIZE,
                      height: HEARTH_SIZE,
                      overflow: 'hidden',
                      // shadow-2xl shadow-primary/20
                      shadowColor: '#44674d',
                      shadowOffset: { width: 0, height: 24 },
                      shadowOpacity: 0.22,
                      shadowRadius: 36,
                      elevation: 16,
                      backgroundColor: '#44674d',
                    },
                  ]}
                >
                  <LinearGradient
                    colors={['#44674d', '#c5eccc']} // tertiary-fixed-dim = #c5eccc
                    start={{ x: 0, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    style={StyleSheet.absoluteFillObject}
                  />
                  {/* Content centred inside */}
                  <View style={[
                    StyleSheet.absoluteFillObject,
                    { alignItems: 'center', justifyContent: 'center', gap: 6 },
                  ]}>
                    <IconSymbol 
                      name="checkmark.shield.fill" 
                      size={52} 
                      color="white" 
                    />
                    <ThemedText style={{
                      color: 'white',
                      fontFamily: 'PlusJakartaSans-Bold',
                      fontSize: 20,
                      lineHeight: 24,
                    }}>
                      All is well
                    </ThemedText>
                  </View>
                </MotiView>
              </View>
            </View>

            {/* Text Below Blob */}
            <ThemedText
              className="text-xs tracking-widest text-secondary uppercase font-semibold mb-2"
              style={{ fontFamily: 'PlusJakartaSans-Bold' }}
            >
              Morning, Sarah
            </ThemedText>
            <ThemedText
              className="text-on-surface dark:text-[#F5EDE0] leading-tight mb-2"
              style={{ fontFamily: 'PlusJakartaSans-Bold', fontSize: 40, lineHeight: 48 }}
            >
              Everything is{' '}
              <ThemedText style={{ color: '#44674d', fontStyle: 'italic', fontSize: 40, fontFamily: 'PlusJakartaSans-Bold' }}>
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
                <View className="w-24 h-24 rounded-full border-4 border-primary-container overflow-hidden">
                  <Image source={{ uri: CHILD_AVATAR }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                </View>
                {/* Online dot */}
                <View className="absolute bottom-0 right-0 w-6 h-6 bg-primary rounded-full border-2 border-white items-center justify-center">
                  <View className="w-2 h-2 bg-white rounded-full" />
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
            <View className="flex-row gap-3 justify-center mb-4">
              <View className="bg-surface-container dark:bg-stone-800 px-4 py-2 rounded-full flex-row items-center gap-2">
                <IconSymbol name="battery_charging_80" size={16} color="var(--primary)" />
                <ThemedText className="text-sm font-medium">84%</ThemedText>
              </View>
              <View className="bg-surface-container dark:bg-stone-800 px-4 py-2 rounded-full flex-row items-center gap-2">
                <IconSymbol name="location_on" size={16} color="var(--primary)" />
                <ThemedText className="text-sm font-medium">Home</ThemedText>
              </View>
            </View>
            {/* Harmony Sync */}
            <View className="border-t border-surface-variant pt-4 items-center">
              <ThemedText className="text-4xl font-extrabold text-secondary" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>92%</ThemedText>
              <ThemedText className="text-[10px] tracking-widest uppercase text-on-surface-variant opacity-60">Harmony Sync</ThemedText>
            </View>
          </SanctuaryCard>

          {/* Bedtime CTA Card */}
          <View className="bg-primary rounded-lg p-6 mb-4 gap-3">
            <IconSymbol name="auto_awesome" size={28} color="white" />
            <ThemedText style={{ color: 'white', fontFamily: 'PlusJakartaSans-Bold', fontSize: 18, lineHeight: 24 }}>
              Bedtime Routine starts in 2h
            </ThemedText>
            <ThemedText style={{ color: '#c5eccc', fontSize: 13 }}>
              Devices will automatically enter Focus Mode at 8:00 PM.
            </ThemedText>
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
                  <View className="w-12 h-12 bg-surface-container-highest dark:bg-stone-800 rounded-lg items-center justify-center">
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
          <View className="bg-surface-container-highest dark:bg-stone-800 rounded-lg p-6 relative overflow-hidden mb-4">
            {/* Ghost icon */}
            <View className="absolute right-4 top-4 opacity-20">
              <IconSymbol name="insights" size={80} color="var(--on-surface)" />
            </View>
            <View className="gap-3 relative z-10">
              <View className="bg-white dark:bg-stone-700 self-start px-3 py-1 rounded-full">
                <ThemedText className="text-[10px] font-bold uppercase tracking-tight text-on-surface-variant">Daily Insights</ThemedText>
              </View>
              <ThemedText className="text-2xl font-bold text-on-surface leading-tight" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
                Healthy Balance {'\n'}Achieved Today.
              </ThemedText>
              <ThemedText className="text-on-surface-variant text-sm">
                Educational content outpaced entertainment by 3:1 today. Great job guiding Leo's journey!
              </ThemedText>
              <TouchableOpacity className="bg-on-surface dark:bg-[#F5EDE0] self-start px-6 py-3 rounded-full">
                <ThemedText style={{ color: '#fff8f0', fontFamily: 'PlusJakartaSans-Bold', fontSize: 13 }} className="dark:text-stone-900 font-bold text-sm">
                  Explore Detailed Insights
                </ThemedText>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
