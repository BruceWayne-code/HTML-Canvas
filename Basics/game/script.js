function drawPlayer(){
    ctx.beginPath()
    ctx.roundRect(playerXintial+step,playerYDefault,playerWidth,playerHeight,4)
    ctx.fillStyle = " #9b9789ff"
    ctx.fill()
}
function redraw(){
    drawPlayer()
}
function resizeCanvas(){
    const parentWidth = parent.clientWidth;
    const parentHeight = parent.clientHeight;
    const dpr = window.devicePixelRatio || 1;
    const width = parentWidth * 0.8;
    const height = parentHeight * 0.8;
    canvas[0].width = width * dpr;
    canvas[0].height = height * dpr;
    canvas[0].style.width = '80%';
    canvas[0].style.height = '80%';
    ctx.setTransform(dpr,0,0,dpr,0,0)
    canvasWidth=canvas[0].width / dpr;
    canvasHeight = canvas[0].height / dpr
    ctx.clearRect(0,0,canvas[0].width,canvas[0].height)
}
// import number
// function getRandomNumber(min,max){
//     return Math.floor(Math.random()*(max-min+1)+min);
// }
const canvas = document.querySelectorAll('.gamepad');
const parent = canvas[0].parentElement
const ctx  = canvas[0].getContext('2d');
let canvasWidth,canvasHeight;
resizeCanvas()
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn')
leftBtn.addEventListener("contextmenu", e => e.preventDefault());
rightBtn.addEventListener("contextmenu", e => e.preventDefault());
leftBtn.addEventListener("touchstart", e => e.preventDefault());
rightBtn.addEventListener("touchstart", e => e.preventDefault());
const playerWidth = 120;
const playerHeight = 30;
let cw = Math.floor(canvasWidth-20) //width of canvas with -20 and only integer.
let step = 0; //use this to move player.
let shapesSteps = 0 //use this to move shapes from top to bottom
let smallStarShapesX =Math.floor(Math.random()*(cw-0+1)+0)
let largeStarShapesX = Math.floor(Math.random()*(cw-0+1)+0)
let showLargeStarShapes = true;
let movingTiming =30;
let shapesInterval;
let playerXintial = 0;
const playerYDefault = canvasHeight - playerHeight;
let lefTimeInterval , rightTimeInterval
const longPress = 200;
function handleLongPress(direction){
    if(direction === "left"){
        if(playerXintial + step > 0){
            ctx.clearRect(playerXintial+step, playerYDefault, 
                playerWidth, playerHeight);
            step-=25
            redraw()
        }
    }else if(direction === "right"){
        if(playerXintial+step+playerWidth < canvasWidth){
            ctx.clearRect(playerXintial, playerYDefault, canvasWidth, playerHeight);
            step+=25;
            redraw()
        }
    }
}
let xinterval;
//let make shapes
const drawsmallStarShapes = (x,y) =>{
    ctx.beginPath()
    let x1 = x;
    let y1 = y;
    let x2 = x1+15;
    let y2 = y1-15;
    let x3 = x2+15;
    let y3 = y2+15;
    let x4 = x3-15;
    let y4 = y3+15;
    let xt = ctx.moveTo(x1,y1) //(x1,y1)
    // ctx.rect(x,120,120,60)
    ctx.lineTo(x2,y2) //(x2,y2)
    ctx.lineTo(x3,y3) //(x3,y3)
    ctx.lineTo(x4,y4) //(x4,y4)
    ctx.closePath()
    ctx.fillStyle="yellowGreen";
    ctx.fill()
}
const drawLargeStarShapes = () =>{
    ctx.beginPath()
    ctx.fillStyle="red"
    ctx.fillRect(120,50,80,40)
    ctx.fill()
    // let x1 = x;
    // let y1 = y;
    // let x2 = x1+30;
    // let y2 = y1-30;
    // let x3 = x2+30;
    // let y3 = y2+30;
    // let x4 = x3-30;
    // let y4 = y3+30;
    // ctx.fillStyle="#e056aecf"
    // ctx.moveTo(x1,y1) //(x1,y1)
    // ctx.lineTo(x2,y2) //(x2,y2)
    // ctx.lineTo(x3,y3) //(x3,y3)
    // ctx.lineTo(x4,y4) //(x4,y4)
    // ctx.closePath()
    // ctx.fill()
    // ctx.save()
}

