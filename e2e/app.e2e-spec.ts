import { BuscajaPage } from './app.po';

describe('buscaja App', () => {
  let page: BuscajaPage;

  beforeEach(() => {
    page = new BuscajaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
