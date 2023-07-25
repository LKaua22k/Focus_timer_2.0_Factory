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


export default function Events({timer , sound,setvolume,trade}){
    play.addEventListener("click", () =>{
        // alert("play")
        play.classList.add("hide")
        pause.classList.remove("hide")
        stop.classList.remove("hide")
        timer.coutdown()
    })
    
    pause.addEventListener("click", () =>{
        // alert("pause")
        timer.cTimer()
        pause.classList.add("hide")
        play.classList.remove("hide")
    })
    
    stop.addEventListener("click", () =>{
        timer.updateDisplay(minutes, 0)
        timer.cTimer()
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
        trade.removeRain()
        trade.removeCoffe()
        trade.removeFire()
    })
    
    rain.addEventListener("click",() =>{
        if(rain.classList.contains("er")){
            rain.classList.remove("er")
            sound.bgRain.pause()
            return;
        }
        
        rain.classList.add("er")
        sound.bgRain.play()
        trade.removeForest()
        trade.removeCoffe()
        trade.removeFire()
    })
    
    coffe.addEventListener("click",() =>{
        if(coffe.classList.contains("ec")){
            coffe.classList.remove("ec")
            sound.bgCoffe.pause()
            return;
        }
    
        coffe.classList.add("ec")
        sound.bgCoffe.play()
        trade.removeForest()
        trade.removeRain()
        trade.removeFire()
    })
    
    fire.addEventListener("click",() =>{
        if(fire.classList.contains("efi")){
            fire.classList.remove("efi")
            sound.bgFire.pause()
            return;
        }
        
        fire.classList.add("efi")
        sound.bgFire.play()
        trade.removeForest()
        trade.removeRain()
        trade.removeCoffe()
    })
    
    volumeForest.addEventListener("click",() =>{
    })
    
    volumeForest.addEventListener("mousemove",setvolume)
    volumeRain.addEventListener("mousemove",setvolume)
    volumeCoffe.addEventListener("mousemove",setvolume)
    volumeFire.addEventListener("mousemove",setvolume)
}

btnLight.addEventListener("click", () => {
    btnLight.classList.add("hide")
    btnDarck.classList.remove("hide")
    html.classList.add("darck")

})

btnDarck.addEventListener("click", () => {
    btnLight.classList.remove("hide")
    btnDarck.classList.add("hide")
    html.classList.remove("darck")

})