const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "08f50c562fd6957ad48bdedd4160317e"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&appid=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
    console.log(cityId);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('.city-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
}

getWeather();
document.querySelector('#city').onchange = getWeather;