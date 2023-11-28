import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './services/auth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
    if (authService.isAuthenticated()) {
      this.router.navigate(['/elderlycare/home']);
    }
  }
}
