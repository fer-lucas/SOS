import { useState } from 'react';
import { motion } from 'motion/react';
import { GuardianChip } from './GuardianChip';

interface Corridor {
  id: string;
  name: string;
  description: string;
  guardian: {
    name: string;
    symbol: string;
    color: string;
  };
  position: {
    x: number;
    y: number;
  };
}

export function InteractiveMap() {
  const [selectedCorridor, setSelectedCorridor] = useState<string | null>(null);
  const [hoveredCorridor, setHoveredCorridor] = useState<string | null>(null);

  const corridors: Corridor[] = [
    {
      id: 'entropia',
      name: 'ENTROPIA',
      description: 'Navegação em contextos de caos e incerteza extrema',
      guardian: { name: 'Farol', symbol: '△', color: '#F2C200' },
      position: { x: 50, y: 20 }
    },
    {
      id: 'interdependencia',
      name: 'INTERDEPENDÊNCIA',
      description: 'Gestão de relações complexas e sistemas conectados',
      guardian: { name: 'Nexo', symbol: '⦿', color: '#0A84FF' },
      position: { x: 50, y: 80 }
    },
    {
      id: 'limite',
      name: 'LIMITE DA PERCEPÇÃO',
      description: 'Expansão de fronteiras cognitivas e perceptuais',
      guardian: { name: 'Íris', symbol: '◎', color: '#6B7CFF' },
      position: { x: 15, y: 50 }
    },
    {
      id: 'imaginacao',
      name: 'IMAGINAÇÃO',
      description: 'Exploração de potencial criativo e possibilidades',
      guardian: { name: 'Lume', symbol: '◯', color: '#FFB020' },
      position: { x: 85, y: 50 }
    },
    {
      id: 'fragilidade',
      name: 'FRAGILIDADE COMPARTILHADA',
      description: 'Reconhecimento e navegação de vulnerabilidades',
      guardian: { name: 'Joaquina', symbol: '▼', color: '#2ECC71' },
      position: { x: 35, y: 35 }
    }
  ];

  return (
    <div className="relative w-full h-96 bg-card rounded-lg border border-border overflow-hidden">
      {/* SVG Map Container */}
      <svg className="w-full h-full" viewBox="0 0 100 100">
        {/* Background Pattern */}
        <defs>
          <pattern id="mindGrid" width="5" height="5" patternUnits="userSpaceOnUse">
            <circle cx="2.5" cy="2.5" r="0.3" fill="currentColor" opacity="0.1"/>
          </pattern>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--nexo)" stopOpacity="0.1"/>
            <stop offset="100%" stopColor="var(--nexo)" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#mindGrid)" />
        
        {/* Core Background Glow */}
        <circle cx="50" cy="50" r="25" fill="url(#coreGlow)" />

        {/* Connection Lines - Behind everything */}
        {corridors.map((corridor) => (
          <motion.line
            key={`line-${corridor.id}`}
            x1="50"
            y1="50"
            x2={corridor.position.x}
            y2={corridor.position.y}
            stroke={hoveredCorridor === corridor.id ? corridor.guardian.color : 'var(--border)'}
            strokeWidth={hoveredCorridor === corridor.id ? "2" : "1"}
            opacity={hoveredCorridor === corridor.id ? 0.8 : 0.3}
            className="transition-all duration-300"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        ))}

        {/* Central Mind Core */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.circle
            cx="50"
            cy="50"
            r="6"
            fill="var(--nexo)"
            stroke="var(--background)"
            strokeWidth="2"
            className="cursor-pointer drop-shadow-lg"
            whileHover={{ scale: 1.15, filter: "brightness(1.2)" }}
            whileTap={{ scale: 0.95 }}
          />
          <text 
            x="50" 
            y="50" 
            textAnchor="middle" 
            dominantBaseline="middle" 
            className="text-[3px] fill-white pointer-events-none"
            style={{ fontFamily: 'var(--font-family)', fontWeight: 700 }}
          >
            MIND
          </text>
        </motion.g>

        {/* Corridor Guardian Points */}
        {corridors.map((corridor, index) => (
          <motion.g
            key={corridor.id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 + index * 0.15 }}
          >
            {/* Guardian Point */}
            <motion.circle
              cx={corridor.position.x}
              cy={corridor.position.y}
              r={selectedCorridor === corridor.id ? "5" : hoveredCorridor === corridor.id ? "4.5" : "4"}
              fill={corridor.guardian.color}
              stroke="var(--background)"
              strokeWidth="1.5"
              className="cursor-pointer drop-shadow-md"
              whileHover={{ scale: 1.25, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setHoveredCorridor(corridor.id)}
              onMouseLeave={() => setHoveredCorridor(null)}
              onClick={() => setSelectedCorridor(selectedCorridor === corridor.id ? null : corridor.id)}
            />
            
            {/* Guardian Symbol */}
            <text
              x={corridor.position.x}
              y={corridor.position.y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-[2.5px] fill-white pointer-events-none"
              style={{ fontFamily: 'var(--font-family)', fontWeight: 700 }}
            >
              {corridor.guardian.symbol}
            </text>

            {/* Corridor Label */}
            <text
              x={corridor.position.x}
              y={corridor.position.y + (corridor.position.y < 50 ? -9 : 9)}
              textAnchor="middle"
              className="text-[2px] fill-current pointer-events-none transition-colors duration-300"
              style={{ 
                fill: hoveredCorridor === corridor.id ? corridor.guardian.color : 'var(--muted-foreground)',
                fontFamily: 'var(--font-family)', 
                fontWeight: 500,
                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              {corridor.name.split(' ').map((word, i) => (
                <tspan key={i} x={corridor.position.x} dy={i > 0 ? "1.5" : "0"}>
                  {word}
                </tspan>
              ))}
            </text>
          </motion.g>
        ))}
      </svg>

      {/* Info Panel */}
      {selectedCorridor && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="absolute top-4 right-4 bg-card/95 backdrop-blur-md border border-border rounded-lg p-4 max-w-72 shadow-xl"
        >
          {(() => {
            const corridor = corridors.find(c => c.id === selectedCorridor);
            if (!corridor) return null;
            
            return (
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <h4 className="text-sm leading-tight">{corridor.name}</h4>
                  <button
                    onClick={() => setSelectedCorridor(null)}
                    className="text-muted-foreground hover:text-foreground text-sm p-1 -mt-1 -mr-1 rounded transition-colors"
                  >
                    ✕
                  </button>
                </div>
                <GuardianChip
                  name={corridor.guardian.name}
                  symbol={corridor.guardian.symbol}
                  color={corridor.guardian.color}
                  size="sm"
                />
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {corridor.description}
                </p>
              </div>
            );
          })()}
        </motion.div>
      )}

      {/* Refined Legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm border border-border rounded-lg p-3 shadow-lg">
        <div className="text-xs space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--nexo)' }}></div>
            <span className="text-muted-foreground">Mind Core</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--farol)' }}></div>
            <span className="text-muted-foreground">Guardiões</span>
          </div>
          <div className="text-[10px] text-muted-foreground/70 mt-1 pt-1 border-t border-border">
            Clique nos guardiões para explorar
          </div>
        </div>
      </div>
    </div>
  );
}