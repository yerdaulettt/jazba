import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, Comment } from './models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  BASE_URL = 'http://127.0.0.1:8000/api/posts/'

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.BASE_URL)
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.BASE_URL}${id}/`)
  }

  getPostComments(id: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}${id}/comments/`)
  }

  getUserPosts(username: string): Observable<Post[]> {
    return this.http.get<Post[]>(`http://127.0.0.1:8000/api/${username}/posts/`)
  }

  addPost(post: { username: string, title: string; body: string, published_date: string, tag: number}): Observable<Post> {
    return this.http.post<Post>(this.BASE_URL, post)
  }

  whoiam(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:8000/api/whoiam/')
  }

  addComment(id: number, comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.BASE_URL}${id}/comments/`, comment)
  }
}