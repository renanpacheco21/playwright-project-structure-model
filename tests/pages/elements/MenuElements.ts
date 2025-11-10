import { Page, Locator } from '@playwright/test';

export class MenuElements {
  constructor(private readonly page: Page) { }

  get buscaMenu() {
    return this.page.locator('#BuscaMenu');
  }

  get menuLinks() {
    return this.page.locator('.menu .k-link')
  }
}
