# Instruções para continuidade no Claude Code

## 1. Finalidade deste pacote

Este pacote contém o código-fonte completo e atualizado do portfólio profissional de Cleber Batista. Ele deve ser tratado como a nova fonte oficial do projeto.

O site é voltado a recrutadores, gestores e empresas interessados em contratar Cleber para trabalho remoto, em regime CLT ou PJ, nas áreas administrativa, processos, operações, dados e automação. A comunicação não deve ser transformada em venda de mentoria, curso ou consultoria.

## 2. Resumo do que mudou desde a entrega anterior

- A página inicial foi concluída com cinco dobras: Hero, Projetos, Competências, Como trabalho e Contato.
- A seção de Projetos da página inicial ganhou navegação por cards e troca automática suave entre os projetos, mantendo interação manual por clique.
- A página `/projetos/` foi estruturada como uma página completa de estudos de caso, com menu lateral e cinco projetos.
- Foram adicionados e refinados os projetos ProcFácil, Sistema de Inspeção Digital, Sistema de Controle de Calibração e Dashboard Operacional, além do Organizador de Arquivos.
- O projeto “Mini CRM Administrativo” foi removido do portfólio e não deve ser reinserido sem solicitação explícita.
- A página `/sobre-mim/` foi concluída no padrão aprovado, com menu lateral e conteúdo profissional.
- A página `/contatos/` foi concluída sem formulário de mensagem, usando somente LinkedIn, e-mail e WhatsApp.
- Foi adicionado um rodapé global a todas as páginas.
- A identidade visual foi refinada com verde-petróleo como cor principal, azul/ciano como apoio, linhas finas, cards discretos, gradientes e acabamento premium.
- A navbar da página inicial permanece transparente no topo e recebe efeito de vidro fosco durante o scroll.
- Foram adicionados microefeitos discretos em botões, links, cards e linhas de navegação.
- Foi implementado o seletor de tema claro/escuro em todas as páginas, posicionado à direita do botão “Baixar Currículo”.
- A preferência de tema é salva no navegador pela chave `cleber-theme` no `localStorage` e aplicada antes da renderização para evitar mudança visual brusca.
- O tema claro recebeu uma paleta própria, preservando a identidade em verde, azul/ciano, branco suave e texto grafite.
- A tipografia e os espaçamentos da página inicial foram padronizados.

## 3. Rotas implementadas e aprovadas

As rotas abaixo estão implementadas e aprovadas. Não redesenhar, reestruturar, trocar a copy ou alterar a identidade visual sem pedido explícito de Cleber.

| Rota | Conteúdo | Status |
| --- | --- | --- |
| `/` | Página inicial com Hero, Projetos, Competências, Como trabalho e Contato | Implementada e aprovada |
| `/sobre-mim/` | Perfil profissional, trajetória, forma de trabalho, processos, tecnologia e objetivo profissional | Implementada e aprovada |
| `/projetos/` | Página de projetos com menu lateral e estudos de caso dos cinco projetos | Implementada e aprovada |
| `/contatos/` | Contato profissional por LinkedIn, e-mail e WhatsApp | Implementada e aprovada |

Projetos atualmente apresentados:

1. Organizador de Arquivos
2. ProcFácil
3. Sistema de Inspeção Digital
4. Sistema de Controle de Calibração
5. Dashboard Operacional

## 4. Rotas que ainda não existem

As rotas abaixo não estão implementadas e não devem ser criadas sem solicitação explícita:

- Páginas individuais por slug, como `/projetos/organizador-de-arquivos/` ou `/projetos/procfacil/`.
- Rota própria de currículo, como `/curriculo/`.
- Blog, artigos ou notícias.
- Área administrativa, login, conta de usuário ou painel privado.
- Página de serviços, mentoria, cursos, consultoria ou preços.
- Páginas legais específicas, como política de privacidade e termos.
- Qualquer outra rota não listada na seção de rotas aprovadas.

Observação: os cinco estudos de caso são exibidos dentro da rota única `/projetos/`, por meio do menu lateral. Não separar os projetos em novas rotas sem autorização.

## 5. Dependências

Não foi adicionada nenhuma dependência externa para o seletor de tema ou para os últimos ajustes visuais. O recurso utiliza React, CSS e `localStorage` já disponíveis no projeto.

As versões efetivamente utilizadas estão fixadas em `package.json` e `package-lock.json`. Entre as principais dependências estão Next.js, React, Vinext, Vite, Wrangler, Tailwind CSS e TypeScript.

Requisito de runtime:

- Node.js `>=22.13.0`.

Os scripts de instalação e build usam Bash e utilitários GNU, especialmente `timeout` e `flock`. Em Windows, utilizar WSL para manter o mesmo fluxo validado.

## 6. Variáveis de ambiente e segredos

Nenhuma variável de ambiente com segredo é necessária para instalar, rodar, buildar ou testar o site no estado atual.

O projeto possui apenas variáveis técnicas opcionais usadas pelos scripts e pelo ambiente de desenvolvimento:

