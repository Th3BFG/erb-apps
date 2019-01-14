import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BlogComponent } from './blog.component';
import { MatModule } from '../mat.module';

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
      }).compileComponents();
    }));

    it('should create the blog component', () => {
      const fixture = TestBed.createComponent(BlogComponent);
      const blog = fixture.debugElement.componentInstance;
      expect(blog).toBeTruthy();
    });
});
