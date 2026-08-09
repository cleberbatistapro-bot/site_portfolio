# PROMPT ÚNICO — PÁGINA DO PROJETO ORGANIZADOR DE ARQUIVOS

## Objetivo

Implemente no meu site pessoal/portfólio uma página completa de estudo de caso para o projeto **Organizador Automático de Arquivos Administrativos**.

A página será avaliada principalmente por recrutadores de vagas remotas nas áreas Administrativa, Processos, Operações, Backoffice, Dados e Automação. Ela deve provar minha capacidade de identificar um problema operacional, estruturar uma solução e aplicar tecnologia de forma prática.

Não reconstrua o site do zero. Antes de alterar qualquer arquivo, analise o projeto existente e reutilize fielmente:

- Navbar atual;
- Fonte Inter;
- Paleta dark com verde teal;
- Cards com vidro fosco;
- Bordas finas e discretas;
- Espaçamentos e largura do grid;
- Breakpoints responsivos;
- Padrão visual da Home e da página Sobre Mim.

Não altere a Home nem a página Sobre Mim, exceto o necessário para conectar a navegação.

## Arquivos que serão enviados com este prompt

- `organizador de arquivos(1).mp4` — gravação real do funcionamento;
- `1-arquivos_baguncados.png` — situação inicial;
- `2-tela inicial - organizador de arquivos.png` — interface inicial;
- `3-pastar selecionada.png` — pasta e destino selecionados;
- `4-resultado arquivos organizados.png` — resumo real da execução;
- `5-resultado final - arquivos organizados.png` — estrutura final de pastas.

Use somente esses materiais como prova visual. Não modifique números, invente telas nem substitua as capturas por interfaces genéricas.

## Rota

Criar a página na rota:

`/projetos/organizador-de-arquivos/`

O link “Projetos” do navbar deve permanecer direcionado à futura página geral `/projetos/`. Não substitua a página geral por esta página individual.

## Regras de veracidade

- O teste demonstrado encontrou **21 arquivos**;
- **21 arquivos** foram movidos com sucesso;
- **0 arquivos** ficaram como não reconhecidos;
- O resumo apresenta **10 tipos/extensões identificados**;
- Não inventar economia percentual, tempo economizado, número de usuários, empresa cliente, resultados financeiros ou uso em produção;
- Não afirmar uso de Inteligência Artificial neste projeto;
- Não apresentar a demonstração como resultado comercial;
- Usar a expressão “resultado da demonstração apresentada”.

## Identidade visual

- Fundo principal: `#070B0E` e `#091116`, sem preto puro;
- Verde de destaque: entre `#18C9B7` e `#20C7B7`;
- Texto principal: `#F3F5F4`;
- Texto secundário: `#AEB8BA`;
- Fonte: Inter;
- Headline principal: peso 400;
- Subtítulos: peso 500;
- Bordas de 1 px com teal em baixa opacidade;
- Cards escuros translúcidos com `backdrop-filter: blur(18px a 24px)`;
- Cantos entre 14 px e 18 px;
- Sombras profundas, suaves e discretas;
- Brilho interno superior mínimo;
- Linhas decorativas extremamente finas;
- Muito espaço negativo e hierarquia editorial clara;
- Não usar neon exagerado, elementos 3D decorativos ou estética de ficção científica.

## Navbar

Reutilize o componente atual. Deve conter:

- `CLEBER BATISTA` à esquerda;
- `Página Inicial`;
- `Sobre Mim`;
- `Projetos` ativo;
- `Contatos`;
- Botão `BAIXAR CURRÍCULO` no extremo direito.

O navbar deve permanecer sticky, com efeito de vidro fosco e linha inferior teal muito fina.

## Dobra 1 — Hero do projeto

Criar uma hero ampla em duas colunas.

### Coluna esquerda

Eyebrow:

`PROJETOS / AUTOMAÇÃO DE PROCESSOS`

Badge:

`PROJETO EM PYTHON`

Headline em no máximo três linhas, Inter 400:

`Organizador Automático de Arquivos Administrativos`

Descrição:

`Uma solução desktop criada para transformar pastas desorganizadas em estruturas claras, padronizadas e fáceis de consultar — com backup, simulação e relatório da operação.`

