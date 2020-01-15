import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkAutoCompleteComponent } from './rk-autocomplete.component';
import { IconsModule } from '../icons/icons.module';
import { RkPipesModule } from '../pipes/rk-pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IconsModule,
        RkPipesModule
    ],
    exports: [
        RkAutoCompleteComponent
    ],
    declarations: [
        RkAutoCompleteComponent
    ],
    providers: [],
})
export class RkAutoCompleteModule { }
