import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about.component';
import { MatModule } from '../mat.module';

describe('AboutComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatModule
        ],
        declarations: [
            AboutComponent
        ],
      }).compileComponents();
    }));

    it('should create the about component', () => {
      const fixture = TestBed.createComponent(AboutComponent);
      const about = fixture.debugElement.componentInstance;
      expect(about).toBeTruthy();
    });
});
