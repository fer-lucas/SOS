import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface SosCardProps {
  title: string;
  description?: string;
  children?: ReactNode;
  onClick?: () => void;
  className?: string;
  delay?: number;
}

export function SosCard({ title, description, children, onClick, className = "", delay = 0 }: SosCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay,
        ease: [0.4, 0.0, 0.2, 1]
      }}
      whileHover={onClick ? { y: -2, scale: 1.02 } : undefined}
      whileTap={onClick ? { scale: 0.98 } : undefined}
    >
      <Card 
        className={`transition-all duration-200 hover:shadow-sm ${onClick ? 'cursor-pointer hover:bg-accent/50' : ''} ${className}`}
        style={{ borderRadius: 'var(--radius)' }}
        {...(onClick && { onClick })}
      >
        <CardHeader className="pb-3">
          <CardTitle className="font-extrabold text-left">{title}</CardTitle>
          {description && (
            <CardDescription className="text-muted-foreground text-left">
              {description}
            </CardDescription>
          )}
        </CardHeader>
        {children && (
          <CardContent className="pt-0">
            {children}
          </CardContent>
        )}
      </Card>
    </motion.div>
  );
}