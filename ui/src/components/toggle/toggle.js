import './toggle.scss'

const toggles = document.querySelectorAll('.js-toggle__element')

toggles.forEach(toggle => {
  const toggleBalls = toggle.querySelector('.js-toggle__element-ball')
  const toggleLabel = toggle.querySelector('.js-toggle__element-label')

  let counter = 0;
  toggleLabel.onclick = () => {
    ++counter
    if (counter % 2 !== 0){
      toggleLabel.style.border = '1px solid #bc9cff'
      toggleBalls.style.background = 'linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%)'
      toggleLabel.style.padding = '0.2rem 0px 0px 1.6rem'
    } else {
      toggleLabel.style.border = '1px solid rgba(31, 32, 65, 0.25)'
      toggleBalls.style.background = 'rgba(31, 32, 65, 0.25)'
      toggleLabel.style.padding = '0.2rem 0px 0px 0.2rem'
    }
}
})