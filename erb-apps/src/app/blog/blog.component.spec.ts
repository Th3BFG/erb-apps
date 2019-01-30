import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogComponent } from './blog.component';
import { MatModule } from '../mat.module';
import { BlogService } from '../services/blog/blog.service';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../models/blogpost';

class MockBlogService {
  getBlogPostsInReverse() { return new Observable(); }
}

describe('BlogComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatModule
        ],
        declarations: [
            BlogComponent
        ],
        providers: [
          { provide: BlogService, useClass: MockBlogService }
        ]
      }).compileComponents();
    }));

    it('should create the blog component', () => {
      const fixture = TestBed.createComponent(BlogComponent);
      const blog = fixture.debugElement.componentInstance;
      expect(blog).toBeTruthy();
    });

    it('should render subtitle in a h1 tag', () => {
      const fixture = TestBed.createComponent(BlogComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to ERB Applications');
    });

    it('should render subtitle in a h3 tag', () => {
      const fixture = TestBed.createComponent(BlogComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h3').textContent).toContain('Down To Earth Solutions');
    });
});
