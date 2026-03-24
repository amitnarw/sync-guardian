import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { DarkModeToggle } from '@/components/ui/DarkModeToggle';

export function NurturingHeader() {
  return (
    <View className="flex-row items-center justify-between px-6 py-4 bg-surface/80 dark:bg-stone-900/80 shadow-sm shadow-on-surface/5">
      <View className="flex-row items-center gap-3">
        <View className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPQb5lxw9FNMopXWtHzS7ezCTLNjhGt08cTzxTy-qMiB5S2JfxBi1zpoU1o99jwkynaervk8ELraHHm59-SZvAIX1t5h8H33E_VLB7tP-V1xk6T7LagW1NxohbtIunWLLsatgNSAzy3f-IAWpFAYJ4BELE-bPyEWJlU4pZIN3yiRar5WIxE6HygejNyCPysMmCc8x7iG6YIjILAEW5ToClbbs_e_d7xs9muLUcztGqtZH_9b-dxRpcTTDB-aHEviczH2evXv7nX5A' }}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </View>
        <ThemedText className="text-xl font-bold text-on-surface dark:text-[#F5EDE0] tracking-tight" style={{ fontFamily: 'PlusJakartaSans-Bold' }}>
          Nurturing Atelier
        </ThemedText>
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <DarkModeToggle />
        <TouchableOpacity className="w-10 h-10 items-center justify-center rounded-full hover:bg-surface-container">
          <IconSymbol name="notifications_active" size={24} color="var(--primary)" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
