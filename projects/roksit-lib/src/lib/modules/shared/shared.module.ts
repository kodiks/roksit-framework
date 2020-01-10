import { NgModule, Directive, Input, TemplateRef } from '@angular/core';

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
    exports: [RkTableTemplate],
    providers: []
})
export class SharedModule { }