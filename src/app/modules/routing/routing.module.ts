import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent, DialComponent } from '../../components';

let routes: Routes = [
  {
    path: 'edit',
    component: ListComponent
  },
  {
    path: '',
    component: DialComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class RoutingModule { }
