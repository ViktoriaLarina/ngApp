import {Links} from './links';

export interface Comment {
  id: number;
  title: string;
  content: string;
  _links: Links
}
