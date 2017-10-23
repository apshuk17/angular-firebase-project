import { AngularFirebaseProjectPage } from './app.po';

describe('angular-firebase-project App', () => {
  let page: AngularFirebaseProjectPage;

  beforeEach(() => {
    page = new AngularFirebaseProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
