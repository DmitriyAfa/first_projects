import './checkbox.scss';

const checboxes = document.querySelectorAll('.checkbox')

checboxes.forEach(checkbox => {
  checkbox.onclick = (e) => {
    const checkboxElement = checkbox.querySelector('.js-checkbox__element')


    if (e.target.classList.contains('js-checkbox__header-button') === true) {
      e.target.classList.toggle('checkbox__header-button_expanded')
      checkboxElement.classList.toggle('checkbox__element_none')
    }
    
    
    if (e.target.classList.contains('js-checkbox__element-box') === true) {
      e.target.classList.toggle('checkbox__element-box_checked')
      e.target.querySelector('.js-checkbox__element-tick').classList.toggle('checkbox__element-tick_checked')
    }

  }
})