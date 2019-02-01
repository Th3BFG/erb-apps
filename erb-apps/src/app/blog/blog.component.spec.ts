import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogComponent } from './blog.component';
import { MatModule } from '../mat.module';
import { BlogService } from '../services/blog/blog.service';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../models/blogpost';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalService } from '../services/modal/modal.service';
import { DomService } from '../services/dom/dom.service';

class MockBlogService {
  getAllBlogPosts() { return new Observable<BlogPost[]>(); }
}

describe('BlogComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatModule,
          NgxPaginationModule
        ],
        declarations: [
            BlogComponent
        ],
        providers: [
          ModalService,
          DomService,
          { provide: BlogService, useClass: MockBlogService }
        ]
      }).compileComponents();
    }));

    it('should create the blog component', () => {
      const fixture = TestBed.createComponent(BlogComponent);
      const blog = fixture.debugElement.componentInstance;
      expect(blog).toBeTruthy();
    });

    it('should render subtitle in a mat-card-title tag', () => {
      const fixture = TestBed.createComponent(BlogComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('mat-card-title').textContent).toContain('Welcome to ERB Applications');
    });

    it('should render subtitle in a mat-card-subtitle tag', () => {
      const fixture = TestBed.createComponent(BlogComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('mat-card-subtitle').textContent).toContain('Down To Earth Solutions');
    });
});
