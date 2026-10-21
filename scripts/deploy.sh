#!/usr/bin/env bash
# Copia site/ de uma tag vX.Y.Z para o Ubuntu Server.
# Push no GitHub não chama este script. Ele só roda com DEPLOY_CONFIRM=sim.
set -euo pipefail

if [[ "${DEPLOY_CONFIRM:-}" != "sim" ]]; then
  echo "Deploy não autorizado. Exporte DEPLOY_CONFIRM=sim para executar." >&2
  exit 1
fi

for var in DEPLOY_USER DEPLOY_HOST DEPLOY_PATH; do
  if [[ -z "${!var:-}" ]]; then
    echo "Defina ${var}." >&2
    exit 1
  fi
done

repo_root=$(git rev-parse --show-toplevel)
cd "${repo_root}"

if [[ -n "$(git status --porcelain)" ]]; then
  echo "A árvore de trabalho tem alterações. Faça o deploy a partir de uma tag limpa." >&2
  exit 1
fi

tag=$(git describe --exact-match --tags HEAD 2>/dev/null || true)
if [[ ! "${tag}" =~ ^v[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
  echo "HEAD precisa estar exatamente em uma tag vX.Y.Z. Atual: ${tag:-nenhuma}." >&2
  exit 1
fi

if ! command -v rsync >/dev/null 2>&1; then
  echo "rsync não está instalado nesta máquina." >&2
  exit 1
fi

ssh_port="${DEPLOY_PORT:-22}"
if [[ ! "${ssh_port}" =~ ^[0-9]+$ ]]; then
  echo "DEPLOY_PORT precisa ser um número. Atual: ${ssh_port}." >&2
  exit 1
fi

echo "Publicando ${tag} em ${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH} (SSH ${ssh_port})"

rsync -av --delete \
  --exclude '.gitkeep' \
  -e "ssh -p ${ssh_port} -o StrictHostKeyChecking=accept-new" \
  "${repo_root}/site/" \
  "${DEPLOY_USER}@${DEPLOY_HOST}:${DEPLOY_PATH}/"
