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
    volumeFire,
    btnLight,
    btnDarck,
    html
} from "./elements.js"

import Events from "./events.js"


const sound = Sound({
    volumeForest,
    volumeRain,
    volumeCoffe,
    volumeFire
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    minutes,
    sound
})

const trade = Trade({sound})

function setvolume(){
    sound.bgForest.volume = volumeForest.value
    sound.bgRain.volume = volumeRain.value
    sound.bgCoffe.volume = volumeCoffe.value
    sound.bgFire.volume = volumeFire.value
}


Events({timer, sound, setvolume,trade})



