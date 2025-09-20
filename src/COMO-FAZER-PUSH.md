# 🚀 Como Fazer o Push do SOS

## ⚡ Comandos Rápidos

Se você já tem o Git configurado, execute estes comandos **na pasta do projeto**:

```bash
# 1. Adicionar todos os arquivos
git add .

# 2. Fazer commit com mensagem
git commit -m "🚀 Deploy SOS Symbol Open System"

# 3. Fazer push para o GitHub
git push origin main
```

## 🏁 Primeira Vez? Configuração Completa

Se é a primeira vez fazendo push neste projeto:

```bash
# 1. Inicializar Git (se necessário)
git init

# 2. Adicionar o repositório remoto
git remote add origin https://github.com/fer-lucas/SOS.git

# 3. Verificar se está na branch main
git branch -M main

# 4. Adicionar todos os arquivos
git add .

# 5. Fazer o primeiro commit
git commit -m "🎉 Initial commit: SOS Symbol Open System"

# 6. Fazer o push inicial
git push -u origin main
```

## 📍 Onde Executar

Execute estes comandos no **terminal/prompt**, na **pasta raiz do projeto** onde estão os arquivos:
- `App.tsx`
- `package.json` 
- `vite.config.js`
- etc.

## ✅ Depois do Push

1. Vá para: https://github.com/fer-lucas/SOS
2. Clique na aba **Actions**
3. Aguarde o workflow "Deploy SOS to GitHub Pages" completar
4. Acesse: **https://fer-lucas.github.io/SOS/**

## 🚨 Problemas Comuns

### "Permission denied"
- Configure suas credenciais do Git:
```bash
git config --global user.email "seu-email@email.com"
git config --global user.name "Seu Nome"
```

### "Repository not found" 
- Verifique se o repositório existe em: https://github.com/fer-lucas/SOS
- Confirme se você tem acesso de escrita ao repositório

### "Branch não existe"
- Execute: `git branch -M main` para criar/renomear para main

---
**Após o primeiro push bem-sucedido, você só precisará repetir os 3 comandos rápidos do início!** 🎉