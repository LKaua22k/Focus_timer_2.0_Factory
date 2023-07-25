const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stop = document.querySelector(".stop")
const more = document.querySelector(".more")
const less = document.querySelector(".less")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = minutesDisplay.textContent
let forest = document.querySelector(".forest")
let rain = document.querySelector(".rain")
let coffe = document.querySelector(".coffe")
let fire = document.querySelector(".fire")

let volumeForest = document.querySelector("#volumeForest")
let volumeRain = document.querySelector("#volumeRain")
let volumeCoffe = document.querySelector("#volumeCoffe")
let volumeFire = document.querySelector("#volumeFire")

const btnLight = document.querySelector(".btn_light")
const btnDarck = document.querySelector(".btn_darck")
const html = document.documentElement


export {
    play,
    pause,
    stop,
    more,
    less,
    minutesDisplay,
    secondsDisplay,
    minutes,
    forest,
    rain,
    coffe,
    fire,
    volumeForest,
    volumeRain,
    volumeCoffe,
    volumeFire,
    btnLight,
    btnDarck,
    html
}