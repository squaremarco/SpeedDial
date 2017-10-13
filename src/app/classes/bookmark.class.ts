import * as uuid from 'uuid/v4'

export class Bookmark {
  constructor(
    public id?: string,
    public title?: string,
    public url?: string,
    public imageUrl?: string) {
    this.id = id ? id : uuid().replace(/-/g, '');
    this.title = title ? title : '';
    this.url = url ? url : '';
    this.imageUrl = imageUrl ? imageUrl : '';
  }
}
