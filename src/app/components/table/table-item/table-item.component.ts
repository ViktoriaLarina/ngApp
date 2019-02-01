import {Component, Input} from '@angular/core';
import {Article} from '@models/article';

@Component({
  selector: '[app-table-item]',
  templateUrl: './table-item.component.html'
})
export class TableItemComponent {

  @Input() item: Article;

}
