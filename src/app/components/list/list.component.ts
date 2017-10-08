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
  constructor(private dragulaService:DragulaService, private bookmarkService:BookmarkService) {
  };

  ngOnInit():void {
    let self = this;

    self.dragulaService.setOptions('list-bag', {
      'moves': function(e, c, h){
        return h.className.includes("dragula-handle");
      }
    });

    self.dragulaService.dragend.subscribe(function(){
      self.updateItems();
    });
  }

  ngOnDestroy():void {
    this.dragulaService.destroy('list-bag');
  }

  addItem():void {
    this.bookmarkService.addBookmark(new Bookmark());
  }

  getItems():Array<Bookmark> {
    return this.bookmarkService.getBookmarks();
  }

  resetItems():void {
    this.bookmarkService.resetBookmarks();
  }

  updateItems():void {
    this.bookmarkService.updateBookmarks();
  }

  removeItem(index:number):void {
    this.bookmarkService.removeBookmarkByIndex(index);
  }
}
