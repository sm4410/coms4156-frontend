import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Consumer } from 'src/app/dtos/consumer';
import { AuthService } from 'src/app/services/auth-service';
import { ConsumerService } from 'src/app/services/consumer-service';

@Component({
  selector: 'app-new-consumer',
  templateUrl: './new-consumer.component.html',
  styleUrls: ['./new-consumer.component.css']
})
export class NewConsumerComponent implements OnDestroy {
  @ViewChild('registerForm') registerForm?: NgForm;

  constructor(private authService: AuthService,
    private router: Router,
    private consumerService: ConsumerService,
    private route: ActivatedRoute) { }

    private saveConsumerSubscription = new Subscription();

  public register(): void {
    const firstName: string = this.registerForm?.controls['firstName'].value;
    const lastName: string = this.registerForm?.controls['lastName'].value;
    const address: string = this.registerForm?.controls['address'].value;
    const longitude: number = +this.registerForm?.controls['longitude'].value;
    const latitude: number = +this.registerForm?.controls['latitude'].value;

    const name = `${firstName.trim()} ${lastName.trim()}`;
    const client = this.authService.client();

    let consumer: Consumer = {
      consumerId: 0,
      parentClientId: client?.clientId!,
      consumerName: name,
      location: [longitude, latitude],
      address: address
    };

    this.saveConsumerSubscription = this.consumerService.post(consumer)
      .subscribe({
        next: (data) => {
          consumer = data;
          this.authService.login(consumer);
          this.router.navigate(['/elderlycare/home']);
        },
        error: (err) => {
          alert(err.error)
          console.log(err)
        }
      });
  }

  ngOnDestroy(): void {
    this.saveConsumerSubscription.unsubscribe();
  }
}
