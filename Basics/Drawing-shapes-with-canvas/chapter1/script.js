function drawRect(ctx){
        ctx.fillRect(10,10,100,100)
        ctx.strokeRect(120,10,100,100)
        ctx.clearRect(240,10,100,100) //clearRect means fully transparented with no outline , so it initialy not visible.
}
function drawWithPath(ctx){
    ctx.beginPath()
    ctx.moveTo(30,50)
    ctx.lineTo(130,50)
    ctx.lineTo(30,100)
    ctx.lineTo(30,50)
    ctx.fill()
    ctx.beginPath()
    ctx.moveTo(140,100)
    ctx.lineTo(155,50)
    ctx.lineTo(175,70)
    ctx.lineTo(195,50)
    ctx.lineTo(210,100)
    ctx.lineWidth=10
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(220,75)
    ctx.lineTo(245,100)
    ctx.lineTo(245,50)
    ctx.lineWidth=1
    ctx.fill()
}
function arcs(ctx){
    ctx.beginPath()
    ctx.arc(100,50,40,0,Math.PI * 2) // 1 pi = 180 deg
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(80,30,5,0,360)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(120,30,5,0,360)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(100,55,20,0,Math.PI,false)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(80,30,2.3,0,360)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(120,30,2.3,0,360)
    ctx.fill()
}
function quadraticCurve(ctx){
    ctx.beginPath()
    ctx.moveTo(20,40)
    ctx.quadraticCurveTo(40,90,60,40)
    ctx.stroke()
    ctx.fillStyle = "blue"
    ctx.beginPath();
    ctx.arc(20,40,2,0,Math.PI * 2)
    ctx.arc(60,40,2,0,Math.PI*2)
    ctx.fill()

    //message bar
    ctx.beginPath()
    ctx.moveTo(130, 80);
    ctx.quadraticCurveTo(125,105,150,105)
    ctx.quadraticCurveTo(130,155,165,105)
    ctx.quadraticCurveTo(190,105,185,85)
    ctx.quadraticCurveTo(185,70,157.4,70)
    ctx.quadraticCurveTo(130,70,130,85)
    ctx.fillStyle="pink"
    ctx.fill()
}
function beizerCurve(ctx){
    ctx.beginPath()
    ctx.moveTo(30,70)
    ctx.bezierCurveTo(35,10,40,130,45,70)
    ctx.bezierCurveTo(50,10,55,130,60,70)
    ctx.bezierCurveTo(65,10,70,130,75,70)
    ctx.bezierCurveTo(80,10,85,130,90,70)
    ctx.bezierCurveTo(95,10,100,130,105,70)
    ctx.bezierCurveTo(110,10,115,130,120,70)
    ctx.bezierCurveTo(125,10,130,130,135,70)
    ctx.bezierCurveTo(140,10,145,130,150,70)
    ctx.bezierCurveTo(155,10,160,130,165,70)
    ctx.bezierCurveTo(170,10,175,130,180,70)
    ctx.bezierCurveTo(185,10,190,130,195,70)
    ctx.bezierCurveTo(200,10,205,130,210,70)
    ctx.bezierCurveTo(215,10,220,130,225,70)
    ctx.bezierCurveTo(230,10,235,130,240,70)
    ctx.bezierCurveTo(245,10,250,130,255,70)
    ctx.stroke()
}
function drawHeart(ctx){
    ctx.beginPath()
    ctx.moveTo(120,120)
    ctx.bezierCurveTo(60,80,100,40,120,60)
     ctx.bezierCurveTo(140,40,180,80,120,120)
     ctx.fillStyle="indianred"
    ctx.fill()
}
function clipMethod(canvas,ctx){
    let region = new Path2D()
    region.rect(0,20,canvas.width,20)
    region.rect(0,60,canvas.width,20)
    region.rect(0,100,canvas.width,20)
    region.rect(0,140,canvas.width,20)
    region.rect(25,0,20,canvas.height)
    region.rect(70,0,20,canvas.height)
    region.rect(115,0,20,canvas.height)
    region.rect(160,0,20,canvas.height)
    region.rect(205,0,20,canvas.height)
    region.rect(250,0,20,canvas.height)
    ctx.clip(region,"evenodd")
    ctx.fillStyle = 'cornflowerblue';
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillRect(85,0,canvas.width,canvas.height)
}
function complexClip(canvas,ctx){
    let circlePath = new Path2D()
    circlePath.arc(150,70,50,0,Math.PI*2)
    ctx.clip(circlePath)
    let squarePath = new Path2D()
    squarePath.rect(105,25,90,90)
    ctx.clip(squarePath)
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function closePathMethod(canvas,ctx){
    ctx.beginPath()
    ctx.moveTo(10,120)
    ctx.lineTo(80,10)
    ctx.lineTo(150,120)
    ctx.closePath()  //create a straight line from shape last point to shape first point
    ctx.lineWidth=1.5
    ctx.stroke()
}
function conicGradient(canvas,ctx){
    let gradient = ctx.createConicGradient(0,70,50)
    gradient.addColorStop(0,'white')
    gradient.addColorStop(0.1,'red')
    gradient.addColorStop(0.2,'blue')
    gradient.addColorStop(0.3,'green')
    gradient.addColorStop(0.4,'aqua')
    ctx.fillStyle = gradient
    ctx.fillRect(0,0,150,100)
}
function linearGradient(canvas,ctx){
    let gradient = ctx.createLinearGradient(20,-20,140,120)
    gradient.addColorStop(0, "cornflowerblue");
    gradient.addColorStop(0.5, "cyan");
    gradient.addColorStop(1, "greenyellow");
    ctx.fillStyle = gradient
    ctx.fillRect(20,10,120,100)
}
function radialGradient(canvas,ctx){
    let gradient =ctx.createRadialGradient(110, 70, 20, 110, 70, 65)
    gradient.addColorStop(0, "cornflowerblue");
    gradient.addColorStop(0.5, "cyan");
    gradient.addColorStop(1, "black");
    ctx.fillStyle = gradient
    ctx.arc(110, 70, 65, 0,Math.PI*2)
    ctx.fill()

}
function main(){
    const canvas= document.querySelectorAll('.main-canvas')
    const dialog = document.querySelectorAll('.main-dialog')
   if(document.createElement('canvas').getContext){
    const ctx0 = canvas[0].getContext('2d');
    drawRect(ctx0)
    const ctx1 = canvas[1].getContext('2d')
    drawWithPath(ctx1)
    const ctx2 =canvas[2].getContext('2d')
    arcs(ctx2)
    const ctx3 =canvas[3].getContext('2d')
    quadraticCurve(ctx3)
    const ctx4 =canvas[4].getContext('2d')
    beizerCurve(ctx4)
    const ctx5 =canvas[5].getContext('2d')
    drawHeart(ctx5)
    const ctx6 =canvas[6].getContext('2d')
    clipMethod(canvas[6],ctx6)
    const ctx7 =canvas[7].getContext('2d')
    complexClip(canvas[7],ctx7)
    const ctx8 =canvas[8].getContext('2d')
    closePathMethod(canvas[8],ctx8)
    const ctx9 =canvas[9].getContext('2d')
    conicGradient(canvas[9],ctx9)
    const ctx10 =canvas[10].getContext('2d')
    linearGradient(canvas[10],ctx10)
    const ctx11 =canvas[11].getContext('2d')
    radialGradient(canvas[11],ctx11)
   }else{
    //fallback code
   }
}
main()
