import { expect, Page } from '@playwright/test';
import { Messages } from '../constants/messages.js';
import novoBanco from '../fixtures/banco.json' assert { type: 'json' };
import { BancoElements } from '../pages/elements/BancoElements.js';

export class BancoCommands {
  private elements: BancoElements;

  constructor(private readonly page: Page) {
    this.elements = new BancoElements(page);
  }

  async criarNovoBanco() {
    const banco = this.elements

    await banco.btnNovo
      .click();

    await banco.campoNome
      .fill(novoBanco.nome);

    await banco.campoPais
      .type(novoBanco.pais);

    await banco.listaPais
      .first()
      .click();

    await banco.campoMoeda
      .type(novoBanco.moeda);

    await banco.listaMoeda
      .first()
      .click();

    await banco.btnSalvar
      .click();

    await expect(banco.snackbar)
      .toContainText(Messages.SUCESSO_OPERACAO);

    await expect(banco.snackbar)
      .toBeHidden({ timeout: 30000 });
  }
}