export function SosFooter() {
  return (
    <footer className="border-t border-border bg-background mt-16">
      <div className="max-w-[var(--maxW)] mx-auto px-5 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-extrabold text-lg mb-3">SOS</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Symbol Open System<br />
              Bússola simbiótica: pensar com forma, sentir com método.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Navegação</h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">SOS Open</div>
              <div className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Mapa Unificado</div>
              <div className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors">Guia Visual</div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-3">Sistema</h4>
            <div className="space-y-2 text-sm">
              <div className="text-muted-foreground">Versão 1.0</div>
              <div className="text-muted-foreground">Design System</div>
              <div className="text-muted-foreground">Código Aberto</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <div>© 2024 SOS — Symbol Open System</div>
          <div className="mt-2 sm:mt-0">Minimalista, digital-first, simbiótico</div>
        </div>
      </div>
    </footer>
  );
}