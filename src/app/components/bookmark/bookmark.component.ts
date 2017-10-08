import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent {
  @Input() title:String;
  @Input() url:String;
  @Input() imageUrl:String;
}
