import { Button } from "../ui/button";
import { SosCard } from "../SosCard";
import { SosLogo } from "../SosLogo";
import { motion } from "motion/react";
import { ArrowRight, Zap, Map, Palette } from "lucide-react";

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const navigationCards = [
    {
      id: 'sos-open',
      title: 'SOS Open v1.x',
      description: 'Manual pessoal + suporte emocional + configuração de imagem',
      icon: Zap
    },
    {
      id: 'mapa-unificado',
      title: 'Mapa Unificado',
      description: 'Núcleo + Corredores: visualização integrada do sistema',
      icon: Map
    },
    {
      id: 'guia-visual',
      title: 'Guia Visual',
      description: 'Design system, paletas e componentes da linguagem visual',
      icon: Palette
    }
  ];

  const changelogItems = [
    { version: '1.0.3', description: 'Adicionado sistema de guardiões com cores específicas' },
    { version: '1.0.2', description: 'Implementado Mapa Unificado com visualização radial' },
    { version: '1.0.1', description: 'Lançamento inicial do Symbol Open System' }
  ];

  return (
    <div className="max-w-[var(--maxW)] mx-auto px-5 sm:px-6 py-8">
      {/* Hero Section */}
      <section className="text-center py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
          className="mb-8"
        >
          <SosLogo size="xl" className="mx-auto mb-6" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight"
        >
          SOS — Symbol Open System
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.4, 0.0, 0.2, 1] }}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          Bússola simbiótica: pensar com forma, sentir com método.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.4, 0.0, 0.2, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button 
            size="lg" 
            onClick={() => onPageChange('sos-open')}
            className="text-base px-8"
          >
            Abrir SOS Open
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => onPageChange('mapa-unificado')}
            className="text-base px-8"
          >
            Ver Mapa Unificado
          </Button>
        </motion.div>
      </section>

      {/* Navigation Cards */}
      <section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {navigationCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <SosCard
                key={card.id}
                title={card.title}
                description={card.description}
                onClick={() => onPageChange(card.id)}
                delay={index * 0.1}
              >
                <div className="flex items-center justify-between">
                  <IconComponent className="w-6 h-6 text-muted-foreground" />
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              </SosCard>
            );
          })}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl mb-6">Sobre</h2>
            <div className="prose prose-sm max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-4">
                O Symbol Open System é uma metodologia visual e conceitual para organização 
                pessoal que integra suporte emocional, configuração de imagem e navegação simbólica.
              </p>
              <p className="mb-4">
                Através dos guardiões (Farol, Íris, Joaquina, Lume, Mira, Nexo, Trino) e do 
                Mapa Unificado, oferece uma abordagem sistemática para lidar com complexidade 
                e incerteza.
              </p>
              <p>
                Desenvolvido com princípios de design minimalista, digital-first e 
                acessibilidade universal.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl mb-6">Changelog</h2>
            <div className="space-y-4">
              {changelogItems.map((item, index) => (
                <div key={index} className="border-l-2 border-border pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-sm">{item.version}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}