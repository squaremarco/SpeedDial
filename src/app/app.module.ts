import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { BookmarkComponent, DialComponent, ListComponent } from './components';


@NgModule({
  declarations: [
    AppComponent,
    BookmarkComponent,
    DialComponent,
    ListComponent
  ],
  imports: [
    RouterModule.forRoot(AppRoutes),
    BrowserModule,
    NgbModule.forRoot(),
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
