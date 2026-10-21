# incor

Estudo de um site estático com identidade visual mais atual. O código e a documentação ficam neste repositório, no GitHub. O Ubuntu Server só entra na publicação, e essa publicação é um passo separado: enviar um commit não coloca o site no ar.

O acesso previsto, enquanto não houver domínio, é direto pelo IP público.

## Documentação

- [Controle de versão](docs/controle-de-versao.md): branches, tags, commits e o que não entra no Git
- [Deploy](docs/deploy.md): como uma tag chega ao servidor, e somente com autorização
- [Changelog](CHANGELOG.md): o que cada versão entrega

## Layout

- `site/`: arquivos que o Nginx serve
- `scripts/deploy.sh`: cópia de uma tag `vX.Y.Z` para o servidor
- `docs/`: regras de versão e de publicação
