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
function main(){
    const canvas= document.querySelectorAll('.main-canvas')
   if(document.createElement('canvas').getContext){
    const ctx0 = canvas[0].getContext('2d');
    drawRect(ctx0)
    const ctx1 = canvas[1].getContext('2d')
    drawWithPath(ctx1)
   }else{
    //fallback code
   }
}
main()
