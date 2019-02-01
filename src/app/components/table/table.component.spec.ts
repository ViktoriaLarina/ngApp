import {TableComponent} from './table.component';
import {ArticlesService} from '../../services/articles.service';

describe('TableComponent', () => {

  let service = {
    loadArticles: function () {
    }
  } as ArticlesService;

  it('calls onPageChange should change pageNumber in paginator config', () => {
    const comp = new TableComponent(service);
    const testValues = [0, -1, 1, 5, 10, Number.MAX_VALUE];
    testValues.forEach(value => {
      comp.onPageChange(value);
      expect(comp.config.currentPage).toBe(value, 'currentPage was changed');
    })
  });

  it('call onPageChange shouldn\'t change itemsPerPage in paginator config', () => {
    const comp = new TableComponent(service);
    const testValue = 5;
    const oldPerPage = comp.config.itemsPerPage;
    comp.onPageChange(testValue);
    expect(comp.config.itemsPerPage).toBe(oldPerPage, 'itemsPerPage wasn\'t affected');
  });

  it('calls onPageChange should call loadArticles', () => {
    spyOn(service, 'loadArticles');
    const comp = new TableComponent(service);
    const testValue = 5;
    comp.onPageChange(testValue);
    expect(service.loadArticles).toHaveBeenCalled();
  });
});
