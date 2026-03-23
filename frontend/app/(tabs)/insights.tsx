import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function InsightsScreen() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  const activityData = [40, 60, 30, 80, 50, 70, 45]; // Mock data for bar chart

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView edges={['top']} style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <ThemedText type="display">Family Rhythm</ThemedText>
            <ThemedText type="headline" style={styles.subtitle}>Insights from the last 7 days</ThemedText>
          </View>

          {/* Activity Chart */}
          <SanctuaryCard variant="low" style={styles.chartCard}>
            <ThemedText type="subtitle" style={styles.cardTitle}>Daily Activity</ThemedText>
            <View style={styles.chart}>
              {activityData.map((val, i) => (
                <View key={i} style={styles.chartBarContainer}>
                  <View style={[styles.chartBar, { height: val * 1.5, backgroundColor: theme.primaryContainer }]} />
                  <ThemedText style={styles.barLabel}>{['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}</ThemedText>
                </View>
              ))}
            </View>
          </SanctuaryCard>

          {/* Detailed Stats */}
          <View style={styles.statsGrid}>
            <SanctuaryCard variant="high" style={styles.statCard}>
              <ThemedText type="defaultSemiBold">Focus Time</ThemedText>
              <ThemedText type="title">18h 40m</ThemedText>
            </SanctuaryCard>
            <SanctuaryCard variant="high" style={styles.statCard}>
              <ThemedText type="defaultSemiBold">Social</ThemedText>
              <ThemedText type="title">4h 15m</ThemedText>
            </SanctuaryCard>
          </View>

          {/* Wellness Suggestions */}
          <ThemedText type="subtitle" style={styles.sectionTitle}>Digital Wellness</ThemedText>
          <SanctuaryCard variant="lowest" style={styles.tipCard}>
            <ThemedText type="defaultSemiBold" style={{ color: theme.secondary }}>Tip of the day</ThemedText>
            <ThemedText style={styles.tipText}>
              Setting a 'Digital Sunset' 30 minutes before bedtime can improve sleep quality for the whole family.
            </ThemedText>
          </SanctuaryCard>

          <View style={{ height: 120 }} />
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  header: {
    marginBottom: 32,
  },
  subtitle: {
    opacity: 0.7,
  },
  chartCard: {
    marginBottom: 24,
  },
  cardTitle: {
    marginBottom: 24,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 150,
    paddingHorizontal: 8,
  },
  chartBarContainer: {
    alignItems: 'center',
    gap: 8,
  },
  chartBar: {
    width: 24,
    borderRadius: 12,
  },
  barLabel: {
    fontSize: 12,
    opacity: 0.5,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 32,
  },
  statCard: {
    flex: 1,
    gap: 8,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  tipCard: {
    gap: 8,
    borderRightWidth: 4,
    borderRightColor: '#9f402d',
  },
  tipText: {
    lineHeight: 22,
    opacity: 0.8,
  },
});
