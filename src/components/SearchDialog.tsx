import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog';
import { Input } from './ui/input';
import { Search, ArrowRight, Hash } from 'lucide-react';
import { motion } from 'motion/react';

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
  onNavigate: (page: string, section?: string) => void;
}

interface SearchResult {
  id: string;
  title: string;
  page: string;
  section?: string;
  description: string;
  type: 'page' | 'section' | 'guardian' | 'concept';
}

export function SearchDialog({ open, onClose, onNavigate }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const searchData: SearchResult[] = [
    // Páginas
    { id: 'home', title: 'Home', page: 'home', description: 'Página inicial do SOS', type: 'page' },
    { id: 'sos-open', title: 'SOS Open', page: 'sos-open', description: 'Manual completo do sistema', type: 'page' },
    { id: 'mapa-unificado', title: 'Mapa Unificado', page: 'mapa-unificado', description: 'Visualização do sistema', type: 'page' },
    { id: 'guia-visual', title: 'Guia Visual', page: 'guia-visual', description: 'Design system e componentes', type: 'page' },
    
    // Seções do SOS Open
    { id: 'identidade', title: 'Identidade', page: 'sos-open', section: 'identidade', description: 'Definição central do sistema', type: 'section' },
    { id: 'guardioes', title: 'Guardiões', page: 'sos-open', section: 'guardioes', description: 'Sistema de guardiões especializados', type: 'section' },
    { id: 'regras', title: 'Regras de Resposta', page: 'sos-open', section: 'regras', description: 'Protocolos de aplicação', type: 'section' },
    { id: 'rituais', title: 'Rituais de Uso', page: 'sos-open', section: 'rituais', description: 'Processo de implementação', type: 'section' },
    { id: 'linha-tempo', title: 'Linha do Tempo', page: 'sos-open', section: 'linha-tempo', description: 'Evolução do sistema', type: 'section' },
    { id: 'governanca', title: 'Governança', page: 'sos-open', section: 'governanca', description: 'Estrutura organizacional', type: 'section' },
    
    // Guardiões
    { id: 'farol', title: 'Farol', page: 'sos-open', section: 'guardioes', description: 'Orientação e direcionamento △', type: 'guardian' },
    { id: 'iris', title: 'Íris', page: 'sos-open', section: 'guardioes', description: 'Percepção ampliada ◎', type: 'guardian' },
    { id: 'joaquina', title: 'Joaquina', page: 'sos-open', section: 'guardioes', description: 'Estabilidade e enraizamento ▼', type: 'guardian' },
    { id: 'lume', title: 'Lume', page: 'sos-open', section: 'guardioes', description: 'Energia criativa ◯', type: 'guardian' },
    { id: 'mira', title: 'Mira', page: 'sos-open', section: 'guardioes', description: 'Foco preciso ◇', type: 'guardian' },
    { id: 'nexo', title: 'Nexo', page: 'sos-open', section: 'guardioes', description: 'Conexões sistêmicas ⦿', type: 'guardian' },
    { id: 'trino', title: 'Trino', page: 'sos-open', section: 'guardioes', description: 'Síntese triádica ∴', type: 'guardian' },
    
    // Conceitos
    { id: 'entropia', title: 'Entropia', page: 'mapa-unificado', description: 'Corredor de caos e incerteza', type: 'concept' },
    { id: 'interdependencia', title: 'Interdependência', page: 'mapa-unificado', description: 'Corredor de relações complexas', type: 'concept' },
    { id: 'mind-core', title: 'Mind Core', page: 'mapa-unificado', description: 'Núcleo central do mapa', type: 'concept' },
    { id: 'design-tokens', title: 'Design Tokens', page: 'guia-visual', description: 'Sistema de tokens visuais', type: 'concept' }
  ];

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSelectedIndex(0);
      return;
    }

    const filtered = searchData.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 8);

    setResults(filtered);
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (result: SearchResult) => {
    onNavigate(result.page, result.section);
    onClose();
    setQuery('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'page': return '📄';
      case 'section': return '📝';
      case 'guardian': return '🔮';
      case 'concept': return '💡';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'page': return 'text-blue-500';
      case 'section': return 'text-green-500';
      case 'guardian': return 'text-purple-500';
      case 'concept': return 'text-orange-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 gap-0">
        <DialogHeader className="px-6 py-4 border-b border-border">
          <DialogTitle className="flex items-center gap-2 text-lg">
            <Search className="w-5 h-5" />
            Buscar no SOS
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Encontre páginas, guardiões, conceitos e seções do sistema
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6">
          <Input
            placeholder="Digite para buscar páginas, guardiões, conceitos..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full text-lg"
            autoFocus
          />
          
          {results.length > 0 && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 space-y-2 max-h-96 overflow-y-auto"
            >
              {results.map((result, index) => (
                <motion.button
                  key={result.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleSelect(result)}
                  className={`w-full text-left p-3 rounded-lg border transition-all duration-200 ${
                    index === selectedIndex 
                      ? 'bg-accent border-accent-foreground/20 shadow-sm' 
                      : 'bg-card border-border hover:bg-accent/50'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-lg mt-0.5">{getTypeIcon(result.type)}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-sm truncate">{result.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full bg-muted ${getTypeColor(result.type)}`}>
                          {result.type}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {result.description}
                      </p>
                      <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                        <Hash className="w-3 h-3" />
                        <span>{result.page}</span>
                        {result.section && (
                          <>
                            <ArrowRight className="w-3 h-3" />
                            <span>{result.section}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
          
          {query && results.length === 0 && (
            <div className="mt-8 text-center text-muted-foreground">
              <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>Nenhum resultado encontrado para "{query}"</p>
              <p className="text-xs mt-1">Tente termos como "guardiões", "mapa" ou "design"</p>
            </div>
          )}
          
          {!query && (
            <div className="mt-8 text-center text-muted-foreground">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <p className="font-medium mb-2">Busca rápida:</p>
                  <div className="space-y-1">
                    <div>• guardiões</div>
                    <div>• mapa unificado</div>
                    <div>• regras</div>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">Navegação:</p>
                  <div className="space-y-1">
                    <div>↑↓ Selecionar</div>
                    <div>Enter Abrir</div>
                    <div>Esc Fechar</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}