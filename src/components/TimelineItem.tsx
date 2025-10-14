import { motion } from "motion/react";

interface TimelineItemProps {
  year: string;
  phase: string;
  description: string;
  index: number;
}

export function TimelineItem({ year, phase, description, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex gap-8 group"
    >
      <div className="flex flex-col items-center">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-4 h-4 rounded-full bg-nexo border-4 border-background shadow-lg"
          style={{ backgroundColor: "var(--nexo)" }}
        />
        {index < 3 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-nexo/50 to-transparent mt-2" />
        )}
      </div>

      <div className="pb-16">
        <p className="text-sm text-muted mb-1">{year}</p>
        <p className="mb-2">{phase}</p>
        <p className="text-sm text-muted leading-relaxed max-w-xl">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
