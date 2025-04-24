import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User, Post } from '../models';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  username!: string;
  posts!: Post[];

  constructor(private route: ActivatedRoute, private postsService: PostsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const user: string = String(params.get('username'));
      this.username = user

      this.postsService.getUserPosts(user).subscribe((posts: Post[]) => {
        this.posts = posts;
      })
    })
  }
}
