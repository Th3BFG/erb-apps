import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BlogPost } from '../models/blogpost';
import { POSTS } from '../models/mock-posts';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor() { }

  getBlogPostsInReverse(): Observable<BlogPost[]> {
    // TODO: log what happens when this fails.
    const reversedPosts = POSTS.slice().reverse();
    return of(reversedPosts);
  }
}
