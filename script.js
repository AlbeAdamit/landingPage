function UpdateClock() {
var time = new Date();

document.getElementById("timer").innerHTML = time.toUTCString();
}
setInterval(UpdateClock, 1000);