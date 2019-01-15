import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { MatModule } from '../mat.module';

describe('HeaderComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatModule
        ],
        declarations: [
          HeaderComponent
        ],
      }).compileComponents();
    }));

    it('should create the header', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      const header = fixture.debugElement.componentInstance;
      expect(header).toBeTruthy();
    });

    it('should add the hamburger icon', () => {
        const fixture = TestBed.createComponent(HeaderComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('mat-icon').textContent).toContain('menu');
    });

    it('should render logo in a img tag', () => {
      const fixture = TestBed.createComponent(HeaderComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('div img')).toBeTruthy();
    });
});
