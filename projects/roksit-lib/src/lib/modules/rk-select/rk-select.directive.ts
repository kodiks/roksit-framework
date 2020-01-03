import { Directive, Renderer2, ElementRef, OnInit, AfterViewInit } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[rk-select]'
})
export class RkSelectDirective implements AfterViewInit {

    constructor(
        private el: ElementRef,
        private renderer2: Renderer2
    ) { }

    ngAfterViewInit() {
        let i, j, selElmnt, a, b, c;
        const container_select = document.getElementsByClassName('rk-select');

        for (i = 0; i < container_select.length; i++) {
            selElmnt = container_select[i].getElementsByTagName('select')[0];

            a = document.createElement('DIV');
            a.setAttribute('class', 'select-selected');
            if (selElmnt.selectedIndex === -1) {
                selElmnt.selectedIndex = 0;
            }
            a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
            container_select[i].appendChild(a);

            b = document.createElement('DIV');
            b.setAttribute('class', 'select-items select-hide');

            for (j = 1; j < selElmnt.length; j++) {

                c = document.createElement('DIV');
                c.innerHTML = selElmnt.options[j].innerHTML;
                c.addEventListener('click', function (e) {

                    let y, i, k, s, h;
                    s = this.parentNode.parentNode.getElementsByTagName('select')[0];
                    h = this.parentNode.previousSibling;

                    for (i = 0; i < s.length; i++) {
                        if (s.options[i].innerHTML === this.innerHTML) {
                            s.selectedIndex = i;
                            h.innerHTML = this.innerHTML;
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

            container_select[i].appendChild(b);

            a.addEventListener('click', function (e) {
                e.stopPropagation();
                // tslint:disable-next-line: no-use-before-declare
                closeAllSelect(this);
                this.nextSibling.classList.toggle('select-hide');
                this.classList.toggle('select-arrow-active');
            });
        }

        const closeAllSelect = (elmnt) => {
            /*a function that will close all select boxes in the document,
            except the current select box:*/
            const x = document.getElementsByClassName('select-items');
            const y = document.getElementsByClassName('select-selected');
            const arrNo = [];

            for (i = 0; i < y.length; i++) {
                if (elmnt === y[i]) {
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
        };

        document.addEventListener('click', closeAllSelect);
    }

}
