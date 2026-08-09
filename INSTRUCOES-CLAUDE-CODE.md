# Site Cleber Batista — código completo atualizado

Este pacote contém a versão completa e mais recente do site, consolidada no commit `3f065a1`.

Não é necessário combinar este pacote com entregas anteriores. Ele já inclui todas as alterações aprovadas até agora.

## O que já está implementado

- Página inicial em `/`;
- Hero profissional direcionada a recrutadores;
- Headline em três linhas com fonte Inter, peso 400;
- Fotografia otimizada para a hero;
- Navbar sticky com efeito de vidro fosco;
- Hover dos links e botões;
- CTA de projetos e currículo;
- Faixa com provas profissionais;
- Página Sobre Mim em `/sobre-mim/`;
- Menu lateral da página Sobre Mim;
- Cards com vidro fosco;
- Transições suaves entre conteúdos;
- Layout responsivo para desktop, tablet e celular;
- Metadados específicos para Home e Sobre Mim;
- Teste automatizado da rota `/sobre-mim/`;
- Configuração de build e hospedagem existente.

## O que ainda não está implementado

- Página geral `/projetos/`;
- Página individual do Organizador de Arquivos;
- Página `/contatos/`;
- Download real do currículo, pois o PDF definitivo ainda não foi fornecido.

O documento em `docs/PROMPT-CLAUDE-CODE-PAGINA-PROJETO-ORGANIZADOR.md` contém a especificação aprovada para implementar a primeira página individual de projeto.

## Como abrir

Requisitos:

- Node.js 22.13 ou superior;
- npm.

Comandos:

```bash
npm install
npm run dev
```

Para validar a versão de produção:

```bash
npm run build
npm test
```

## Regras para continuar o desenvolvimento

1. Não reconstruir Home ou Sobre Mim;
2. Não substituir a identidade visual já aprovada;
3. Reutilizar navbar, cores, tipografia, cards, bordas e espaçamentos existentes;
4. Manter Inter 400 na headline principal;
5. Não colocar a seção Sobre Mim abaixo da hero;
6. Não alterar resultados e experiências profissionais nem inventar informações;
7. Novas páginas devem funcionar em rotas próprias e não retornar `Not Found`;
8. Executar build e testes antes de finalizar qualquer alteração;
9. Preservar responsividade, acessibilidade e `prefers-reduced-motion`;
10. Não adicionar dependências quando CSS e APIs nativas forem suficientes.

## Arquivos principais

- `app/page.tsx` — Home;
- `app/sobre-mim/page.tsx` — página Sobre Mim;
- `app/globals.css` — sistema visual e responsividade;
- `app/layout.tsx` — layout e metadados globais;
- `public/cleber-hero.webp` — imagem da hero;
- `public/cleber-perfil.png` — foto da página Sobre Mim;
- `tests/rendered-html.test.mjs` — testes de renderização e rota;
- `docs/` — especificações para as próximas páginas.

## Observação

As pastas `node_modules`, `dist`, caches, arquivos temporários e histórico Git não fazem parte do pacote. Elas são geradas novamente pela instalação e compilação.
