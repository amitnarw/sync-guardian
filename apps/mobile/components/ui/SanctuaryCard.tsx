import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';

interface SanctuaryCardProps {
  children: React.ReactNode;
  variant?: 'low' | 'high' | 'highest' | 'lowest';
  className?: string;
}

export function SanctuaryCard({ children, variant = 'low', className = "" }: SanctuaryCardProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'low': return 'bg-[#F2F4F7] dark:bg-[#1C1C1E]';
      case 'high': return 'bg-[#E5E9F0] dark:bg-[#2C2C2E]';
      case 'highest': return 'bg-[#D1D9E6] dark:bg-[#3A3A3C]';
      case 'lowest': return 'bg-white dark:bg-[#0A0A0A]';
      default: return 'bg-[#F2F4F7]';
    }
  };

  return (
    <MotiView
      from={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'timing', duration: 400 }}
      className={`rounded-[32px] p-6 mb-4 ${getBackgroundColor()} ${className}`}
    >
      {children}
    </MotiView>
  );
}
