# Contextualização Extensionista — Organização Parceira

> Rascunho. Trechos marcados com **[CONFIRMAR]** precisam ser validados com a empresa.

## 1. Caracterização da organização parceira

**Nome:** CV ADM (Campos Verdes)
**Razão social:** CV Administradora de Obras Ltda. — CNPJ 31.441.640/0001-60
**Ramo:** administração de obras e empreendimentos imobiliários (organização privada)
**Endereço:** Av. Leblon, 260, Quadra Área, Casa 01 — Goiânia/GO
**Empresa operadora dos empreendimentos:** 1001 Negócios Imobiliários (TR Enterprises Ltda., CNPJ 60.478.165/0001-03, CRECI-GO 44685-J — https://1001imoveis.com)

O trabalho foi realizado junto à equipe da imobiliária **1001 Negócios Imobiliários**, que cuida da venda de lotes em loteamentos como o Village Campos Verdes e, em breve, o Setor Comercial Salutis. O aluno integra a equipe da 1001 desde junho de 2026, como Auxiliar Administrativo, e atua no desenvolvimento dos sistemas internos.

A 1001 atua há 8 anos na Grande Goiânia. Suas principais frentes são:

- **Venda de lotes:** principalmente no Village Campos Verdes (Goiânia), da CV ADM, e também em outros loteamentos operados pela 1001, como o Residencial Boulevard (Aparecida de Goiânia) e o Setor Comercial Salutis (Senador Canedo, em desenvolvimento);
- **Intermediação** de imóveis exclusivos e de parceiros, incluindo apartamentos;
- **Administração de aluguéis** de terceiros: contrato, cobrança, repasse e prestação de contas;
- **Cobrança da carteira** de clientes que compraram lotes de forma parcelada.

A empresa já usa sistemas internos desenvolvidos sob medida, como o painel de cobrança de inadimplência (INAD) e o sistema financeiro. Esses sistemas cuidam do **dinheiro** (parcelas, cobrança e caixa). Fora da cobrança, nenhum deles organiza o **trabalho** da equipe: quem faz o quê, até quando e em que pé está.

**Função do aluno na empresa:** Auxiliar Administrativo, contratado pela CV ADM em 29/06/2026, atuando junto à equipe da 1001 e no desenvolvimento dos sistemas internos.

## 2. Problema identificado

O problema foi identificado na **cobrança da carteira de clientes inadimplentes** do Village Campos Verdes, com cerca de 330 vendas parceladas acompanhadas pela equipe.

A única fonte de informação era o **relatório de inadimplência em PDF** emitido pelo ERP da empresa (ProUAU). A equipe lia esse relatório e fazia os contatos por WhatsApp. Cada contato com um cliente gerava uma tarefa de acompanhamento, como retornar em uma data combinada, conferir se uma promessa de pagamento foi cumprida ou encaminhar o caso ao jurídico. Essas tarefas não tinham onde ficar registradas, e cada novo PDF substituía o anterior sem guardar o histórico. Isso causava:

- **Falta de prioridade:** não havia um critério claro de quem cobrar primeiro;
- **Prazos perdidos:** recontatos agendados e promessas de pagamento vencidas dependiam da memória de quem atendeu;
- **Responsabilidade difusa:** não se sabia quem da equipe tinha falado com qual cliente, nem o que tinha sido combinado;
- **Sem visão do andamento:** a gestão não conseguia ver o que estava pendente, em andamento ou resolvido.

A solução foi desenvolvida em etapas pelo próprio aluno:

1. **Julho de 2026:** uma ferramenta que **lia os relatórios de inadimplência em PDF** (importação em lote, com extração da data de emissão) e **transformava os dados em um banco SQL** (SQLite). Com isso, cada relatório virou uma "foto" datada da carteira, e passou a ser possível comparar os meses e medir quem pagou.
2. Sobre esse banco foram criados a **fila de cobrança priorizada** e a **lista de tarefas do dia**: promessas vencidas, recontatos agendados, clientes sem resposta e casos novos no pré-jurídico, cada um com o registro do desfecho.
3. Depois, a leitura do PDF foi substituída pela **integração direta com a API do ERP**, e o sistema evoluiu para o painel INAD usado hoje.

Essa experiência mostrou que **organizar as demandas em tarefas com responsável, prazo e status** resolve o problema.

As demais áreas da empresa, como vendas, demarcação de lotes, documentação de contratos e projetos internos, têm a mesma necessidade, mas não contam com uma ferramenta para isso. O sistema proposto leva esse modelo de organização para qualquer projeto ou equipe da empresa.

## 3. Objetivos da solução proposta

**Objetivo geral:** desenvolver o **Sistema Gerenciador de Tarefas Online**, um sistema web para a equipe organizar, distribuir e acompanhar as tarefas e os projetos internos da empresa.

**Objetivos específicos:**

1. Permitir o cadastro e o login de cada colaborador, com acesso controlado;
2. Organizar o trabalho em **projetos**, como "Lançamento Setor Comercial Salutis" ou "Cobrança — novembro", com prazo e membros definidos;
3. Criar tarefas com **responsável** e **prazo**, e acompanhá-las até a conclusão;
4. Mostrar o andamento em um **quadro Kanban** (A fazer, Em andamento e Concluído);
5. Exibir prazos de tarefas e projetos em um **calendário**, destacando as tarefas atrasadas.

## 4. Público beneficiado

- **Diretoria:** passa a ter uma visão consolidada do andamento das demandas e dos prazos;
- **Colaboradores** (corretores, administrativo, financeiro e cobrança): sabem com clareza o que é responsabilidade de cada um e até quando;
- **Clientes da empresa** (compradores de lotes e proprietários e inquilinos de imóveis administrados): são beneficiados indiretamente, com retornos mais rápidos e menos demandas esquecidas.

## 5. Registro da interação com o parceiro

A interação com a organização parceira está registrada na **ata de reunião** em anexo, assinada pelo aluno e por um representante da CV ADM.
