# 🧪 Playwright Test Modelo de Estruturação

Automação de testes end-to-end desenvolvida em **Playwright + TypeScript**, estruturada seguindo o padrão **Page Object Model (POM)** com separação entre **comandos**, **elementos** e **constantes** para facilitar manutenção, reuso e legibilidade.

---

## 📂 Estrutura do Projeto

```
playwright-project-structure-model
├── tests
│   ├── constants
│   │   ├── buttons.ts          # Botões e seletores padrões do sistema
│   │   ├── fields.ts           # Campos e IDs reutilizáveis
│   │   └── messages.ts         # Mensagens e textos de validação
│   ├── fixtures
│   │   └── banco.json          # Massa de dados utilizada nos testes
│   ├── pages
│   │   ├── commands            # Ações executadas (métodos das páginas)
│   │   │   ├── BancoCommands.ts
│   │   │   ├── LoginCommands.ts
│   │   │   └── MenuCommands.ts
│   │   └── elements            # Mapeamento de seletores de cada página
│   │       ├── BancoElements.ts
│   │       ├── LoginElements.ts
│   │       └── MenuElements.ts
│   └── specs                   # Testes automatizados (cenários)
│       └── banco.spec.ts
├── config.env.json             # Configurações de ambiente (URL, usuário, senha, etc.)
├── playwright.config.ts        # Configurações globais do Playwright
└── package.json
```

---

## ⚙️ Pré-requisitos

Antes de rodar os testes, certifique-se de ter:

- [Node.js](https://nodejs.org/en/) v18 ou superior  
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) instalado  
- Playwright instalado globalmente (opcional)

---

## 🚀 Instalação

```bash
# Instalar dependências
npm install

# Baixar os browsers necessários
npx playwright install
```

---

## 🔑 Configuração do Ambiente

Crie um arquivo `config.env.json` com suas credenciais e ambiente:

```json
{
  "base_url": "https://meusistema.com",
  "usuario": "admin",
  "senha": "123456"
}
```

---

## 🧩 Estrutura Lógica

| Pasta / Arquivo | Função |
|------------------|--------|
| **constants** | Centraliza seletores e textos reutilizáveis. |
| **fixtures** | Contém dados fixos usados nos testes (ex: nomes de bancos, usuários). |
| **pages/elements** | Armazena apenas os seletores de cada página. |
| **pages/commands** | Define as ações realizadas em cada tela (click, fill, validação etc). |
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

### Abrir o relatório após a execução:
```bash
npx playwright show-report
```

---

## 🧾 Relatórios

Os relatórios HTML são gerados automaticamente em:
```
playwright-report/
```

Para visualizar:
```bash
npx playwright show-report
```

---

## 🧰 Boas Práticas do Projeto

✅ Uso do padrão **Page Object Model (POM)**  
✅ Separação clara entre **elementos, comandos e testes**  
✅ Mensagens e seletores centralizados em `constants`  
✅ Massas de dados externas em `fixtures`  
✅ Validações consistentes com `expect()`  
✅ `test.step()` usado para organização e relatórios detalhados  

---

## 🧑‍💻 Exemplo de Teste

```ts
import { test } from '@playwright/test';
import { LoginCommands } from '../pages/commands/LoginCommands';
import { BancoCommands } from '../pages/commands/BancoCommands';

test('Cadastrar novo Banco com sucesso', async ({ page }) => {
  const login = new LoginCommands(page);
  const banco = new BancoCommands(page);

  await test.step('Fazer login', async () => {
    await login.fazLogin();
  });

  await test.step('Cadastrar novo banco', async () => {
    await banco.criarNovoBanco();
  });
});
```

---

