import * as uuid from 'uuid/v4'

export class Bookmark {
  id:String;
  title:String;
  url:String;
  imageUrl:String;

  constructor(title?:String, url?:String, imageUrl?:String){
    this.id = uuid().replace(/-/g, '');
    this.title = title ? title : '';
    this.url = url ? url : '';
    this.imageUrl = imageUrl ? imageUrl : '';
  }
}
