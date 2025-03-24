import { Component } from '@angular/core';
import { User } from '../models';
import { USER } from '../fake-db';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})

export class UserDetailsComponent {
  user: User = USER;
}