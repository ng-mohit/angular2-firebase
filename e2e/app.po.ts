export class AngularFirePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-fire-app h1')).getText();
  }
}
