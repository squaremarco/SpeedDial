import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { RoutingModule } from './modules';

import { AppComponent } from './app.component';
import { BookmarkComponent, DialComponent, ListComponent, NavigationComponent, ImportModalComponent } from './components';
import { BookmarkService } from "./services";


@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    DialComponent,
    ListComponent,
    ImportModalComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule,
    NgbModule.forRoot(),
    RoutingModule
  ],
  entryComponents: [
    ImportModalComponent
  ],
  providers: [
    BookmarkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
