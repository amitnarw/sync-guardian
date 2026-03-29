import React from 'react';
import { View, Dimensions, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { MainButton } from '@/components/ui/MainButton';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors, Fonts } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const { width, height } = Dimensions.get('window');

export default function WelcomeScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme ?? 'light'];

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1">
        {/* Header / Brand */}
        <View className="w-full px-6 pt-4">
          <View className="flex-row items-center gap-2">
            {/* Hearth Shape Logo */}
            <View 
              className="w-10 h-10 rounded-[42%] items-center justify-center shadow-sm"
              style={{ 
                backgroundColor: theme.primary,
                borderTopLeftRadius: '45%',
                borderTopRightRadius: '55%',
                borderBottomLeftRadius: '55%',
                borderBottomRightRadius: '45%',
              }}
            >
              <IconSymbol name="spa" size={24} color={theme.onPrimary} />
            </View>
            <ThemedText 
              className="text-xl font-bold tracking-tight" 
              style={{ fontFamily: Fonts.display, color: theme.primary }}
            >
              Nurturing Atelier
            </ThemedText>
          </View>
        </View>

        {/* Main Content */}
        <View className="flex-1 px-6 py-8 justify-between">
          {/* Hero Visual Section */}
          <View className="items-center justify-center my-6">
            {/* Decorative Blobs */}
            <View 
              className="absolute -top-4 -left-8 w-32 h-32 rounded-full blur-3xl"
              style={{ backgroundColor: theme.primaryContainer, opacity: 0.3 }}
            />
            <View 
              className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full blur-3xl"
              style={{ backgroundColor: theme.secondary, opacity: 0.15 }}
            />
            
            {/* Hearth Container with Image */}
            <View 
              className="w-full aspect-square max-w-xs items-center justify-center overflow-hidden shadow-2xl"
              style={{ 
                backgroundColor: theme.primary,
                borderTopLeftRadius: width * 0.42,
                borderTopRightRadius: width * 0.58,
                borderBottomLeftRadius: width * 0.45,
                borderBottomRightRadius: width * 0.55,
              }}
            >
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMwCMsFkXT89mofjjm5l67bZMKD5Nx2WCg_NyrSc9jYDOXlMfC8-UKqT27vgAvyLnOiC_9y5TvKHtZDoOvQ1GDuNA0Na3FMXT9iHC3GBaT_F-ADZvIPHOTciQOOzrFQxH2a9rzPx3_Sf9n1Fo8h42SViKRTCjy_Z_PAHAd7X7eX5KqyIvlPnikONgf14-puM3OXU_5_rJ_kez5fWKktwT927CQ1eNaOvX7lWWjh1XGnuW4v3ajcy-wx_BjKMUKH5sygOrVT6nzzYo' }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
              />
              {/* Gradient Overlay */}
              <View 
                className="absolute inset-0"
                style={{ 
                  backgroundColor: 'transparent',
                  opacity: 0.2,
                }}
              />
            </View>

            {/* Floating Support Badge */}
            <View 
              className="absolute bottom-4 right-2 p-4 rounded-lg flex-row items-center gap-3"
              style={{ 
                backgroundColor: 'rgba(255, 248, 240, 0.7)',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 10,
                elevation: 5,
                borderWidth: 1,
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
            >
              <View 
                className="w-12 h-12 rounded-full items-center justify-center"
                style={{ backgroundColor: theme.secondary }}
              >
                <IconSymbol name="favorite" size={20} color="#ffffff" />
              </View>
              <View>
                <ThemedText className="font-semibold text-sm" style={{ color: theme.onSurface }}>
                  Gentle Care
                </ThemedText>
                <ThemedText className="text-xs" style={{ color: theme.onSurfaceVariant }}>
                  For your loved ones
                </ThemedText>
              </View>
            </View>
          </View>

          {/* Text Content Section */}
          <View className="items-center">
            <ThemedText 
              className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
              style={{ color: theme.primary }}
            >
              Welcome to the Sanctuary
            </ThemedText>
            
            <ThemedText 
              className="text-4xl lg:text-5xl font-extrabold text-center leading-tight mb-5"
              style={{ fontFamily: Fonts.display, color: theme.onSurface }}
            >
              Your family's{' '}
              <ThemedText style={{ fontStyle: 'italic', fontFamily: 'serif', color: theme.primary }}>
                digital sanctuary
              </ThemedText>
            </ThemedText>
            
            <ThemedText 
              className="text-base text-center leading-relaxed mb-8 px-4"
              style={{ color: theme.onSurfaceVariant, maxWidth: 320 }}
            >
              A space for mindful connections and gentle monitoring. We help you nurture growth without intruding on privacy.
            </ThemedText>

            {/* Buttons */}
            <View className="w-full gap-4">
              <MainButton 
                label="Begin Your Journey" 
                icon="arrow_forward"
                onPress={() => router.push('/(onboarding)/setup')} 
              />
              <Pressable 
                className="w-full py-5 rounded-full items-center justify-center"
                style={{ 
                  backgroundColor: theme.surfaceContainerHigh,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.05,
                  shadowRadius: 4,
                  elevation: 2,
                }}
                onPress={() => {
                  // Learn More action - could navigate to an info screen
                  console.log('Learn More pressed');
                }}
              >
                <ThemedText 
                  className="font-semibold text-base"
                  style={{ fontFamily: Fonts.title, color: theme.onSurface }}
                >
                  Learn More
                </ThemedText>
              </Pressable>
            </View>

            {/* Social Proof */}
            <View className="flex-row items-center gap-3 mt-10 opacity-70">
              <View className="flex-row -space-x-2">
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXPGmrB4ACyAaHCIsT8O9Q7beq5t7iS97Jq81Rw3gP9Mjs3AtM6BoN1Sn7GTZm4fDUyBBuuPiJYIrSOgjbPlihG_wBvrva19saCMYG-vFPL4cTP-e_85NyAJhnZeicobVKFrVmMR2vKwIjRlS67rbtYvawVUBBgzs-nyq44cU1IlfRT_Y7z1IjPN97AaH04w6WNA2-UjdFmrc6SI03or2g1zR8iRhEahLFkaIVuAGtPJZtJcC48PGG3zBzTKJ-izuuj5DjLYMoAKc' }}
                  style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: theme.background }}
                />
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBEH2KpvPeI1KzS9EMHaZo3DmNpQsXwBKqNS0jBOEa2v7uxaPeI4-CiKVHzxCkuVteZ-8CDfOYL2qqbSitQfOrAp76eHayCN3zZTc47YdDlmCjcikf-l6drYzq3jeNlgzzaGHTVctOZaTdcLGl7nt3j9vA1UtlA4hZyT7Sj_55l6O-DonTW5QBPdLPYKLpQeo47oqoY9DUNRIuMWjZxSJn-TtaMAhWX9lg9639r5VlJDzGWRt_RHA370u_RBBKJtz5aBiiSRFE7zg' }}
                  style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: theme.background }}
                />
                <Image
                  source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKRBf8VL4eRS5TeUSvjHNkd6eY5AfsFeE4jbe4loxWUgn3nwWY4kSxDGVXU1NIhbgWfUSD_ogboibm-_DXoXAUvlE3ugBq_t3udaI201cDCcutQbd-KpnuxdDUmAdjrt3x8DZOzGobUtIpDB1C2xQeBB5nKXt5HFoMSfltC8RBLTKpEw5BYBonleE_Xd4OjpvKNHm7Fix58FynAokbA0yO2IsGvTDWIdh5Jg_0QgdP9w-bc_ad1Jg1_1UOGV98TsMwDP35dX7AA8E' }}
                  style={{ width: 32, height: 32, borderRadius: 16, borderWidth: 2, borderColor: theme.background }}
                />
              </View>
              <ThemedText className="text-sm font-medium" style={{ color: theme.onSurfaceVariant }}>
                Trusted by 2,000+ families
              </ThemedText>
            </View>
          </View>
        </View>
      </SafeAreaView>

      {/* Background Decoration */}
      <View className="absolute top-[10%] right-[-5%] w-[40vw] h-[40vw] rounded-full blur-[120px] -z-10" style={{ backgroundColor: theme.primaryContainer, opacity: 0.2 }} />
      <View className="absolute bottom-[-10%] left-[-5%] w-[30vw] h-[30vw] rounded-full blur-[100px] -z-10" style={{ backgroundColor: theme.secondary, opacity: 0.1 }} />
    </ThemedView>
  );
}
