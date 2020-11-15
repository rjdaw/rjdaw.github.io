const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  
  .then(function (jsonObject) {
    const town = jsonObject['towns'];
    const filteredTowns = town.filter(town => (town.name == 'Preston' || town.name == 'Soda Springs' || town.name == 'Fish Haven'));
    for (let i = 0 ; i < filteredTowns.length; i++) {  
        let towncard   = document.createElement('section');
        let townname   = document.createElement('h2');
        let motto      = document.createElement('h3');
        let founded    = document.createElement('p');
        let population = document.createElement('p');
        let rain       = document.createElement('p');
        let image      = document.createElement('img');
        let towncardtext   = document.createElement("div");
        let towncardimg    = document.createElement("div");

        townname.textContent = filteredTowns[i].name;
        motto.textContent = filteredTowns[i].motto;
        founded.textContent = "Year founded: " + filteredTowns[i].yearFounded;
        population.textContent = "Population: " + filteredTowns[i].currentPopulation;
        rain.textContent = "Annual Rainfall: " + filteredTowns[i].averageRainfall;
        image.setAttribute('src', "images/" + filteredTowns[i].photo);
        image.setAttribute('alt', townname.textContent);
        towncardtext.setAttribute('class', "towncardtext");
        towncardimg.setAttribute('class', "towncardimg")

        towncardtext.appendChild(townname);
        towncardtext.appendChild(motto);
        towncardtext.appendChild(founded);
        towncardtext.appendChild(population);
        towncardtext.appendChild(rain);
        towncard.appendChild(towncardtext)
        towncardimg.appendChild(image);
        towncard.appendChild(towncardimg)

        document.querySelector('.town-cards').appendChild(towncard);
    }
});