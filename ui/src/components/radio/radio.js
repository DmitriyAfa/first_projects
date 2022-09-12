import './radio.scss'

const radio = document.querySelectorAll('.radio')

const radioBalls = document.querySelectorAll('.radio__element-ball')
const radioLabels = document.querySelectorAll('.radio__element-label')
const radioContent = document.querySelectorAll('.radio__element-content')


radioLabels[0].onclick = () => {
  radioLabels[0].style.border = '1px solid #bc9cff'
  radioBalls[0].style.display = 'block'
  radioContent[0].style.color = 'rgba(31, 32, 65, 0.75)'
  
  radioLabels[1].style.border = '1px solid rgba(31, 32, 65, 0.25)'
  radioBalls[1].style.display = 'none'
  radioContent[1].style.color = 'rgba(31, 32, 65, 0.5)'
}

radioLabels[1].onclick = () => {
  radioLabels[1].style.border = '1px solid #bc9cff'
  radioBalls[1].style.display = 'block'
  radioContent[1].style.color = 'rgba(31, 32, 65, 0.75)'
  
  radioLabels[0].style.border = '1px solid rgba(31, 32, 65, 0.25)'
  radioBalls[0].style.display = 'none'
  radioContent[0].style.color = 'rgba(31, 32, 65, 0.5)'
}

// const radios = document.querySelectorAll('.radio')


// radios.forEach(radio => {
//   const radioBalls = radios.querySelectorAll('.radio__element-ball')
//   const radioLabels = radios.querySelectorAll('.radio__element-label')

//   radioLabels[0].onclick = () => {
//     radioLabels[0].style.border = '1px solid #bc9cff'
//     radioBalls[0].style.display = 'block'
    
//     radioLabels[1].style.border = '1px solid rgba(31, 32, 65, 0.25)'
//     radioBalls[1].style.display = 'none'
//   }
  
//   radioLabels[1].onclick = () => {
//     radioLabels[1].style.border = '1px solid #bc9cff'
//     radioBalls[1].style.display = 'block'
    
//     radioLabels[0].style.border = '1px solid rgba(31, 32, 65, 0.25)'
//     radioBalls[0].style.display = 'none'
//   }
// })