Botões:

1. `ASSISTIR DEMONSTRAÇÃO` — CTA principal teal. Ao clicar, deve iniciar o vídeo;
2. `VER FUNCIONAMENTO` — CTA secundário em vidro. Deve levar suavemente à seção Como funciona.

Metadados com ícones lineares:

- `Aplicação desktop`;
- `Automação administrativa`;
- `Projeto de portfólio`.

### Coluna direita — player de vídeo

Não usar fotografia, notebook 3D ou imagem estática como elemento principal. Inserir um player de vídeo real em proporção 16:9.

Configuração esperada:

- Fonte: `organizador de arquivos(1).mp4`;
- Não iniciar automaticamente;
- Não reproduzir som sem ação do usuário;
- Usar `playsInline`;
- Usar `preload="metadata"`;
- Exibir controles acessíveis;
- Criar uma capa/poster usando a tela inicial do aplicativo;
- Botão circular de play central em teal;
- Etiqueta no canto superior: `VÍDEO DE APRESENTAÇÃO`;
- Texto inferior discreto: `Demonstração do projeto`;
- Card de vidro fosco, borda teal fina, cantos de 16 px e sombra suave;
- Sem marcas de YouTube, Vimeo, publicidade ou controles falsos;
- O CTA “Assistir demonstração” deve dar play no mesmo vídeo e posicionar o foco no player.

Preparar a implementação para que o vídeo definitivo possa substituir o arquivo atual sem alterar o layout.

### Faixa de indicadores

Abaixo da hero, criar uma faixa horizontal de vidro com:

- `21 arquivos processados`;
- `10 tipos identificados`;
- `0 não reconhecidos`.

Legenda abaixo:

`Resultado da demonstração apresentada.`

## Estrutura principal

Depois da hero, usar duas colunas:

### Menu lateral sticky

Reutilizar exatamente o padrão do menu lateral da página Sobre Mim.

Itens:

- Visão geral;
- O problema;
- A solução;
- Como funciona;
- Resultado;
- Tecnologias.

O item ativo deve acompanhar a seção visível. A troca deve ser suave. Em telas menores, transformar o menu em uma faixa horizontal rolável abaixo do navbar.

### Conteúdo

Exibir as seções em cards grandes de vidro fosco, mantendo espaçamento consistente e leitura confortável.

## Dobra 2 — O problema

Eyebrow:

`CONTEXTO`

Título:

`Arquivos dispersos tornam rotinas simples mais lentas e sujeitas a erros.`

Texto:

`Documentos, planilhas, PDFs, imagens e arquivos compactados estavam misturados na mesma pasta. Esse cenário dificulta a localização das informações, reduz a padronização e aumenta o risco de movimentações incorretas.`

Mostrar `1-arquivos_baguncados.png` dentro de um frame refinado.

Apresentar três pontos curtos:

- `Busca demorada` — Encontrar arquivos específicos consome tempo e prejudica a rotina;
- `Falta de padrão` — Arquivos misturados dificultam organização e compartilhamento;
- `Risco de movimentação incorreta` — Mover ou excluir o arquivo errado pode gerar retrabalho e perda.

## Dobra 3 — A solução

Título:

`Uma interface guiada para organizar com controle e segurança.`

Texto:

`A solução conduz o usuário por uma sequência simples: escolher o modo de organização, selecionar a pasta, definir as opções de segurança e executar. Ao final, apresenta um resumo completo da operação.`

Usar `3-pastar selecionada.png` como imagem principal.

Criar quatro cards compactos:

- `Pasta específica ou destino fixo` — Organiza na própria pasta selecionada ou envia para uma pasta de destino;
- `Backup opcional` — Salva uma cópia antes de movimentar os arquivos;
- `Modo de simulação` — Permite visualizar o que será feito antes de executar;
- `Registro completo da operação` — Gera informações para acompanhar cada etapa.

## Dobra 4 — Como funciona

Criar uma linha do tempo horizontal no desktop e vertical no celular.

Etapas:

1. `Escolher o modo` — Pasta específica ou destino fixo;
2. `Selecionar a pasta` — Informar a origem e confirmar o destino;
3. `Definir segurança` — Ativar backup ou modo de simulação;
4. `Organizar e revisar` — Executar e conferir o resumo da operação.

