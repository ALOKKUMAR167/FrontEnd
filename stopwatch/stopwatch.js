const timedisplay = document.querySelector("#timedisplay");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");

let starttime = 0;
let elapasedtime = 0;
let currenttime = 0;
let paused = true;
let hrs = 0;
let mins = 0;
let secs = 0;

startbtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        starttime = Date.now() - elapasedtime;
        intervalid = setInterval(updatetime, 75);
    }
});
pausebtn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        elapasedtime = Date.now() - starttime;
        clearInterval(intervalid);
    }
});
resetbtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalid);
    starttime = 0;
    elapasedtime = 0;
    currenttime = 0;
    hrs = 0;
    mins = 0;
    secs = 0;
    timedisplay.textContent = "00:00:00";

});

function updatetime() {
    elapasedtime = Date.now() - starttime;

    secs = Math.floor((elapasedtime / 1000) % 60);
    mins = Math.floor((elapasedtime / (1000 * 60)) % 60);
    hrs = Math.floor((elapasedtime / (1000 * 60 * 60)) % 60);

    secs = pad(secs);
    mins = pad(mins);
    hrs = pad(hrs);

    timedisplay.textContent = `${hrs}:${mins}:${secs}`;


    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }

}