import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, title: 'Home'},
    {path: 'posts', component: PostsComponent, title: 'All posts'},
    {path: 'posts/:id', component: PostDetailsComponent, title: 'Post details'},
    {path: ':username', component: UserDetailsComponent, title: 'User details'},
    {path: '**', component: PageNotFoundComponent, title: 'Page not found'},
];