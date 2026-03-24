import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PillButton } from '@/components/ui/PillButton';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.textSection}>
            <ThemedText type="display" style={styles.title}>Your Digital{"\n"}Sanctuary</ThemedText>
            <ThemedText type="headline" style={styles.subtitle}>
              A calm, secure space for your family's digital life. Sync, protect, and thrive together.
            </ThemedText>
          </View>

          <View style={styles.buttonSection}>
            <PillButton 
              title="Begin Your Journey" 
              onPress={() => router.push('/(onboarding)/setup')} 
            />
            <ThemedText type="link" style={styles.signInLink} onPress={() => router.replace('/(tabs)')}>
              Already a Guardian? Sign in
            </ThemedText>
          </View>
        </View>
      </SafeAreaView>

      {/* Decorative Blobs */}
      <View style={[styles.blob, { top: -100, left: -100, backgroundColor: theme.primary, opacity: 0.1, width: width * 1.2, height: width * 1.2, borderRadius: width * 0.6 }]} />
      <View style={[styles.blob, { bottom: -50, right: -50, backgroundColor: theme.secondary, opacity: 0.05, width: width, height: width, borderRadius: width * 0.5 }]} />
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
  content: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'space-between',
    paddingBottom: 40,
    paddingTop: height * 0.1,
  },
  textSection: {
    gap: 24,
  },
  title: {
    fontSize: 48,
    lineHeight: 56,
  },
  subtitle: {
    opacity: 0.8,
    lineHeight: 28,
  },
  buttonSection: {
    gap: 20,
    alignItems: 'center',
  },
  signInLink: {
    marginTop: 8,
  },
  blob: {
    position: 'absolute',
    zIndex: -1,
  },
});
