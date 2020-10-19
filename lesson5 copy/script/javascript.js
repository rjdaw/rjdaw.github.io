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
function preloadImage(img) {
    src = img.getAttribute("data-src");
    img.src = src;
}
images = document.querySelectorAll("[data-src]");

imageOptions = {
    threshold: 1,
    rootMargin: "0px 0px 200px 0px"
};

imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, imageOptions)

images.forEach(image => {
    imageObserver.observe(image);
})