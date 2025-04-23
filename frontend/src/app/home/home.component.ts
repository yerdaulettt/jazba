import { Component, REQUEST } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
    username!: string;
    password!: string;
  
    constructor(private authService: AuthService) {}
  
    signup() {
      this.authService.signup(this.username, this.password).subscribe(() => {});
    }
}