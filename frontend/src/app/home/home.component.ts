import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PostsService } from '../posts.service';
import { Post } from '../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
    username!: string;
    password!: string;
    is_authenticated: boolean = Boolean(localStorage.getItem('access'))
    title!: string;
    content!: string;
    is_created = false;
    post_id!: number;
  
    constructor(private authService: AuthService, private postService: PostsService) {}
  
    signup() {
      this.authService.signup(this.username, this.password).subscribe(() => {});
    }

    post() {
      this.postService.addPost({'username': this.username, 'title': this.title, 'body': this.content, 'published_date': `2020-02-01`, 'tag': 1}).subscribe((post: Post) => {
        this.is_created = true;
        this.post_id = post.id;
      });
    }

    ngOnInit(): void {
      if (this.is_authenticated) {
        this.postService.whoiam().subscribe((data) => {
          this.username = data['username'];
        })
      }
    }
}