import Timer from "./timer.js"
import Sound from "./sounds.js"
import Trade from "./trade.js"
import {
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
    volumeFire
} from "./elements.js"

import Events from "./events.js"


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

const trade = Trade({sound})

function setvolume(){
    sound.bgForest.volume = volumeForest.value
    sound.bgRain.volume = volumeRain.value
    sound.bgCoffe.volume = volumeCoffe.value
    sound.bgFire.volume = volumeFire.value
}


Events({timer, sound, setvolume,trade})

const btnLight = document.querySelector(".btn_light")
const btnLight = document.querySelector(".btn_darck")

