import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BlogPost } from '../models/blogpost';
import { POSTS } from '../models/mock-posts';

@Injectable()
export class BlogService {
  private _blogPosts: BlogPost[];

  constructor() {
    this.loadData();
  }

  getBlogPostsInReverse(): Observable<BlogPost[]> {
    // TODO: log what happens when this fails.
    const reversedPosts = this._blogPosts.slice().reverse();
    return of(reversedPosts);
  }

  private loadData() {
    this._blogPosts = POSTS;
  }
}
