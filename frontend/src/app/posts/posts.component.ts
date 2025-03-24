import { Component } from '@angular/core';
import { Post } from '../models';
import { POSTS } from '../fake-db';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent {
  posts: Post[] = POSTS;
}