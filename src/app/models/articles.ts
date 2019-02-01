import {Article} from './article';
import {LinksExtend} from './links';

export interface Articles {
  page: number;
  limit: number;
  pages: number;
  total: number;
  _links: LinksExtend;
  _embedded: {
    article: Article[];
  }
}
