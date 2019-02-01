import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '@services/articles.service';
import {take} from 'rxjs/internal/operators';
import {Article} from '@models/article';
import {Observable} from 'rxjs/index';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article$: Observable<Article>;
  comments$: Observable<Comment[]>;

  constructor(private service: ArticlesService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.article$ = this.service.currentArticleData.pipe(take(1));
    this.comments$ = this.service.currentComments.pipe(take(1));
    this.route.params.subscribe(params => {
      this.service.getArticle(params['id']);
      this.service.getComments(params['id']);
    });

    this.route.params.subscribe(params => params['id']);

  }


}
