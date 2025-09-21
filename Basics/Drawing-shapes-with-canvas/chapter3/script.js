let canvas = document.querySelectorAll('.main-class')
if(document.createElement('canvas').getContext){
    let ctx0 = canvas[0].getContext('2d')
}else
{
    //fallback code
}