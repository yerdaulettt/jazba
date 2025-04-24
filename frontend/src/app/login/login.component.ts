import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Token } from '../models';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username!: string;
  password!: string;
  is_authenticated: boolean = Boolean(localStorage.getItem('access'))

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe((token: Token) => {
      localStorage.setItem('refresh', token.access);
      localStorage.setItem('access', token.access);
      this.is_authenticated = true;
    })
  }

  logout() {
    localStorage.clear()
    this.is_authenticated = false
  }
}