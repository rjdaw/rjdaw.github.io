const apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=42.0380399&lon=-111.4048681&appid=af075121afb12f2ae54562fadc9117a2&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('desc').textContent = jsObject.weather[0].description;
        document.getElementById('temp').textContent = Math.round(jsObject.main.temp);
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('speed').textContent = jsObject.wind.speed;
    });

const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?lat=42.0380399&lon=-111.4048681&appid=af075121afb12f2ae54562fadc9117a2&units=imperial";

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

const eventsURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(eventsURL)
        .then((response) => response.json())
        .then((jsObject) => {
            const towns = jsObject['towns'];
            const filtered = towns.filter(town => (town.name == "Fish Haven"));
    
            let eventList = document.createElement('ul');
    
            for (let i = 0; i < filtered[0].events.length; i++) {
                let event = document.createElement('li');
        
                event.textContent = filtered[0].events[i];
                eventList.appendChild(event);
              }
    
              document.querySelector('section.events').appendChild(eventList);
            
        });