Usar recortes reais das capturas anexadas. Conectar as etapas com uma linha teal muito fina.

## Dobra 5 — Resultado

Eyebrow:

`RESULTADO`

Título:

`Da desorganização a uma estrutura clara em poucos passos.`

Criar comparação Antes / Depois:

- Antes: `1-arquivos_baguncados.png`;
- Depois: `5-resultado final - arquivos organizados.png`.

Mostrar também `4-resultado arquivos organizados.png` com o resumo verdadeiro:

- 21 encontrados;
- 21 movidos com sucesso;
- 0 não reconhecidos.

Texto de apoio:

`Na demonstração, os arquivos foram classificados por extensão e distribuídos em categorias como Compactados, Imagens, Outros, PDF, Planilhas, Texto e Word. O relatório final permite conferir o resultado da execução.`

## Dobra 6 — Tecnologias e decisões

Criar seis cards:

- Python;
- pathlib;
- shutil;
- zipfile;
- Relatórios e logs;
- Interface desktop.

Texto de apoio:

`A solução combina manipulação de caminhos, movimentação e cópia de arquivos, criação de backup, classificação por extensão e registro das ações executadas.`

Não inserir bibliotecas ou tecnologias não confirmadas.

## Fechamento

Criar uma barra de vidro minimalista com o texto:

`Este projeto demonstra como a automação pode eliminar tarefas manuais e transformar uma rotina administrativa em um processo mais organizado, seguro e rastreável.`

Botão:

`VOLTAR PARA PROJETOS`

## Responsividade

### Tablet

- Hero pode manter duas colunas enquanto houver legibilidade;
- Player nunca pode ser cortado;
- Indicadores podem continuar em três colunas;
- Menu lateral vira faixa horizontal sticky quando necessário.

### Celular

- Hero em uma coluna;
- Copy antes do vídeo;
- Headline com quebra natural, sem `white-space: nowrap`;
- CTAs com largura total;
- Player 16:9 com controles utilizáveis;
- Indicadores empilhados;
- Antes e Depois empilhados;
- Timeline vertical;
- Cards de tecnologias em uma coluna ou duas colunas, conforme o espaço.

## Acessibilidade

- HTML semântico;
- Um único `h1`;
- Hierarquia correta de títulos;
- Textos alternativos descritivos nas capturas;
- Foco visível em links, botões e player;
- Contraste adequado;
- Navegação por teclado;
- Respeitar `prefers-reduced-motion`;
- O vídeo deve ter legenda quando a versão editada possuir narração;
- Não depender somente de cor para comunicar estado.

## Performance

- Otimizar imagens para WebP ou AVIF sem perder legibilidade das interfaces;
- Manter os arquivos originais preservados;
- Usar carregamento preguiçoso abaixo da dobra;
- Carregar somente metadados do vídeo antes da interação;
- Usar uma imagem de poster leve;
- Evitar novas dependências quando CSS e APIs nativas forem suficientes;
- Não comprometer as métricas da Home.

## Comportamentos

- Rolagem suave entre menu lateral e seções;
- Hover discreto, sem movimentos exagerados;
- Transições entre 180 ms e 320 ms;
- Navbar e menu lateral sem sobreposição;
- Links internos não podem retornar `Not Found`;
- O player deve funcionar no Chrome, Edge, Firefox e Safari atuais.

## Critérios de aceite

- A rota individual abre sem erro;
- Home e Sobre Mim continuam funcionando sem alterações visuais indesejadas;
- O vídeo aparece na hero, e não uma imagem ou notebook decorativo;
- O vídeo só inicia após ação do usuário;
- Os cinco prints reais são usados nas seções correspondentes;
- Os números exibidos são 21, 10 e 0 conforme a demonstração;
- Nenhum resultado ou tecnologia foi inventado;
- Menu lateral segue o padrão aprovado da página Sobre Mim;
- Página responsiva em desktop, tablet e celular;
- Build e testes passam sem erros;
- Não entregar apenas um mockup: implementar a página funcional no código existente.

Antes de finalizar, execute a compilação do projeto, teste a rota diretamente e verifique todos os links do navbar.
