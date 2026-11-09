# Projeto Integrador III–B — PUC Goiás (ADS)

Arquivos de entrega do **Sistema Gerenciador de Tarefas Online**. Organização parceira: CV ADM e equipe da imobiliária 1001.
Aluno: João Victor Diamantino Cardoso. Entrega: **07/12/2026**.

- **Sistema:** https://dimasaas.github.io/gerenciador-tarefas-cv-adm/
- **Código (repositório público):** https://github.com/Dimasaas/gerenciador-tarefas-cv-adm (na pasta `gerenciador-tarefas/`, versionada à parte)
- **Gestão do projeto:** https://github.com/users/Dimasaas/projects/2

| Arquivo | O que é |
|---|---|
| `__ Plataforma A.pdf` | Enunciado do professor |
| `Documentacao-PI-III-Gerenciador-de-Tarefas.pdf` | Documentação final (item 2.4) |
| `Documentacao-PI-III-Gerenciador-de-Tarefas_assinado.pdf` | Documentação assinada |
| `documentacao/` | Fonte da documentação (HTML e imagens) |
| `Ata-Reuniao-CV-ADM.pdf` | Ata original, sem assinatura |
| `Ata-Reuniao-CV-ADM_assinado.pdf` | Ata assinada pelo aluno (falta a assinatura do Tales) |
| `ata/`, `ata-reuniao-parceiro.md` | Fonte da ata |
| `documento-parceiro.md` | Contextualização extensionista (item 2.1) |
| `plano-trello.md` | Plano das sprints (item 2.2) |
| `roteiro-video.md` | Roteiro do vídeo de ~5 minutos |

Para gerar os PDFs de novo a partir do HTML:

```bash
chrome --headless=new --no-pdf-header-footer --print-to-pdf=Documentacao-PI-III-Gerenciador-de-Tarefas.pdf documentacao/documentacao.html
```
