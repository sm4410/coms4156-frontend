import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerAppointmentComponent } from 'src/app/pages/consumer-appointment/consumer-appointment.component';
import { ConsumerRequestComponent } from 'src/app/pages/consumer-request/consumer-request.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { MatchComponent } from 'src/app/pages/match/match.component';
import { ServiceProviderComponent } from 'src/app/pages/service-provider/service-provider.component';

const routes: Routes = [
  { path: '',  redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'match', component: MatchComponent },
  { path: 'service-provider/:id', component: ServiceProviderComponent },
  { path: 'request', component: ConsumerRequestComponent },
  { path: 'appointment', component: ConsumerAppointmentComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthLayoutRouting { }