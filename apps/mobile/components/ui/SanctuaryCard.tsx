import React from 'react';
import { MotiView } from 'moti';

interface SanctuaryCardProps {
  children: React.ReactNode;
  variant?: 'low' | 'high' | 'highest' | 'lowest' | 'container';
  className?: string;
}

export function SanctuaryCard({ children, variant = 'low', className = "" }: SanctuaryCardProps) {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'low': return 'bg-surface-container-low';
      case 'container': return 'bg-surface-container';
      case 'high': return 'bg-surface-container-high';
      case 'highest': return 'bg-surface-container-highest';
      case 'lowest': return 'bg-surface-container-lowest';
      default: return 'bg-surface-container-low';
    }
  };

  return (
    <MotiView
      from={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'timing', duration: 400 }}
      className={`rounded-card p-6 mb-4 ${getBackgroundColor()} ${className}`}
    >
      {children}
    </MotiView>
  );
}
