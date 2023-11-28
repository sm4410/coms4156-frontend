import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-elderlycare-layout',
  templateUrl: './elderlycare-layout.component.html',
  styleUrls: ['./elderlycare-layout.component.css']
})
export class ElderlyCareLayoutComponent {
  constructor(private authService: AuthService,
    private router: Router) {
    const client = this.authService.client();
    if (!client) {
      this.router.navigate(['/']);
    }
  }
}
