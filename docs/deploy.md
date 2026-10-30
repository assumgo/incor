# Deploy

O deploy copia uma tag do GitHub para o Ubuntu Server. Ele não faz parte do fluxo de commit: nada em `main` vai ao ar sozinho.

O site de estudo é acessado pelo IP público, em HTTP, sem domínio. HTTPS e Let's Encrypt ficam para quando existir um domínio apontando para a máquina.

## O que o servidor precisa ter

Feito uma vez, na máquina, e só com autorização de quem a opera:

- Nginx instalado e ativo
- Arquivos publicados em um diretório próprio, por exemplo `/var/www/incor`
- Bloco do Nginx como `default_server` na porta 80, com `root` nesse diretório
- Porta 80 liberada no `ufw` e no firewall do provedor

O repositório não guarda o IP, o usuário SSH nem a configuração aplicada no servidor.

## Quando publicar

As três condições valem juntas:

1. A versão já está em uma tag `vX.Y.Z` criada a partir de `main`.
2. Quem opera o servidor autorizou essa publicação.
3. O diretório de destino no servidor está definido.

## Como publicar

Na máquina de quem vai enviar os arquivos, com a tag já buscada:

```bash
git fetch origin --tags
git checkout v0.1.0

export DEPLOY_CONFIRM=sim
export DEPLOY_USER=root
export DEPLOY_HOST=203.0.113.10
export DEPLOY_PORT=2289
export DEPLOY_PATH=/var/www/incor

./scripts/deploy.sh
```

`DEPLOY_HOST` no exemplo é um IP de documentação, não o servidor real. Troque pelos valores da máquina. `DEPLOY_PORT` é a porta do SSH. Quando omitida, o script usa a 22. No servidor deste estudo o SSH escuta na 2289, e os arquivos caem em `/var/www/incor`.

O script exige árvore limpa, `HEAD` exatamente em uma tag `vX.Y.Z` e `DEPLOY_CONFIRM=sim`. Ele envia o conteúdo de `site/` com `rsync` e não imprime a chave nem grava esses valores no Git.

## Conferir

No servidor:

```bash
curl -I http://127.0.0.1
```

No navegador: `http://IP_PUBLICO`.

A resposta esperada é `200` e o conteúdo da tag que foi implantada. Se o `curl` local funcionar e o navegador não abrir, a porta 80 está fechada no firewall do provedor ou o IP usado não é o da máquina.

## O que este passo não faz

- Não cria registro de DNS.
- Não emite certificado.
- Não reinicia o Nginx se a configuração da porta 80 já estiver correta. Trocar só os arquivos de `site/` dispensa `reload`.
- Não altera o GitHub. A versão no ar continua sendo a tag escolhida no comando.
