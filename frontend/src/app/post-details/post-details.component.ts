import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  imports: [CommonModule] // Міне, осыны қостың ба?
})
export class PostDetailsComponent {
  @Input() post: any;

  commentsLoaded: boolean = false;
  comments: any[] = [];

  load(): void {
    if (!this.commentsLoaded) {
      // Бұл жерге нақты API-ден алу логикасы қойылады, әзірге жалған дерек
      this.comments = [
        { user: 'user1', text: 'Тамаша пост!' },
        { user: 'user2', text: 'Көп рақмет!' }
      ];
      this.commentsLoaded = true;
    }
  }
}
