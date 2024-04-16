import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { AuthService } from './services/auth.service';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isLogged: boolean | undefined;

  constructor(private auth: AuthService,
    private router: Router,
  ) {
    //this.isLogged = this.auth.isLogged
  }

  userLogout() {
    this.auth.logout();
    this.router.navigate(['login'], { replaceUrl: true });
  }

  ngOnInit(): void {
    this.auth.isLogged.subscribe(value => {
      this.isLogged = value
    });

    this.auth.isLogged = this.auth.isAuthenticated();
  }
}
