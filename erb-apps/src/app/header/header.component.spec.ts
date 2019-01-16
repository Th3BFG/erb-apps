import { TestBed, async, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';
import { MatModule } from '../mat.module';
import { Router } from '@angular/router';

class MockRouter {
  navigate(url: string) {}
}

describe('HeaderComponent', () => {
    beforeEach(async(() => {
      const router = {
        navigate: jasmine.createSpy('navigate')
      };
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatModule
        ],
        declarations: [
          HeaderComponent
        ],
        providers: [
          { provide: Router, useClass: MockRouter}
        ]
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

    it('should route to "/blog" with goHome', inject([Router], (router: Router) => {
      const fixture = TestBed.createComponent(HeaderComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();
      const spy = spyOn(router, 'navigate');
      component.goHome();
      expect(spy).toHaveBeenCalledWith(['blog']);
    }));

    it('should route to "/downloads" with goToDownloads', inject([Router], (router: Router) => {
      const fixture = TestBed.createComponent(HeaderComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();
      const spy = spyOn(router, 'navigate');
      component.goToDownloads();
      expect(spy).toHaveBeenCalledWith(['downloads']);
    }));

    it('should route to "/about" with goToAbout', inject([Router], (router: Router) => {
      const fixture = TestBed.createComponent(HeaderComponent);
      const component = fixture.componentInstance;
      fixture.detectChanges();
      const spy = spyOn(router, 'navigate');
      component.goToAbout();
      expect(spy).toHaveBeenCalledWith(['about']);
    }));
});
