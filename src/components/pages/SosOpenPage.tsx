import { SosCard } from "../SosCard";
import { GuardianChip } from "../GuardianChip";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";

export function SosOpenPage() {
  const [isTocOpen, setIsTocOpen] = useState(false);

  const sections = [
    { id: 'identidade', title: 'Identidade' },
    { id: 'guardioes', title: 'Guardiões' },
    { id: 'regras', title: 'Regras de Resposta' },
    { id: 'rituais', title: 'Rituais de Uso' },
    { id: 'linha-tempo', title: 'Linha do Tempo' },
    { id: 'governanca', title: 'Governança' }
  ];

  const guardians = [
    { name: 'Farol', symbol: '△', color: '#F2C200', description: 'Orientação e direcionamento em contextos incertos' },
    { name: 'Íris', symbol: '◎', color: '#6B7CFF', description: 'Percepção ampliada e visão sistêmica' },
    { name: 'Joaquina', symbol: '▼', color: '#2ECC71', description: 'Estabilidade e enraizamento' },
    { name: 'Lume', symbol: '◯', color: '#FFB020', description: 'Energia criativa e transformação' },
    { name: 'Mira', symbol: '◇', color: '#00BFA6', description: 'Foco preciso e intenção direcionada' },
    { name: 'Nexo', symbol: '⦿', color: '#0A84FF', description: 'Conexões e relações sistêmicas' },
    { name: 'Trino', symbol: '∴', color: '#FF6200', description: 'Síntese e integração triádica' }
  ];

  const rituals = [
    { step: 1, title: 'Reconhecimento', description: 'Identificar o contexto e estado atual' },
    { step: 2, title: 'Invocação', description: 'Escolher o guardião adequado para a situação' },
    { step: 3, title: 'Aplicação', description: 'Implementar as diretrizes do guardião selecionado' },
    { step: 4, title: 'Integração', description: 'Registrar aprendizados e ajustar para próximos usos' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsTocOpen(false);
    }
  };

  return (
    <div className="max-w-[var(--maxW)] mx-auto px-5 sm:px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl mb-4">SOS Open v1.x</h1>
        <p className="text-xl text-muted-foreground">
          Manual pessoal + suporte emocional + configuração de imagem
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-4 lg:gap-8">
        {/* Table of Contents - Desktop Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-24">
            <h3 className="font-bold mb-4">Sumário</h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="block text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile TOC Toggle */}
        <div className="lg:hidden mb-6">
          <Button
            variant="outline"
            onClick={() => setIsTocOpen(!isTocOpen)}
            className="w-full justify-between"
          >
            Sumário
            {isTocOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
          
          {isTocOpen && (
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="block text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-12">
          {/* Identidade */}
          <section id="identidade">
            <h2 className="text-2xl mb-6">Identidade</h2>
            <SosCard title="Definição Central">
              <p className="text-muted-foreground leading-relaxed">
                O SOS — Symbol Open System é uma metodologia de organização pessoal 
                que integra suporte emocional, configuração de imagem e navegação simbólica. 
                Opera através de guardiões especializados e mapas unificados para facilitar 
                decisões em contextos de incerteza.
              </p>
            </SosCard>
          </section>

          {/* Guardiões */}
          <section id="guardioes">
            <h2 className="text-2xl mb-6">Guardiões</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guardians.map((guardian) => (
                <SosCard key={guardian.name} title={guardian.name}>
                  <div className="space-y-3">
                    <GuardianChip 
                      name={guardian.name}
                      symbol={guardian.symbol}
                      color={guardian.color}
                    />
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {guardian.description}
                    </p>
                  </div>
                </SosCard>
              ))}
            </div>
          </section>

          {/* Regras de Resposta */}
          <section id="regras">
            <h2 className="text-2xl mb-6">Regras de Resposta</h2>
            <div className="space-y-4">
              <SosCard title="Princípio da Adequação">
                <p className="text-muted-foreground">
                  Cada contexto demanda um guardião específico. A escolha deve ser baseada 
                  na natureza do desafio, não em preferências pessoais.
                </p>
              </SosCard>
              
              <SosCard title="Protocolo de Alternância">
                <p className="text-muted-foreground">
                  Quando um guardião não produz resultados satisfatórios após 3 tentativas, 
                  alternar para o guardião complementar da mesma categoria.
                </p>
              </SosCard>
              
              <SosCard title="Registro Sistemático">
                <p className="text-muted-foreground">
                  Documentar aplicações bem-sucedidas para construir um banco de padrões 
                  pessoais de resposta eficaz.
                </p>
              </SosCard>
            </div>
          </section>

          {/* Rituais de Uso */}
          <section id="rituais">
            <h2 className="text-2xl mb-6">Rituais de Uso</h2>
            <div className="space-y-4">
              {rituals.map((ritual) => (
                <SosCard key={ritual.step} title={`${ritual.step}. ${ritual.title}`}>
                  <p className="text-muted-foreground">{ritual.description}</p>
                </SosCard>
              ))}
            </div>
          </section>

          {/* Linha do Tempo */}
          <section id="linha-tempo">
            <h2 className="text-2xl mb-6">Linha do Tempo</h2>
            <SosCard title="Desenvolvimento Evolutivo">
              <div className="space-y-4">
                <div className="border-l-2 border-muted pl-4">
                  <div className="font-bold text-sm mb-1">Fase 1: Estabelecimento</div>
                  <p className="text-sm text-muted-foreground">
                    Definição dos guardiões base e implementação do sistema de resposta.
                  </p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <div className="font-bold text-sm mb-1">Fase 2: Refinamento</div>
                  <p className="text-sm text-muted-foreground">
                    Personalização dos protocolos e desenvolvimento de padrões individuais.
                  </p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <div className="font-bold text-sm mb-1">Fase 3: Integração</div>
                  <p className="text-sm text-muted-foreground">
                    Aplicação automática e expansão para novos domínios de vida.
                  </p>
                </div>
              </div>
            </SosCard>
          </section>

          {/* Governança */}
          <section id="governanca">
            <h2 className="text-2xl mb-6">Governança</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SosCard title="Princípios Operacionais">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Código aberto e transparente</li>
                  <li>• Evolução baseada em uso real</li>
                  <li>• Documentação contínua</li>
                  <li>• Acessibilidade universal</li>
                </ul>
              </SosCard>
              
              <SosCard title="Estrutura de Versionamento">
                <div className="text-sm text-muted-foreground space-y-2">
                  <div><strong>Major:</strong> Mudanças estruturais</div>
                  <div><strong>Minor:</strong> Novos guardiões/funcionalidades</div>
                  <div><strong>Patch:</strong> Refinamentos e correções</div>
                </div>
              </SosCard>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}