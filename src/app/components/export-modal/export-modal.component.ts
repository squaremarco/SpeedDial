import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BookmarkService } from '../../services';

@Component({
  selector: 'app-export-modal',
  templateUrl: './export-modal.component.html',
  styleUrls: ['./export-modal.component.scss']
})
export class ExportModalComponent {
  constructor(private bookmarkService: BookmarkService, public activeModal: NgbActiveModal) { }

  exportItems(): string {
    return this.bookmarkService.getBookmarksAsString();
  }
}
