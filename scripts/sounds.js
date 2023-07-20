export default function Sound({
    volumeForest,
    volumeRain,
    volumeCoffe,
    volumeFire
}) {

    const bgForest = new Audio("./sound/Floresta.wav")
    
    bgForest.volume = volumeForest.value;

    bgForest.loop = true;

    const bgRain = new Audio("./sound/Chuva.wav")

    bgRain = volumeRain.value

    bgRain.loop = true;

    const bgCoffe = new Audio("./sound/Cafeteria.wav")

    bgCoffe = volumeCoffe.value

    bgCoffe.loop = true;

    const bgFire = new Audio("./sound/Lareira.wav")

    bgFire = volumeFire.value

    bgFire.loop = true;

    return {
        bgForest,
        bgRain,
        bgCoffe,
        bgFire
    }
}