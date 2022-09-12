import './drop-down.scss';

const dropdDowns = document.querySelectorAll('.js-drop-down')

dropdDowns.forEach(dropdDown => {
  const dropdownLabel = dropdDown.querySelector('.js-drop-down__label')
  const dropdownContent = dropdownLabel.querySelector('.js-drop-down__content')
  const dropdownFooter = dropdownLabel.querySelector('.js-drop-down__footer')
  const dropdownFooterBtns = dropdownLabel.querySelectorAll('.button')
  const dropdownFooterBtnFirst = dropdownFooterBtns[0]
  const dropdownFooterBtnSecond = dropdownFooterBtns[1]

  dropdownContent.onclick = () =>{


    dropdownLabel.classList.toggle('drop-down__label_expanded')

    const dropdownCounters = dropdownLabel.querySelectorAll('.js-drop-down__counter')
    
    const dropdownMathCounterOne = dropdownCounters[0].querySelector('.js-drop-down__math-counter')
    const dropdownMathCounterTwo = dropdownCounters[1].querySelector('.js-drop-down__math-counter')
    const dropdownMathCounterThree = dropdownCounters[2].querySelector('.js-drop-down__math-counter')

    if(dropdownLabel.dataset.name === 'guests'){

      let adult = parseInt(dropdownMathCounterOne.innerHTML)
      let kid = parseInt(dropdownMathCounterTwo.innerHTML)
      let baby = parseInt(dropdownMathCounterThree.innerHTML)

      if((adult + kid + baby) > 0){
        dropdownFooterBtnFirst.style.visibility = 'visible'
      }

      let adultLimit = 5
      let kidLimit = 5
      let babyLimit = 5

      let totalCounter = 0
      
      dropdownCounters.forEach(dropdownCounter =>{

        const dropdownMinus = dropdownCounter.querySelector('.js-drop-down__math-minus')
        const dropdownPlus = dropdownCounter.querySelector('.js-drop-down__math-plus')

        if (dropdownCounter.dataset.counter === '1'){

          if (parseInt(dropdownMathCounterOne.innerHTML) > 1){
              dropdownMinus.classList.add('drop-down__math_actived')
              dropdownPlus.classList.add('drop-down__math_actived')
          }


          dropdownMinus.onclick = () =>{
            

            if (adult > 0){
              --adult
              dropdownMathCounterOne.innerHTML = adult
              if (adult === 0){
                dropdownMinus.classList.remove('drop-down__math_actived')
                kid = 0
                baby = 0
                dropdownMathCounterTwo.innerHTML = kid
                dropdownMathCounterThree.innerHTML = baby
              }
              if (adult < adultLimit && adult > 0){
                dropdownPlus.classList.add('drop-down__math_actived')
              }

              totalCounter = adult + kid + baby
              
              if((adult + kid + baby) > 0){
                dropdownFooterBtnFirst.style.visibility = 'visible'
              }else{
                dropdownFooterBtnFirst.style.visibility = 'hidden'
              }


              if(baby === 0){
                if(totalCounter === 0) dropdownContent.innerHTML = 'Сколько гостей'
                if(totalCounter === 1) dropdownContent.innerHTML = '1 гость'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей`
              }

              if(baby === 1){

                if(totalCounter === 1) dropdownContent.innerHTML = '2 гостя, 1 младенец'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя, 1 младенец`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, 1 младенец`
              }


              if(baby > 1){

                if((totalCounter + baby) > 1 && (totalCounter + baby) < 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенца`
                if((totalCounter + baby) >= 5 && baby < 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенца`

                if(baby >= 5){
                  if(totalCounter < 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенцев`
                  if((totalCounter + baby) >= 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенцев`
                }
              }
            }
          }

          dropdownPlus.onclick = () =>{

            if (adult < adultLimit){
              ++adult
              dropdownMathCounterOne.innerHTML = adult
              if(adult > 0){
                dropdownMinus.classList.add('drop-down__math_actived')
              }
              if (adult >= adultLimit){
                dropdownPlus.classList.remove('drop-down__math_actived')
              }
              if (adult < adultLimit && adult > 0){
                dropdownPlus.classList.add('drop-down__math_actived')
              }

              totalCounter = adult + kid + baby
              
              if((adult + kid + baby) > 0){
                dropdownFooterBtnFirst.style.visibility = 'visible'
              }else{
                dropdownFooterBtnFirst.style.visibility = 'hidden'
              }

              if(baby === 0){
                if(totalCounter === 0) dropdownContent.innerHTML = 'Сколько гостей'
                if(totalCounter === 1) dropdownContent.innerHTML = '1 гость'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей`
              }

              if(baby === 1){

                if(totalCounter === 1) dropdownContent.innerHTML = '2 гостя, 1 младенец'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя, 1 младенец`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, 1 младенец`
              }

              if(baby > 1){

                if((totalCounter + baby) > 1 && (totalCounter + baby) < 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенца`
                if((totalCounter + baby) >= 5 && baby < 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенца`

                if(baby >= 5){
                  if(totalCounter < 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенцев`
                  if((totalCounter + baby) >= 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенцев`
                }
              }

            }
          }
        }


        if (dropdownCounter.dataset.counter === '2'){

          if (parseInt(dropdownMathCounterTwo.innerHTML) > 0){
              dropdownMinus.classList.add('drop-down__math_actived')
              dropdownPlus.classList.add('drop-down__math_actived')
          }


          dropdownMinus.onclick = () =>{

            if (kid > 0){
              --kid
              dropdownMathCounterTwo.innerHTML = kid
              if (kid === 0){
                dropdownMinus.classList.remove('drop-down__math_actived')
                dropdownPlus.classList.add('drop-down__math_actived')
              }
              if (kid < kidLimit){
                dropdownPlus.classList.add('drop-down__math_actived')
              }
            }

            totalCounter = adult + kid + baby
                  if((adult + kid + baby) > 0){
        dropdownFooterBtnFirst.style.visibility = 'visible'
      }

            if(baby === 0){
              if(totalCounter === 0) dropdownContent.innerHTML = 'Сколько гостей'
              if(totalCounter === 1) dropdownContent.innerHTML = '1 гость'
              if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя`
              if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей`
            }

            if(baby === 1){

              if(totalCounter === 1) dropdownContent.innerHTML = '2 гостя, 1 младенец'
              if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя, 1 младенец`
              if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, 1 младенец`
            }


            if(baby > 1){

              if((totalCounter + baby) > 1 && (totalCounter + baby) < 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенца`
              if((totalCounter + baby) >= 5 && baby < 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенца`

              if(baby >= 5){
                if(totalCounter < 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенцев`
                if((totalCounter + baby) >= 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенцев`
              }
            }
          }

          dropdownPlus.onclick = () =>{

            if (kid < kidLimit && adult > 0){
              ++kid
              dropdownMathCounterTwo.innerHTML = kid
              if(kid > 0){
                dropdownMinus.classList.add('drop-down__math_actived')
              }
              if (kid >= kidLimit){
                dropdownPlus.classList.remove('drop-down__math_actived')
              }
              if (kid < kidLimit && kid > 0){
                dropdownPlus.classList.add('drop-down__math_actived')
              }


              totalCounter = adult + kid + baby
              
              if((adult + kid + baby) > 0){
                dropdownFooterBtnFirst.style.visibility = 'visible'
              }else{
                dropdownFooterBtnFirst.style.visibility = 'hidden'
              }

              if(baby === 0){
                if(totalCounter === 0) dropdownContent.innerHTML = 'Сколько гостей'
                if(totalCounter === 1) dropdownContent.innerHTML = '1 гость'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей`
              }

              if(baby === 1){

                if(totalCounter === 1) dropdownContent.innerHTML = '2 гостя, 1 младенец'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя, 1 младенец`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, 1 младенец`
              }


              if(baby > 1){

                if((totalCounter + baby) > 1 && (totalCounter + baby) < 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенца`
                if((totalCounter + baby) >= 5 && baby < 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенца`

                if(baby >= 5){
                  if(totalCounter < 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенцев`
                  if((totalCounter + baby) >= 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенцев`
                }
              }
            }
          }
        }

        if (dropdownCounter.dataset.counter === '3'){

          if (parseInt(dropdownMathCounterThree.innerHTML) > 0){
              dropdownMinus.classList.add('drop-down__math_actived')
          }
            dropdownPlus.classList.add('drop-down__math_actived')
  


          dropdownMinus.onclick = () =>{

            if (baby > 0 && baby <= babyLimit){
              --baby
              dropdownMathCounterThree.innerHTML = baby

              dropdownPlus.classList.add('drop-down__math_actived')
              if (baby === 0){
                dropdownMinus.classList.remove('drop-down__math_actived')
              }

              totalCounter = adult + kid + baby
              
              if((adult + kid + baby) > 0){
                dropdownFooterBtnFirst.style.visibility = 'visible'
              }else{
                dropdownFooterBtnFirst.style.visibility = 'hidden'
              }

              if(baby === 0){
                if(totalCounter === 0) dropdownContent.innerHTML = 'Сколько гостей'
                if(totalCounter === 1) dropdownContent.innerHTML = '1 гость'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей`
              }

              if(baby === 1){

                if(totalCounter === 1) dropdownContent.innerHTML = '2 гостя, 1 младенец'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя, 1 младенец`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, 1 младенец`
              }


              if(baby > 1){

                if((totalCounter + baby) > 1 && (totalCounter + baby) < 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенца`
                if((totalCounter + baby) >= 5 && baby < 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенца`

                if(baby >= 5){
                  if(totalCounter < 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенцев`
                  if((totalCounter + baby) >= 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенцев`
                }
              }
            }

          }

          dropdownPlus.onclick = () =>{

            if (baby < babyLimit && adult > 0){
              ++baby
              dropdownMathCounterThree.innerHTML = baby
              if(baby > 0){
                dropdownMinus.classList.add('drop-down__math_actived')
              }
              if (baby >= babyLimit){
                dropdownPlus.classList.remove('drop-down__math_actived')
              }
              if (baby < babyLimit && baby > 0){
                dropdownPlus.classList.add('drop-down__math_actived')
              }

              totalCounter = adult + kid + baby
              
              if((adult + kid + baby) > 0){
                dropdownFooterBtnFirst.style.visibility = 'visible'
              }else{
                dropdownFooterBtnFirst.style.visibility = 'hidden'
              }

              if(baby === 0){
                if(totalCounter === 0) dropdownContent.innerHTML = 'Сколько гостей'
                if(totalCounter === 1) dropdownContent.innerHTML = '1 гость'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей`
              }

              if(baby === 1){

                if(totalCounter === 1) dropdownContent.innerHTML = '2 гостя, 1 младенец'
                if(totalCounter > 1 && totalCounter < 5) dropdownContent.innerHTML = `${totalCounter} гостя, 1 младенец`
                if(totalCounter >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, 1 младенец`
              }


              if(baby > 1){

                if((totalCounter + baby) > 1 && (totalCounter + baby) < 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенца`
                if((totalCounter + baby) >= 5 && baby < 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенца`

                if(baby >= 5){
                  if(totalCounter < 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостя, ${baby} младенцев`
                  if((totalCounter + baby) >= 5 && baby >= 5) dropdownContent.innerHTML = `${totalCounter} гостей, ${baby} младенцев`
                }
              }
            }
          }
        }

      })

      dropdownFooterBtnFirst.onclick = () =>{
        adult = 0
        kid = 0
        baby = 0

        dropdownMathCounterOne.innerHTML = adult
        dropdownMathCounterTwo.innerHTML = kid
        dropdownMathCounterThree.innerHTML = baby

        dropdownContent.innerHTML = 'Сколько гостей'

        dropdownCounters.forEach(counter => {
          counter.querySelector('.js-drop-down__math-minus').classList.remove('drop-down__math_actived')
        })
      }
      dropdownFooterBtnSecond.onclick = () =>{
        dropdownLabel.classList.remove('drop-down__label_expanded')
      }
    }

    if(dropdownLabel.dataset.name === 'amanities'){

      let counterBedRoom = 0;
      let counterBed = 0;
      let counterBathRoom = 0;
      let bedRoomLimit = 6
      let bedLimit = 6

      dropdownCounters.forEach(dropdownCounter =>{

        const dropdownMinus = dropdownCounter.querySelector('.js-drop-down__math-minus')
        const dropdownPlus = dropdownCounter.querySelector('.js-drop-down__math-plus')
        
        if (dropdownCounter.dataset.counter === '1'){
          if (parseInt(dropdownMathCounterOne.innerHTML) > 0){
            dropdownMinus.classList.add('drop-down__math_actived')
            dropdownPlus.classList.add('drop-down__math_actived')
          }
          
          dropdownMinus.onclick = () =>{
            counterBedRoom = parseInt(dropdownMathCounterOne.innerHTML)
            counterBed = parseInt(dropdownMathCounterTwo.innerHTML)
            counterBathRoom = parseInt(dropdownMathCounterThree.innerHTML)
            if (counterBedRoom > 1){

                --counterBedRoom

              dropdownMathCounterOne.innerHTML = counterBedRoom
              dropdownMathCounterTwo.innerHTML = counterBed
              dropdownMathCounterThree.innerHTML = counterBathRoom
            
            if(counterBedRoom === 1){

              if(counterBed === 1) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, 1 кровать... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, 1 кровать, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, 1 кровать, ${counterBathRoom} ванные `
              }

              if(counterBed > 1 && counterBed < 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, ${counterBathRoom} ванные `
              }

              if(counterBed >= 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, ${counterBathRoom} ванные `
              }
            }

            if(counterBedRoom > 1 && counterBedRoom < 5){

              if(counterBed === 1) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, ${counterBathRoom} ванные `
              }

              if(counterBed > 1 && counterBed < 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, ${counterBathRoom} ванные `
              }

              if(counterBed >= 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, ${counterBathRoom} ванные `
              }
            } 

            if(counterBedRoom >= 5){

              if(counterBed === 1) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, ${counterBathRoom} ванные `
              }

              if(counterBed > 1 && counterBed < 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, ${counterBathRoom} ванные `
              }

              if(counterBed >= 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, ${counterBathRoom} ванные `
              }
            } 
            }
          }
          

          dropdownPlus.onclick = () =>{
          counterBedRoom = parseInt(dropdownMathCounterOne.innerHTML)
          counterBed = parseInt(dropdownMathCounterTwo.innerHTML)
          counterBathRoom = parseInt(dropdownMathCounterThree.innerHTML)
            if (counterBedRoom > 0 && counterBedRoom < 6 ){
              
              if (counterBed <= counterBedRoom ){
                ++counterBedRoom
                ++counterBed
              }else{
                ++counterBedRoom
              }

              dropdownMathCounterOne.innerHTML = counterBedRoom
              dropdownMathCounterTwo.innerHTML = counterBed

              if(counterBedRoom === 1){

                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1 && counterBathRoom < 5) dropdownContent.innerHTML = `1 спальня, 1 кровать, ${counterBathRoom} ванные `
                }

                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, ${counterBathRoom} ванные `
                }

                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              }

              if(counterBedRoom > 1 && counterBedRoom < 5){

                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, ${counterBathRoom} ванные `
                }

                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, ${counterBathRoom} ванные `
                }

                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              } 

              if(counterBedRoom >= 5){

                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, ${counterBathRoom} ванные `
                }

                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, ${counterBathRoom} ванные `
                }

                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              } 
            }
          }
        }

        if (dropdownCounter.dataset.counter === '2'){
          if (parseInt(dropdownMathCounterTwo.innerHTML) > 0){
            dropdownMinus.classList.add('drop-down__math_actived')
            dropdownPlus.classList.add('drop-down__math_actived')
          }
          dropdownMinus.onclick = () =>{
            counterBedRoom = parseInt(dropdownMathCounterOne.innerHTML)
            counterBed = parseInt(dropdownMathCounterTwo.innerHTML)
            counterBathRoom = parseInt(dropdownMathCounterThree.innerHTML)
            

            if (counterBed > 1 ){
              --counterBed

            dropdownMathCounterTwo.innerHTML = counterBed
            
            if(counterBedRoom === 1){

              if(counterBed === 1) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, 1 кровать... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, 1 кровать, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, 1 кровать, ${counterBathRoom} ванные `
              }

              if(counterBed > 1 && counterBed < 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, ${counterBathRoom} ванные `
              }

              if(counterBed >= 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, ${counterBathRoom} ванные `
              }
            }

            if(counterBedRoom > 1 && counterBedRoom < 5){

              if(counterBed === 1) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, ${counterBathRoom} ванные `
              }

              if(counterBed > 1 && counterBed < 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, ${counterBathRoom} ванные `
              }

              if(counterBed >= 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, ${counterBathRoom} ванные `
              }
            } 

            if(counterBedRoom >= 5){

              if(counterBed === 1) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, ${counterBathRoom} ванные `
              }

              if(counterBed > 1 && counterBed < 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, ${counterBathRoom} ванные `
              }

              if(counterBed >= 5) {
                if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей... `
                if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, 1 ванная `
                if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, ${counterBathRoom} ванные `
              }
            } 
            }
          }

          dropdownPlus.onclick = () =>{
            counterBedRoom = parseInt(dropdownMathCounterOne.innerHTML)
            counterBed = parseInt(dropdownMathCounterTwo.innerHTML)
            counterBathRoom = parseInt(dropdownMathCounterThree.innerHTML)
            if (counterBed < bedLimit){

              ++counterBed

              dropdownMathCounterTwo.innerHTML = counterBed

              if(counterBedRoom === 1){

                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1 && counterBathRoom < 5) dropdownContent.innerHTML = `1 спальня, 1 кровать, ${counterBathRoom} ванные `
                }
  
                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, ${counterBathRoom} ванные `
                }
  
                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              }
  
              if(counterBedRoom > 1 && counterBedRoom < 5){
  
                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, ${counterBathRoom} ванные `
                }
  
                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, ${counterBathRoom} ванные `
                }
  
                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              } 
  
              if(counterBedRoom >= 5){
  
                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, ${counterBathRoom} ванные `
                }
  
                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, ${counterBathRoom} ванные `
                }
  
                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              } 
            } 
          }
        }

        if (dropdownCounter.dataset.counter === '3'){
          if (parseInt(dropdownMathCounterThree.innerHTML) > 0){
            dropdownMinus.classList.add('drop-down__math_actived')
            dropdownPlus.classList.add('drop-down__math_actived')
          }
          counterBedRoom = parseInt(dropdownMathCounterOne.innerHTML)
          counterBed = parseInt(dropdownMathCounterTwo.innerHTML)
          counterBathRoom = parseInt(dropdownMathCounterThree.innerHTML)
          dropdownMinus.onclick = () =>{
            if  (counterBathRoom > 0){
              --counterBathRoom

              dropdownMathCounterThree.innerHTML = counterBathRoom

              if (counterBathRoom === 0 ) {
                dropdownMinus.classList.remove('drop-down__math_actived')
                dropdownPlus.classList.remove('drop-down__math_actived')
              }

              if(counterBedRoom === 1){

                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1 && counterBathRoom < 5) dropdownContent.innerHTML = `1 спальня, 1 кровать, ${counterBathRoom} ванные `
                }
  
                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, ${counterBathRoom} ванные `
                }
  
                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              }
  
              if(counterBedRoom > 1 && counterBedRoom < 5){
  
                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, ${counterBathRoom} ванные `
                }
  
                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, ${counterBathRoom} ванные `
                }
  
                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              } 
  
              if(counterBedRoom >= 5){
  
                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, ${counterBathRoom} ванные `
                }
  
                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, ${counterBathRoom} ванные `
                }
  
                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              } 
            }
          }

          dropdownPlus.onclick = () =>{
            counterBedRoom = parseInt(dropdownMathCounterOne.innerHTML)
            counterBed = parseInt(dropdownMathCounterTwo.innerHTML)
            counterBathRoom = parseInt(dropdownMathCounterThree.innerHTML)
            if (counterBathRoom < 4 ){
              ++counterBathRoom

              dropdownMathCounterThree.innerHTML = counterBathRoom

              if (counterBathRoom > 0){
                dropdownMinus.classList.add('drop-down__math_actived')
                dropdownPlus.classList.add('drop-down__math_actived')
              }

              if(counterBedRoom === 1){

                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1 && counterBathRoom < 5) dropdownContent.innerHTML = `1 спальня, 1 кровать, ${counterBathRoom} ванные `
                }
  
                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кровати, ${counterBathRoom} ванные `
                }
  
                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `1 спальня, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              }
  
              if(counterBedRoom > 1 && counterBedRoom < 5){
  
                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, 1 кровать, ${counterBathRoom} ванные `
                }
  
                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кровати, ${counterBathRoom} ванные `
                }
  
                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спальни, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              } 
  
              if(counterBedRoom >= 5){
  
                if(counterBed === 1) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, 1 кровать, ${counterBathRoom} ванные `
                }
  
                if(counterBed > 1 && counterBed < 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кровати, ${counterBathRoom} ванные `
                }
  
                if(counterBed >= 5) {
                  if(counterBathRoom === 0) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей... `
                  if(counterBathRoom === 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, 1 ванная `
                  if(counterBathRoom > 1) dropdownContent.innerHTML = `${counterBedRoom} спален, ${counterBed} кроватей, ${counterBathRoom} ванные `
                }
              } 
            }
          }
        }

        
      })
    }

  }

})