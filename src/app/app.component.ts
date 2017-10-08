import { Component} from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImportModalComponent } from './components';
import { BookmarkService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router, private modalService: NgbModal, private bookmarkService: BookmarkService) { };

  openImportModal():void {
    this.modalService.open(ImportModalComponent);
  }

  exportListToClipboard():void {
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.color = 'transparent';
    textArea.style.background = 'transparent';
    textArea.value = this.bookmarkService.getBookmarksAsString();

    document.body.appendChild(textArea);
    textArea.select();
    try {
      var successful = document.execCommand('copy');
      if (!successful) throw new DOMException();

    } catch (err) {
      console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
  }
}
