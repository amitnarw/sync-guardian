import React from 'react';
import { View } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { SanctuaryCard } from '@/components/ui/SanctuaryCard';
import { MainButton } from '@/components/ui/MainButton';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function SetupScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1 px-6">
        <View className="mt-10 mb-10">
          <ThemedText type="title">Setting up your Sanctuary</ThemedText>
          <ThemedText className="opacity-60 mt-2">Pair your first device to begin syncing.</ThemedText>
        </View>

        <View className="flex-1">
          <SanctuaryCard variant="low" className="items-center py-10 mb-10">
            <View className="w-[100px] h-[100px] rounded-full bg-primary/10 items-center justify-center mb-4">
              <IconSymbol name="paperplane.fill" size={48} color={theme.primary} />
            </View>
            <ThemedText type="subtitle" className="text-center">Searching for devices...</ThemedText>
            <ThemedText className="text-center opacity-70 px-5">
              Make sure the SyncGuardian app is open on your other devices.
            </ThemedText>
          </SanctuaryCard>

          <View className="gap-4">
            <ThemedText type="defaultSemiBold" className="opacity-50">Nearby Devices</ThemedText>
            <SanctuaryCard variant="highest" className="flex-row justify-between items-center p-5">
              <ThemedText>Leo's iPad Pro</ThemedText>
              <ThemedText type="link">Pair</ThemedText>
            </SanctuaryCard>
          </View>
        </View>

        <View className="mb-10 gap-5 items-center w-full">
          <MainButton label="Complete Setup" onPress={() => router.replace('/(tabs)')} />
          <ThemedText type="link" onPress={() => router.back()} className="mt-4 opacity-70">Back</ThemedText>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}
