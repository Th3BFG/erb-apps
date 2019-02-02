import { TestBed, getTestBed, async } from '@angular/core/testing';
import { DomService } from './dom.service';

describe('DomService', () => {
    let _service: DomService;
    let _injector: TestBed;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [],
        providers: [
          DomService,
        ]
      }).compileComponents();
      _injector = getTestBed();
      _service = _injector.get(DomService);
    }));

    it('should instantiate without issue', () => {
        expect(_service).toBeTruthy();
    });
});
