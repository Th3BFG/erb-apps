import { Injectable } from '@angular/core';
import { DomService } from '../dom/dom.service';

@Injectable()
export class ModalService {
    private _modalElementId = 'modal-container';
    private _overlayElementId = 'overlay';

    constructor(private domService: DomService) { }

    init(component: any, inputs: object, outputs: object) {
        const componentConfig = {
            inputs: inputs,
            outputs: outputs,
        };

        this.domService.appendComponent(this._modalElementId, component, componentConfig);
        document.getElementById(this._modalElementId).className = 'show';
        document.getElementById(this._overlayElementId).className = 'show';
    }

    dispose() {
        this.domService.dispose();
        document.getElementById(this._modalElementId).className = 'hidden';
        document.getElementById(this._overlayElementId).className = 'hidden';
    }
}
