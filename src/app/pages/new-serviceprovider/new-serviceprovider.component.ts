import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';

import * as moment from 'moment';
import { Client } from 'src/app/dtos/client';
import { ProviderService } from 'src/app/dtos/provider-service';
import { TupleDateTime } from 'src/app/dtos/tupledatetime';
import { ServiceProvider } from 'src/app/dtos/service-provider';
import { Subscription } from 'rxjs';
import { ServiceProviderService } from 'src/app/services/serviceprovider-service';
import { ClientService } from 'src/app/services/client-service';

@Component({
  selector: 'app-new-serviceprovider',
  templateUrl: './new-serviceprovider.component.html',
  styleUrls: ['./new-serviceprovider.component.css']
})
export class NewServiceProviderComponent implements OnInit, OnDestroy {
  @ViewChild('providerForm') providerForm?: NgForm;

  private getProvidersSubscription = new Subscription();
  private saveProviderSubscription = new Subscription();
  private saveProviderServiceSubscription = new Subscription();

  public clientName: string = '';
  public availabilities: TupleDateTime[] = [];
  public services: ProviderService[] = [];
  public providers: ServiceProvider[] = [];

  public client: Client | undefined;
  constructor(private authService: AuthService,
    private clientService: ClientService,
    private serviceProviderService: ServiceProviderService,
    private router: Router,
    private route: ActivatedRoute,
    private location: Location) {
    // const state = this.location.getState() as Object;
    // const defaultClient: Client = {
    //   clientId: 0,
    //   clientName: '',
    //   serviceProviders: []
    // }
    // const objLength = Object.keys(state).length;
    // const defaultObjLength = Object.keys(defaultClient).length;
    // if (objLength != defaultObjLength + 1) {
    //   this.router.navigate(['/home/match']);
    // }

    // this.client = state as Client;
  }


  ngOnInit(): void {
    const clientId: number = +this.route.snapshot.params['id'];
    this.getProvidersSubscription = this.clientService.getById(clientId)
      .subscribe(client => {
        this.client = client;
        this.providers = this.client.serviceProviders;
        this.clientName = this.client.clientName;
      });
  }

  public addAvailability(): void {
    const startDate = moment(this.providerForm?.controls['startDate'].value);
    const startTime: Date = moment(this.providerForm?.controls['startTime'].value, ['hh:mm A']).toDate();
    const endDate = moment(this.providerForm?.controls['endDate'].value);
    const endTime: Date = moment(this.providerForm?.controls['endTime'].value, ['hh:mm A']).toDate();

    const st = startDate.add(startTime.getHours(), 'hours').add(startTime.getMinutes(), 'minutes').toDate();
    const et = endDate.add(endTime.getHours(), 'hours').add(endTime.getMinutes(), 'minutes').toDate();

    const existingAvailability = this.availabilities.find(x => `${x.startTime!.toLocaleDateString()}-${x.endTime!.toLocaleDateString()}` == `${st.toLocaleDateString()}-${et.toLocaleDateString()}`);
    if (existingAvailability) {
      alert(`Availability already exist!`);
      return;
    }

    const availability: TupleDateTime = {
      startTime: st,
      endTime: et
    }

    this.availabilities.push(availability);
  }

  public addService(): void {
    const serviceName = this.providerForm?.controls['service'].value;
    const existingService = this.services.find(x => x.serviceName == serviceName);
    if (existingService) {
      alert(`service with name: '${serviceName}' already exist!`);
      return;
    }

    const service: ProviderService = {
      id: 0,
      providerId: 0,
      serviceName: serviceName
    }

    this.services.push(service);
  }

  public addProvider(): void {
    const name: string = this.providerForm?.controls['name'].value;
    const address: string = this.providerForm?.controls['address'].value;
    const longitude: number = +this.providerForm?.controls['longitude'].value;
    const latitude: number = +this.providerForm?.controls['latitude'].value;

    const provider: ServiceProvider = {
      id: 0,
      parentClientId: this.client?.clientId!,
      providerName: name,
      address: address,
      location: [longitude, latitude],
      services: [],
      availabilities: this.availabilities
    };

    console.log(provider)

    this.saveProviderSubscription = this.serviceProviderService.saveProvider(provider)
      .subscribe({
        next: (provider) => {
          for (let service of this.services) {
            service.providerId = provider.id;
            this.saveProviderServiceSubscription = this.serviceProviderService.saveService(provider.parentClientId, service)
              .subscribe({});
          }

          this.providers.push(provider);
        },
        error: (err) => {
          alert(err.error)
          console.log(err)
        }
      });
  }

  ngOnDestroy(): void {
    this.getProvidersSubscription.unsubscribe();
    this.saveProviderSubscription.unsubscribe();
    this.saveProviderServiceSubscription.unsubscribe();
  }
}
