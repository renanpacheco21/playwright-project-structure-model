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
