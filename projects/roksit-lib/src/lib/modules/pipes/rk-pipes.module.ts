import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RkFilterPipe } from './rk-filter.pipe';
import { HighlightPipe } from './rk-highlight.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        RkFilterPipe,
        HighlightPipe
    ],
    declarations: [
        RkFilterPipe,
        HighlightPipe
    ],
    providers: [],
})
export class RkPipesModule { }
