import Timer from "./timer.js"
import Sound from "./sounds.js"


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


const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    minutes
})

const sound = Sound({
    volumeForest,
    volumeRain,
    volumeCoffe,
    volumeFire
})


function setvolume(){
    sound.bgForest.volume = volumeForest.value
    sound.bgRain.volume = volumeRain.value
    sound.bgCoffe.volume = volumeCoffe.value
    sound.bgFire.volume = volumeFire.value
}



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

forest.addEventListener("click",() =>{
    if(forest.classList.contains("ef")){
        forest.classList.remove("ef")
        sound.bgForest.pause()
        return;
    }
    forest.classList.add("ef")
    sound.bgForest.play()
})

rain.addEventListener("click",() =>{
    if(rain.classList.contains("er")){
        rain.classList.remove("er")
        sound.bgRain.pause()
        return;
    }
    
    rain.classList.add("er")
    sound.bgRain.play()
})

coffe.addEventListener("click",() =>{
    if(coffe.classList.contains("ec")){
        coffe.classList.remove("ec")
        sound.bgCoffe.pause()
        return;
    }

    coffe.classList.add("ec")
    sound.bgCoffe.play()
})

fire.addEventListener("click",() =>{
    if(fire.classList.contains("efi")){
        fire.classList.remove("efi")
        sound.bgFire.pause()
        return;
    }
    
    fire.classList.add("efi")
    sound.bgFire.play()
})

volumeForest.addEventListener("click",() =>{
})

volumeForest.addEventListener("mousemove",setvolume)
volumeRain.addEventListener("mousemove",setvolume)
volumeCoffe.addEventListener("mousemove",setvolume)
volumeFire.addEventListener("mousemove",setvolume)
