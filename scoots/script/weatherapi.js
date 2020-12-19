const alertURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.4230&lon=-86.9223&exclude=minutely,hourly&appid=af075121afb12f2ae54562fadc9117a2";

fetch(alertURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('weather-alert').textContent = jsObject.alerts.description;
    });

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=af075121afb12f2ae54562fadc9117a2&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('desc').textContent = jsObject.weather[0].description;
        document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;
    });

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3530103&appid=af075121afb12f2ae54562fadc9117a2&units=imperial";

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let weekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let filteredObject = jsObject.list.filter(x => x.dt_txt.includes("18:00:00"));
        let dayofweek = document.getElementsByClassName('dayofweek');
        let forecasticon = document.getElementsByClassName("forecasticon");
        let forecasttemp = document.getElementsByClassName("forecasttemp");

        for (let i = 0; i < filteredObject.length; i++) {
            let timeStamp = new Date(filteredObject[i].dt_txt);
            
            dayofweek[i].textContent = weekDays[timeStamp.getDay()];

            const imagesrc = 'https://openweathermap.org/img/w/' + filteredObject[i].weather[0].icon + '.png';
            const desc = filteredObject[i].weather[0].description;
            forecasticon[i].setAttribute('src', imagesrc);
            forecasticon[i].setAttribute('alt', desc);
            forecasttemp[i].textContent = Math.round(filteredObject[i].main.temp);
        }
    });
