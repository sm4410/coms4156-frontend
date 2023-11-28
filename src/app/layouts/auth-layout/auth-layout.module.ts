import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { AuthLayoutRouting } from './auth-layout.routing';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthLayoutComponent } from "./auth-layout.component";
import { HomeComponent } from "src/app/pages/home/home.component";
import { MatchComponent } from "src/app/pages/match/match.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ServiceProviderComponent } from "src/app/pages/service-provider/service-provider.component";
import { ConsumerRequestComponent } from "src/app/pages/consumer-request/consumer-request.component";
import { ConsumerAppointmentComponent } from "src/app/pages/consumer-appointment/consumer-appointment.component";

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';


@NgModule({
  declarations: [
    AuthLayoutComponent,
    HomeComponent,
    MatchComponent,
    ServiceProviderComponent,
    ConsumerRequestComponent,
    ConsumerAppointmentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthLayoutRouting,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule
  ],
  providers: [],
})
export class AuthLayoutModule { }