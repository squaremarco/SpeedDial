import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookmarkService } from '../../services';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImportModalComponent } from '../../components/import-modal/import-modal.component';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  constructor(private router: Router, private modalService: NgbModal, private bookmarkService: BookmarkService) { }

  getRoute(): string {
    return this.router.url;
  }

  openImportModal(): void {
    this.modalService.open(ImportModalComponent);
  }
}
