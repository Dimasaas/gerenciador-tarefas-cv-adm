# Sistema Gerenciador de Tarefas Online — CV ADM

Projeto Integrador III — Análise e Desenvolvimento de Sistemas, PUC Goiás (CEAD), 2026.
Aluno: **João Victor Diamantino Cardoso**

Sistema web para a equipe da **CV Administradora de Obras Ltda. (CV ADM)** e da imobiliária 1001 organizarem, distribuírem e acompanharem as tarefas e os projetos internos da empresa.

- **Sistema online:** https://dimasaas.github.io/gerenciador-tarefas-cv-adm/
- **Gestão do projeto (GitHub Projects):** _link na aba Projects do repositório_

## Funcionalidades

| Requisito | Como funciona |
|---|---|
| Cadastro e autenticação | Conta com nome, e-mail e senha. A senha é guardada como hash SHA-256 |
| Projetos | Nome, descrição, prazo final e membros. Os cards mostram o progresso |
| Tarefas | Título, descrição, responsável (um dos membros) e prazo. As tarefas atrasadas ficam destacadas |
| Quadro Kanban | Colunas "A fazer", "Em andamento" e "Concluído". Dá para arrastar e soltar ou usar os botões ← → |
| Calendário | Visão mensal com os prazos das tarefas (na cor do status) e dos projetos |

## Como usar

Abra o link do sistema online, ou baixe o repositório e abra o `index.html` no navegador. Não precisa instalar nada.

1. Crie uma conta. Para testar com membros, crie outras contas no mesmo navegador.
2. Crie um projeto e marque os membros.
3. Abra o projeto, adicione tarefas e mova-as pelo Kanban.
4. Acompanhe os prazos na aba Calendário.

## Tecnologias

HTML, CSS e JavaScript puros, sem framework e sem etapa de build. Os dados ficam no `localStorage` do navegador.

| Arquivo | Conteúdo |
|---|---|
| `index.html` | Estrutura da página |
| `style.css` | Estilos e layout responsivo |
| `app.js` | Telas, regras e persistência |

## Limitações e melhorias futuras

- **Os dados ficam só no navegador:** cada computador tem os próprios dados. A próxima etapa é um back-end com API e banco de dados (por exemplo, Rails e PostgreSQL, a mesma base dos sistemas internos da empresa) para a equipe compartilhar as informações.
- **Notificações** de prazo por e-mail ou WhatsApp.
- **Edição de tarefas e comentários**, com histórico.
- **Perfis de acesso** separando gestor e colaborador.
