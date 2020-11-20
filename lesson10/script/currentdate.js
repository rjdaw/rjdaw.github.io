//takes care of the current date
let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

document.getElementById("currentdate").innerHTML = new Date().toLocaleDateString("en-GB", options);