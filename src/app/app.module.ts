import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ArticleComponent} from './components/article/article.component';
import {ErrorPageComponent} from './components/error-page/error-page.component';
import {HeaderComponent} from './components/home-page/header/header.component';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {TableComponent} from './components/table/table.component';
import {TableItemComponent} from './components/table/table-item/table-item.component';

import {environment} from '../environments/environment';
import {BASE_URL_TOKEN} from './config';
import {ErrorInterceptor} from "./interceptors/error-interceptor";

import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    ErrorPageComponent,
    HeaderComponent,
    LoginPageComponent,
    HomePageComponent,
    TableComponent,
    TableComponent,
    TableItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: BASE_URL_TOKEN,
      useValue: environment.baseUrl
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
