import { SosCard } from "../SosCard";
import { Frame16x9 } from "../Frame16x9";
import { InteractiveMap } from "../InteractiveMap";
import { Button } from "../ui/button";
import { Download, ExternalLink, Map } from "lucide-react";

export function MapaUnificadoPage() {
  return (
    <div className="max-w-[var(--maxW)] mx-auto px-5 sm:px-6 py-8">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-3xl md:text-4xl mb-4">Mapa Unificado</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Núcleo + Corredores: visualização integrada do sistema de navegação pessoal
        </p>
      </section>

      {/* Interactive Diagram */}
      <section className="mb-12">
        <div className="mb-6">
          <InteractiveMap />
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Mapa interativo: Clique nos pontos para explorar cada corredor e guardião correspondente
        </p>
      </section>

      {/* Feature Cards */}
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SosCard title="Como Usar" description="Guia prático de navegação">
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>1. Identifique sua posição atual no mapa</div>
              <div>2. Escolha o corredor adequado para o contexto</div>
              <div>3. Use o guardião correspondente ao corredor</div>
              <div>4. Registre o trajeto para futura referência</div>
            </div>
          </SosCard>

          <SosCard title="Exemplos de Uso" description="Casos práticos aplicados">
            <div className="space-y-3 text-sm text-muted-foreground">
              <div><strong>Entropia:</strong> Decisões em caos → Farol</div>
              <div><strong>Limite:</strong> Bloqueios criativos → Íris</div>
              <div><strong>Interdependência:</strong> Conflitos → Nexo</div>
              <div><strong>Imaginação:</strong> Novos projetos → Lume</div>
            </div>
          </SosCard>

          <SosCard title="Recursos" description="Downloads e integrações">
            <div className="space-y-3">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Download className="w-4 h-4 mr-2" />
                Baixar HTML
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <ExternalLink className="w-4 h-4 mr-2" />
                Versão Interativa
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Map className="w-4 h-4 mr-2" />
                Template SVG
              </Button>
            </div>
          </SosCard>
        </div>
      </section>

      {/* Detailed Explanation */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Estrutura do Mapa</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SosCard title="Mind Core (Centro)">
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              O núcleo central representa o estado atual de consciência e percepção. 
              É o ponto de referência para toda navegação no sistema.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div>• Estado presente e consciente</div>
              <div>• Ponto de partida para decisões</div>
              <div>• Ancoragem em realidade imediata</div>
            </div>
          </SosCard>

          <SosCard title="Corredores Conceituais">
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Cinco corredores que representam diferentes dimensões de experiência 
              e desafios que requerem navegação específica.
            </p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <div style={{ color: '#0A84FF' }}>• ENTROPIA: Caos e incerteza</div>
              <div style={{ color: '#0A84FF' }}>• INTERDEPENDÊNCIA: Relações complexas</div>
              <div style={{ color: '#0A84FF' }}>• LIMITE DA PERCEPÇÃO: Restrições cognitivas</div>
              <div style={{ color: '#0A84FF' }}>• IMAGINAÇÃO: Potencial criativo</div>
              <div style={{ color: '#0A84FF' }}>• FRAGILIDADE COMPARTILHADA: Vulnerabilidades</div>
            </div>
          </SosCard>
        </div>
      </section>

      {/* Usage Protocols */}
      <section>
        <h2 className="text-2xl mb-6">Protocolos de Navegação</h2>
        <div className="space-y-6">
          <SosCard title="Mapeamento Situacional">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-bold mb-2">Identificação de Contexto</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Qual corredor melhor descreve o desafio?</li>
                  <li>• Que guardião tem expertise nesta área?</li>
                  <li>• Há padrões anteriores aplicáveis?</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-2">Execução de Resposta</h4>
                <ul className="space-y-1 text-muted-foreground">
                  <li>• Aplicar protocolo do guardião selecionado</li>
                  <li>• Monitorar eficácia da abordagem</li>
                  <li>• Ajustar trajeto conforme necessário</li>
                </ul>
              </div>
            </div>
          </SosCard>

          <SosCard title="Integração com Guardiões">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cada corredor do mapa corresponde a especialidades específicas dos guardiões, 
              criando uma navegação integrada entre visualização espacial e resposta prática. 
              O mapa serve como interface visual para seleção contextual de guardiões.
            </p>
          </SosCard>
        </div>
      </section>
    </div>
  );
}