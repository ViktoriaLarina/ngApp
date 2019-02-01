import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {catchError} from 'rxjs/operators';
import {ArticlesService} from '@services/articles.service';
import {Observable} from 'rxjs/index';
import {EMPTY} from 'rxjs';
import {Routs} from '@utils/enums/routs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router, private service: ArticlesService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      catchError((error, caught) => {
        this.router.navigate([`/${Routs.ERROR}`]);
        return EMPTY;
      })
    );
  }

}
