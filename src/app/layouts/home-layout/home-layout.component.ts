import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent {
  constructor(private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) {
    if (authService.isAuthenticated()) {
      this.router.navigate(['/elderlycare/home']);
    }
  }
}
