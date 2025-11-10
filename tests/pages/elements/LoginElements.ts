import { Page } from '@playwright/test';

export class LoginElements {

  constructor(private readonly page: Page) { }

  get mensagem() {
    return this.page.locator('.login-welcome-message > span');
  }

  get inputUsuario() {
    return this.page.locator('#Login')
  }

  get inputSenha() {
    return this.page.locator('#senha')
  }

  get btnEnviar() {
    return this.page.locator('input[value="Enviar"]')
  }

  get tituloHome() {
    return this.page.locator('h1', { hasText: 'Processos Pendentes' })
  }
}
