import { Component, OnInit, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public router: Router) { };

  toggleRoute() {
    if (this.router.url === '/'){
      this.router.navigateByUrl('/edit');
    } else {
      this.router.navigateByUrl('/');
    }
  }

  importList() {

  }

  exportList() {

  }
}
