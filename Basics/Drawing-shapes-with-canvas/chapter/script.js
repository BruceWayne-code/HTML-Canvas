function translateMethod(ctx){
    ctx.translate(30,20) //20 from top and 30 from left
    ctx.fillRect(0,0,120,120)
}
function scaleMethod(ctx){
    ctx.scale(0.5,1.2) //each pixel on horizontal direction becomes half and each pixel in vertical direction become multiply become 1.2 pixels
    ctx.fillRect(0,0,120,120)
}
function saveRestore(ctx0){
    ctx0.save()
    ctx0.fillStyle="green"
    ctx0.fillRect(10,10,120,120) //without restore method ctx style will be same.
    ctx0.restore()  // by using restore method , now form this line rtx style will be initalized (by defualt.)
    ctx0.fillRect(180,40,120,120)
}
function roundRectMethod(ctx){
    ctx.beginPath()
    ctx.strokeStyle = "red"
    ctx.roundRect(10,10,100,60,6) //6px for all corner
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = "green"
    ctx.roundRect(120,10,100,60,[6]) //6px for all corner
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = "blue"
    ctx.roundRect(230,10,100,60,[10,20]) //10px for top-left , bottom-right and 20px for top-right and bottom-left.
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = "yellow"
    ctx.roundRect(340,10,100,60,[10,0,30])  //10 px for top-left and 0 px for top-right , bottom-left and 30 px for bottom-right.
    ctx.stroke()
    ctx.beginPath()
    ctx.fillStyle = "cornflowerblue"
    ctx.roundRect(140,100,220,180,[20,60,30,6]) //20px for top-left and 60px for top-right and 30px for bottom-right and 6px for bottom-left.
    ctx.fill()
}
function rotateMehtod(ctx){
    ctx.save()
    ctx.fillStyle='goldenrod'
    ctx.rotate((Math.PI*3)/180)
    ctx.roundRect(190,10, 220, 180,[10])
    ctx.fill()
    ctx.restore()
    ctx.beginPath()
    ctx.fillStyle='blue'
    ctx.arc(190,10,10,0,Math.PI*2)
    ctx.fill()
}
function resetMethod(ctx,hidden){
    ctx.beginPath()
    ctx.fillStyle = 'RED'
    ctx.arc(280,60,50,0,Math.PI*2)
    ctx.fill()
    ctx.beginPath()
    ctx.font = "30px bold serif"
    ctx.fillStyle="white"
    ctx.fillText('STOP',245 ,70)
    ctx.fill()
    ctx.reset() //comment this line and saw the function of resetMethod
    ctx.beginPath()
    ctx.fillStyle = 'GREEN'
    ctx.arc(120,60,50,0,Math.PI*2)
    ctx.fill()
    ctx.beginPath()
    ctx.font = "30px bold serif"
    ctx.fillStyle="white"
    ctx.fillText('GO',100,70)
    ctx.fill()
}
function measureTextWidth(ctx){
    let gradient = ctx.createLinearGradient(20,120,520,120)
    gradient.addColorStop(0,'cornflowerblue')
    gradient.addColorStop(0.3,'aqua')
    gradient.addColorStop(1,'greenyellow')
    ctx.beginPath()
    ctx.font='40px bold serif'
    ctx.fillStyle=gradient
    let text = ctx.fillText('measureText See Console',20,120)
    ctx.fill()
    console.log('Text width = ',ctx.measureText(text))
}
function isMethods(ctx){
    if(ctx.isContextLost()===true){
        console.log('Your driver is crashes and running out of memory')
    }else{
        ctx.beginPath()
        let gradient = ctx.createLinearGradient(10,0,130,130)
        gradient.addColorStop(0,'violet')
        gradient.addColorStop(0.5,'beige')
        gradient.addColorStop(1,'greenyellow')
        ctx.roundRect(10,10,120,120,12)
        ctx.fillStyle = gradient;
        ctx.fill()
        console.log('Is points(35,89) are in between the path = ',ctx.isPointInPath(14,14,))
        console.log('Is points(141,89) are in between the path = ',ctx.isPointInPath(141,89))
        ctx.beginPath()
        ctx.strokeStyle = gradient;
        ctx.roundRect(140,10,120,120,12)
        ctx.lineWidth = 6;
        ctx.stroke()
        console.log('Is points(141,89) are in between the stroke = ',ctx.isPointInStroke(141,89))
    }
}
let canvas = document.querySelectorAll('.main-canvas')
if(document.createElement('canvas').getContext){
    let ctx0 = canvas[0].getContext('2d');
    translateMethod(ctx0)
    let ctx1 = canvas[1].getContext('2d')
    scaleMethod(ctx1)
    let ctx2 = canvas[2].getContext('2d')
    saveRestore(ctx2)
    let ctx3 = canvas[3].getContext('2d')
    roundRectMethod(ctx3)
    let ctx4 = canvas[4].getContext('2d')
    rotateMehtod(ctx4)
    let ctx5 = canvas[5].getContext('2d')
    resetMethod(ctx5)
    let ctx6 = canvas[6].getContext('2d')
    measureTextWidth(ctx6)
    let ctx7 = canvas[7].getContext('2d')
    isMethods(ctx7)

}else
{
    //fallback code
}