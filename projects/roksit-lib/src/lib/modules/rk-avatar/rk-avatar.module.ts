import { NgModule, ModuleWithProviders, Directive, Input, TemplateRef } from '@angular/core';
import { IconsModule } from '../icons/icons.module';
import { CommonModule } from '@angular/common';
import { RkAvatarService } from './rk-avatar.service';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RkAvatarComponent } from './rk-avatar.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        NgbModule, NgbDropdownModule,BrowserModule
    ],
    exports: [
        RkAvatarComponent  
    ],
    declarations: [
        RkAvatarComponent 
    ],
    providers: [
        RkAvatarService
    ],
    bootstrap:[
        RkAvatarComponent
        
    ],
})
export class RkAvatarModule  {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkAvatarModule , providers: [RkAvatarService] };
    }
}
