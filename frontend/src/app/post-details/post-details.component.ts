import { Component, OnInit } from '@angular/core';
import { Post, Comment } from '../models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../posts.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  imports: [RouterLink, FormsModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})

export class PostDetailsComponent implements OnInit {
  post!: Post;
  comments!: Comment[];
  is_loaded: boolean = false;
  is_authenticated: boolean = Boolean(localStorage.getItem('access'))
  post_id!: number;
  body!: string;
  username!: string;
  is_commented = false;

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

    if (this.is_authenticated) {
      this.postsService.whoiam().subscribe(data => {
        this.username = data['username'];
      })
    }
  }

  comment() {
    this.postsService.addComment(this.post_id, {'post': this.post_id, 'username': this.username, 'body': this.body, 'published_date': '2020-02-02'}).subscribe((comment: Comment) => {
      this.is_commented = true;
    })
  }
}