const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const prophets = jsonObject['prophets'];
        console.table(jsonObject); // temporary checking for valid response and data parsing
            for (let i = 0; i < prophets.length; i++) {
                let card       = document.createElement('section');
                let fullname   = document.createElement('h2');
                let birthdate  = document.createElement('p');
                let birthplace = document.createElement('p');
                let portrait   = document.createElement('img');

                fullname.textContent   = prophets[i].name + ' ' + prophets[i].lastname;
                birthdate.textContent  = 'Date of birth: ' + prophets[i].birthdate;
                birthplace.textContent = 'Place of birth: ' + prophets[i].birthplace;
                portrait.setAttribute('src', prophets[i].imageurl);
                portrait.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname + ' - ' + prophets[i].order);

                card.appendChild(fullname);
                card.appendChild(birthdate);
                card.appendChild(birthplace);
                card.appendChild(portrait);

                document.querySelector('div.cards').appendChild(card);
            }
    });

        