# Semana de Palestras - Segurança do Trabalho

Site para divulgação da Semana de Palestras do curso Profissional Técnico em Segurança do Trabalho do Senac EAD.

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Criar build de produção
npm run build

# Visualizar build de produção
npm run preview
```

## 📦 Deploy

### Opção 1: Vercel (Recomendado - Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "Add New Project"
4. Importe este repositório
5. Clique em "Deploy"

**Pronto!** O Vercel detecta automaticamente que é um projeto Vite e faz o deploy.

### Opção 2: Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Faça login com GitHub
3. Clique em "Add new site" → "Import an existing project"
4. Conecte seu repositório
5. As configurações já estão no arquivo `netlify.toml`
6. Clique em "Deploy"

### Opção 3: GitHub Pages

1. Instale o pacote gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Adicione ao `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Configure o `base` no `vite.config.ts`:
```typescript
base: '/nome-do-repositorio/',
```

4. Execute:
```bash
npm run deploy
```

### Opção 4: Hospedagem Tradicional (cPanel, etc)

1. Execute o build:
```bash
npm run build
```

2. Faça upload da pasta `dist` para o servidor
3. Configure o servidor para redirecionar todas as rotas para `index.html`

## 🛠️ Tecnologias

- React 19
- TypeScript
- Vite
- React Router
- Lucide React (ícones)
- CSS Modules

## 📝 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── pages/         # Páginas da aplicação
├── data/          # Dados das palestras
├── images/        # Imagens e assets
└── styles/        # Estilos globais
```

