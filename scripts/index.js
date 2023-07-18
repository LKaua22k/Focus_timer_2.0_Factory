import Timer from "./timer.js"


const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stop = document.querySelector(".stop")
const more = document.querySelector(".more")
const less = document.querySelector(".less")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = minutesDisplay.textContent

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    minutes
})

play.addEventListener("click", () =>{
    alert("play")
    play.classList.add("hide")
    pause.classList.remove("hide")
    stop.classList.remove("hide")
    timer.coutdown()
})

pause.addEventListener("click", () =>{
    alert("pause")
    timer.cTimer()
    pause.classList.add("hide")
    play.classList.remove("hide")
})

stop.addEventListener("click", () =>{
    timer.updateDisplay(minutes, 0)
    clearTimeout(timeout)
    pause.classList.add("hide")
    play.classList.remove("hide")
    stop.classList.add("hide")
})

more.addEventListener("click",() =>{
    timer.moreMinutes()
})

less.addEventListener("click",() =>{
    timer.lessMinutes()
})