import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DownloadsComponent } from './downloads.component';
import { MatModule } from '../mat.module';

describe('DownloadsComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          MatModule
        ],
        declarations: [
            DownloadsComponent
        ],
      }).compileComponents();
    }));

    it('should create the downloads component', () => {
      const fixture = TestBed.createComponent(DownloadsComponent);
      const downloads = fixture.debugElement.componentInstance;
      expect(downloads).toBeTruthy();
    });
});
