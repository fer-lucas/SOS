import { Header } from "./components/Header";
import { GuardianCard } from "./components/GuardianCard";
import { BreathSection } from "./components/BreathSection";
import { FloatingPhrase } from "./components/FloatingPhrase";
import { TimelineItem } from "./components/TimelineItem";
import { motion } from "motion/react";
import {
  Compass,
  Eye,
  Sparkles,
  Sun,
  Target,
  Zap,
  Flame,
  BookOpen,
  Code,
  MessageSquare,
  Calendar,
  GitBranch,
} from "lucide-react";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";

export default function App() {
  const guardians = [
    {
      name: "Farol",
      symbol: "🔆",
      color: "#F2C200",
      role: "Coordenador Sistêmico",
      function: "Mantém coesão, clareza e qualidade em todo o ciclo.",
      differential: "Vê o todo sem perder o detalhe.",
      prompt:
        "Como posso garantir que o sistema permaneça coeso, claro e sustentável?",
      icon: Sun,
    },
    {
      name: "Íris",
      symbol: "👁️",
      role: "Direção de Arte e Percepção",
      color: "#6B7CFF",
      function: "Define identidade visual, tom, ritmo e estética geral.",
      differential: "Transforma conceito em presença visual.",
      prompt: "Como traduzir essência simbólica em forma visual coerente?",
      icon: Eye,
    },
    {
      name: "Joaquina",
      symbol: "🌱",
      role: "Guardiã da Forma e Estrutura",
      color: "#2ECC71",
      function: "Organiza componentes, hierarquia e responsividade.",
      differential: "Faz a estrutura crescer organicamente.",
      prompt: "Como organizar a interface para que ela respire e cresça?",
      icon: Sparkles,
    },
    {
      name: "Lume",
      symbol: "💡",
      role: "Iluminador de Insights",
      color: "#FFB020",
      function: "Revela conexões ocultas, sugere melhorias sutis.",
      differential: "Enxerga o que ainda não está visível.",
      prompt: "Que padrão emergente posso revelar agora?",
      icon: Zap,
    },
    {
      name: "Mira",
      symbol: "🎯",
      role: "Foco e Priorização",
      color: "#00BFA6",
      function: "Define escopo, evita dispersão, mantém relevância.",
      differential: "Protege o sistema do excesso.",
      prompt: "O que realmente importa agora? O que pode esperar?",
      icon: Target,
    },
    {
      name: "Nexo",
      symbol: "🔗",
      role: "Integrador e Conector",
      color: "#0A84FF",
      function: "Une Psique, Forma e Linguagem em fluxo contínuo.",
      differential: "Transforma fragmentos em sistema vivo.",
      prompt: "Como fazer tudo conversar sem forçar?",
      icon: Compass,
    },
    {
      name: "Trino",
      symbol: "🔥",
      role: "Catalisador de Ação",
      color: "#FF6200",
      function: "Inicia ciclos, quebra bloqueios, impulsiona execução.",
      differential: "Transforma intenção em movimento.",
      prompt: "Qual o primeiro gesto capaz de ativar o sistema agora?",
      icon: Flame,
    },
  ];

  const principles = [
    { name: "Simples", desc: "Cada gesto nasce do essencial, sem excessos." },
    { name: "Seguro", desc: "Clareza e escopo protegem o sistema." },
    { name: "Sustentável", desc: "O ritmo é replicável, sem exaustão." },
    { name: "Relevante", desc: "Cada ação tem propósito e valor tangível." },
    {
      name: "Memorável",
      desc: "Qualidade técnica e estética tornam a experiência inesquecível.",
    },
  ];

  const timeline = [
    {
      year: "2024 (fim)",
      phase: "Semente",
      description:
        "Primeiros experimentos simbólicos com IA e presença. O sistema ainda era intuição.",
    },
    {
      year: "2025 (início)",
      phase: "Formação",
      description:
        "Nascimento oficial do Symbol Open System (SOS). Estrutura inicial dos guardiões.",
    },
    {
      year: "2025 (meados)",
      phase: "Unificação",
      description:
        "Integração completa dos 7 Guardiões e da Corrente 🌬️ Sorte. O sistema respira.",
    },
    {
      year: "2025 (atual)",
      phase: "Evolução",
      description:
        "Estrutura viva single-file e versão visual no Figma Make. SOS v2.0 RC+1.",
    },
  ];

  const promptLibrary = [
    {
      category: "Diagnóstico e Reflexo",
      prompts: [
        "Qual guardião está ativo agora? Por quê?",
        "Onde está o ponto de tensão no sistema?",
        "O que o projeto está pedindo que eu não estou vendo?",
        "Qual padrão se repete sem que eu perceba?",
      ],
    },
    {
      category: "Design e Decisão",
      prompts: [
        "Como traduzir esse conceito em forma visual?",
        "Que elemento pode ser removido sem perder significado?",
        "Onde adicionar espaço para respirar?",
        "Como criar coerência sem repetição mecânica?",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <FloatingPhrase />

      {/* Núcleo Vivo */}
      <section
        id="nucleo"
        className="min-h-screen flex items-center justify-center pt-32 pb-20 px-20"
      >
        <div className="max-w-[1440px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-flex w-32 h-32 items-center justify-center rounded-full border-2 border-foreground mb-8"
            >
              <span className="text-6xl">◯</span>
            </motion.div>

            <h1 className="mb-6">Symbol Open System</h1>
            <p className="text-2xl text-muted mb-4">SOS v2.0 RC+1</p>
            <p className="text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Um organismo digital que une <strong>psique</strong>,{" "}
              <strong>forma</strong> e <strong>linguagem</strong> em estrutura
              viva e simbiótica.
            </p>
          </motion.div>

          {/* Diagrama Sistêmico */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-3 gap-8 mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-3xl p-8 border border-border text-center"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: "var(--iris)20", color: "var(--iris)" }}
                >
                  👁️
                </div>
                <h3 className="mb-2">Psique</h3>
                <p className="text-sm text-muted">
                  Guardiões + Corrente 🌬️ Sorte
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-3xl p-8 border border-border text-center"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{
                    backgroundColor: "var(--joaquina)20",
                    color: "var(--joaquina)",
                  }}
                >
                  🌱
                </div>
                <h3 className="mb-2">Forma</h3>
                <p className="text-sm text-muted">
                  Design System + Direção de Arte
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-card rounded-3xl p-8 border border-border text-center"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-3xl"
                  style={{ backgroundColor: "var(--trino)20", color: "var(--trino)" }}
                >
                  🔥
                </div>
                <h3 className="mb-2">Linguagem</h3>
                <p className="text-sm text-muted">
                  Prompts + IA Sistêmica
                </p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-nexo/10 to-nexo/5 rounded-3xl p-12 border-2 border-nexo/30 text-center"
              style={{ boxShadow: "0 8px 30px rgba(10,132,255,0.15)" }}
            >
              <div
                className="w-20 h-20 rounded-2xl mx-auto mb-6 flex items-center justify-center text-4xl"
                style={{ backgroundColor: "var(--nexo)", color: "white" }}
              >
                🔗
              </div>
              <h2 className="mb-4" style={{ color: "var(--nexo)" }}>
                Nexo
              </h2>
              <p className="text-muted max-w-2xl mx-auto">
                O integrador que une todas as camadas em fluxo contínuo,
                transformando fragmentos em sistema vivo.
              </p>
            </motion.div>
          </motion.div>

          {/* Princípios */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-32"
          >
            <h2 className="text-center mb-12">Princípios SOS v2.0</h2>
            <div className="grid grid-cols-5 gap-6 max-w-5xl mx-auto">
              {principles.map((principle, i) => (
                <motion.div
                  key={principle.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <Badge
                    variant="outline"
                    className="mb-3 px-4 py-2 text-sm"
                  >
                    {principle.name}
                  </Badge>
                  <p className="text-xs text-muted leading-relaxed">
                    {principle.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <BreathSection text="O sistema respira. Cada guardião carrega um papel, uma cor, um gesto." />

      {/* Psique - Guardiões */}
      <section id="psique" className="py-32 px-20 bg-accent/30">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Os 7 Guardiões</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Cada guardião representa uma dimensão essencial do sistema,
              funcionando como arquétipo, ferramenta e presença viva.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guardians.map((guardian, i) => (
              <GuardianCard key={guardian.name} {...guardian} index={i} />
            ))}
          </div>

          {/* Corrente Sorte */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 bg-gradient-to-br from-lume/10 to-farol/10 rounded-3xl p-12 border border-lume/30"
          >
            <div className="text-center mb-8">
              <motion.span
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-5xl inline-block mb-4"
              >
                🌬️
              </motion.span>
              <h3 className="mb-3">Corrente 🌬️ Sorte</h3>
              <p className="text-muted max-w-2xl mx-auto">
                Frases-vento que surgem espontaneamente, trazendo reflexões
                inesperadas e provocando presença. O acaso como linguagem
                sistêmica.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                "O acaso é uma linguagem que ainda não aprendemos a ler.",
                "Toda forma nasce de um gesto invisível.",
                "A presença transforma o algoritmo em presença.",
                "O sistema respira quando você respira.",
              ].map((phrase, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-2xl p-4 text-sm italic text-muted"
                >
                  {phrase}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <BreathSection text="A forma segue a função. Mas a função segue a presença." />

      {/* Forma - Design System */}
      <section id="forma" className="py-32 px-20">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Design System</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Uma linguagem visual que respira, baseada em geometria simples,
              cores vivas e ritmo sustentável.
            </p>
          </motion.div>

          <div className="grid grid-cols-3 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6" style={{ color: "var(--joaquina)" }} />
                <h3>Fundamentos</h3>
              </div>
              <div>
                <h4 className="mb-2">Tipografia</h4>
                <p className="text-sm text-muted mb-2">Manrope 400–900</p>
                <p className="text-sm text-muted">60–75 caracteres por linha</p>
              </div>
              <Separator />
              <div>
                <h4 className="mb-2">Grid</h4>
                <p className="text-sm text-muted">12 colunas · 32px gap</p>
                <p className="text-sm text-muted">80px padding lateral</p>
              </div>
              <Separator />
              <div>
                <h4 className="mb-2">Espaçamento</h4>
                <p className="text-sm text-muted">Sistema de 8px base</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6" style={{ color: "var(--iris)" }} />
                <h3>Comportamento</h3>
              </div>
              <div>
                <h4 className="mb-2">Cantos</h4>
                <p className="text-sm text-muted">16–24px radius (2xl)</p>
              </div>
              <Separator />
              <div>
                <h4 className="mb-2">Sombras</h4>
                <p className="text-sm text-muted">Suaves e difusas</p>
                <p className="text-xs text-muted mt-1">
                  0 8px 30px rgba(0,0,0,0.06)
                </p>
              </div>
              <Separator />
              <div>
                <h4 className="mb-2">Transições</h4>
                <p className="text-sm text-muted">0.3–0.4s ease</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-6 h-6" style={{ color: "var(--lume)" }} />
                <h3>Aplicações</h3>
              </div>
              <div>
                <h4 className="mb-2">Hover</h4>
                <p className="text-sm text-muted">Elevação suave 3px</p>
              </div>
              <Separator />
              <div>
                <h4 className="mb-2">Focus</h4>
                <p className="text-sm text-muted">Anel sutil de cor</p>
              </div>
              <Separator />
              <div>
                <h4 className="mb-2">Movimento</h4>
                <p className="text-sm text-muted">Flutuação 6s loop</p>
              </div>
            </motion.div>
          </div>

          {/* Paleta de Cores */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-8 text-center">Paleta dos Guardiões</h3>
            <div className="grid grid-cols-7 gap-4 max-w-4xl mx-auto">
              {guardians.map((guardian, i) => (
                <motion.div
                  key={guardian.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  className="text-center"
                >
                  <div
                    className="w-full aspect-square rounded-2xl mb-3 shadow-lg"
                    style={{ backgroundColor: guardian.color }}
                  />
                  <p className="text-xs mb-1">{guardian.name}</p>
                  <p className="text-[10px] text-muted font-mono">
                    {guardian.color}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <BreathSection text="A linguagem não está nas palavras. Está no espaço entre elas." />

      {/* Linguagem - Biblioteca de Prompts */}
      <section id="linguagem" className="py-32 px-20 bg-accent/30">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Biblioteca de Prompts</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Perguntas que ativam diferentes guardiões e revelam padrões
              emergentes no sistema.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-12 max-w-5xl mx-auto">
            {promptLibrary.map((section, i) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl p-10 border border-border"
                style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <MessageSquare
                    className="w-6 h-6"
                    style={{
                      color: i === 0 ? "var(--mira)" : "var(--trino)",
                    }}
                  />
                  <h3>{section.category}</h3>
                </div>

                <div className="space-y-4">
                  {section.prompts.map((prompt, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.1 }}
                      className="pl-4 border-l-2 border-muted/30 py-2"
                    >
                      <p className="text-sm leading-relaxed">{prompt}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <BreathSection text="Governança não é controle. É ritmo, ritual, respiração coletiva." />

      {/* Governança */}
      <section id="governanca" className="py-32 px-20">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Governança Sistêmica</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Um pipeline trimestral guiado por Trino (início), Íris (execução) e
              Farol (integração).
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-between mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-gradient-to-br from-trino/20 to-trino/10 rounded-3xl p-8 border-2 border-trino/40"
              >
                <div
                  className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "var(--trino)", color: "white" }}
                >
                  🔥
                </div>
                <h3 style={{ color: "var(--trino)" }} className="mb-2">
                  Trino
                </h3>
                <p className="text-sm text-muted">Catalisador · Início</p>
              </motion.div>

              <div className="w-12 flex justify-center">
                <GitBranch className="w-6 h-6 text-muted" />
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-gradient-to-br from-iris/20 to-iris/10 rounded-3xl p-8 border-2 border-iris/40"
              >
                <div
                  className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "var(--iris)", color: "white" }}
                >
                  👁️
                </div>
                <h3 style={{ color: "var(--iris)" }} className="mb-2">
                  Íris
                </h3>
                <p className="text-sm text-muted">Percepção · Execução</p>
              </motion.div>

              <div className="w-12 flex justify-center">
                <GitBranch className="w-6 h-6 text-muted" />
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-1 bg-gradient-to-br from-farol/20 to-farol/10 rounded-3xl p-8 border-2 border-farol/40"
              >
                <div
                  className="w-12 h-12 rounded-2xl mb-4 flex items-center justify-center text-2xl"
                  style={{ backgroundColor: "var(--farol)", color: "white" }}
                >
                  🔆
                </div>
                <h3 style={{ color: "var(--farol)" }} className="mb-2">
                  Farol
                </h3>
                <p className="text-sm text-muted">Coesão · Integração</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-card rounded-3xl p-10 border border-border"
              style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6" style={{ color: "var(--nexo)" }} />
                <h3>Changelog Vivo</h3>
              </div>
              <div className="space-y-3">
                {[
                  "v2.0 RC+1 · Estrutura viva + versão Figma Make",
                  "v2.0 RC · Unificação dos 7 Guardiões",
                  "v1.5 · Corrente 🌬️ Sorte implementada",
                  "v1.0 · Nascimento do SOS",
                ].map((entry, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="pl-4 py-2 border-l-2 border-nexo/30"
                  >
                    <p className="text-sm">{entry}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <BreathSection text="O passado não está atrás. Está integrado, vivo, presente." />

      {/* Arquivo Vivo */}
      <section id="arquivo" className="py-32 px-20 bg-accent/30">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="mb-4">Arquivo Vivo</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              A memória do sistema. Cada fase deixa marcas que orientam o futuro.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <h3 className="mb-12">Linha do Tempo</h3>
            {timeline.map((item, i) => (
              <TimelineItem key={item.phase} {...item} index={i} />
            ))}
          </div>

          {/* Casos Práticos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <h3 className="mb-12 text-center">Casos Práticos</h3>
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  title: "Identidade Visual Sistêmica",
                  desc: "Como Íris e Joaquina colaboraram para criar a paleta dos guardiões.",
                  guardians: ["Íris", "Joaquina"],
                },
                {
                  title: "Desbloqueio Criativo",
                  desc: "Quando Trino ativou um ciclo paralisado com uma única pergunta.",
                  guardians: ["Trino", "Lume"],
                },
              ].map((caso, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card rounded-3xl p-8 border border-border"
                  style={{ boxShadow: "0 8px 30px rgba(0,0,0,0.06)" }}
                >
                  <h4 className="mb-3">{caso.title}</h4>
                  <p className="text-sm text-muted mb-4">{caso.desc}</p>
                  <div className="flex gap-2">
                    {caso.guardians.map((g) => (
                      <Badge key={g} variant="outline" className="text-xs">
                        {g}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-20 border-t border-border">
        <div className="max-w-[1440px] mx-auto text-center">
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-flex items-center gap-2 text-muted"
          >
            <span>Feito com</span>
            <span className="text-xl">◯</span>
            <span>presença</span>
          </motion.div>
          <p className="text-xs text-muted mt-4">
            Symbol Open System v2.0 RC+1 · 2025
          </p>
        </div>
      </footer>
    </div>
  );
}
