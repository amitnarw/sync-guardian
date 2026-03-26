import React from "react";
import { MotiView } from "moti";
import { useThemeColor } from "@/hooks/use-theme-color";

interface SanctuaryCardProps {
  children: React.ReactNode;
  variant?: "low" | "high" | "highest" | "lowest" | "container";
  className?: string;
}

export function SanctuaryCard({
  children,
  variant = "low",
  className = "",
}: SanctuaryCardProps) {
  const low = useThemeColor({}, "surfaceContainerLow");
  const container = useThemeColor({}, "surfaceContainer");
  const high = useThemeColor({}, "surfaceContainerHigh");
  const highest = useThemeColor({}, "surfaceContainerHighest");
  const lowest = useThemeColor({}, "surfaceContainerLowest");

  const getBackgroundColor = () => {
    switch (variant) {
      case "low": return low;
      case "container": return container;
      case "high": return high;
      case "highest": return highest;
      case "lowest": return lowest;
      default: return low;
    }
  };

  const backgroundColor = getBackgroundColor();

  return (
    <MotiView
      from={{ opacity: 0, scale: 0.98 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        backgroundColor: backgroundColor
      }}
      transition={{ 
        opacity: { type: 'timing', duration: 400 },
        scale: { type: 'timing', duration: 400 },
        backgroundColor: { type: 'timing', duration: 300 }
      }}
      className={`rounded-card p-6 mb-4 ${className}`}
      style={{ backgroundColor }}
    >
      {children}
    </MotiView>
  );
}
