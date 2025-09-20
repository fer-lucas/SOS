# SOS — Symbol Open System

🔗 **Live Demo**: [https://fer-lucas.github.io/SOS/](https://fer-lucas.github.io/SOS/)

Bússola simbiótica: pensar com forma, sentir com método.

## 🌟 Sobre o Projeto

O Symbol Open System é uma metodologia visual e conceitual para organização pessoal que integra suporte emocional, configuração de imagem e navegação simbólica através dos guardiões especializados e do Mapa Unificado.

### ⚡ Tecnologias

- **React** + TypeScript
- **Tailwind CSS v4** com design system customizado
- **Motion** para animações fluidas
- **Shadcn/ui** para componentes base
- **Lucide React** para iconografia

### 🎨 Design System

- **Tipografia**: Manrope (200-800)
- **Paleta**: P&B com ≤20% de acentos coloridos
- **Guardiões**: Farol, Íris, Joaquina, Lume, Mira, Trino, Nexo
- **Tokens**: `--gap: 12px`, `--radius: 16px`, `--maxW: 1024px`

## 🚀 Como Rodar Localmente

```bash
# Clone o repositório
git clone https://github.com/fer-lucas/SOS.git
cd SOS

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

## 📦 Deploy no GitHub Pages

### Status: ✅ **Configurado e Ativo**

O projeto está configurado para deploy automático no GitHub Pages. A cada push na branch `main`, o site é automaticamente atualizado em: **https://fer-lucas.github.io/SOS/**

### Como Funciona

O GitHub Actions está configurado para:
1. **Build automático** a cada push na branch `main`
2. **Deploy direto** para GitHub Pages
3. **URL personalizada**: `https://fer-lucas.github.io/SOS/`

### Para Fazer Mudanças

```bash
# Faça suas alterações no código
git add .
git commit -m "Sua mensagem de commit"
git push

# O site será automaticamente atualizado em poucos minutos!
```

## 🔍 Funcionalidades

- ✨ **Busca Global** (⌘K): Navegação rápida por todo o sistema
- 🌓 **Dark/Light Mode**: Alternância de tema com persistência
- 📱 **Responsivo**: Mobile-first com breakpoints otimizados
- 🎭 **Animações**: Transições fluidas entre páginas e componentes
- 🗺️ **Mapa Interativo**: Visualização radial do Mind Core e guardiões
- 🎨 **Design System**: Tokens consistentes e componentes reutilizáveis

## 📖 Estrutura do Projeto

```
├── components/           # Componentes React
│   ├── pages/           # Páginas principais
│   ├── ui/              # Shadcn/ui components
│   └── ...              # Componentes específicos do SOS
├── styles/
│   └── globals.css      # Design system e tokens CSS
└── App.tsx              # Aplicação principal
```

## 🎯 Roadmap

- [ ] Sistema de busca com filtros avançados
- [ ] Modo de apresentação para o Mapa Unificado
- [ ] Exportação de configurações pessoais
- [ ] API para integração com outros sistemas
- [ ] PWA com funcionalidades offline

---

**SOS v1.x** — Desenvolvido com princípios de design minimalista e acessibilidade universal.