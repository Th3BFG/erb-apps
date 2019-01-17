import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BlogPost } from '../models/blogpost';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(private _blogPosts: BlogPost[]) { }

  getBlogPostsInReverse(): Observable<BlogPost[]> {
    // TODO: log what happens when this fails.
    const reversedPosts = this._blogPosts.slice().reverse();
    return of(reversedPosts);
  }
}
