import { Routes } from '@angular/router';
import { ListComponent, DialComponent } from './components';

let AppRoutes:Routes = [
  {
    path: 'edit',
    component: ListComponent
  },
  {
    path: '',
    component: DialComponent
  }
];

export { AppRoutes };
