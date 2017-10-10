import { Injectable } from '@angular/core';

import { Bookmark } from '../../classes';
const uuid = require('uuid/v4');

@Injectable()
export class BookmarkService {
  private bookmarks:Array<Bookmark>;

  constructor() {
    let content = localStorage.getItem('bookmarks') ? JSON.parse(localStorage.getItem('bookmarks')) : null;
    if(!content) {
      this.resetBookmarks();
    } else {
      this.setBookmarks(content);
    }
  }

  addBookmark(bookmark:Bookmark):void {
    this.bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  removeBookmark(bookmark:Bookmark):void {
    for(let i = this.bookmarks.length - 1; i >= 0; i--){
      if(this.bookmarks[i].id === bookmark.id) {
        this.bookmarks.splice(i, 1);
      }
    }
    localStorage.setItem('bookmarks', this.getBookmarksAsString());
  }

  removeBookmarkByIndex(index:number):void {
    this.bookmarks.splice(index, 1);
    localStorage.setItem('bookmarks', this.getBookmarksAsString());
  }

  setBookmarks(bookmarks:Array<Bookmark>):void {
    this.bookmarks = bookmarks;
    localStorage.setItem('bookmarks', this.getBookmarksAsString());
  }

  setBookmarksByString(bookmarks:string):void {
    this.bookmarks = JSON.parse(bookmarks);
    localStorage.setItem('bookmarks', bookmarks);
  }

  getBookmarks():Array<Bookmark> {
    return this.bookmarks;
  }

  getBookmarksAsString():string {
    return JSON.stringify(this.bookmarks);
  }

  resetBookmarks():void {
    this.bookmarks = [];
    this.updateBookmarks();
  }

  updateBookmarks():void {
    localStorage.setItem('bookmarks', this.getBookmarksAsString());
  }
}
