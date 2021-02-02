import calc from './modules/calc.js';
import cards from './modules/cards.js';
import modal from './modules/modal.js';
import forms from './modules/forms.js';
import slider from './modules/slider.js';
import tabs from './modules/tabs.js';
import timer from './modules/timer.js';
import {openModal} from './modules/modal';


window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 30000);
    calc();
    cards();
    forms('.form', modalTimerId);
    modal('[data-modal]', '.modal', modalTimerId);
    slider({
        container: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slider',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2021-02-04');
});

