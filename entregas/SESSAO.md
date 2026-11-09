# Sessão de trabalho — 08/11/2026

Registro de onde o Projeto Integrador III parou e do que falta. **Entrega: 07/12/2026.**

## Links

| O quê | Onde |
|---|---|
| Sistema (GitHub Pages) | https://dimasaas.github.io/pi-3b-gerenciador-de-tarefas/ |
| Repositório **público** (código na raiz, entregas em `entregas/`) | https://github.com/Dimasaas/pi-3b-gerenciador-de-tarefas |
| Gestão do projeto (item 2.2) | https://github.com/users/Dimasaas/projects/2 (visões Kanban e "View 1" em tabela) |

## Situação das entregas

| Item do PDF | Situação |
|---|---|
| 2.1 Documento do parceiro | ✅ `documento-parceiro.md`, também incluído na documentação (seção 2) |
| 2.2 Link da ferramenta de gestão | ✅ GitHub Projects, com 19 cartões, 4 sprints e riscos |
| 2.3 Sistema web | ✅ Login, projetos, tarefas, Kanban, calendário e botão "Carregar dados de exemplo". Testado no navegador |
| 2.4 Documentação | ✅ `Documentacao-PI-III-Gerenciador-de-Tarefas.pdf` (16 páginas, formato ABNT, com 5 figuras) |
| 2.4 Repositório Git | ✅ Público |
| 2.4 Vídeo de ~5 min | ✅ `video/Gerenciador-de-Tarefas-PI-III-B.mp4` (2 min 56 s, gerado em 09/11): gravação do sistema local (cadastro, dados de exemplo, Kanban com arrastar, setas e tarefa nova, calendário) com narração masculina e cartões para o problema, a gestão, os desafios e as melhorias. Falta publicar (YouTube não listado ou Drive) e colocar o link na entrega |
| 3 Registro da interação com o parceiro | ⏳ Ata em `Ata-Reuniao-TR-Enterprises.pdf`. Assinada pelo aluno em 09/11; **falta a assinatura do Tales** pelo assinador.iti.br |

## Próximos passos

1. O Tales assinar a ata (a versão já assinada pelo aluno está em `docs/(Para assinatura) Você e o Tales/`). Depois, adicionar o arquivo assinado aqui e passar o cartão da reunião para Done no quadro.
2. Publicar o vídeo (YouTube não listado ou Drive) e guardar o link.
3. Links do GitHub: em 09/11 o repositório publicado (`gerenciador-tarefas-cv-adm`) foi renomeado para `pi-3b-gerenciador-de-tarefas` e recebeu a versão com a TR Enterprises; o site no GitHub Pages passou a responder no endereço da documentação. O pacote pronto para a Plataforma A fica em `docs/(Para entregar) Plataforma A - Entrega do PI/` (fora do git).
4. Validação com a empresa, prevista para 01/12 (na ata e na seção 8 da documentação). Se acontecer, atualizar a seção 8 com o resultado.
5. Entregar até 07/12: documentação, link do quadro, link do repositório, vídeo e ata assinada.
6. Opcional: gerar um PDF separado só com o item 2.1, se a plataforma pedir uma entrega separada.

## Decisões tomadas (e por quê)

- **Organização parceira = TR Enterprises** (TR Enterprises Ltda., a 1001 Negócios Imobiliários, CNPJ 60.478.165/0001-03), por decisão do João em 09/11/2026: a mesma concedente em todos os PIs. A ata foi refeita com esse nome e precisa ser assinada de novo. O vínculo de emprego do aluno continua descrito como é (contratado pela CV ADM). **O contexto descrito é só o da imobiliária 1001**, que cuida da venda de lotes, da cobrança e da administração. Não se afirma que a CV é construtora ou dona do loteamento.
- **Problema extensionista:** a cobrança de inadimplentes (~330 vendas). Ela começou com o leitor de PDF que gerava SQL (repositório `INAD-Cobranca`, julho/2026) e virou o INAD. O sistema do PI generaliza o modelo "tarefa com responsável, prazo e status" para as outras áreas.
- **Não usar o leitor de OCR/INAD como entrega:** ele não tem Kanban nem calendário, é anterior à disciplina e contém dados reais de clientes (LGPD).
- **Trabalho individual.** Cargo usado em todos os lugares: Auxiliar Administrativo (como está no holerite).
- **Repositório do sistema público** por causa do GitHub Pages. Por isso os dados de exemplo usam clientes e colegas fictícios (Ana e Bruno, senha `demo123`), e as pendências de segurança do `casa-1001` ficaram de fora.
- **Sem assinatura de IA** em commits, README ou qualquer coisa no GitHub.
- **Perfil do GitHub:** sem "Dev sênior" nem "Diretor de T.I". A bio e o README do perfil foram atualizados como estudante de ADS que desenvolve os sistemas internos da 1001.

## Arquivos desta pasta

| Arquivo | O que é |
|---|---|
| `Proposta-PI-III-B.pdf` | Proposta (enunciado) do PI III-B |
| `Documentacao-PI-III-Gerenciador-de-Tarefas.pdf` | Documentação final |
| `documentacao/documentacao.html` + `img/` | Fonte da documentação (para gerar o PDF de novo, veja o README) |
| `Ata-Reuniao-TR-Enterprises.pdf` | Ata, sem assinatura (a assinada fica em `docs/(Para assinatura) Você e o Tales/`) |
| `video/Gerenciador-de-Tarefas-PI-III-B.mp4` + `video/roteiro.json` | Vídeo de apresentação e as falas da narração |
| `ata/ata.html`, `ata-reuniao-parceiro.md` | Fonte da ata |
| `documento-parceiro.md` | Contextualização extensionista |
| `plano-trello.md` | Plano das sprints (o quadro real é o GitHub Projects) |
| `roteiro-video.md` | Roteiro do vídeo |
