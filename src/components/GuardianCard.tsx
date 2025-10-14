import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface GuardianCardProps {
  name: string;
  symbol: string;
  color: string;
  role: string;
  function: string;
  differential: string;
  prompt: string;
  icon: LucideIcon;
  index: number;
}

export function GuardianCard({
  name,
  symbol,
  color,
  role,
  function: guardianFunction,
  differential,
  prompt,
  icon: Icon,
  index,
}: GuardianCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-card rounded-3xl p-8 border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
      }}
    >
      <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-30 transition-opacity">
        <Icon className="w-16 h-16" style={{ color }} />
      </div>

      <div className="relative z-10">
        <div
          className="inline-flex items-center justify-center w-12 h-12 rounded-2xl mb-4"
          style={{ backgroundColor: `${color}20` }}
        >
          <span className="text-2xl" style={{ color }}>
            {symbol}
          </span>
        </div>

        <h3 className="mb-2" style={{ color }}>
          {name}
        </h3>

        <p className="text-muted mb-6">{role}</p>

        <div className="space-y-4">
          <div>
            <p className="text-sm opacity-70 mb-1">Função</p>
            <p className="text-sm">{guardianFunction}</p>
          </div>

          <div>
            <p className="text-sm opacity-70 mb-1">Diferencial</p>
            <p className="text-sm">{differential}</p>
          </div>

          <div
            className="mt-6 p-4 rounded-xl text-sm italic leading-relaxed"
            style={{ backgroundColor: `${color}10`, borderLeft: `3px solid ${color}` }}
          >
            "{prompt}"
          </div>
        </div>
      </div>
    </motion.div>
  );
}
