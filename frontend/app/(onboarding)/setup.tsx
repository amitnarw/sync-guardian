import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { PillButton } from '@/components/ui/PillButton';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function SetupScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <ThemedText type="title">Setting up your Sanctuary</ThemedText>
          <ThemedText style={styles.subtitle}>Pair your first device to begin syncing.</ThemedText>
        </View>

        <View style={styles.content}>
          <SanctuaryCard variant="low" style={styles.pairingCard}>
            <View style={styles.iconContainer}>
              <IconSymbol name="paperplane.fill" size={48} color={theme.primary} />
            </View>
            <ThemedText type="subtitle" style={styles.cardTitle}>Searching for devices...</ThemedText>
            <ThemedText style={styles.cardDesc}>
              Make sure the SyncGuardian app is open on your other devices.
            </ThemedText>
          </SanctuaryCard>

          <View style={styles.deviceList}>
            <ThemedText type="defaultSemiBold" style={styles.listTitle}>Nearby Devices</ThemedText>
            <SanctuaryCard variant="highest" style={styles.deviceItem}>
              <ThemedText>Leo's iPad Pro</ThemedText>
              <ThemedText type="link">Pair</ThemedText>
            </SanctuaryCard>
          </View>
        </View>

        <View style={styles.footer}>
          <PillButton title="Complete Setup" onPress={() => router.replace('/(tabs)')} />
          <ThemedText type="link" onPress={() => router.back()}>Back</ThemedText>
        </View>
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
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
  },
  subtitle: {
    opacity: 0.6,
    marginTop: 8,
  },
  content: {
    flex: 1,
  },
  pairingCard: {
    alignItems: 'center',
    paddingVertical: 40,
    gap: 16,
    marginBottom: 40,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'rgba(72, 103, 48, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    textAlign: 'center',
  },
  cardDesc: {
    textAlign: 'center',
    opacity: 0.7,
    paddingHorizontal: 20,
  },
  deviceList: {
    gap: 16,
  },
  listTitle: {
    opacity: 0.5,
  },
  deviceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  footer: {
    marginBottom: 40,
    gap: 20,
    alignItems: 'center',
  },
});
