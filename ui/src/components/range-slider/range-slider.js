import './range-slider.scss'
import '../../../node_modules/nouislider/dist/nouislider.css'
import noUiSlider from 'nouislider';

var slider = document.querySelector('.js-range-slider__element');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    range: {
        'min': 0,
        'max': 20000
    }
});

const rangeSlider = document.querySelector('.js-range-slider')
const rangeSliderElement = rangeSlider.querySelector('.js-range-slider__element')
const noUiHandleLower = rangeSliderElement.querySelector('.noUi-handle-lower')
const noUiHandleUpper = rangeSliderElement.querySelector('.noUi-handle-upper')
const rangeSliderHeader = document.querySelector('.js-range-slider__header')
const rangeSliderHeaderContent = rangeSliderHeader.querySelector('.js-range-slider__content')
let noUiHandleLowerAriaValueNow = noUiHandleLower.ariaValueNow;
let noUiHandleUpperAriaValueNow = noUiHandleUpper.ariaValueNow;
rangeSliderHeaderContent.innerHTML = `<h3>${Math.round(noUiHandleLowerAriaValueNow).toLocaleString()}&#8381; - ${Math.round(noUiHandleUpperAriaValueNow).toLocaleString()}&#8381;</h3>`


noUiHandleLower.addEventListener( "mousemove" , () => {
  noUiHandleLowerAriaValueNow = noUiHandleLower.ariaValueNow;
  rangeSliderHeaderContent.innerHTML = `<h3>${Math.round(noUiHandleLowerAriaValueNow).toLocaleString()}&#8381; - ${Math.round(noUiHandleUpperAriaValueNow).toLocaleString()}&#8381;</h3>`
});

noUiHandleUpper.addEventListener( "mousemove" , () => {
  noUiHandleUpperAriaValueNow = noUiHandleUpper.ariaValueNow;
  rangeSliderHeaderContent.innerHTML = `<h3>${Math.round(noUiHandleLowerAriaValueNow).toLocaleString()}&#8381; - ${Math.round(noUiHandleUpperAriaValueNow).toLocaleString()}&#8381;</h3>`
});

