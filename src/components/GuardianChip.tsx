import { motion } from "motion/react";

interface GuardianChipProps {
  name: string;
  symbol: string;
  color: string;
  size?: 'sm' | 'md' | 'lg';
  interactive?: boolean;
  onClick?: () => void;
}

export function GuardianChip({ name, symbol, color, size = 'md', interactive = false, onClick }: GuardianChipProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-3 py-1.5',
    lg: 'text-base px-4 py-2'
  };

  const symbolSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  const ChipComponent = interactive ? motion.button : motion.div;

  return (
    <ChipComponent
      className={`inline-flex items-center gap-2 rounded-full border font-medium transition-all duration-200 ${sizeClasses[size]} ${interactive ? 'cursor-pointer hover:shadow-sm' : ''}`}
      style={{ 
        backgroundColor: `${color}15`,
        borderColor: `${color}40`,
        color: color
      }}
      whileHover={interactive ? { scale: 1.05, y: -1 } : undefined}
      whileTap={interactive ? { scale: 0.95 } : undefined}
      onClick={onClick}
    >
      <span className={`font-bold ${symbolSizeClasses[size]}`}>{symbol}</span>
      <span>{name}</span>
    </ChipComponent>
  );
}