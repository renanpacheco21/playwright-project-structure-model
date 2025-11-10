import { expect, Locator, Page } from '@playwright/test';
import { LoginElements } from '../elements/LoginElements';
import config from '../../../config.env.json'

export class LoginCommands {
  private elements: LoginElements;

  constructor(private readonly page: Page) {
    this.elements = new LoginElements(page);
  }

  async fazLogin(usuario = config.usuario, senha = config.senha, baseUrl = config.base_url) {
    const login = this.elements

    await this.page.goto(baseUrl);

    await expect(login.mensagem)
      .toBeVisible();

    await expect(login.mensagem)
      .toHaveText('Welcome.');

    await login.inputUsuario
      .fill(usuario);

    await login.inputSenha
      .fill(senha);

    const [response] = await Promise.all([
      this.page
        .waitForResponse(resp => resp.url().includes('/Home/') && resp.ok(), { timeout: 60000 }),

      login.btnEnviar.click(),
    ]);

    expect(response.status())
      .toBe(200);

    await expect(login.tituloHome)
      .toBeVisible();
  }
}
