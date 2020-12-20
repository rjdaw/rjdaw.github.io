
const rentalsURL = 'https://rjdaw.github.io/scoots/data/rental-info.json';
fetch(rentalsURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const rental = jsObject.rental;
        for (let i = 1; i < rental.length + 1; i++) {
            document.getElementById(`half-res${i}`).textContent = rental[i-1].reservation[0].half;
            document.getElementById(`full-res${i}`).textContent = rental[i-1].reservation[0].full;
            document.getElementById(`half-walk${i}`).textContent = rental[i-1].walkin[0].half;
            document.getElementById(`full-walk${i}`).textContent = rental[i-1].walkin[0].full;
        }

    });