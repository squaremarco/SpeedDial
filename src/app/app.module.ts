import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { RoutingModule } from './modules';

import { AppComponent } from './app.component';
import { BookmarkComponent, DialComponent, ListComponent, NavigationComponent, ImportModalComponent, ExportModalComponent } from './components';
import { BookmarkService } from "./services";


@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    DialComponent,
    ListComponent,
    ImportModalComponent,
    ExportModalComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule.forRoot(),
    NgbModule.forRoot(),
    RoutingModule
  ],
  entryComponents: [
    ImportModalComponent,
    ExportModalComponent
  ],
  providers: [
    BookmarkService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
