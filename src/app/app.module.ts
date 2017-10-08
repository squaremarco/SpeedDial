import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { BookmarkComponent, DialComponent, ListComponent, ImportModalComponent } from './components';
import { BookmarkService } from "./services";


@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    DialComponent,
    ListComponent,
    ImportModalComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    DragulaModule,
    NgbModule.forRoot(),
  ],
  entryComponents: [
    ImportModalComponent
  ],
  providers: [
    BookmarkService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
