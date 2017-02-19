import { TicketTestingPage } from './app.po';

describe('ticket-testing App', () => {
  let page: TicketTestingPage;

  beforeEach(() => {
    page = new TicketTestingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
