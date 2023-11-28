import { NgModule } from '@angular/core';

import { ProviderRoutingModule } from './provider.routing';
import { ProviderLayoutComponent } from './provider-layout.component';
import { ClientComponent } from 'src/app/pages/client/client.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NewServiceProviderComponent } from 'src/app/pages/new-serviceprovider/new-serviceprovider.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [
    ProviderLayoutComponent,
    ClientComponent,
    NewServiceProviderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProviderRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaterialTimepickerModule
  ],
  providers: []
})
export class ProviderModule { }
