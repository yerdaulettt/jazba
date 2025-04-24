import { Component, OnInit } from '@angular/core';
import { Post, Comment } from '../models';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsService } from '../posts.service';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-post-details',
  standalone: true, // Тек standalone компоненттерге
  imports: [FormsModule, RouterLink, NgIf],  // Барлығы бір жерде
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post!: Post;
  comments!: Comment[];
  is_loaded: boolean = false;
  post_id!: number;

  // Жаңа пост қосу үшін айнымалылар
  isAddingPost: boolean = false;
  newPostTitle: string = '';
  newPostContent: string = '';

  constructor(private routes: ActivatedRoute, private postsService: PostsService) {}

  load() {
    this.postsService.getPostComments(this.post_id).subscribe((comments: Comment[]) => {
      this.comments = comments;
    });
    this.is_loaded = true;
  }

  ngOnInit(): void {
    this.routes.paramMap.subscribe((params) => {
      const postID = Number(params.get('id'));
      this.post_id = postID;

      this.postsService.getPost(postID).subscribe((post: Post) => {
        this.post = post;
      });
    });
  }

  // Пост қосу формасын көрсету/жасыру
  toggleAddPostForm() {
    this.isAddingPost = !this.isAddingPost;
  }

  // Жаңа пост қосу
  addPost(event: Event) {
    event.preventDefault(); // Форманың стандартты әрекетін болдырмау
    const newPost = {
      title: this.newPostTitle,
      content: this.newPostContent,
      postId: this.post_id
    };

    this.postsService.addPost(newPost).subscribe(() => {
      alert('Пост сәтті қосылды!');
      this.newPostTitle = '';
      this.newPostContent = '';
      this.isAddingPost = false;
      this.load(); // Жаңа постты жүктеу
    });
  }
}