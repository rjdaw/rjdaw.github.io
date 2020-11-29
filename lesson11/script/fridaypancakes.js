//checks if today is Friday
var currentDate = new Date();
var dayOfWeek = currentDate.getDay();

if (dayOfWeek == 5) {
    document.getElementById("pancakes").style.display = "block";
} else {
    document.getElementById("pancakes").style.display = "none";
}