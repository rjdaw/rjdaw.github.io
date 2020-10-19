//gets the current year
let year =  new Date().getFullYear();
document.getElementById("currentYear").innerHTML = year;

//takes care of the current date
let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.getElementById("currentDate").innerHTML = new Date().toLocaleDateString("en-GB", options);

//checks if today is Friday
var currentDate = new Date();
var dayOfWeek = currentDate.getDay();

if (dayOfWeek == 5) {
    document.getElementById("pancakes").style.display = "block";
} else {
    document.getElementById("pancakes").style.display = "none";
}

//toggles menu
function toggleMenu () {
    document.getElementById("responsive-nav").classList.toggle("hide");
}

//progressive image load
