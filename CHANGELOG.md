# Changelog

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).
As versões seguem [SemVer](https://semver.org/lang/pt-BR/).

A tag `vX.Y.Z` em `main` é a única referência que pode ir para o servidor.
Enviar um commit ao GitHub não publica o site.

## [Unreleased]

## [0.3.0] - 2026-10-30

### Adicionado

- Nova leitura de www.incorsaolucas.com.br, com as fotos do site: logo, exame, Artis zee, Incor Imagem, equipe e a grade de convênios.
- Carrossel na home, com pausa, setas, pontos e troca do texto ao lado de cada imagem.
- A lista de convênios passa a seguir os logos visíveis na grade atual.

### Alterado

- O visual fica mais enxuto: fonte do sistema, imagens em WebP e as quatro entradas da home (Hemodinâmica, Exames, Centro clínico e Unidade) com destino.

## [0.2.1] - 2026-10-21

### Alterado

- O cabeçalho e o ícone do navegador passam a usar a logo do Incor São Lucas.

## [0.2.0] - 2026-10-21

### Adicionado

- Site estático com home, equipe, serviços, convênios e contato na identidade vermelha do Incor São Lucas.
- Busca na equipe e nos convênios, atalhos da home com destino e formulário que abre o WhatsApp.

## [0.1.0] - 2026-10-21

### Adicionado

- Leitura da identidade visual de www.incorsaolucas.com.br (cor, tipo e páginas). A nota anterior, de outro site, foi substituída.
- O script de deploy aceita `DEPLOY_PORT` para o SSH que não escuta na porta 22.
- Documentação de controle de versão e do deploy separado do Git.
- Esqueleto de `site/` para os arquivos estáticos que uma tag futura publica.
- Script `scripts/deploy.sh`, que só roda com confirmação explícita e a partir de uma tag.
