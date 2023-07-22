import Timer from "./timer.js"
import Sound from "./sounds.js"
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

function setvolume(){
    sound.bgForest.volume = volumeForest.value
    sound.bgRain.volume = volumeRain.value
    sound.bgCoffe.volume = volumeCoffe.value
    sound.bgFire.volume = volumeFire.value
}

function remo(b1,b2,b3){
    b1.classlist.add("teste")
    b2.classlist.add("teste")
    b3.classlist.add("teste")
}

Events({timer, sound, setvolume, remo})
