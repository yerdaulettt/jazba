import { Component, OnInit } from '@angular/core';
import { Post, Comment } from '../models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})

export class PostDetailsComponent implements OnInit {
  post!: Post;
  comments!: Comment[];
  is_loaded: boolean = false;
  post_id!: number;

  constructor(private routes: ActivatedRoute, private postsService: PostsService) {}

  load() {
    this.postsService.getPostComments(this.post_id).subscribe((comments: Comment[]) => {
      this.comments = comments;
    })
    this.is_loaded = true;
  }

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params) => {
      const postID = Number(params.get('id'));
      this.post_id = postID;

      this.postsService.getPost(postID).subscribe((post: Post) => {
        this.post = post;
      })
    })
  }
}