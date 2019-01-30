import { async, TestBed } from '@angular/core/testing';
import { BlogService } from './blog.service';
import { POSTS } from '../../models/mock-posts';
import { BlogPost } from '../../models/blogpost';
import { HttpClient } from 'selenium-webdriver/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatModule } from '../../mat.module';
import { Observable } from 'rxjs';

class MockHttpClient {
  get() { return new Observable(); }
  put() { return new Observable(); }
  post() { return new Observable(); }
  delete() {}
}

describe('BlogService', () => {
    let _service: BlogService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatModule
        ],
        declarations: [],
        providers: [
          { provide: HttpClient, useClass: MockHttpClient }
        ]
      }).compileComponents();
      _service = new BlogService(new HttpClient());
    }));

    it('should create the blog service', () => {
      expect(service).toBeTruthy();
    });

    it('should return the reversed list of BlogPost with getBlogPostsInReverse', () => {
        const reversed = POSTS.slice().reverse();
        let posts: BlogPost[];
        service.getAllBlogPosts().subscribe(subVal => posts = subVal);
        expect(posts).toEqual(reversed);
    });
});
