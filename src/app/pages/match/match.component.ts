import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceProvider } from 'src/app/dtos/service-provider';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent {
  @ViewChild('matchForm') matchForm?: NgForm;

  constructor(private authService: AuthService,
    private router: Router) { }

  public serviceProviders: ServiceProvider[] = [];

  public match(): void {
    const request: string = this.matchForm?.controls['request'].value;
    const location: string = this.matchForm?.controls['location'].value;

    this.serviceProviders = [
      {
        id: 1,
        parentClientId: 1,
        providerName: "TestHospital1",
        address: "New York",
        location: [2,2],
        services: [
          {
            id: 1,
            providerId: 1,
            serviceName: 'Service1'
          },
          {
            id: 2,
            providerId: 1,
            serviceName: 'Service2'
          }
        ],
        availabilities: [
          {
            startTime: new Date("11/06/2023"),
            endTime:  new Date("11/11/2023")
          },
          {
            startTime:  new Date("11/20/2023"),
            endTime:  new Date("11/30/2023")
          }
        ]
      },
      {
        id: 2,
        parentClientId: 1,
        providerName: "TestHospital2",
        address: "Brooklyn",
        location: [3,3],
        services: [
          {
            id: 3,
            providerId: 2,
            serviceName: 'Service1'
          },
          {
            id: 4,
            providerId: 2,
            serviceName: 'Service2'
          }
        ],
        availabilities: [
          {
            startTime: new Date("12/06/2023"),
            endTime: new Date("12/11/2023")
          },
          {
            startTime: new Date("12/20/2023"),
            endTime: new Date("12/30/2023")
          }
        ]
      }
    ]
  }

  public makeRequest(provider: ServiceProvider): void {
    this.router.navigate(['/elderlycare/home/request'], { state: provider });
  }

  public bookAppointment(provider: ServiceProvider): void {
    this.router.navigate(['/elderlycare/home/appointment'], { state: provider });
  }
}
