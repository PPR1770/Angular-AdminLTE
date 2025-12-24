import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ThemeService } from '../../shared/services/theme.service';

@Component({ selector: 'app-layout', templateUrl: './layout.component.html' })
export class LayoutComponent {
  constructor(
    private auth: AuthService,
    private router: Router,
    private theme: ThemeService
  ) {}
  logout() {
    this.auth.logout();
    this.router.navigate(['/auth/login']);
  }
  toggleDark() {
    this.theme.toggleDark();
  }
}
