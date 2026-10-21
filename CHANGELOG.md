# Changelog

O formato segue [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).
As versões seguem [SemVer](https://semver.org/lang/pt-BR/).

A tag `vX.Y.Z` em `main` é a única referência que pode ir para o servidor.
Enviar um commit ao GitHub não publica o site.

## [Unreleased]

### Adicionado

- Leitura da identidade visual de www.incorsaolucas.com.br (cor, tipo e páginas). A nota anterior, de outro site, foi substituída.
- Documentação de controle de versão e do deploy separado do Git.
- Esqueleto de `site/` para os arquivos estáticos que uma tag futura publica.
- Script `scripts/deploy.sh`, que só roda com confirmação explícita e a partir de uma tag.
