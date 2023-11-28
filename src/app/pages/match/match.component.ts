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
        providerName: "NY Elderly",
        address: "New York",
        location: [5,6],
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
        providerName: "Brooklyn Eyo",
        address: "Washington",
        location: [2,4],
        services: [
          {
            id: 3,
            providerId: 2,
            serviceName: 'Feed'
          },
          {
            id: 4,
            providerId: 2,
            serviceName: 'Bathe'
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
