# Controle de versão

O GitHub é a fonte da verdade deste estudo. O Ubuntu Server não acompanha o repositório: ele só recebe um deploy explícito de uma tag. Push, merge e criação de tag não publicam o site.

Repositório: `https://github.com/assumgo/incor`

## O que cada lugar guarda

| Lugar | Função |
| --- | --- |
| `main` no GitHub | Linha estável do código, da documentação e do site |
| Tag `vX.Y.Z` | Recorte exato que pode ser copiado para o servidor |
| Ubuntu Server | Cópia publicada de uma tag, acessada pelo IP público |
| Máquina de quem desenvolve | Trabalho em andamento, ainda fora de `main` |

A versão que está no ar é a tag que foi implantada, não o último commit de `main`.

## O que entra no Git

- `site/`: HTML, CSS, JavaScript e imagens do site estático
- `docs/`: regras de versão e de deploy
- `scripts/deploy.sh`: o comando de publicação, sem senha, chave ou IP
- `README.md` e `CHANGELOG.md`

## O que fica de fora

Estes itens não são commitados (veja `.gitignore`):

- `.env` e qualquer arquivo com IP, usuário ou caminho de produção
- Chaves SSH e certificados
- Logs
- Configuração do Nginx em `/etc/nginx` (ela mora no servidor)

O endereço do servidor é informado na hora do deploy, por variável de ambiente, e não fica gravado no repositório.

## Branches

- `main` é a única linha de onde sai uma tag de deploy.
- Cada mudança nasce em `feature/<assunto>`, por exemplo `feature/home`.
- A branch entra em `main` por pull request.
- Uma branch trata de um assunto. Correção visual e página nova vão em branches separadas quando não dependem uma da outra.

## Versões

Enquanto o estudo não tem uma publicação estável, a linha é `0.Y.Z`.

- **PATCH** (`0.1.0` → `0.1.1`): correção de texto, estilo ou arquivo, sem seção nova.
- **MINOR** (`0.1.0` → `0.2.0`): página, seção ou fluxo novo.
- **MAJOR** (`0.x` → `1.0.0`, e depois `2.0.0`): mudança de estrutura ou de identidade que substitui o que já estava no ar. `1.0.0` é a primeira versão considerada publicada de propósito.

A tag é anotada e o nome é `v` seguido do número: `v0.1.0`.

## Commits

Mensagem no imperativo, em português, com uma intenção por commit.

```text
Documenta o fluxo de tags e deploy

A publicação no servidor passa a exigir uma tag em main.
```

A primeira linha diz o que o commit faz. O corpo, quando existe, diz por que a mudança existe.

## Changelog

`CHANGELOG.md` registra o que cada versão entrega.

- O trabalho ainda não tagueado fica em `## [Unreleased]`.
- No momento da tag, esse bloco vira `## [0.1.0] - AAAA-MM-DD` e um `## [Unreleased]` vazio abre de novo no topo.
- O changelog descreve o que mudou para quem olha o site. Detalhe interno de Git fica no histórico de commits.

## Fluxo

1. Atualizar `main` e abrir `feature/<assunto>`.
2. Alterar `site/` ou a documentação e registrar o efeito em `CHANGELOG.md`, na seção `Unreleased`.
3. Commit e push da branch.
4. Abrir pull request para `main`.
5. Depois do merge, na `main` atualizada, criar a tag anotada:

   ```bash
   git checkout main
   git pull origin main
   git tag -a v0.1.0 -m "Versão 0.1.0"
   git push origin v0.1.0
   ```

6. Implantar essa tag no servidor, com autorização, pelo procedimento de [deploy](deploy.md).

Sem a tag, não há deploy. Sem autorização de quem opera o servidor, o script de deploy não roda.

## Consultar o histórico

```bash
git log --oneline
git show v0.1.0
git diff v0.1.0 v0.2.0
```

`git show v0.1.0:site/index.html` mostra o HTML exato daquela versão, mesmo que `main` já tenha seguido em frente.
