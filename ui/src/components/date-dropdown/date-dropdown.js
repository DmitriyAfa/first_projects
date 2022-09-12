import './date-dropdown.scss';
import '../../../node_modules/js-datepicker/src/datepicker.scss';

const datepicker = require('js-datepicker')

// const picker = datepicker(selector, options)

const start = datepicker(document.querySelector('.js-date-dropdown__start'), { 
  id: 1,
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  showAllDates: true,
  // dateSelected: new Date(),
  disableYearOverlay: true, // Clicking the year or month will *not* bring up the year overlay.
  customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
})
const end = datepicker(document.querySelector('.js-date-dropdown__end'), { 
  id: 1,
  // dateSelected: new Date(2099, 0, 5)
  formatter: (input, date, instance) => {
    const value = date.toLocaleDateString()
    input.value = value // => '1/1/2099'
  },
  showAllDates: true
})

start.getRange() // { start: <JS date object>, end: <JS date object> }
end.getRange() // Gives you the same as above!