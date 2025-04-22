import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User, Post } from '../models';
import { USERS, POSTS } from '../fake-db';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user: User | undefined;
  posts: Post[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const username = this.route.snapshot.paramMap.get('username');
    if (username) {
      this.user = USERS.find(u => u.username === username);
      this.posts = POSTS.filter(p => p.user === username);
    }
  }
}
