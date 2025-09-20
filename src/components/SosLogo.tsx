interface SosLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  onClick?: () => void;
}

export function SosLogo({ size = 'md', className = '', onClick }: SosLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8', 
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  return (
    <div 
      className={`inline-flex items-center justify-center ${onClick ? 'cursor-pointer' : ''} ${className}`}
      onClick={onClick}
    >
      <svg
        className={`${sizeClasses[size]} transition-all duration-200 hover:opacity-80 hover:scale-105`}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SOS Symbol Open System"
      >
        {/* Símbolo de Infinito com Círculo */}
        <g>
          {/* Infinito - Parte Esquerda */}
          <path
            d="M15 50C15 58.284 21.716 65 30 65C38.284 65 45 58.284 45 50C45 41.716 38.284 35 30 35C21.716 35 15 41.716 15 50Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Infinito - Parte Direita (conectada) */}
          <path
            d="M45 50C45 41.716 51.716 35 60 35C68.284 35 75 41.716 75 50C75 58.284 68.284 65 60 65C51.716 65 45 58.284 45 50Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Círculo Central de Conexão */}
          <circle
            cx="70"
            cy="50"
            r="6"
            fill="currentColor"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          
          {/* Gradiente de Profundidade */}
          <defs>
            <linearGradient id="sosGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--nexo)" stopOpacity="0.1"/>
              <stop offset="50%" stopColor="var(--iris)" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="var(--farol)" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          
          {/* Sombra/Brilho de Fundo */}
          <circle
            cx="50"
            cy="50"
            r="35"
            fill="url(#sosGradient)"
            className="opacity-20"
          />
        </g>
      </svg>
    </div>
  );
}