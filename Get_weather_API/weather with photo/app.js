const slides = document.querySelectorAll('.slide');
slides[4].classList.add('active');

slides[0].style.backgroundImage = "url(images/pexels-bill-emrich-230793.jpg)";
slides[1].style.backgroundImage = "url(https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80";
slides[2].style.backgroundImage = "url(https://images.unsplash.com/photo-1544885935-98dd03b09034?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80)";
slides[2].style.backgroundPositionY = 'center';
slides[2].childNodes[9].style.color = 'red';
slides[3].style.backgroundImage = "url(https://images.unsplash.com/photo-1531931477284-7e16215c9540?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1887&q=80)";


for (const slide of slides) {
    slide.addEventListener('click', () => {
        deleteActiveClasses(); //стираем активные классы
        slide.classList.add('active');
        const activeElem = document.querySelector('.active');
        activeElem.childNodes[3].classList.add('active-price');
        activeElem.childNodes[5].classList.add('active-disclaimer');
        activeElem.childNodes[7].classList.add('active-features');
        activeElem.childNodes[9].classList.add('active-city-name');
        // console.log(
        //     activeElem.childNodes
        //     // [3 - p.price, 5 - p.disclaimer, 7- ul.features, 9- h3.city-name]
        // )
        getWeather();//по клику получаем код элемента 
    });
};

function deleteActiveClasses() {
    const activeElem = document.querySelector('.active');
    console.log(activeElem);
    activeElem.childNodes[3].classList.remove('active-price');
    activeElem.childNodes[5].classList.remove('active-disclaimer');
    activeElem.childNodes[7].classList.remove('active-features');
    activeElem.childNodes[9].classList.remove('active-city-name');

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });
};

function getWeather() {
    const cityId = document.querySelector('.active').childNodes[0].nextSibling.value; // Получаем id города через обращение к value первого дочернего элемента с классом active 

    console.log(cityId);

    // получим в массив url и appid (ключ)
    const param = {
        "url": "https://api.openweathermap.org/data/2.5/",
        "appid": "08f50c562fd6957ad48bdedd4160317e"
    }

    //посредством метода fetch подгружаем новую информацию и отправляем запросы на сервер
    fetch(`${param.url}weather?id=${cityId}&units=metric&appid=${param.appid}`)
        .then(weather => { // для работы с promise навешиваем на него обработчик then. Получаем объект weather который хранит в себе состояние нашего запроса
            return weather.json();// получаем тело ответа в виде Promise (декодируем) в JSON
            // так же можно получить в форматах .text(), .formData(), arrayBuffer(), .blob().
            //важно использорвать один метод для обработки. Повторный вызов другого метода приведет к ошибке.
        }).then(showWeather) // для обработки Promise снова вызываем метод then посредством чего получаем тело запроса в виде JSON -> showWeather
        .catch((error) => {
            console.log(error);
        }); // для обработки ошибок в Promise совместно с then используют метод catch. Внутри catch вызывает callback function, в аргументе которой получим тело ошибки для дальнейшей обработки. 
}
//создаем функцию которая принимает тело запроса из функции getWeather
function showWeather(data) {
    console.log(data);
    document.querySelector('.active-city-name').textContent = data.name;
    document.querySelector('.active-price').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.active-disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.active-features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
};