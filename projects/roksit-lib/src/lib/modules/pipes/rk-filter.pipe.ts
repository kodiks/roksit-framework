import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: true
})
export class RkFilterPipe implements PipeTransform {
    transform(items: any[], term: string = ''): any {
        return items.filter(item => item.text.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) !== -1);
    }
}
