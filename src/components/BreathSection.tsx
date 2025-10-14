import { motion } from "motion/react";

interface BreathSectionProps {
  text: string;
  symbol?: string;
}

export function BreathSection({ text, symbol = "◯" }: BreathSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 flex flex-col items-center justify-center text-center"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-4xl mb-6 text-muted"
      >
        {symbol}
      </motion.div>
      <p className="text-muted max-w-2xl text-lg leading-relaxed italic">
        {text}
      </p>
    </motion.div>
  );
}
