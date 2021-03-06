import { NgModule, Directive, Input, TemplateRef, ModuleWithProviders } from '@angular/core';
import { RkUtilityService } from '../../services/rk-utility.service';

@Directive({
    selector: '[rkTableTemplate]',
    host: {}
})
export class RkTableTemplate {

    @Input() type: string;

    @Input('rkTableTemplate') name: string;

    constructor(public template: TemplateRef<any>) { }

    getType(): string {
        return this.name;
    }
}


@NgModule({
    imports: [

    ],
    declarations: [RkTableTemplate],
    providers: [],
    exports: [RkTableTemplate]
})
export class SharedModule {
}