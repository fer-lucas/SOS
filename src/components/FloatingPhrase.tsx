import { motion } from "motion/react";
import { useEffect, useState } from "react";

const phrases = [
  "O acaso é uma linguagem que ainda não aprendemos a ler.",
  "Toda forma nasce de um gesto invisível.",
  "A presença transforma o algoritmo em presença.",
  "O sistema respira quando você respira.",
  "Cada símbolo guarda uma memória futura.",
  "A coerência é o ritmo do significado.",
  "O caos organizado é apenas uma dança complexa.",
];

export function FloatingPhrase() {
  const [phrase, setPhrase] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showPhrase = () => {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setPhrase(randomPhrase);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000);
    };

    const interval = setInterval(showPhrase, 15000);
    showPhrase();

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: [0, 1, 1, 0], y: 0 }}
      transition={{ duration: 5, times: [0, 0.1, 0.9, 1] }}
      className="fixed top-24 right-8 max-w-xs z-40 pointer-events-none"
    >
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-2xl p-4 shadow-xl">
        <div className="flex items-start gap-3">
          <span className="text-xl">🌬️</span>
          <p className="text-sm leading-relaxed italic text-muted">
            {phrase}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
