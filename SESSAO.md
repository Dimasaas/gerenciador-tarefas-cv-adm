# Sessão de trabalho — 08/11/2026

Registro de onde o Projeto Integrador III parou e do que falta. **Entrega: 07/12/2026.**

## Links

| O quê | Onde |
|---|---|
| Sistema (GitHub Pages) | https://dimasaas.github.io/gerenciador-tarefas-cv-adm/ |
| Código, repositório **público** | https://github.com/Dimasaas/gerenciador-tarefas-cv-adm (pasta `gerenciador-tarefas/`) |
| Gestão do projeto (item 2.2) | https://github.com/users/Dimasaas/projects/2 (visões Kanban e "View 1" em tabela) |
| Esta pasta, repositório **privado** | https://github.com/Dimasaas/projeto-integrador-3-puc |

## Situação das entregas

| Item do PDF | Situação |
|---|---|
| 2.1 Documento do parceiro | ✅ `documento-parceiro.md`, também incluído na documentação (seção 2) |
| 2.2 Link da ferramenta de gestão | ✅ GitHub Projects, com 19 cartões, 4 sprints e riscos |
| 2.3 Sistema web | ✅ Login, projetos, tarefas, Kanban, calendário e botão "Carregar dados de exemplo". Testado no navegador |
| 2.4 Documentação | ✅ `Documentacao-PI-III-Gerenciador-de-Tarefas.pdf` (16 páginas, formato ABNT, com 5 figuras) |
| 2.4 Repositório Git | ✅ Público |
| 2.4 Vídeo de ~5 min | ⏳ **Falta gravar.** Roteiro em `roteiro-video.md` |
| 3 Registro da interação com o parceiro | ⏳ Ata assinada pelo aluno (`Ata-Reuniao-CV-ADM_assinado.pdf`). **Falta a assinatura do Tales** pelo assinador.iti.br |

## Próximos passos

1. Mandar o `Ata-Reuniao-CV-ADM_assinado.pdf` para o Tales assinar pelo gov.br. Depois, substituir o arquivo aqui e passar o cartão "Reunião com a CV ADM" para Done no quadro.
2. Gravar o vídeo seguindo o `roteiro-video.md`, abrindo o sistema numa janela anônima.
3. Validação com a empresa, prevista para 01/12 (na ata e na seção 8 da documentação). Se acontecer, atualizar a seção 8 com o resultado.
4. Entregar até 07/12: documentação, link do quadro, link do repositório, vídeo e ata assinada.
5. Opcional: gerar um PDF separado só com o item 2.1, se a plataforma pedir uma entrega separada.

## Decisões tomadas (e por quê)

- **Organização parceira = CV ADM** (CV Administradora de Obras Ltda., CNPJ 31.441.640/0001-60), porque é ela quem contrata o aluno e é o nome que está na ata já assinada. **O contexto descrito é só o da imobiliária 1001**, que cuida da venda de lotes, da cobrança e da administração. Não se afirma que a CV é construtora ou dona do loteamento.
- **Problema extensionista:** a cobrança de inadimplentes (~330 vendas). Ela começou com o leitor de PDF que gerava SQL (repositório `INAD-Cobranca`, julho/2026) e virou o INAD. O sistema do PI generaliza o modelo "tarefa com responsável, prazo e status" para as outras áreas.
- **Não usar o leitor de OCR/INAD como entrega:** ele não tem Kanban nem calendário, é anterior à disciplina e contém dados reais de clientes (LGPD).
- **Trabalho individual.** Cargo usado em todos os lugares: Auxiliar Administrativo (como está no holerite).
- **Repositório do sistema público** por causa do GitHub Pages. Por isso os dados de exemplo usam clientes e colegas fictícios (Ana e Bruno, senha `demo123`), e as pendências de segurança do `casa-1001` ficaram de fora.
- **Sem assinatura de IA** em commits, README ou qualquer coisa no GitHub.
- **Perfil do GitHub:** sem "Dev sênior" nem "Diretor de T.I". A bio e o README do perfil foram atualizados como estudante de ADS que desenvolve os sistemas internos da 1001.

## Arquivos desta pasta

| Arquivo | O que é |
|---|---|
| `__ Plataforma A.pdf` | Enunciado do professor |
| `Documentacao-PI-III-Gerenciador-de-Tarefas.pdf` / `_assinado.pdf` | Documentação final |
| `documentacao/documentacao.html` + `img/` | Fonte da documentação (para gerar o PDF de novo, veja o README) |
| `Ata-Reuniao-CV-ADM.pdf` / `_assinado.pdf` | Ata original e a assinada pelo aluno |
| `ata/ata.html`, `ata-reuniao-parceiro.md` | Fonte da ata |
| `documento-parceiro.md` | Contextualização extensionista |
| `plano-trello.md` | Plano das sprints (o quadro real é o GitHub Projects) |
| `roteiro-video.md` | Roteiro do vídeo |
| `gerenciador-tarefas/` | Código do sistema (repositório próprio, público) |
