import { Ng2PatternsPage } from './app.po';

describe('ng2-patterns App', function() {
  let page: Ng2PatternsPage;

  beforeEach(() => {
    page = new Ng2PatternsPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-patterns works!');
  });
});
