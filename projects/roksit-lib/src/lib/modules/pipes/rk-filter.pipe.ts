import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class RkFilterPipe implements PipeTransform {
    transform(items: any[], searchText: string, columnName: string): any[] {
        if (!items) { return []; }

        if (!searchText) { return items; }

        searchText = searchText.toLocaleLowerCase().trim();

        return items.filter(item => {
            return item[columnName] ? item[columnName].toLocaleLowerCase().includes(searchText) : '';
        });
    }
}
