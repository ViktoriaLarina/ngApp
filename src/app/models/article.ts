import {Comment} from './comment';
import {Links} from './links';

export interface Article {
  id: number;
  title: string;
  content: string;
  type: string;
  _links: Links,
  _embedded: {
    comment: Comment[]
  }
}

