import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Bookmark } from '../../classes';
import { BookmarkService } from '../../services';

import { ExportModalComponent } from '../../components/export-modal/export-modal.component';
import { ImportModalComponent } from '../../components/import-modal/import-modal.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private router: Router, private bookmarkService: BookmarkService, private modalService: NgbModal) { }

  getRoute(): string {
    return this.router.url;
  }

  isRoute(s: string): boolean {
    return this.getRoute() === '/edit'
  }

  addItem(): void {
    this.bookmarkService.addBookmark(new Bookmark());
  }

  openExportModal(): void {
    this.modalService.open(ExportModalComponent);
  }

  openImportModal(): void {
    this.modalService.open(ImportModalComponent);
  }

}
