import { Component, OnInit } from '@angular/core';
import { Post } from '../models';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})

export class PostsComponent implements OnInit {
  posts!: Post[];

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }
}