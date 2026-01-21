const timeEl = document.getElementById('count')
const homeEl = document.getElementById('home-val')
const guestEl = document.getElementById('guest-val')
const resetBtn = document.getElementById('reset-btn')
const startBtn = document.getElementById('start-btn')
// here to change timer duration
let setTimer = 90
let interval = null
let countDown = setTimer
const homeBtn1 = document.getElementById('home1')
const homeBtn2 = document.getElementById('home2')
const homeBtn3 = document.getElementById('home3')

const guestBtn1 = document.getElementById('guest1')
const guestBtn2 = document.getElementById('guest2')
const guestBtn3 = document.getElementById('guest3')


function timeCount(){
    interval = setInterval(() => {
        let minutes = Math.floor(countDown/60)
        let second = countDown % 60
        timeEl.textContent = `${minutes} : ${second}`
        if(second <10){
            timeEl.textContent = `${minutes} : 0${second}`
        }

        if(countDown<=0){
            clearInterval(interval)
            interval= null
        }
        countDown--
    }, 1000);
}
startBtn.addEventListener('click',()=>{
    if(interval === null){
        countDown = setTimer
        timeCount()
    }
    else{
        alert('Please wait the timer or click reset button')
    }
})

function addScoreBoard(jumlah,element){
        let scoreVar = Number(element.textContent)
        scoreVar += jumlah
        if(scoreVar<10){
            element.textContent = `0${scoreVar}`
        }
        else{
            element.textContent = `${scoreVar}`
        }
}

homeBtn1.addEventListener('click',()=>{
    addScoreBoard(1,homeEl)
})
homeBtn2.addEventListener('click',()=>{
    addScoreBoard(2,homeEl)
})
homeBtn3.addEventListener('click',()=>{
    addScoreBoard(3,homeEl)
})
guestBtn1.addEventListener('click',()=>{
    addScoreBoard(1,guestEl)
})
guestBtn2.addEventListener('click',()=>{
    addScoreBoard(2,guestEl)
})
guestBtn3.addEventListener('click',()=>{
    addScoreBoard(3,guestEl)
})

resetBtn.addEventListener('click',function(){
    clearInterval(interval)
    interval= null;
    homeEl.textContent= "00"
    guestEl.textContent = "00"
    // countDown = timeEl
    timeEl.textContent = "1 :30"
})