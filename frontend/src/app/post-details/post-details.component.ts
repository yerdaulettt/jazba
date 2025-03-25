import { Component } from '@angular/core';
import { Post, Comment } from '../models';
import { POSTS, COMMENTS } from '../fake-db';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})

export class PostDetailsComponent {
  post: Post = POSTS[1];
  comments!: Comment[];
  is_loaded: boolean = false;

  load() {
    this.comments = COMMENTS;
    this.is_loaded = true;
  }
}