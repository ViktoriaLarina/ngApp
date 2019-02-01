import {Component, OnDestroy, OnInit} from '@angular/core';
import {Article} from '@models/article';
import {ArticlesService} from '@services/articles.service';
import {Subscription} from 'rxjs/index';
import {PaginationInstance} from 'ngx-pagination';
import {StaticData} from '@utils/staticData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnDestroy {

  arrayOfArticles: Article[];
  subscription: Subscription;
  isResponse: boolean;
  totalCountOfItems: number;

  config: PaginationInstance = {
    itemsPerPage: StaticData.DEFAULT_ITEMS_PER_PAGE,
    currentPage: StaticData.DEFAULT_PAGE_NUMBER
  };

  constructor(private service: ArticlesService) {
  }

  ngOnInit() {
    this.arrayOfArticles = [];
    this.subscription = this.service.dataArticles.subscribe(data => {
      this.arrayOfArticles = data._embedded.article;
      this.isResponse = true;
      this.totalCountOfItems = data.total;
    });
    this.service.loadArticles();
  }

  onPageChange(number: number) {
    this.config.currentPage = number;
    this.service.loadArticles(this.config.currentPage, this.config.itemsPerPage);
  }

  onItemsCountChange() {
    this.service.loadArticles(this.config.currentPage, this.config.itemsPerPage);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
