import { JoshcvPage } from './app.po';

describe('joshcv App', function() {
  let page: JoshcvPage;

  beforeEach(() => {
    page = new JoshcvPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
