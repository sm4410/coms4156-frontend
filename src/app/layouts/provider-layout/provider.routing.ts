import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from 'src/app/pages/client/client.component';
import { NewServiceProviderComponent } from 'src/app/pages/new-serviceprovider/new-serviceprovider.component';

const routes: Routes = [
  { path: '',  redirectTo: 'client', pathMatch: 'full' },
  { path: 'client', component: ClientComponent },
  { path: 'client/:id', component: NewServiceProviderComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
