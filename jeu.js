
let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let virac = document.question.vracette.value
let isPlaying = false
let ballRadius = 10

let paddleHeight = 10
let paddleWidth = 75
let paddleX = (canvas.width-paddleWidth)/2

let rightPressed = false
let leftPressed = false
let interval = setInterval(play, 10)

let echange = 0

let x = canvas.width/2
let y = canvas.height-30
let dx = 2
let dy = -2

let botX = 0

let min = (-2)
let max = 2

function reloaded() {
    virac = document.question.vracette.value
    isPlaying = false
    ballRadius = 10
    paddleHeight = 10
    paddleWidth = 75
    paddleX = (canvas.width-paddleWidth)/2
    rightPressed = false
    leftPressed = false
    x = canvas.width/2
    y = canvas.height-30
    dx = 2
    dy = -2
    botX = 0
    echange = 0
}

function play() {
    if (isPlaying === true) {
        if (y + dy < canvas.height - ballRadius + paddleHeight) {
            draw()
        }
        else {
            isPlaying = false
            reloaded()
            let lose = document.getElementById("lose")
            lose.style.display = ""
        }
    }
}

function speedBall() {
    if( dx < 0) {
        dx = -2 - echange/4
    }else{
        dx = 2 + echange/4
    }
    if(dy < 0) {
        dy = -2 - echange/4
    }else {
        dy = 2 + echange/4
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath()
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function bot() {
    ctx.beginPath();
    ctx.rect(botX, 0, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall()
    drawPaddle()
    bot()
    speedBall()
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
        echange++
    }
    if(y + dy < ballRadius) {
        if ( x > botX && x < botX+paddleWidth) {
            dy = -dy
        }
    } else if(y + dy > canvas.height-ballRadius) {
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
    }
        
    x += dx
    y += dy

    if(rightPressed) {
        paddleX += parseInt(virac);
        if (paddleX + paddleWidth > canvas.width){
            paddleX = canvas.width - paddleWidth;
        }
    }
    else if(leftPressed) {
        paddleX -= parseInt(virac);
        if (paddleX < 0){
            paddleX = 0;
        }
    }

    botX = x - paddleWidth/2
}
document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)
function keyDownHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
    }
}

function aha() {
    speedBall()
    let lose = document.getElementById("lose")
    lose.style.display = "none"
    isPlaying = true
}
function ahb() {
    isPlaying = false
}
function aaa() {
    let g = parseInt(virac)
    console.log(g)
}

function violet() {
    function frf() {paddleX = botX; echange = 0}; let ghb = setInterval(frf, 10)
}