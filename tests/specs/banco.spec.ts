import { test } from '@playwright/test';
import { BancoCommands } from '../pages/commands/BancoCommands';
import { MenuCommands } from '../pages/commands/MenuCommands';
import { LoginCommands } from '../pages/commands/LoginCommands';

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
