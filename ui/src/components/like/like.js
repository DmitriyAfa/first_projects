import './like.scss'

const likes = document.querySelectorAll('.js-like')

likes.forEach(like => {
  like.onclick = (e) =>{
    let counter = 1;
    const content = e.target.querySelector('.like__content')
    if (e.target.dataset.name === 'like'){
      e.target.classList.toggle('like__element_actived')

      if(e.target.classList.contains('like__element_actived')){
        ++counter
        if (counter % 2 === 0){
          content.innerHTML = parseInt(++content.innerHTML)
        } else{
          content.innerHTML = parseInt(--content.innerHTML)
        }
      }
      if(!e.target.classList.contains('like__element_actived')){
        -counter
        if (counter % 2 === 0){
          content.innerHTML = parseInt(++content.innerHTML)
        } else{
          content.innerHTML = parseInt(--content.innerHTML)
        }
      }
      
      

      console.log(counter)
    }
    
  }
})
