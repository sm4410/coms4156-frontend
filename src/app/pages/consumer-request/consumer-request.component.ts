import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceProvider } from 'src/app/dtos/service-provider';
import { AuthService } from 'src/app/services/auth-service';
import { Availability } from 'src/app/dtos/availability';

import * as moment from 'moment';
import { ConsumerRequest } from 'src/app/dtos/consumer-request';
import { TupleDateTime } from 'src/app/dtos/tupledatetime';

@Component({
  selector: 'app-consumer-request',
  templateUrl: './consumer-request.component.html',
  styleUrls: ['./consumer-request.component.css']
})
export class ConsumerRequestComponent implements OnInit, OnDestroy {
  @ViewChild('requestForm') requestForm?: NgForm;
  
  public providerName: string = '';

  public serviceProvider: ServiceProvider | undefined;
  constructor(private authService: AuthService,
    private router: Router,
    private location: Location) {
    const state = this.location.getState() as Object;
    const defaultServiceProvider: ServiceProvider = {
      id: 0,
      parentClientId: 0,
      providerName: '',
      address: '',
      location: [],
      services: [],
      availabilities: []
    }
    const objLength = Object.keys(state).length;
    const defaultObjLength = Object.keys(defaultServiceProvider).length;
    if (objLength != defaultObjLength + 1) {
      this.router.navigate(['/home/match']);
    }

    this.serviceProvider = state as ServiceProvider;
  }


  ngOnInit(): void {
    this.providerName = this.serviceProvider?.providerName!;
  }

  public makeRequest(): void {
    const startDate = moment(this.requestForm?.controls['startDate'].value);
    const startTime: Date = moment(this.requestForm?.controls['startTime'].value, ['hh:mm A']).toDate();
    const endDate = moment(this.requestForm?.controls['endDate'].value);
    const endTime: Date = moment(this.requestForm?.controls['endTime'].value, ['hh:mm A']).toDate();
    const serviceType = this.requestForm?.controls['serviceType'].value;

    const st = startDate.add(startTime.getHours(), 'hours').add(startTime.getMinutes(), 'minutes');
    const et = endDate.add(endTime.getHours(), 'hours').add(endTime.getMinutes(), 'minutes');

    const consumer = this.authService.user();
    const requestData: ConsumerRequest = {
      preferredProviderID: this.serviceProvider?.id!,
      consumerId: consumer?.consumerId!,
      requestDate: {
        startTime: st.toDate(),
        endTime: et.toDate(),
      },
      serviceType: serviceType
    };
  }

  public availabilityFilter = (d: Date | null): boolean => {
    if (!d) return false;

    const time = d!.getTime();

    const availableDates = this.getDateRange(this.serviceProvider?.availabilities!);
    const found: boolean = availableDates.find(x => x.getTime() == time) != undefined;

    return found;
  }

  private getDateRange(availability: TupleDateTime[]): Date[] {
    const range: Date[] = [];

    for (let av of availability) {
      const startDate = moment(av.startTime);
      const endDate = moment(av.endTime);
      const diff = endDate.diff(startDate, 'days');

      for (let i = 0; i <= diff; i++) {
        range.push(moment(startDate).add(i, 'days').toDate());
      }
    }

    return range;
  }


  ngOnDestroy(): void {
    
  }
}
