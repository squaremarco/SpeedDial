import { DragulaService } from 'ng2-dragula';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {
  constructor(private dragulaService:DragulaService) { };

  ngOnInit() {
    this.dragulaService.setOptions('list-bag', {
      'moves': function(e, c, h){
        return h.className.includes("dragula-handle");
      }
    });
  };

  ngOnDestroy() {
    this.dragulaService.destroy('list-bag');
  }
}
