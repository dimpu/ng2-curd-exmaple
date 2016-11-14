import { CURDPage } from './app.po';

describe('curd App', function() {
  let page: CURDPage;

  beforeEach(() => {
    page = new CURDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
