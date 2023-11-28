import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { HomeLayoutComponent } from '../home-layout/home-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: AuthLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('../auth-layout/auth-layout.module').then(m => m.AuthLayoutModule)
    }],
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('../home-layout/home-layout.module').then(m => m.HomeLayoutModule),
    }]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElderlyCareRoutingModule { }
