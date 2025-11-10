import { Page } from '@playwright/test';
import { Buttons } from '../../constants/buttons'
import { Fields } from '../../constants/fields'

export class BancoElements {
  constructor(private readonly page: Page) { }

  get btnNovo() {
    return this.page.locator(Buttons.NOVO);
  }

  get campoNome() {
    return this.page.locator('#TelaAlteracaoBanco #Nome');
  }

  get campoPais() {
    return this.page.locator('#TelaAlteracaoBanco #InputBancoPaisId_Buscar');
  }

  get listaPais() {
    return this.page.locator('#InputBancoPaisId_Buscar_listbox .k-item');
  }

  get campoMoeda() {
    return this.page.locator('#TelaAlteracaoBanco #InputBancoMoedaId_Buscar');
  }

  get listaMoeda() {
    return this.page.locator('#InputBancoMoedaId_Buscar_listbox > [data-offset-index="0"]');
  }

  get btnSalvar() {
    return this.page.locator(Buttons.SALVAR);
  }

  get snackbar() {
    return this.page.locator(Fields.SNACKBAR);
  }
}
