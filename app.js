const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const seconds= document.querySelector('#time-left')
let score = document.querySelector('#score')
const button = document.querySelector('button')

let result= 0
let hitPosition

score.innerHTML= result

let startTime = 60

function randomSquare() {
    squares.forEach(square =>{
        square.classList.remove('mole')
    })
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square =>{
    square.addEventListener('mousedown', ()=>{
        if (square.id == hitPosition)
        result++
        score.innerHTML = result
        hitPosition= null
    })
})


function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 2000)

}

function reduceTime(){
    if (startTime>0){
    startTime--
    seconds.innerHTML = startTime
    }
    else{
        seconds.innerHTML ="Times UP"
    }


}


function countDown(){
    setInterval(reduceTime, 1000)
    
}



button.addEventListener('click', ()=>{
    alert('try to catch the mole');
    moveMole();
    countDown();

}
)

