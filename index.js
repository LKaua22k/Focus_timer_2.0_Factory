const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stop = document.querySelector(".stop")
const more = document.querySelector(".more")
const less = document.querySelector(".less")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let timeout

function coutdown() {
    setTimeout(() => {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);

        if(seconds <=0){
           seconds =10

           --minutes
        }

        updateDisplay(minutes,seconds)
        coutdown()
    }, 1000);
}

function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2,'0')
    secondsDisplay.textContent = String(seconds).padStart(2,'0')
}

play.addEventListener("click", () =>{
    alert("play")
    coutdown()
})