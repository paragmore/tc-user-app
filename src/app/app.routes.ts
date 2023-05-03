import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  // },
];
