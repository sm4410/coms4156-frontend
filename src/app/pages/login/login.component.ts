import { Component, OnDestroy, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth-service';
import { ConsumerService } from 'src/app/services/consumer-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  @ViewChild('loginForm') loginForm?: NgForm;
  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private consumerService: ConsumerService) { }

    private getConsumerSubscription = new Subscription();

  public login(): void {
    const firstName: string = this.loginForm?.controls['firstName'].value;
    const lastName: string = this.loginForm?.controls['lastName'].value;

    const name = `${firstName.trim()} ${lastName.trim()}`;

    this.getConsumerSubscription = this.consumerService.getByName(name)
      .subscribe({
        next: (consumer) => {
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
    this.getConsumerSubscription.unsubscribe();
  }
}
