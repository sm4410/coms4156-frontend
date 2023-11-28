import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/dtos/client';
import { AuthService } from 'src/app/services/auth-service';
import { ClientService } from 'src/app/services/client-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent {
  constructor(private authService: AuthService,
    private router: Router,
    private clientService: ClientService) {
    if (!this.authService.isAuthenticated()) {
      this.authService.logout();
    }
  }

  public elderlycare(): void {
    let client: Client = {
      clientId: 0,
      clientName: environment.clientName,
      serviceProviders:[]
    };

    this.clientService.getByName(client.clientName)
      .subscribe({
        next: (response) => {
          this.authService.saveClient(response);
          this.router.navigate(['/elderlycare/login']);
        },
        error: (err) => {
          if (err.error === `Client with name: '${client.clientName}' does not exist!`) {
            this.clientService.post(client)
              .subscribe((data) => {
                client = data;
                this.authService.saveClient(client);
                this.router.navigate(['/elderlycare/login']);
              });
          }
        }
      });
  }
}