let y =0;
function smallStarShapesLoop(){
    if(shapesSteps){
        ctx.clearRect(smallStarShapesX,shapesSteps-30,30,35)
    }
    shapesSteps+=10
    if(shapesSteps>canvasHeight){
        shapesSteps=0
        smallStarShapesX = Math.floor(Math.random()*(cw-0+1)+0);
    }
    drawsmallStarShapes(smallStarShapesX,shapesSteps)
}
function largeStarShapesLoop(){
    if(shapesSteps)ctx.clearRect(largeStarShapesX,shapesSteps-30,60,60)
    shapesSteps+=15;
    if(shapesSteps>canvasHeight-playerHeight){
        shapesSteps=0;
        largeStarShapesX = Math.floor(Math.random()*(cw-0+1)+0);
    }
    drawsmallStarShapes(smallStarShapesX,shapesSteps)
}
drawLargeStarShapes()
// setInterval(smallStarShapesLoop,movingTiming) //set for looping after every 30ms
// console.log(canvasHeight)
// const smallRoundRects=()=>{
//     let cw = Math.floor(canvasWidth-20)
//     let x = Math.floor(Math.random()*(cw-0+1)+0)
//     ctx.beginPath()
//     let gradient = ctx.createLinearGradient(x,150,x+30,240)
//     gradient.addColorStop(0.4,'cornflowerblue')
//     gradient.addColorStop(0.6,'greenyellow')
//     gradient.addColorStop(1,'#e056aecf')
//     ctx.fillStyle = gradient;
//     ctx.roundRect(x,150,30,90,4)
//     ctx.fill()
// }
// const smallTriangleShapes =()=>{
//     let cw = Math.floor(canvasWidth-20)
//     let x = Math.floor(Math.random()*(cw - 0 + 1)+0)
//     ctx.beginPath();
//     let gradient = ctx.createLinearGradient(x,195,x+30,220  )
//     gradient.addColorStop(0.3,'yellow')
//     gradient.addColorStop(0.4,'pink')
//     gradient.addColorStop(0.9,'green')
//     gradient.addColorStop(1,'darkgreen')
//     ctx.fillStyle = gradient;
//     ctx.moveTo(x,220)
//     ctx.lineTo(x+15,195)
//     ctx.lineTo(x+30,220)
//     ctx.closePath()
//     ctx.fill()
// }
// const smallCircleShapes=()=>{
//     let cw = Math.floor(canvasWidth-20);
//     let x = Math.floor(Math.random()*(cw-0+1)+0)
//     ctx.beginPath();
//     let gradient = ctx.createRadialGradient(x,400,7.5,x,400,15)
//     gradient.addColorStop(0.1,'dodgerblue')
//     gradient.addColorStop(0.4,'deepskyblue')
//     gradient.addColorStop(0.9,'cornflowerblue')
//     gradient.addColorStop(1,'deepskyblue')
//     ctx.fillStyle = gradient;
//     ctx.arc(x,400,15,0,Math.PI*2)
//     ctx.fill()
// }

// function drawHeart(){
//     ctx.beginPath()
//     ctx.moveTo(120,120)
//     ctx.bezierCurveTo(60,80,100,40,120,60)
//     ctx.bezierCurveTo(140,40,180,80,120,120)
//     ctx.fillStyle="darkpink"
//     ctx.fill()
// }
// const largeCircleShapes=()=>{
//     let cw = Math.floor(canvasWidth-20);
//     let x = Math.floor(Math.random()*(cw-0+1)+0)
//     ctx.beginPath();
//     ctx.arc(x,400,25,0,Math.PI*2)
//     ctx.fillStyle="#e056aecf";
//     ctx.fill()
// }
// const largeTriangleShapes =()=>{
//     let cw = Math.floor(canvasWidth-20)
//     let x = Math.floor(Math.random()*(cw - 0 + 1)+0)
//     ctx.beginPath();
//     let gradient = ctx.createLinearGradient(x,170,x+60,220)
//     gradient.addColorStop(0.3,'yellow')
//     gradient.addColorStop(0.4,'pink')
//     gradient.addColorStop(0.9,'green')
//     gradient.addColorStop(1,'darkgreen')
//     ctx.fillStyle = gradient;
//     ctx.moveTo(x,220)
//     ctx.lineTo(x+30,170)
//     ctx.lineTo(x+60,220)
//     ctx.closePath()
//     ctx.fill()
// }
// const largeRoundRects=()=>{
//     let cw = Math.floor(canvasWidth-20)
//     let x = Math.floor(Math.random()*(cw-0+1)+0)
//     ctx.beginPath()
//     let gradient = ctx.createLinearGradient(x,150,x+30,240)
//     gradient.addColorStop(0.5,'cornflowerblue')
//     gradient.addColorStop(0.8,'greenyellow')
//     gradient.addColorStop(1,'#e056aecf')
//     ctx.fillStyle = gradient;
//     ctx.roundRect(x,150,45,120,8)
//     ctx.fill()
// }

// smallRoundRects()
// largeRoundRects()
// smallTriangleShapes()
// largeTriangleShapes()
// smallCircleShapes()
// largeCircleShapes()
// drawHeart()

//for mobile devices
leftBtn.addEventListener('touchstart',(ev)=>{
    ev.preventDefault();
    clearInterval(lefTimeInterval)
    clearInterval(rightTimeInterval)
    lefTimeInterval = setInterval(()=>{
        handleLongPress('left')
    },30)
})
rightBtn.addEventListener('touchstart',(ev)=>{
    ev.preventDefault()
    clearInterval(rightTimeInterval)
    clearInterval(lefTimeInterval)
    rightTimeInterval = setInterval(()=>{
        handleLongPress('right')
    },30)
})

leftBtn.addEventListener('touchend',(ev)=>{
    ev.preventDefault()
    clearInterval(lefTimeInterval)
});
rightBtn.addEventListener('touchend',(ev)=>{
    ev.preventDefault()
    clearInterval(rightTimeInterval)
})
leftBtn.addEventListener('touchcancel',(ev)=>{
    ev.preventDefault()
    clearInterval(lefTimeInterval)
});
rightBtn.addEventListener('touchcancel',(ev)=>{
    ev.preventDefault()
    clearInterval(rightTimeInterval)
})
drawPlayer()
/*create a condition where step + player width is check and apply moving speed stop where canvas width is min and max */