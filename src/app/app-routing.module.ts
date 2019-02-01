import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginPageComponent} from './components/login-page/login-page.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {TableComponent} from './components/table/table.component';
import {ArticleComponent} from './components/article/article.component';

import {LoginGuard} from './guards/login.guard';
import {HomeGuard} from './guards/home.guard';
import {Routs} from '@utils/enums/routs';

const itemRoutes: Routes = [
  {
    path: 'table',
    component: TableComponent
  },
  {
    path: 'article/:id',
    component: ArticleComponent
  },
  {
    path: '**',
    redirectTo: 'table'
  }
];

const routes: Routes = [
  {
    path: Routs.LOGIN.toString(),
    canActivate: [LoginGuard],
    component: LoginPageComponent
  },
  {
    path: Routs.HOME.toString(),
    children: itemRoutes,
    canActivate: [HomeGuard],
    component: HomePageComponent
  },
  {
    path: Routs.ERROR.toString(),
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: Routs.LOGIN.toString()
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
