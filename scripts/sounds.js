export default function Sound({
    volumeForest
}) {

    const bgForest = new Audio("./sound/Floresta.wav")
    
    bgForest.volume = volumeForest.value;

    bgForest.loop = true;

    return {
        bgForest
    }
}