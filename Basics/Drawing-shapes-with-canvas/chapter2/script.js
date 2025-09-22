function patternMethodWithownSize(canvas,ctx){
   // "You cannot set the size of the image used for createPattern by setting img.width and img.height.These properties only affect the display size of the <img> element in the DOM, not the actual image data loaded for canvas."
    let img = new Image();
    img.src = "./assets/logo.jpg"
    img.onload = () =>{
        img.width='120px'
        img.height ='120px'
        let pattern = ctx.createPattern(img,'no-repeat');
        if(!pattern){
            console.error('pattern creation failed')
            return;
        }
        ctx.fillStyle = pattern;
        ctx.fillRect(0,0,canvas.width,canvas.height)
    };
    img.onerror=()=>{
        console.log('yes error on loading on image')
    }
}
function overwriteFocus(canvas,btn1,btn2,ctx){

}
function drawImageMethod(canvas,ctx){
    let img = new Image();
    img.src = './assets/logo.jpg'
    img.onload = () =>{
        ctx.drawImage(img,20,20,220,220)
    }
}
function drawEllipse(ctx){
    ctx.beginPath()
    ctx.ellipse(220,160,110,50,Math.PI*0.25,0,Math.PI*2)
    let gradient = ctx.createLinearGradient(110,50,320,100)
    gradient.addColorStop(0, "cornflowerblue");
    gradient.addColorStop(0.5, "cyan");
    gradient.addColorStop(1, "greenyellow");
    ctx.strokeStyle=gradient;
    ctx.lineWidth =10
    ctx.stroke()
    ctx.beginPath()
    ctx.ellipse(220,160,105,45,Math.PI*0.25,0,Math.PI*2)
    ctx.fill()
}
function fillTextMethod(ctx){
    let gradient = ctx.createLinearGradient(0,160,520,160)
    gradient.addColorStop(0, "cornflowerblue");
    gradient.addColorStop(0.5, "cyan");
    gradient.addColorStop(1, "greenyellow");
    ctx.font = "80px bold serif"
    ctx.fillStyle = gradient
    ctx.fillText('Hello World',20,160,520)
    ctx.strokeStyle = gradient
    ctx.strokeText('Hello Canvas',20,280)
   
}
function drawLineDash(ctx){
    ctx.beginPath()
    ctx.moveTo(0,160)
    ctx.setLineDash([35,10])  // 35 line width and 10 gap if set both 0 then it become solid line.
    ctx.lineTo(520,160)
    console.log(ctx.getLineDash())  // use to the get value of lineDash .
    ctx.stroke()
}
function transformation(ctx){
     ctx.transform(1,0.2,0.5,1,10,15) //transform(ax+cy+e,bx+dy+f)
     ctx.fillStyle='red'
     /*
     1 scale horizontally
     0.2 skew at y axis
     0.5 skew at x axis
     1 scale vertically
     10 transform from left
     15 transfom from top 

     */
    //have one method more same work as it is a =>ctx.setTransform(1,0.2,0.5,1,10,15)
    ctx.fillRect(0,0,120,120)
    ctx.resetTransform() //you can also reset the transform method
    ctx.fillStyle="blue"
    ctx.fillRect(0,0,120,120)
}
function main(){
    let canvas = document.querySelectorAll('.main-canvas')
    if (document.createElement('canvas').getContext){
        let ctx1 = canvas[0].getContext('2d')
        patternMethodWithownSize(canvas[0],ctx1)
        let ctx2 = canvas[1].getContext('2d')
        let btn1 = document.getElementById('button1')
        let btn2 =document.getElementById('button2')
        overwriteFocus(canvas[1],btn1,btn2,ctx2)
        let ctx3 = canvas[2].getContext('2d')
        drawImageMethod(canvas[2],ctx3)
        let ctx4 =canvas[3].getContext('2d')
        drawEllipse(ctx4)
        if(ctx4.getContextAttributes){
            const ctx4Attributes = ctx4.getContextAttributes();
            console.log(JSON.stringify(ctx4Attributes));
        }else{
            console.log('getContextAttributes is not supported');
        }
        let ctx5 = canvas[4].getContext('2d')
        fillTextMethod(ctx5)
        let ctx6 = canvas[5].getContext('2d')
        drawLineDash(ctx6)
        let ctx7 = canvas[6].getContext('2d')
        transformation(ctx7)
    }else{
        //fallback code
    }
}
main();