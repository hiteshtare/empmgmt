import { EmpmgmtPage } from './app.po';

describe('empmgmt App', function() {
  let page: EmpmgmtPage;

  beforeEach(() => {
    page = new EmpmgmtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
