//gets wind chill
let temp      = parseFloat(document.getElementById("temp").innerText);
let speed     = parseFloat(document.getElementById("speed").innerText);
let windChill = parseInt(35.74 + 0.6215 * temp - 35.75 * speed**.16 + .4275 * temp * speed**.16);

console.log(temp, speed);

if (temp <= 50 && speed > 3) {
    document.getElementById("chill").innerHTML = windChill.toFixed(2) + '&#176;F';

} else {
    document.getElementById("chill").innerHTML = "N/A";
}