import { SosCard } from "../SosCard";
import { GuardianChip } from "../GuardianChip";
import { Frame16x9 } from "../Frame16x9";
import { Button } from "../ui/button";

export function GuiaVisualPage() {
  const colorTokens = [
    {
      name: "Background Light",
      token: "--bgLight",
      value: "#FFFFFF",
      usage: "Fundo principal (modo claro)",
    },
    {
      name: "Foreground Light",
      token: "--fgLight",
      value: "#111111",
      usage: "Texto principal (modo claro)",
    },
    {
      name: "Muted Light",
      token: "--mutedLight",
      value: "#6B6B6B",
      usage: "Texto secundário (modo claro)",
    },
    {
      name: "Card Light",
      token: "--cardLight",
      value: "#F7F7F8",
      usage: "Cartões e áreas (modo claro)",
    },
    {
      name: "Border Light",
      token: "--borderLight",
      value: "#E6E7EA",
      usage: "Bordas e divisões (modo claro)",
    },
  ];

  const darkTokens = [
    {
      name: "Background Dark",
      token: "--bgDark",
      value: "#0D0D10",
      usage: "Fundo principal (modo escuro)",
    },
    {
      name: "Foreground Dark",
      token: "--fgDark",
      value: "#F2F2F4",
      usage: "Texto principal (modo escuro)",
    },
    {
      name: "Muted Dark",
      token: "--mutedDark",
      value: "#A0A1A7",
      usage: "Texto secundário (modo escuro)",
    },
    {
      name: "Card Dark",
      token: "--cardDark",
      value: "#1A1B1E",
      usage: "Cartões e áreas (modo escuro)",
    },
    {
      name: "Border Dark",
      token: "--borderDark",
      value: "#2A2B31",
      usage: "Bordas e divisões (modo escuro)",
    },
  ];

  const accentColors = [
    {
      name: "Farol",
      token: "--farol",
      value: "#F2C200",
      usage: "Orientação e direcionamento",
    },
    {
      name: "Íris",
      token: "--iris",
      value: "#6B7CFF",
      usage: "Percepção e visão sistêmica",
    },
    {
      name: "Joaquina",
      token: "--joaquina",
      value: "#2ECC71",
      usage: "Estabilidade e enraizamento",
    },
    {
      name: "Lume",
      token: "--lume",
      value: "#FFB020",
      usage: "Energia criativa",
    },
    {
      name: "Mira",
      token: "--mira",
      value: "#00BFA6",
      usage: "Foco e precisão",
    },
    {
      name: "Trino",
      token: "--trino",
      value: "#FF6200",
      usage: "Síntese triádica",
    },
    {
      name: "Nexo",
      token: "--nexo",
      value: "#0A84FF",
      usage: "Conexões sistêmicas",
    },
  ];

  const layoutTokens = [
    {
      name: "Radius",
      token: "--radius",
      value: "16px",
      usage: "Bordas arredondadas padrão",
    },
    {
      name: "Gap",
      token: "--gap",
      value: "12px",
      usage: "Espaçamento entre elementos",
    },
    {
      name: "Max Width",
      token: "--maxW",
      value: "1024px",
      usage: "Largura máxima do container",
    },
  ];

  const typographyExamples = [
    {
      tag: "H1",
      weight: "900",
      size: "text-4xl",
      example: "SOS — Symbol Open System",
    },
    {
      tag: "H2",
      weight: "800",
      size: "text-2xl",
      example: "Título de Seção",
    },
    {
      tag: "H3",
      weight: "500",
      size: "text-lg",
      example: "Subtítulo de Componente",
    },
    {
      tag: "Body",
      weight: "400",
      size: "text-base",
      example: "Texto de corpo e descrições",
    },
    {
      tag: "Caption",
      weight: "500",
      size: "text-sm",
      example: "Legendas e metadados",
    },
  ];

  const guardians = [
    { name: "Farol", symbol: "△", color: "#F2C200" },
    { name: "Íris", symbol: "◎", color: "#6B7CFF" },
    { name: "Joaquina", symbol: "▼", color: "#2ECC71" },
    { name: "Lume", symbol: "◯", color: "#FFB020" },
    { name: "Mira", symbol: "◇", color: "#00BFA6" },
    { name: "Nexo", symbol: "⦿", color: "#0A84FF" },
    { name: "Trino", symbol: "∴", color: "#FF6200" },
  ];

  const ColorSwatch = ({
    color,
    name,
    token,
    value,
    usage,
  }: any) => (
    <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
      <div
        className="w-12 h-12 rounded-lg border border-border flex-shrink-0"
        style={{ backgroundColor: value }}
      />
      <div className="min-w-0">
        <div className="font-medium text-sm">{name}</div>
        <div className="text-xs text-muted-foreground font-mono">
          {token}
        </div>
        <div className="text-xs text-muted-foreground font-mono">
          {value}
        </div>
        <div className="text-xs text-muted-foreground mt-1">
          {usage}
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-[var(--maxW)] mx-auto px-5 sm:px-6 py-8">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-3xl md:text-4xl mb-4">
          Guia Visual
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Design system, paletas e componentes da linguagem
          visual SOS
        </p>
      </section>

      {/* Design Principles */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Princípios de Design</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SosCard title="Minimalista">
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Elementos essenciais apenas</li>
              <li>• Hierarquia visual clara</li>
              <li>• Espaço em branco estratégico</li>
            </ul>
          </SosCard>

          <SosCard title="Digital-First">
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Otimizado para telas</li>
              <li>• Responsividade universal</li>
              <li>• Performance prioritária</li>
            </ul>
          </SosCard>

          <SosCard title="≤20% Acentos">
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Base monocromática P&B</li>
              <li>• Cores apenas para ênfase</li>
              <li>• Guardiões com identidade</li>
            </ul>
          </SosCard>
        </div>
      </section>

      {/* Color Palette */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Paleta de Cores</h2>

        <div className="space-y-8">
          {/* Base Colors - Light */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Cores Base — Modo Claro
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {colorTokens.map((color) => (
                <ColorSwatch key={color.token} {...color} />
              ))}
            </div>
          </div>

          {/* Base Colors - Dark */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Cores Base — Modo Escuro
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {darkTokens.map((color) => (
                <ColorSwatch key={color.token} {...color} />
              ))}
            </div>
          </div>

          {/* Accent Colors */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Cores de Acento — Guardiões
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {accentColors.map((color) => (
                <ColorSwatch key={color.token} {...color} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Tipografia</h2>
        <SosCard
          title="Hierarquia Tipográfica"
          className="mb-6"
        >
          <div className="space-y-6">
            {typographyExamples.map((type) => (
              <div
                key={type.tag}
                className="flex flex-col md:flex-row md:items-center gap-4 pb-4 border-b border-border last:border-b-0"
              >
                <div className="md:w-24 flex-shrink-0">
                  <div className="font-bold text-sm">
                    {type.tag}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Weight: {type.weight}
                  </div>
                </div>
                <div className="flex-1">
                  <div
                    className={`${type.size} leading-tight`}
                    style={{ fontWeight: type.weight }}
                  >
                    {type.example}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SosCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SosCard title="Fonte Recomendada">
            <div className="text-sm text-muted-foreground space-y-2">
              <div>
                <strong>Manrope</strong> — Família principal
              </div>
              <div>Weights: 400, 500, 800, 900</div>
              <div>Largura de linha: 60–75 caracteres</div>
              <div>Legibilidade otimizada para digital</div>
            </div>
          </SosCard>

          <SosCard title="Aplicação">
            <div className="text-sm text-muted-foreground space-y-2">
              <div>
                <strong>H1/H2:</strong> Manrope 900 (Títulos)
              </div>
              <div>
                <strong>H3:</strong> Manrope 800 (Subtítulos)
              </div>
              <div>
                <strong>Body:</strong> Manrope 500/400 (Corpo)
              </div>
              <div>
                <strong>UI:</strong> Inherits system defaults
              </div>
            </div>
          </SosCard>
        </div>
      </section>

      {/* Layout Tokens */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Tokens de Layout</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {layoutTokens.map((token) => (
            <div
              key={token.token}
              className="p-4 border border-border rounded-lg"
            >
              <div className="font-medium text-sm">
                {token.name}
              </div>
              <div className="text-xs text-muted-foreground font-mono mt-1">
                {token.token}: {token.value}
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                {token.usage}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Components */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Componentes</h2>

        <div className="space-y-8">
          {/* Cards */}
          <div>
            <h3 className="text-lg font-bold mb-4">Cards</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SosCard
                title="Card Padrão"
                description="Cartão básico com título e descrição"
              >
                <p className="text-sm text-muted-foreground">
                  Conteúdo adicional pode ser inserido aqui.
                </p>
              </SosCard>

              <SosCard
                title="Card Interativo"
                description="Com hover e estados de click"
              >
                <Button variant="outline" size="sm">
                  Ação Exemplo
                </Button>
              </SosCard>
            </div>
          </div>

          {/* Guardian Chips */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Chips de Guardiões
            </h3>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {guardians.map((guardian) => (
                  <GuardianChip
                    key={guardian.name}
                    name={guardian.name}
                    symbol={guardian.symbol}
                    color={guardian.color}
                  />
                ))}
              </div>
              <div className="text-xs text-muted-foreground">
                <strong>Versão interativa:</strong>
              </div>
              <div className="flex flex-wrap gap-3">
                {guardians.slice(0, 3).map((guardian) => (
                  <GuardianChip
                    key={`interactive-${guardian.name}`}
                    name={guardian.name}
                    symbol={guardian.symbol}
                    color={guardian.color}
                    interactive={true}
                    onClick={() =>
                      console.log(
                        `Guardião ${guardian.name} selecionado`,
                      )
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Frame 16:9 */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Frame 16:9
            </h3>
            <Frame16x9 placeholder="Exemplo de frame para conteúdo em proporção 16:9" />
          </div>

          {/* Buttons */}
          <div>
            <h3 className="text-lg font-bold mb-4">Botões</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primário</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="secondary">Secundário</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Grid System */}
      <section className="mb-12">
        <h2 className="text-2xl mb-6">Sistema de Grid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SosCard title="Breakpoints">
            <div className="text-sm space-y-2">
              <div className="flex justify-between">
                <span>Mobile</span>
                <span className="font-mono text-muted-foreground">
                  360px+
                </span>
              </div>
              <div className="flex justify-between">
                <span>Tablet</span>
                <span className="font-mono text-muted-foreground">
                  768px+
                </span>
              </div>
              <div className="flex justify-between">
                <span>Desktop</span>
                <span className="font-mono text-muted-foreground">
                  1024px+
                </span>
              </div>
              <div className="flex justify-between">
                <span>Large</span>
                <span className="font-mono text-muted-foreground">
                  1280px+
                </span>
              </div>
            </div>
          </SosCard>

          <SosCard title="Container">
            <div className="text-sm text-muted-foreground space-y-2">
              <div>Max-width: 1024px (var(--maxW))</div>
              <div>Margin: auto (centralizado)</div>
              <div>Padding: 20-24px laterais</div>
              <div>Gap entre elementos: 12px (var(--gap))</div>
            </div>
          </SosCard>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl mb-6">Acessibilidade</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SosCard title="Contraste">
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Mínimo AA (4.5:1 para texto)</li>
              <li>• Cores não como única informação</li>
              <li>• Estados de foco visíveis</li>
            </ul>
          </SosCard>

          <SosCard title="Interação">
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• Navegação por teclado</li>
              <li>• Áreas de toque ≥44px</li>
              <li>• Feedback visual em ações</li>
            </ul>
          </SosCard>
        </div>
      </section>
    </div>
  );
}