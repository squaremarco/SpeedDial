import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkService } from '../../services';

@Component({
  selector: 'app-import-modal',
  templateUrl: './import-modal.component.html',
  styleUrls: ['./import-modal.component.scss']
})
export class ImportModalComponent {
  string:string = '';
  constructor(private bookmarkService:BookmarkService, public activeModal: NgbActiveModal) { }

  importItems(string:string){
    this.bookmarkService.setBookmarksByString(string);
  }
}
