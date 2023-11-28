import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartupComponent } from './pages/startup/startup.component';
import { ElderlyCareLayoutComponent } from './layouts/elderlycare-layout/elderlycare-layout.component';
import { ProviderLayoutComponent } from './layouts/provider-layout/provider-layout.component';

const routes: Routes = [
  { path: '', component: StartupComponent },
  {
    path: 'elderlycare',
    component: ElderlyCareLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/elderlycare-layout/elderlycare-layout.module').then(m => m.ElderlyCareModule)
    }]
  },
  {
    path: 'provider',
    component: ProviderLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/provider-layout/provider-layout.module').then(m => m.ProviderModule)
    }]
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
