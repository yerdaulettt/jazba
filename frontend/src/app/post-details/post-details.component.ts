import { Component } from '@angular/core';
import { Post } from '../models';
import { POSTS } from '../fake-db';

@Component({
  selector: 'app-post-details',
  imports: [],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})

export class PostDetailsComponent {
  post: Post = POSTS[0];
}