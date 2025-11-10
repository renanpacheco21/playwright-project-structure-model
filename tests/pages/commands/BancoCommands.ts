import { expect, Page } from '@playwright/test';
import { Messages } from '../../constants/messages';
import novoBanco from '../../fixtures/banco.json';
import { BancoElements } from '../elements/BancoElements';

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