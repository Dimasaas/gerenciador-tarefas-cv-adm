# Roteiro do vídeo — Projeto Integrador III (~5 minutos)

**O que o professor pede:** demonstrar a ferramenta, explicar a necessidade do sistema para o parceiro, apresentar as principais funcionalidades, relatar os desafios e falar das melhorias futuras.

## Antes de gravar

- [ ] Abra o sistema numa **janela anônima**, para começar sem dados: https://dimasaas.github.io/pi-3b-gerenciador-de-tarefas/
- [ ] Deixe abertas em outras abas o **quadro do GitHub Projects** (https://github.com/users/Dimasaas/projects/2) e o **repositório**.
- [ ] Gravador: o OBS ou a gravação de tela do Windows (`Win + Alt + R` na Xbox Game Bar). Grave com microfone.
- [ ] Não leia o roteiro palavra por palavra. Use as falas como guia e fale do seu jeito.

---

## 1. Abertura (0:00 – 0:30)
**Tela:** você na câmera, ou a tela de login do sistema.

> "Olá, eu sou o João Victor, aluno de Análise e Desenvolvimento de Sistemas da PUC Goiás. Este é o meu Projeto Integrador III: o Sistema Gerenciador de Tarefas Online, desenvolvido em parceria com a CV ADM, empresa onde eu trabalho."

## 2. O problema do parceiro (0:30 – 1:20)
**Tela:** pode deixar a tela de login, ou mostrar a página 4 da documentação (seção 2.2).

> "Eu trabalho na equipe da imobiliária 1001, que cuida da venda de lotes, da cobrança e da administração dos imóveis. O problema que a gente identificou apareceu primeiro na cobrança: são cerca de 330 vendas parceladas, e a única informação era um relatório em PDF do ERP. Cada contato com um cliente gerava uma tarefa — retornar em tal dia, conferir se a promessa de pagamento foi cumprida, mandar para o jurídico — e essas tarefas não ficavam registradas em lugar nenhum. Resultado: prazos perdidos e ninguém sabia quem tinha falado com quem."
>
> "A empresa resolveu isso na cobrança organizando as demandas em tarefas com responsável, prazo e status. Só que as outras áreas, como vendas, contratos e os projetos internos, continuam sem essa organização. Esse sistema leva esse modelo para qualquer equipe da empresa."

## 3. Gestão do projeto (1:20 – 1:50)
**Tela:** aba do GitHub Projects, na visão **Kanban**.

> "Para gerenciar o projeto eu usei o GitHub Projects. Dividi o trabalho em quatro sprints semanais, e cada cartão tem status, sprint, tipo e prazo. Os riscos também estão no quadro, como o prazo curto e o fato de os dados ficarem no navegador."

*(Passe o mouse pelas colunas Todo, In Progress e Done.)*

## 4. Demonstração do sistema (1:50 – 3:50)
**Tela:** o sistema, na janela anônima.

1. **Cadastro e login (20 s):** clique em "Cadastre-se", crie a conta (nome, e-mail e senha) e entre.
   > "O acesso é controlado: cada colaborador tem a sua conta, e a senha é guardada criptografada, com hash."
2. **Dados de exemplo (15 s):** clique em **"Carregar dados de exemplo"**.
   > "Para a demonstração, carreguei três projetos baseados em demandas reais da empresa: a cobrança, a organização dos sistemas internos e os backups. Os clientes e os colegas são fictícios, para proteger dados pessoais."
3. **Projetos (15 s):** mostre os cartões.
   > "Cada projeto tem prazo, membros e uma barra de progresso das tarefas concluídas."
4. **Kanban (50 s):** abra o projeto **Cobrança**.
   - Mostre a tarefa **atrasada**, com a borda vermelha.
   - **Arraste** um cartão de "A fazer" para "Em andamento", e depois use a seta → para mandar outro para "Concluído".
   - Crie uma tarefa nova: título "Ligar para o cliente Q09 L03", responsável **Ana**, e um prazo.
   > "Aqui está o quadro Kanban: A fazer, Em andamento e Concluído. Dá para arrastar o cartão ou usar as setas, o que também funciona no celular. O sistema destaca sozinho as tarefas atrasadas."
5. **Calendário (20 s):** clique em **Calendário**.
   > "O calendário junta os prazos de todos os projetos. Cada cor é um status, e o vermelho é o prazo final de um projeto."

## 5. Desafios (3:50 – 4:20)
**Tela:** o calendário, ou o repositório no GitHub.

> "O principal desafio foi transformar um problema que a empresa já tinha vivido na cobrança em algo genérico, que sirva para qualquer equipe. Outro foi o prazo: quatro semanas, sozinho, então eu fechei um escopo mínimo com a empresa em ata e usei HTML, CSS e JavaScript puros, sem framework. E também a proteção de dados: o repositório é público, então nenhum dado real de cliente entrou no projeto."

## 6. Melhorias futuras (4:20 – 4:45)

> "Como próximos passos: um back-end com banco de dados, para a equipe toda compartilhar as mesmas informações, já que hoje os dados ficam no navegador; notificações de prazo por e-mail ou WhatsApp; edição e comentários nas tarefas; e a integração com o painel de cobrança da empresa, criando tarefas automaticamente."

## 7. Encerramento (4:45 – 5:00)
**Tela:** o README do repositório, com os links.

> "O sistema está publicado no GitHub Pages, e o código, a documentação e o quadro de gestão estão no GitHub. Obrigado!"

---

**Dica:** se passar de 5 minutos, encurte a seção 2 (problema). A demonstração (seção 4) é o que mais pesa na nota.
