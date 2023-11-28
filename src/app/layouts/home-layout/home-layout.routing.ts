import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../pages/login/login.component';
import { NewConsumerComponent } from '../../pages/new-consumer/new-consumer.component';

const routes: Routes = [
  { path: '',  redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: NewConsumerComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeLayoutRouting { }