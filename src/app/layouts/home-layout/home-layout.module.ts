import { NgModule } from '@angular/core';
import { HomeLayoutRouting } from './home-layout.routing';
import { LoginComponent } from '../../pages/login/login.component';
import { NewConsumerComponent } from '../../pages/new-consumer/new-consumer.component';
import { HomeLayoutComponent } from './home-layout.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    LoginComponent,
    NewConsumerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeLayoutRouting
  ],
  providers: [],
})
export class HomeLayoutModule { }