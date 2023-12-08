import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceProvider } from 'src/app/dtos/service-provider';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent {
  constructor(private router: Router) {
    
  }

  public serviceProvider: ServiceProvider = {
    id: 1,
    parentClientId: 1,
    providerName: "NY Elderly",
    address: 'New York',
    location: [2,2],
    services: [
      {
        id: 1,
        providerId: 1,
        serviceName: 'Walk'
      },
      {
        id: 2,
        providerId: 1,
        serviceName: 'Give meds'
      }
    ],
    availabilities: [
      {
        startTime: new Date("01-Jun-2023"),
        endTime: new Date("05-Jun-2023")
      },
      {
        startTime: new Date("01-Oct-2023"),
        endTime: new Date("05-Oct-2023")
      }
    ]
  }


  public makeRequest(): void {
    this.router.navigate(['/elderlycare/home/request'], { state: this.serviceProvider });
  }

  public bookAppointment(): void {
    this.router.navigate(['/elderlycare/home/appointment'], { state: this.serviceProvider });
  }
}
