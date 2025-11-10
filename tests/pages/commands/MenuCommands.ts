import { expect, Page } from '@playwright/test';
import { MenuElements } from '../elements/MenuElements';

export class MenuCommands {
  private elements: MenuElements;

  constructor(private readonly page: Page) {
    this.elements = new MenuElements(page);
  }


  async acessaMenu(nomeMenu: string) {
    const menu = this.elements

    await menu.buscaMenu
      .fill(nomeMenu);

    const menuItem = menu.menuLinks.filter({ hasText: nomeMenu }).first();

    await expect(menuItem)
      .toBeVisible({ timeout: 5000 });

    await menuItem
      .click();
  }
}