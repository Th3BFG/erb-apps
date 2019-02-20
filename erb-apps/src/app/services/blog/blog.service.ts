import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from '../../models/blogpost';
import { environment } from '../../../environments/environment';

@Injectable()
export class BlogService {
  readonly API_URL: string;

  constructor(private http: HttpClient) { this.API_URL = environment.apiUrl; }

  getAllBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.API_URL}/posts`);
  }

  getBlogPost(id: number): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.API_URL}/posts/${id}`);
  }

  insertBlogPost(post: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>(`${this.API_URL}/posts`, post);
  }

  updateBlogPost(post: BlogPost): Observable<void> {
    return this.http.put<void>(`${this.API_URL}/posts/${post.id}`, post);
  }

  deleteBlogPost(id: number) {
    return this.http.delete(`${this.API_URL}/posts/${id}`);
  }
}