- `WRANGLER_WRITE_LOGS`
- `WRANGLER_LOG_PATH`
- `MINIFLARE_REGISTRY_PATH`
- `SITES_INSTALL_TIMEOUT`
- `SITES_INSTALL_KILL_AFTER`
- `SITES_BUILD_TIMEOUT`
- `SITES_BUILD_KILL_AFTER`

Não criar `.env` com valores reais sem necessidade. Se uma integração futura exigir segredo, adicionar somente o nome da variável a um `.env.example` e nunca versionar o valor real.

## 7. Comandos exatos

Executar a partir da pasta raiz do projeto.

### Instalar dependências

```bash
npm ci
```

Alternativa usando o instalador validado do projeto:

```bash
npm run install:ci
```

### Rodar em desenvolvimento

```bash
npm run dev
```

### Gerar build de produção

```bash
npm run build
```

### Executar todos os testes automatizados

```bash
npm test
```

O comando de testes executa um novo build e depois valida a renderização das quatro rotas existentes.

### Executar lint

```bash
npm run lint
```

### Iniciar o build localmente

```bash
npm run start
```

## 8. Estrutura relevante

- `app/page.tsx`: estrutura da página inicial.
- `app/home-navbar.tsx`: navbar da página inicial e comportamento durante o scroll.
- `app/home-projects.tsx`: dobra de projetos e slider automático.
- `app/home-competencies.tsx`: dobra de competências.
- `app/home-workflow.tsx`: dobra “Como trabalho”.
- `app/home-contact.tsx`: última dobra de contato.
- `app/theme-toggle.tsx`: controle de tema claro/escuro.
- `app/site-footer.tsx`: rodapé global.
- `app/sobre-mim/page.tsx`: página Sobre mim.
- `app/projetos/page.tsx`: página completa de projetos e estudos de caso.
- `app/contatos/page.tsx`: página Contatos.
- `app/globals.css`: identidade visual, responsividade, animações e paletas dos dois temas.
- `public/`: imagens e assets locais usados pelo site.
- `tests/rendered-html.test.mjs`: testes automatizados das rotas renderizadas.
- `build/sites-vite-plugin.ts`: arquivo-fonte necessário ao Vite; esta pasta não é um output gerado.

## 9. Regras obrigatórias de continuidade

### Não alterar sem pedido explícito

- Identidade visual aprovada: acabamento premium, tecnológico e discreto.
- Paleta principal em verde-petróleo, com azul/ciano como cor complementar.
- Funcionamento e aparência dos temas claro e escuro.
- Posição do seletor de tema à direita do botão “Baixar Currículo”.
- Estrutura das quatro páginas e das cinco dobras da página inicial.
- Copy já aprovada e direcionada a recrutadores e gestores.
- Posicionamento profissional para contratação remota CLT ou PJ.
- Menu lateral da página Sobre mim e da página Projetos.
- Quantidade atual de cinco projetos e a exclusão do Mini CRM Administrativo.
- Página de Contatos sem formulário; manter somente LinkedIn, e-mail e WhatsApp.
- Dados fictícios e anonimizados nos projetos industriais e administrativos.
- Layout responsivo existente.

Não afirmar implantação em produção, reduções percentuais, economia financeira ou resultados mensurados quando não houver comprovação. Usar expressões como “foi projetado para”, “permite”, “favorece”, “tem como objetivo” e “reduz o risco”.

### Liberado para os próximos passos, mediante solicitação

- Inserir vídeos finais dos projetos nos espaços já previstos.
- Substituir os placeholders visuais dos projetos por imagens finais produzidas por Cleber.
- Conectar o botão de currículo a um arquivo PDF definitivo quando ele for fornecido.
- Fazer correções pontuais de responsividade, acessibilidade, SEO e performance sem redesenhar as páginas.
- Criar novas páginas, projetos ou integrações somente quando Cleber solicitar explicitamente.

## 10. Assets e portabilidade

Todos os assets utilizados diretamente pelo site estão dentro de `public/`. O código não depende de imagens ou vídeos armazenados em caminhos absolutos do ambiente de desenvolvimento.

Links externos existentes são somente destinos funcionais de contato, como LinkedIn e WhatsApp. Eles não são usados para carregar imagens, fontes ou outros recursos visuais.

Pastas geradas, caches, credenciais, histórico Git e arquivos locais de ambiente não fazem parte do pacote de entrega. O build deve ser recriado no novo ambiente com os comandos deste documento.

## 11. Estado validado desta entrega

- Build de produção concluído sem erro.
- Testes automatizados concluídos com sucesso.
- Assets locais conferidos.
- Nenhuma referência a caminhos absolutos do ambiente de desenvolvimento no código-fonte entregue.
- Nenhum `.env` com segredo incluído.
- `node_modules`, `dist`, `.next`, `.vinext`, `.wrangler`, `.sites-runtime` e `.git` excluídos do pacote.
