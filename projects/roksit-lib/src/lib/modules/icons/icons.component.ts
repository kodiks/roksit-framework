import { Component, OnInit } from '@angular/core';

const IconSize = '20px';

@Component({
    selector: 'icon-equal',
    template: `
    <svg width="${IconSize}" height="${IconSize}" viewBox="0 0 24 24" version="1.1" 
        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 58 (84663) - https://sketch.com -->
        <title>feather-icon/minus copy</title>
        <desc>Created with Sketch.</desc>
        <g id="feather-icon/minus-copy" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M19,13 C19.5522848,13 20,13.4477153 20,14 C20,14.5522848 19.5522848,15 19,15 L19,15 L5,15 C4.44771525,15 4,14.5522848 4,14 C4,13.4477153 4.44771525,13 5,13 L5,13 Z M19,8 C19.5522848,8 20,8.44771525 20,9 C20,9.55228476 19.5522848,10 19,10 L19,10 L5,10 C4.44771525,10 4,9.55228476 4,9 C4,8.44771525 4.44771525,8 5,8 L5,8 Z" id="Combined-Shape" fill="#97A5BB"></path>
        </g>
    </svg>
    `
})
export class IconEqualComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}

@Component({
    selector: 'icon-not-equal',
    template: `
    <svg width="${IconSize}" height="${IconSize}" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 58 (84663) - https://sketch.com -->
        <title>feather-icon/minus copy 2</title>
        <desc>Created with Sketch.</desc>
        <g id="feather-icon/minus-copy-2" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M3.29289322,2.96446613 C3.68341751,2.57394184 4.31658249,2.57394184 4.70710679,2.96446613 L4.70710679,2.96446613 L9.743,7.99957291 L19,8 C19.5522848,8 20,8.44771525 20,9 C20,9.51283585 19.6139599,9.93550716 19.1166211,9.99327227 L19,10 L11.743,9.99957291 L14.742,12.9995729 L19,13 C19.5522848,13 20,13.4477153 20,14 C20,14.5128358 19.6139599,14.9355072 19.1166211,14.9932723 L19,15 L16.742,14.9995729 L21.3639611,19.6213204 C21.724445,19.9818043 21.7521746,20.5490354 21.4471497,20.9413266 L21.3639611,21.0355339 C20.9734368,21.4260582 20.3402718,21.4260582 19.9497475,21.0355339 L19.9497475,21.0355339 L13.914,14.9995729 L5,15 C4.44771525,15 4,14.5522848 4,14 C4,13.4871642 4.38604019,13.0644928 4.88337887,13.0067277 L5,13 L11.914,12.9995729 L8.913,9.99957291 L5,10 C4.44771525,10 4,9.55228476 4,9 C4,8.48716416 4.38604019,8.06449284 4.88337887,8.00672773 L5,8 L6.913,7.99957291 L3.29289322,4.3786797 C2.93240926,4.01819573 2.90467972,3.45096468 3.20970461,3.05867347 Z" id="Combined-Shape" fill="#97A5BB"></path>
        </g>
    </svg>
    `
})
export class IconNotEqualComponent implements OnInit {

    constructor() { }

    ngOnInit() { }

}
