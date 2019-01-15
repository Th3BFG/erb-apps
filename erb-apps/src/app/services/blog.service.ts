import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { BlogPost } from '../models/blogpost';
import { POSTS } from '../models/mock-posts';

@Injectable({
  providedIn: 'root',
})
export class BlogService {

  constructor() { }

  getBlogPosts(): Observable<BlogPost[]> {
    // TODO: log what happens when this fails.
    return of(POSTS);
  }
}
