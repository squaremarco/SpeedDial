import { Component } from '@angular/core';
import { Bookmark } from '../../classes';
import { BookmarkService } from '../../services';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.scss']
})
export class DialComponent {
  constructor(private bookmarkService:BookmarkService) { }

  getItems():Array<Bookmark> {
    return this.bookmarkService.getBookmarks();
  }
}
