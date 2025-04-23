import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Token } from '../models';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password).subscribe((token: Token) => {
      localStorage.setItem('refresh', token.access);
      localStorage.setItem('access', token.access);
    })
  }
}