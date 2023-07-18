const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stop = document.querySelector(".stop")
const more = document.querySelector(".more")
const less = document.querySelector(".less")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = minutesDisplay.textContent
let timeout

function coutdown() {
    timeout = setTimeout(() => {
        let minutes = Number(minutesDisplay.textContent);
        let seconds = Number(secondsDisplay.textContent);

        if(minutes <=0 && seconds <= 0){
            updateDisplay(minutes,seconds)
            return
        }

        if(seconds <= 0){
           seconds = 10

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

play.addEventListener("click", () =>{
    alert("play")
    play.classList.add("hide")
    pause.classList.remove("hide")
    stop.classList.remove("hide")
    coutdown()
})

pause.addEventListener("click", () =>{
    alert("pause")
    clearTimeout(timeout)
    pause.classList.add("hide")
    play.classList.remove("hide")
})

stop.addEventListener("click", () =>{
    updateDisplay(minutes, 0)
    clearTimeout(timeout)
    pause.classList.add("hide")
    play.classList.remove("hide")
    stop.classList.add("hide")
})

more.addEventListener("click",() =>{
    moreMinutes()
})

less.addEventListener("click",() =>{
    lessMinutes()
})