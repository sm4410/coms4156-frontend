import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';

@Component({
  selector: 'app-provider-layout',
  templateUrl: './provider-layout.component.html',
  styleUrls: ['./provider-layout.component.css']
})
export class ProviderLayoutComponent {
  constructor(private authService: AuthService,
    private router: Router) {
  }
}
