import { Injectable,
        ComponentFactoryResolver,
        ApplicationRef,
        Injector,
        EmbeddedViewRef,
        ComponentRef} from '@angular/core';

@Injectable()
export class DomService {
    private _childComponentRef: any;

    constructor (
        private componentFactoryResolver: ComponentFactoryResolver,
        private appRef: ApplicationRef,
        private injector: Injector,
    ) { }

    public appendComponent(parentId: string, child: any, childConfig?: ChildConfig) {
        if (parentId === undefined || child === undefined) {
            throw new Error('Modal requires valid parentId and child component');
        }
        this._childComponentRef = this.createComponentRef(child);
        this.applyConfig(childConfig, this._childComponentRef);
        this.appRef.attachView(this._childComponentRef.hostView);

        const embeddedViewRef = this._childComponentRef.hostView as EmbeddedViewRef<any>;
        if (embeddedViewRef) {
            const domElement = embeddedViewRef.rootNodes[0] as HTMLElement;
            if (domElement) {
                document.getElementById(parentId).appendChild(domElement);
            }
        }
    }

    public dispose() {
        this.appRef.detachView(this._childComponentRef.hostView);
        this._childComponentRef.destroy();
    }

    private applyConfig(config: ChildConfig, componentRef: any) {
        const inputKeys = Object.getOwnPropertyNames(config.inputs);
        const outputKeys = Object.getOwnPropertyNames(config.outputs);

        for (const i of inputKeys) {
          componentRef.instance[i] = inputKeys[i];
        }
        for (const i of outputKeys) {
          componentRef.instance[i] = outputKeys[i];
        }
    }

    private createComponentRef(child: any): ComponentRef<any> {
        return this.componentFactoryResolver
            .resolveComponentFactory(child)
            .create(this.injector);
    }
}

interface ChildConfig {
    inputs: object;
    outputs: object;
}
