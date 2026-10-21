# Identidade visual de referência

Leitura do site público do InCor em 21 de outubro de 2026. A home canônica é `https://www.incor.usp.br/`, que responde 302 para `https://www2.incor.usp.br/sites/incor2024/`. O título é "InCor | Ciência e Humanismo".

Esta nota guarda cor, tipo e estrutura para o estudo. Ela não copia logo, fotografias, fonte licenciada nem texto institucional. A recriação no `site/` será uma interpretação mais atual, não uma réplica dos arquivos deles.

O site deles roda em Apache com PHP. O nosso continua estático, servido pelo Nginx no Ubuntu Server.

## Cor

| Papel no site atual | Valor |
| --- | --- |
| Azul institucional, botão e faixas | `#011689` |
| Vermelho, hover do botão e destaques | `#cd0e2d` |
| Ciano dos títulos em bloco | `#22BEF7` |
| Faixa dos atalhos da home | gradiente `#0a87d1` → `#6bd1ed` |
| Barra fixa | `#fafaff` |
| Texto sobre azul, vermelho ou ciano | `#FFFFFF` |
| Texto corrido e placeholders | `#666666`, `#a1a1a1` |

O botão padrão no CSS é cápsula azul e fica vermelho no hover. Na home renderizada o ensino usa a cápsula já vermelha, e a Nota Fiscal Paulista usa a cápsula azul. Títulos de seção usam um traço de 6px ao lado do texto (vermelho em Notícias, ciano em Nota Fiscal) ou uma barra que sangra para fora do conteúdo (ciano em Ensino, vermelho em Pesquisa). O rodapé divide o fundo em cerca de 64% vermelho e 36% ciano, com texto branco.

## Tipo

A família declarada é FF Unit Pro: 400 no texto e 700 nos títulos. É uma fonte comercial. O estudo não embute esses arquivos.

Escala vista na home e nos estilos globais:

- título de banner: 64px a 68px, peso 700
- seção: 50px a 56px
- subtítulo: 38px
- botão: 26px
- texto de apoio: 22px a 30px

## Home, de cima para baixo

A leitura abaixo junta o HTML publicado com a página renderizada em 1440px e em 390px.

1. Barra fixa clara. À esquerda, o logo (coração vermelho, wordmark e a linha "Ciência e Humanismo"). No desktop, os itens são Quem somos, Pacientes, Ensino e pesquisa, Doações, Dúvidas frequentes e Transparência, mais as bandeiras de português e inglês. Vários itens abrem painel. No celular a barra vira logo e botão de menu.
2. Carrossel de ponta a ponta, com seta vermelha. O banner antigo, com título de boas-vindas e campo "Digite aqui para Pesquisar", está comentado no HTML e não aparece. Os slides são campanhas (InCor Digital, alerta de golpes, voluntariado). Desktop e celular usam imagens diferentes.
3. Seis atalhos na faixa em gradiente, ícone branco, rótulo em caixa alta e um traço vermelho curto: Portal do Paciente InCor, InCor Digital, SUS, Convênio e Particular, Resultados de exames, Atendimento inclusivo. No celular viram grade de duas colunas.
4. Duas colunas: notícia à esquerda (título com traço vermelho) e Nota Fiscal Paulista à direita (título com traço ciano, botão azul em cápsula). No celular a notícia fica embaixo dos atalhos.
5. Ensino: foto à esquerda, barra ciano com a palavra "Ensino", bloco azul-escuro, botão vermelho em cápsula.
6. Pesquisa: barra vermelha que sangra para a esquerda, texto ao lado de foto.
7. "Cuide da sua saúde", em cartões sobre foto.
8. Rodapé vermelho e ciano, links, redes, selos em cartão branco e copyright.

Um controle de acessibilidade fica fixo na borda direita da página.

## O que a recriação muda de propósito

O estudo mantém azul, vermelho e ciano, a barra clara e a ordem da home. A versão nova reduz o excesso de ornamentos (grafismos atrás do título, barras que vazam a tela, texto justificado) e troca a fonte comercial por uma sans geométrica de licença aberta. Logo e fotos do instituto não entram no repositório.
