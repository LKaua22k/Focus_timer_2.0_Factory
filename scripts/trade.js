import {
    forest,
    rain,
    coffe,
    fire,
} from "./elements.js"

export default function Trade({sound}) {

    function removeForest(){
        forest.classList.remove("ef")
        sound.bgForest.pause()
    }

    function removeRain(){
        rain.classList.remove("er")
        sound.bgRain.pause()
    }

    function removeCoffe(){
        coffe.classList.remove("ec")
        sound.bgCoffe.pause()
    }

    function removeFire(){
        fire.classList.remove("efi")
        sound.bgFire.pause()
    }


    return{
        removeForest,
        removeRain,
        removeCoffe,
        removeFire
    }
}