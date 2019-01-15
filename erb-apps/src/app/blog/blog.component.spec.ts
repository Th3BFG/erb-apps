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
