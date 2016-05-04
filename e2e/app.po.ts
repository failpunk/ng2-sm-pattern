export class Ng2PatternsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-patterns-app h1')).getText();
  }
}
