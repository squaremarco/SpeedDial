import { DragulaService } from 'ng2-dragula';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Bookmark } from '../../classes';
import { BookmarkService } from '../../services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  public items: Bookmark[];

  constructor(private dragulaService: DragulaService, private bookmarkService: BookmarkService) {
    this.getItems();
  }

  ngOnInit(): void {
    this.dragulaService.createGroup('list-bag', {
      moves: function(e, c, h) {
        return h.className.includes('dragula-handle');
      }
    });

    this.dragulaService.dragend().subscribe(() => this.updateItems());
  }

  ngOnDestroy(): void {
    this.dragulaService.destroy('list-bag');
  }

  getItems(): void {
    this.items = this.bookmarkService.getBookmarks();
  }

  updateItems(): void {
    this.bookmarkService.setBookmarks(this.items);
  }

  removeItem(index: number): void {
    this.bookmarkService.removeBookmarkByIndex(index);
  }
}
