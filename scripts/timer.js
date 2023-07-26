export default function Timer({
    minutesDisplay,
    secondsDisplay,
    minutes,
    sound
}) {
    let timeout

    function coutdown() {
        timeout = setTimeout(() => {
            let minutes = Number(minutesDisplay.textContent);
            let seconds = Number(secondsDisplay.textContent);
    
            if(minutes <=0 && seconds <= 0){
                sound.kitchenTimer.play()
                updateDisplay(minutes,seconds)
                return
            }
    
            if(seconds <= 0){
               seconds = 60
    
               --minutes
            }
    
            updateDisplay(minutes,String(seconds -1))
            coutdown()
        }, 1000);
    }

    function moreMinutes(){
        let minutes = Number(minutesDisplay.textContent) + 5
    
        if(minutes >= 100){
            minutes = 100
        }
        
        updateDisplay(minutes,0)
    }

    function lessMinutes(){
        let minutes = Number(minutesDisplay.textContent) - 5
    
        if(minutes < 0){
            minutes = 0
        }
    
        updateDisplay(minutes, 0)
    }
    
    function updateDisplay(minutes, seconds){
        minutesDisplay.textContent = String(minutes).padStart(2,'0')
        secondsDisplay.textContent = String(seconds).padStart(2,'0')
    }

    function cTimer(){
        clearTimeout(timeout)
    }

    return {
        coutdown,
        moreMinutes,
        lessMinutes,
        updateDisplay,
        cTimer
    }
}
