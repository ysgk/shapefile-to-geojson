import { DataeyeShapefilePage } from './app.po';

describe('dataeye-shapefile App', () => {
  let page: DataeyeShapefilePage;

  beforeEach(() => {
    page = new DataeyeShapefilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
