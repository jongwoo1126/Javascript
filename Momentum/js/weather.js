const API_KEY = "67725ee297693d02d3ac6d6b9a2f659c";

function onGeoOk(position) {
    const lat = position.coords.latitude;       // 위도
    const lon = position.coords.longitude;      // 경도
    //console.log("You live it", lat, lon);     
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`       //OpenWeatherMap의 weather API 사용. 섭씨 온도를 받기 위해 '&units=metric' 추가
    //console.log(url)
    fetch(url).then(response => response.json()).then(data =>{
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);