# Identidade visual de referência

Leitura de `https://www.incorsaolucas.com.br/` em 21 de outubro de 2026. O site é o Incor São Lucas, em Goiânia. A leitura anterior apontava para outro instituto e foi substituída por esta.

O site atual é Wix, publicado atrás da Cloudflare. O título da home é "Incor São Lucas | CARDIOLOGISTA GOIÂNIA | Rua 4, número 1315 - Setor Central Goiânia - Goiás".

Esta nota guarda cor, tipo e estrutura. Não copia o logo, as fotos, a lista de convênios nem as fontes comerciais. A recriação em `site/` será uma interpretação mais atual.

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

O estudo fica com o vermelho `#8B0000`, o fundo branco, a barra de contato e as cinco páginas. A versão nova tira o excesso de área vazia, faz os quatro assuntos da home virarem navegação visível e troca a fonte comercial por uma sans de licença aberta. Logo, fotos e lista nominal de convênios não entram no repositório.
