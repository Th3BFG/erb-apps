import { TestBed, getTestBed, async } from '@angular/core/testing';
import { ModalService } from './modal.service';
import { DomService } from '../dom/dom.service';

class MockDomService {
    appendComponent() {}
    dispose() {}
}

describe('ModalService', () => {
    let _service: ModalService;
    let _injector: TestBed;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [],
        declarations: [],
        providers: [
            ModalService,
            { provide: DomService, useClass: MockDomService}
        ]
      }).compileComponents();
      _injector = getTestBed();
      _service = _injector.get(ModalService);
    }));

    it('should instantiate without issue', () => {
        expect(_service).toBeTruthy();
    });
});
