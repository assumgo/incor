# Identidade visual de referência

Leitura nova de `https://www.incorsaolucas.com.br/` em 30 de outubro de 2026. O site continua sendo o Incor São Lucas, em Goiânia, publicado no Wix. A leitura de 21 de outubro permanece abaixo como histórico. Desta vez as imagens do próprio site entram no estudo: logo, exame na mesa, Artis zee, ultrassom da Incor Imagem, faixa da equipe e a grade de convênios.

## O que a leitura de 30 de outubro mudou

- A home segue com a barra vermelha, o telefone `(62) 3922-5777`, WhatsApp, Webmail e os quatro assuntos Hemodinâmica, Exames, Centro Clínico e Unidades.
- O menu segue Home, Equipe, Serviços, Convênios e Contato.
- A grade de convênios mostra 18 logos. A lista pesquisável usa esses nomes, e não a lista anterior, que incluía planos fora da imagem.
- A página de unidades não traz texto além do telefone. O endereço continua o da home e do contato: Rua 4, número 1315, Setor Central, Goiânia - Goiás.
- A versão em `site/` é estática, sem a biblioteca do Wix. As fotos foram reduzidas para WebP. A fonte é a do sistema, para a primeira pintura não esperar um arquivo externo. O carrossel é JavaScript próprio, com pausa e respeito a `prefers-reduced-motion`.

## Leitura de 21 de outubro de 2026

O site é o Incor São Lucas, em Goiânia. Uma leitura anterior, de outro instituto, foi substituída por esta.

O site atual é Wix, publicado atrás da Cloudflare. O título da home é "Incor São Lucas | CARDIOLOGISTA GOIÂNIA | Rua 4, número 1315 - Setor Central Goiânia - Goiás".

Esta nota de outubro guarda cor, tipo e estrutura. Na versão 0.2 as fotos e a grade de convênios ficaram de fora. A versão 0.3, acima, passa a usá-las.

## Cor

| Papel no site atual | Valor |
| --- | --- |
| Barra superior, menu, títulos e endereço | `#8B0000` |
| Fundo das páginas | `#FFFFFF` |
| Fio sob o logo do rodapé | o mesmo vermelho, em linha fina |
| Botão Enviar do contato | cinza-azulado escuro |
| Botão Webmail | cápsula branca sobre a barra vermelha |

WhatsApp, Facebook e Instagram usam as cores das próprias marcas. A página não usa uma segunda cor institucional forte: o vermelho carrega a marca e o restante é branco.

## Tipo

As famílias declaradas no Wix são Open Sans, DIN Next (peso light) e Enriqueta. DIN Next é comercial. O estudo não embute esses arquivos.

No que aparece:

- menu e rótulos: caixa alta, espaçamento folgado, vermelho
- títulos de página, como a equipe: caixa alta, vermelho, centralizados
- nomes da equipe: vermelho, com um fio curto acima
- CRM e especialidade: cinza, menor, logo abaixo do nome
- botões da home no código: Open Sans, 25px

## O que se repete em todas as páginas

1. Barra vermelha no topo: telefone `(62) 3922-5777`, "Fale no Whatsapp" e o botão Webmail (`http://webmail.incorsaolucas.com.br/`).
2. Logo à esquerda (coração, wordmark em script e "São Lucas") e menu à direita: Home, Equipe, Serviços, Convênios, Contato.
3. No fim, Facebook (`http://www.facebook.com/incorsl`) e Instagram (`https://instagram.com/incorsaolucas`). O WhatsApp abre `https://wa.me/556239225777`.

## Páginas

**Home.** Foto larga de mesa clínica, com radiografia, estetoscópio e tablet. Abaixo, o logo, um fio vermelho, o endereço em duas linhas (Rua 4, número 1315, Setor Central, Goiânia, Goiás) e as redes. No HTML existem quatro botões de cerca de 220×44 px, em vermelho: Hemodinâmica, Exames, Centro Clínico e Unidades. Na captura desktop eles não formam uma faixa legível sobre a foto, e os quatro links apontam de volta para a própria home.

**Equipe** (`/equipe-1`). Título "Equipe médica", fio horizontal e uma lista centralizada. Cada pessoa tem o nome em vermelho, depois CRM e a especialidade em cinza.

**Serviços** (`/servicos`). Coluna de títulos em vermelho com listas curtas: Hemodinâmica e Angiografia Digital, Neurorradiologia, Angiologia, Ecocardiografia, Ultrassom Vascular, Ultrassom Geral, Cardiologia e Angiologia, Check-up e exames, Arritmia Cardíaca. À direita, fotos de equipamento e uma frase de posicionamento sobre saúde cardiovascular, neurologia e procedimentos de alta complexidade.

**Convênios** (`/convenios`). Lista textual à esquerda e grade de logos à direita.

**Contato** (`/contato`). Formulário com Nome, Sobrenome, Email, Telefone, mensagem e botão Enviar. Abaixo, WhatsApp, logo e o mesmo endereço.

## O que a recriação muda de propósito

A versão 0.2 ficou com o vermelho `#8B0000`, o fundo branco, a barra de contato e as cinco páginas, sem as fotos do Wix. A versão 0.3 mantém essa estrutura e acrescenta as imagens e o carrossel.
