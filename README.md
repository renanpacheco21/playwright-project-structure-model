# 🧪 Playwright Project Structure Model

Estrutura de automação **Playwright + TypeScript** que demonstra, de forma enxuta, como organizar testes end-to-end com **Page Object Model (POM)**, centralização de seletores/dados e comandos reutilizáveis.

- ✅ Tipagem completa com `@playwright/test`
- ✅ Separação entre **comandos**, **elementos**, **constantes** e **fixtures**
- ✅ Configuração via `config.env.json` para manter credenciais fora do código
- ✅ Relatório HTML nativo (`playwright-report/`) pronto para consulta

---

## 🧱 Stack Principal

| Ferramenta        | Uso no projeto |
| ----------------- | -------------- |
| `@playwright/test` 1.56 | Runner, assertions e fixtures padrão |
| TypeScript (ESM)  | Tipagem estática e imports com extensão `.js` |
| Node.js ≥ 18      | Requisitos mínimos do Playwright |

---

## 📁 Estrutura de Pastas

```
playwright-project-structure-model
├── tests
│   ├── commands            # Ações executadas (métodos/helpers)
│   │   ├── BancoCommands.ts
│   │   ├── LoginCommands.ts
│   │   └── MenuCommands.ts
│   ├── constants           # Dados estáticos reutilizáveis
│   │   ├── buttons.ts          # Botões e seletores padrões do sistema
│   │   ├── fields.ts           # Campos e IDs reutilizáveis
│   │   └── messages.ts         # Mensagens e textos de validação
│   ├── fixtures
│   │   └── banco.json          # Massa de dados utilizada nos testes
│   ├── pages               # Implementação do Page Object Model (POM)
│   │   └── elements            # Mapeamento de seletores de cada página
│   │       ├── BancoElements.ts
│   │       ├── LoginElements.ts
│   │       └── MenuElements.ts
│   └── specs                   # Testes automatizados (cenários)
│       └── banco.spec.ts
├── config.env.json             # Configurações de ambiente (URL, usuário, senha, etc.)
├── playwright.config.ts        # Configurações globais do Playwright
└── package.json
```

---

## 🔧 Pré-requisitos e Setup

1. Instale o [Node.js 18+](https://nodejs.org/en) (npm é instalado junto).
2. Instale as dependências do projeto:
   ```bash
   npm install
   ```
3. Baixe os navegadores suportados pelo Playwright:
   ```bash
   npx playwright install
   ```

---

## 🔐 Configuração de Ambiente

Crie um arquivo `config.env.json` com suas credenciais e ambiente:

```json
{
  "base_url": "https://seu-sistema.com",
  "usuario": "admin",
  "senha": "123456"
}
```

---

## 🧩 Estrutura Lógica

| Pasta / Arquivo | Função |
|------------------|--------|
| **commands** | Define as ações realizadas em cada tela (click, fill, validação etc). |
| **constants** | Centraliza seletores e textos reutilizáveis. |
| **fixtures** | Contém dados fixos usados nos testes (ex: nomes de bancos, usuários). |
| **pages/elements** | Armazena apenas os seletores de cada página. |
| **specs** | Contém os testes automatizados escritos em Playwright Test. |

---

## 🧠 Execução dos Testes

### Rodar todos os testes:
```bash
npx playwright test
```

### Rodar um teste específico:
```bash
npx playwright test tests/specs/banco.spec.ts
```

### Executar em modo headed (abrindo navegador):
```bash
npx playwright test --headed
```

| Ação                             | Comando |
| -------------------------------- | ------- |
| Rodar todos os testes            | `npx playwright test` |
| Rodar apenas o cenário de banco  | `npx playwright test tests/specs/banco.spec.ts` |
| Abrir navegador (headed)         | `npx playwright test --headed` |
| Depurar com Inspector            | `npx playwright test --debug` |
| Abrir o último relatório HTML    | `npx playwright show-report` |

> O `playwright.config.ts` define `reporter: 'html'`, execução em 1 worker e coleta de trace apenas quando houver retry.

---

## 📊 Relatórios

- `playwright-report/`: relatório padrão HTML (sobrescrito a cada run).
- `allure-results/` e `allure-report/`: diretórios prontos para integração com o Allure caso deseje adicionar o reporter no futuro (não habilitado por padrão).

Para visualizar o relatório nativo:
```bash
npx playwright show-report
```

Se quiser usar Allure, instale o CLI (`npm i -D allure-commandline`) e configure o reporter no `playwright.config.ts`.

---

## 🧑‍💻 Exemplo de Teste

```ts
import { test } from '@playwright/test';
import { BancoCommands } from '../commands/BancoCommands.js';
import { MenuCommands } from '../commands/MenuCommands.js';
import { LoginCommands } from '../commands/LoginCommands.js';

test.describe('Banco', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginCommands(page);
    const menu = new MenuCommands(page);

    await login.fazLogin();
    await menu.acessaMenu('Banco');
  });

  test('Cadastrar novo Banco', async ({ page }) => {
    const bancoPage = new BancoCommands(page);

    await bancoPage.criarNovoBanco();
  });
});
```

---

## 💡 Boas práticas adotadas

- Page Objects contêm **somente seletores**, mantendo comandos focados em regras de negócio.
- Dados sensíveis e massa ficam fora do código (`config.env.json` e fixtures).
- Assertions centralizadas usando `expect` garantem feedbacks claros (`Messages.SUCESSO_OPERACAO`).
- Arquitetura pronta para crescer: basta adicionar novos `Elements`, `Commands` e `specs`.

---

## 🧹 Manutenção e Dicas

- Use `npx playwright test --reporter=list` quando quiser logs enxutos no terminal.
- Limpe `playwright-report/`, `allure-results/` e `allure-report/` antes de commitar para evitar ruído.
- Caso um seletor mude, atualize a classe dentro de `tests/pages/elements` e os testes voltarão a funcionar sem tocar nos specs.

Bom proveito! 🎯

