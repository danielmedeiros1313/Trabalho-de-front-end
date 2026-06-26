# Nails by Ju — Site de Manicure

## Integrantes da dupla

- Davi da Silva Rocha
- Daniel Sousa Medeiros

## Descrição do caso escolhido

Criamos o site para a Juliana Souza, manicure autônoma com 8 anos de experiência.
Ela atende em estúdio próprio em São Paulo e não tinha nenhuma presença digital organizada —
só um contato de WhatsApp que recebia por indicação de amigas.

## Necessidade identificada

Juliana perdia clientes porque as pessoas não encontravam informações sobre seus serviços,
preços e horários. Ela precisava de uma página simples onde as clientes pudessem ver o que ela oferece,
os preços e entrar em contato para agendar.

## Público-alvo

Mulheres entre 20 e 50 anos, moradoras da região, que buscam uma manicure de confiança com hora
marcada. Elas acessam principalmente pelo celular, então a página precisava funcionar bem em telas
pequenas.

## Objetivo do site

A principal ação esperada é que a visitante clique em "Agendar agora" e entre em contato via
WhatsApp ou pelo formulário. A página foi pensada para deixar essa ação visível e fácil de realizar.

## Processo de desenvolvimento

1. Entrevistamos a Juliana para entender o que ela precisava comunicar.
2. Listamos os conteúdos: quem ela é, o que oferece, preços, localização e contato.
3. Criamos um rascunho no papel com a ordem das seções.
4. Começamos pelo HTML, depois o CSS, depois o JavaScript.
5. Testamos no navegador e no modo responsivo das ferramentas de desenvolvedor.

## Principais decisões do projeto

- **HTML semântico**: usamos `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
  para organizar o conteúdo de forma significativa.
- **Paleta rosa**: escolhemos tons de rosa porque combinam com o universo de beleza da Juliana
  e passam uma sensação de cuidado e feminilidade.
- **Cards de serviços**: usamos cards Bootstrap para organizar os serviços com visual limpo.
- **Formulário simples**: sem back-end, mas com validação JavaScript e mensagem de confirmação visual.
- **Acessibilidade**: colocamos `alt` nas imagens, `aria-label` em links e botões, contraste adequado
  e suporte a navegação por teclado.

## Funcionalidade em JavaScript

Implementamos três funcionalidades:

1. **Perguntas frequentes (acordeão)**: clicando numa pergunta, a resposta aparece. Ao clicar em outra,
   a anterior fecha. Isso mantém a página organizada e evita scroll excessivo.

2. **"Ver mais serviços"**: um botão oculta/mostra os serviços extras. Evita deixar a página
   muito longa logo no início.

3. **Validação e confirmação do formulário**: ao clicar em "Enviar mensagem", o JavaScript
   verifica se nome e WhatsApp foram preenchidos e exibe uma mensagem de confirmação visual.
   O botão muda de estado para mostrar que a ação funcionou.

## Uso de Bootstrap

Utilizamos Bootstrap 5 de forma introdutória:

- **`navbar` com `navbar-expand-lg`**: faz o menu virar hambúrguer em telas menores.
- **`container`**: centraliza o conteúdo com margens automáticas.
- **`row` e `col-*`**: organiza os cards e seções em colunas responsivas.
- **`card` e `card-body`**: estrutura visual dos serviços.
- **Classes utilitárias** (`text-center`, `mb-3`, `g-4`, `h-100`, `w-100`): evitam repetição de CSS.

Não usamos Bootstrap para substituir nosso CSS — ele foi complementar.

## Testes realizados

- ✅ Responsividade: testado no Chrome DevTools em 320px, 375px, 768px e 1280px
- ✅ Links de navegação: todos os âncoras funcionam (#sobre, #servicos, #perguntas, #contato)
- ✅ JavaScript: acordeão, ver mais serviços e formulário testados manualmente
- ✅ Acessibilidade básica: navegação por Tab funciona; aria-expanded atualizado corretamente
- ✅ Carregamento: CSS e JS carregam corretamente com caminhos relativos
- ✅ Formulário: validação impede envio com campos vazios

## Links

- Link do repositório: *(preencher após publicar no GitHub)*
- Link do site publicado: https://danielmedeiros1313.github.io/Trabalho-de-front-end/

## Contribuição dos integrantes

- Davi da Silva Rocha: estrutura HTML, semântica e organização das seções
- Daniel Sousa Medeiros: CSS (estilização, responsividade e paleta de cores) e JavaScript
