import React from 'react';
import { View, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PillButton } from '@/components/ui/PillButton';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const { width } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1">
        <View className="flex-1 px-8 justify-between pb-10 pt-[10vh]">
          <View className="gap-6">
            <ThemedText type="display" className="text-[48px] leading-[56px]">Your Digital{"\n"}Sanctuary</ThemedText>
            <ThemedText type="headline" className="opacity-80 leading-7">
              A calm, secure space for your family's digital life. Sync, protect, and thrive together.
            </ThemedText>
          </View>

          <View className="gap-5 items-center">
            <PillButton 
              title="Begin Your Journey" 
              onPress={() => router.push('/(onboarding)/setup')} 
            />
            <ThemedText type="link" className="mt-2" onPress={() => router.replace('/(tabs)')}>
              Already a Guardian? Sign in
            </ThemedText>
          </View>
        </View>
      </SafeAreaView>

      {/* Decorative Blobs */}
      <View 
        className="absolute -z-10 rounded-full" 
        style={{ 
          top: -100, 
          left: -100, 
          backgroundColor: theme.primary, 
          opacity: 0.1, 
          width: width * 1.2, 
          height: width * 1.2 
        }} 
      />
      <View 
        className="absolute -z-10 rounded-full" 
        style={{ 
          bottom: -50, 
          right: -50, 
          backgroundColor: theme.secondary, 
          opacity: 0.05, 
          width: width, 
          height: width 
        }} 
      />
    </ThemedView>
  );
}
