import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from '../icons/icons.module';
import { RkAvatarComponent } from './rk-avatar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        IconsModule,
        NgbModule,
        BsDropdownModule.forRoot(),
    ],
    exports: [
        RkAvatarComponent
    ],
    declarations: [
        RkAvatarComponent
    ],
    providers: [],
})
export class RkAvatarModule {
    public static forRoot(): ModuleWithProviders {
        return { ngModule: RkAvatarModule, providers: [] };
    }
}
