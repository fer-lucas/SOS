import { ReactNode } from "react";

interface Frame16x9Props {
  children?: ReactNode;
  className?: string;
  placeholder?: string;
}

export function Frame16x9({ children, className = "", placeholder = "Conteúdo 16:9" }: Frame16x9Props) {
  return (
    <div 
      className={`relative w-full aspect-video bg-muted border border-border flex items-center justify-center ${className}`}
      style={{ borderRadius: 'var(--radius)' }}
    >
      {children || (
        <div className="text-muted-foreground text-center p-4">
          <div className="text-sm font-medium">{placeholder}</div>
          <div className="text-xs mt-1">Proporção 16:9</div>
        </div>
      )}
    </div>
  );
}