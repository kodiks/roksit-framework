import { Directive, AfterViewInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[rk-select]',
})
export class RkSelectDirective implements AfterViewInit {

    constructor() { }

    ngAfterViewInit() {
        let x, i, j, selElmnt, a, b, c;
        /*look for any elements with the class "rk-select":*/
        x = document.getElementsByClassName('rk-select');

        for (i = 0; i < x.length; i++) {
            selElmnt = x[i].getElementsByTagName('select')[0];
            /*for each element, create a new DIV that will act as the selected item:*/
            a = document.createElement('DIV');
            a.setAttribute('class', 'select-selected');

            const arrow = document.createElement('div');

            arrow.innerHTML = `
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="feather feather-chevron-down">
                    <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
            `;

            a.innerHTML = selElmnt.options[selElmnt.selectedIndex > -1 ? selElmnt.selectedIndex :
                selElmnt.selectedIndex + 1].innerHTML + arrow.innerHTML;
            x[i].appendChild(a);
            /*for each element, create a new DIV that will contain the option list:*/
            b = document.createElement('DIV');
            b.setAttribute('class', 'select-items select-hide');
            for (j = 1; j < selElmnt.length; j++) {
                /*for each option in the original select element,
                create a new DIV that will act as an option item:*/
                c = document.createElement('DIV');
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener('click', function (e) {
                    /*when an item is clicked, update the original select box,
                    and the selected item:*/
                    let y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName('select')[0];
                    h = this.parentNode.previousSibling;
                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML === this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML + arrow.innerHTML;
                            y = this.parentNode.getElementsByClassName('same-as-selected');
                            for (k = 0; k < y.length; k++) {
                                y[k].removeAttribute('class');
                            }
                            this.setAttribute('class', 'same-as-selected');
                            break;
                        }
                    }
                    h.click();
                });
                b.appendChild(c);
            }
            x[i].appendChild(b);
            a.addEventListener('click', function (e) {
                /*when the select box is clicked, close any other select boxes,
                and open/close the current select box:*/
                e.stopPropagation();
                closeAllSelect(this);
                this.nextSibling.classList.toggle('select-hide');
                this.classList.toggle('select-arrow-active');
            });
        }
        function closeAllSelect(elmnt) {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            let x, y, i, arrNo = [];
            x = document.getElementsByClassName('select-items');
            y = document.getElementsByClassName('select-selected');
            for (i = 0; i < y.length; i++) {
                if (elmnt == y[i]) {
                    arrNo.push(i);
                } else {
                    y[i].classList.remove('select-arrow-active');
                }
            }
            for (i = 0; i < x.length; i++) {
                if (arrNo.indexOf(i)) {
                    x[i].classList.add('select-hide');
                }
            }
        }
        /*if the user clicks anywhere outside the select box,
        then close all select boxes:*/
        document.addEventListener('click', closeAllSelect);
    }

}
