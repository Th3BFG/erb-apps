import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../../models/blogpost';

@Injectable()
export class BlogService {
  private _blogPosts: BlogPost[];

  constructor(private http: HttpClient) { }

  getAllBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('http://localhost:8000/api/posts');
  }

  getBlogPost(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>('http://localhost:8000/api/posts/' + id);
  }

  insertBlogPost(post: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>('http://localhost:8000/api/posts/', post);
  }

  updateBlogPost(post: BlogPost): Observable<void> {
    return this.http.put<void>('http://localhost:8000/api/posts/' + post.id, post);
  }

  deleteBlogPost(id: number) {
    return this.http.delete('http://localhost:8000/api/posts/' + id);
  }
}
