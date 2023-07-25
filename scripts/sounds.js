export default function Sound({
    volumeForest,
    volumeRain,
    volumeCoffe,
    volumeFire
}) {

    const buttonPressAudio = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
      )

    const kitchenTimer = new Audio(
        "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
      )

    const bgForest = new Audio("./sound/Floresta.wav")
    
    bgForest.volume = volumeForest.value;

    bgForest.loop = true;

    const bgRain = new Audio("./sound/Chuva.wav")
    
    bgRain.volume = volumeRain.value;

    bgRain.loop = true;

    const bgCoffe = new Audio("./sound/Cafeteria.wav")
    
    bgCoffe.volume = volumeCoffe.value;

    bgCoffe.loop = true;
    
    const bgFire = new Audio("./sound/Lareira.wav")

    bgFire.volume = volumeFire.value;

    bgFire.loop = true;

    return {
        bgForest,
        bgRain,
        bgCoffe,
        bgFire,
        buttonPressAudio,
        kitchenTimer
    }
}