import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/dtos/client';
import { AuthService } from 'src/app/services/auth-service';
import { ClientService } from 'src/app/services/client-service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit, OnDestroy {
  @ViewChild('clientForm') clientForm?: NgForm;

  private getAllClientSubscription = new Subscription();
  private saveClientSubscription = new Subscription();
  private deleteClientSubscription = new Subscription();

  constructor(private authService: AuthService,
    private router: Router,
    private clientService: ClientService) { }

  public clients: Client[] = [];

  ngOnInit(): void {
    this.getAllClientSubscription = this.clientService.getAll()
      .subscribe(clients => {
        this.clients = clients;
      });
  }

  public saveClient(): void {
    const clientName: string = this.clientForm?.controls['name'].value;
    const client: Client = {
      clientId: 0,
      clientName: clientName,
      serviceProviders: []
    };

    this.saveClientSubscription = this.clientService.post(client)
      .subscribe({
        next: (data) => {
          this.clients.push(data);
        },
        error: (err) => {
          alert(err.error)
          console.log(err)
        }
      });
  }

  public addServiceProviders(client: Client): void {
    this.router.navigate([`/provider/client/${client.clientId}`]);
  }

  public delete(client: Client): void {
    const response: boolean = confirm(`Are you sure you want to delete client with name: '${client.clientName}'?`);
    if (response) {
      this.deleteClientSubscription = this.clientService.delete(client.clientId)
        .subscribe({
          next: (data) => {
            const index = this.clients.indexOf(client);
            this.clients.splice(index, 1);
          },
          error: (err) => {
            alert(err.error)
            console.log(err)
          }
        });
    }
  }

  ngOnDestroy(): void {
    this.getAllClientSubscription.unsubscribe();
    this.saveClientSubscription.unsubscribe();
    this.deleteClientSubscription.unsubscribe();
  }
}
