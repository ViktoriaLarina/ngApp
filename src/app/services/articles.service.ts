import {Inject, Injectable} from '@angular/core';
import {BASE_URL_TOKEN} from '../config';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs/index';

import {Articles} from '@models/articles';
import {Article} from '@models/article';
import {StaticData} from '@utils/staticData';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  dataArticles = new Subject<Articles>();
  currentArticleData = new Subject<Article>();
  currentComments = new Subject<Comment[]>();

  constructor(@Inject(BASE_URL_TOKEN) private baseUrl: string,
              private http: HttpClient) {
  }

  loadArticles(pageNum = StaticData.DEFAULT_PAGE_NUMBER, perPage = StaticData.DEFAULT_ITEMS_PER_PAGE): void {
    const url = `${this.baseUrl}/api/article?page=${pageNum}&per_page=${perPage}`;
    this.http.get(url)
      .subscribe((data: Articles) => this.dataArticles.next(data));
  }

  getArticle(id: number): void {
    const url = `${this.baseUrl}/api/article/${id}`;
    this.http.get(url)
      .subscribe((data: Article) => this.currentArticleData.next(data));
  }

  getComments(id: number): void {
    const url = `${this.baseUrl}/api/article/${id}/comment`;
    this.http.get(url)
      .subscribe((data: Comment[]) => this.currentComments.next(data));
  }
}
