import { RaviAngularDemoPage } from './app.po';

describe('ravi-angular-demo App', () => {
  let page: RaviAngularDemoPage;

  beforeEach(() => {
    page = new RaviAngularDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
