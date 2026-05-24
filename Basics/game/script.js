function drawPlayer() {
  player = new Path2D();
  ctx.beginPath();
  player.roundRect(
    playerXintial + playerStep,
    playerYDefault,
    playerWidth,
    playerHeight,
    4,
  );
  ctx.fillStyle = "rgba(230, 249, 249, 1) ";
  ctx.fill(player);
  //add comment to check the save listner and i now
  // 1. Calculate the logical coordinates (where the player thinks the point is)
  const logicalCheckX = playerXintial + playerStep + 4;
  const logicalCheckY = playerYDefault + playerHeight - 4;
  let x = 12; 
  let y = 'w';
  let c ='eriop'
  let tests = 'successfully done'
  // 2. Apply the DPR scale and round for sub-pixel accuracy
  //    The point must be checked in the scaled coordinate space.

  const transformedCheckX = Math.round(logicalCheckX * dpr);
  const transformedCheckY = Math.round(logicalCheckY * dpr); // 3. Log the result using the transformed coordinates

  console.log(ctx.isPointInPath(player, transformedCheckX, transformedCheckY));
}
function redraw() {
  drawPlayer();
}
function resizeCanvas() {
  const parentWidth = parent.clientWidth;
  const parentHeight = parent.clientHeight;
  const width = parentWidth * 0.8;
  const height = parentHeight * 0.8;
  canvas[0].width = width * dpr;
  canvas[0].height = height * dpr;
  canvas[0].style.width = "80%";
  canvas[0].style.height = "80%";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  canvasWidth = canvas[0].width / dpr;
  canvasHeight = canvas[0].height / dpr;
  ctx.clearRect(0, 0, canvas[0].width, canvas[0].height);
}
const canvas = document.querySelectorAll(".gamepad");
const dpr = window.devicePixelRatio || 1;
const parent = canvas[0].parentElement;
const ctx = canvas[0].getContext("2d");
let canvasWidth, canvasHeight;
resizeCanvas();
const leftBtn = document.getElementById("left-btn");
const rightBtn = document.getElementById("right-btn");
leftBtn.addEventListener("contextmenu", (e) => e.preventDefault());
rightBtn.addEventListener("contextmenu", (e) => e.preventDefault());
leftBtn.addEventListener("touchstart", (e) => e.preventDefault());
rightBtn.addEventListener("touchstart", (e) => e.preventDefault());
let playerWidth;
if (window.innerWidth > 1220) {
  playerWidth = 280;
} else {
  playerWidth = 120;
}
const playerHeight = 30;
let cw = Math.floor(canvasWidth - 20); //width of canvas with -20 and only integer.
let player;
let playerStep = 0; //use this to move player.
let smallStarShapesSteps = 0; //use this to move shapes from top to bottom
let largeStarShapesSteps = 0;
let smallRoundRectsSteps = 0;
let largeRoundRectsSteps = 0;
let traingleshapeSteps = 0;
let drawHeartSteps = 0;
let circleShapeSteps = 0;
let smallStarShapesX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
let largeStarShapesX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
let smallRoundRectsX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
let largeRoundRectsX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
let drawHeartx = Math.floor(Math.random() * (cw - 0 + 1) + 0);
let traingleShapeX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
let circleShapeX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
let whichGroup = "group1";
let group1Interval, group2Interval;
let mainGameLoopTiming = 50;
let playerXintial = 0;
const playerYDefault = canvasHeight - playerHeight;
let lefTimeInterval, rightTimeInterval;
let shape1X, shape1Y;
const longPress = 200;
function handleLongPress(direction) {
  if (direction === "left") {
    if (playerXintial + playerStep > 0) {
      ctx.clearRect(
        playerXintial + playerStep,
        playerYDefault,
        canvasWidth,
        playerHeight,
      );
      playerStep -= 25;
      redraw();
    }
  } else if (direction === "right") {
    if (playerXintial + playerStep + playerWidth < canvasWidth) {
      ctx.clearRect(
        playerXintial + playerStep,
        playerYDefault,
        canvasWidth,
        playerHeight,
      );
      playerStep += 25;
      redraw();
    }
  }
}
//let make shapes
const drawSmallStarShapes = (x, y) => {
  ctx.beginPath();
  let x1 = x;
  let y1 = y;
  let x2 = x1 + 15;
  let y2 = y1 - 15;
  let x3 = x2 + 15;
  let y3 = y2 + 15;
  let x4 = x3 - 15;
  let y4 = y3 + 15;
  let xt = ctx.moveTo(x1, y1); //(x1,y1)
  ctx.lineTo(x2, y2); //(x2,y2)
  ctx.lineTo(x3, y3); //(x3,y3)
  ctx.lineTo(x4, y4); //(x4,y4)
  ctx.closePath();
  ctx.fillStyle = "yellowGreen";
  ctx.fill();
};
function drawHeart(x, y) {
  ctx.beginPath();
  let x1 = x;
  let y1 = y;
  let x2 = x1 - 60;
  let y2 = y1 - 40;
  let x3 = x2 + 40;
  let y3 = y2 - 40;
  let x4 = x3 + 20;
  let y4 = y3 + 20;
  let x5 = x4 + 20;
  let y5 = y4 - 20;
  let x6 = x5 + 40;
  let y6 = y5 + 40;
  let x7 = x6 - 60;
  let y7 = y6 + 40;
  ctx.moveTo(x1, y1);
  ctx.fillStyle = "#be2887ff";
  ctx.bezierCurveTo(x2, y2, x3, y3, x4, y4);
  ctx.bezierCurveTo(x5, y5, x6, y6, x7, y7);
  ctx.fill();
}
const largeRoundRects = (x, y) => {
  ctx.beginPath();
  let gradient = ctx.createLinearGradient(x, y, x + 45, y + 120);
  gradient.addColorStop(0.5, "cornflowerblue");
  gradient.addColorStop(0.8, "greenyellow");
  gradient.addColorStop(1, "#e056aecf");
  ctx.fillStyle = gradient;
  ctx.roundRect(x, y, 40, 120, 4);
  ctx.fill();
};
const circleShape = (x, y) => {
  ctx.beginPath();
  let gradient = ctx.createRadialGradient(x, y, 10, x, y, 20);
  gradient.addColorStop(0.1, "dodgerblue");
  gradient.addColorStop(0.4, "deepskyblue");
  gradient.addColorStop(0.9, "cornflowerblue");
  gradient.addColorStop(1, "deepskyblue");
  ctx.fillStyle = gradient;
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.fill();
};
function group1() {
  "this function is used to good dynamic view of repersantion of each shapes as respective siblings shapes.";
  const group1Completed =
    smallStarShapesSteps > canvasHeight &&
    drawHeartSteps > canvasHeight &&
    largeRoundRectsSteps > canvasHeight &&
    circleShapeSteps > canvasHeight;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawHeartSteps += 10;
  smallStarShapesSteps += 20;
  largeRoundRectsSteps += 14;
  circleShapeSteps += 12;
  if (group1Completed) {
    drawHeartSteps = -120;
    smallStarShapesSteps = -30;
    largeRoundRectsSteps = -120;
    circleShapeSteps = -40;
    drawHeartx = Math.floor(Math.random() * (cw - 0 + 1) + 0);
    smallStarShapesX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
    largeRoundRectsX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
    circleShapeX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
    whichGroup = "group2";
  }
  drawHeart(drawHeartx, drawHeartSteps);
  drawSmallStarShapes(smallStarShapesX, smallStarShapesSteps);
  largeRoundRects(largeRoundRectsX, largeRoundRectsSteps);
  circleShape(circleShapeX, circleShapeSteps);
  drawPlayer();
}
const drawLargeStarShapes = (x, y) => {
  ctx.beginPath();
  let x1 = x;
  let y1 = y;
  let x2 = x1 + 30;
  let y2 = y1 - 30;
  let x3 = x2 + 30;
  let y3 = y2 + 30;
  let x4 = x3 - 30;
  let y4 = y3 + 30;
  ctx.fillStyle = "#e056aecf";
  ctx.moveTo(x1, y1); //(x1,y1)
  ctx.lineTo(x2, y2); //(x2,y2)
  ctx.lineTo(x3, y3); //(x3,y3)
  ctx.lineTo(x4, y4); //(x4,y4)
  ctx.closePath();
  ctx.fill();
  ctx.save();
};
const smallRoundRects = (x, y) => {
  ctx.beginPath();
  let gradient = ctx.createLinearGradient(x, y, x + 20, y + 90);
  gradient.addColorStop(0.4, "cornflowerblue");
  gradient.addColorStop(0.6, "greenyellow");
  gradient.addColorStop(1, "#e056aecf");
  ctx.fillStyle = gradient;
  ctx.roundRect(x, y, 30, 90, 4);
  ctx.fill();
};
const smallTriangleShapes = (x, y) => {
  ctx.beginPath();
  let gradient = ctx.createLinearGradient(x, y, x + 22.5, y - 15);
  gradient.addColorStop(0.3, "yellow");
  gradient.addColorStop(0.6, "#e461b4ff");
  gradient.addColorStop(0.9, "green");
  gradient.addColorStop(1, "darkgreen");
  ctx.fillStyle = gradient;
  ctx.moveTo(x, y);
  ctx.lineTo(x + 15, y - 30);
  ctx.lineTo(x + 30, y);
  ctx.closePath();
  ctx.fill();
};
function group2() {
  const group2Completed =
    largeStarShapesSteps > canvasHeight &&
    smallRoundRectsSteps > canvasHeight &&
    traingleshapeSteps > canvasHeight &&
    circleShapeSteps > canvasHeight;
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  largeStarShapesSteps += 14;
  smallRoundRectsSteps += 10;
  traingleshapeSteps += 20;
  circleShapeSteps += 12;
  if (group2Completed) {
    largeStarShapesSteps = -60;
    smallRoundRectsSteps = -90;
    traingleshapeSteps = -30;
    circleShapeSteps = -40;
    smallRoundRectsX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
    largeStarShapesX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
    traingleShapeX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
    circleShapeX = Math.floor(Math.random() * (cw - 0 + 1) + 0);
    whichGroup = "group1";
  }
  drawLargeStarShapes(largeStarShapesX, largeStarShapesSteps);
  smallRoundRects(smallRoundRectsX, smallRoundRectsSteps);
  smallTriangleShapes(traingleShapeX, traingleshapeSteps);
  circleShape(circleShapeX, circleShapeSteps);
  drawPlayer();
}
function mainGameLoop() {
  if (whichGroup === "group1") {
    group1();
  } else if (whichGroup === "group2") {
    group2();
  }
}
const mainGameInterval = setInterval(mainGameLoop, mainGameLoopTiming);
//for mobile devices
leftBtn.addEventListener("touchstart", (ev) => {
  ev.preventDefault();
  clearInterval(lefTimeInterval);
  clearInterval(rightTimeInterval);
  lefTimeInterval = setInterval(() => {
    handleLongPress("left");
  }, 30);
});
rightBtn.addEventListener("touchstart", (ev) => {
  ev.preventDefault();
  clearInterval(rightTimeInterval);
  clearInterval(lefTimeInterval);
  rightTimeInterval = setInterval(() => {
    handleLongPress("right");
  }, 30);
});

leftBtn.addEventListener("touchend", (ev) => {
  ev.preventDefault();
  clearInterval(lefTimeInterval);
});
rightBtn.addEventListener("touchend", (ev) => {
  ev.preventDefault();
  clearInterval(rightTimeInterval);
});
leftBtn.addEventListener("touchcancel", (ev) => {
  ev.preventDefault();
  clearInterval(lefTimeInterval);
});
rightBtn.addEventListener("touchcancel", (ev) => {
  ev.preventDefault();
  clearInterval(rightTimeInterval);
});
drawPlayer();
/*create a condition where playerStep + player width is check and apply moving speed stop where canvas width is min and max */
document.addEventListener("keydown", (ev) => {
  if (ev.code == "ArrowLeft" || ev.code == "KeyA" || ev.code == "Numpad4") {
    ev.preventDefault();
    clearInterval(lefTimeInterval);
    clearInterval(rightTimeInterval);
    lefTimeInterval = setInterval(() => {
      handleLongPress("left");
    }, 15);
  } else if (
    ev.code == "ArrowRight" ||
    ev.code == "KeyD" ||
    ev.code == "Numpad6"
  ) {
    ev.preventDefault();
    clearInterval(rightTimeInterval);
    clearInterval(lefTimeInterval);
    rightTimeInterval = setInterval(() => {
      handleLongPress("right");
    }, 15);
  } else console.log(ev.code);
});
document.addEventListener("keyup", (ev) => {
  if (ev.code == "ArrowLeft" || ev.code == "KeyA" || ev.code == "Numpad4") {
    ev.preventDefault();
    clearInterval(lefTimeInterval);
  } else if (
    ev.code == "ArrowRight" ||
    ev.code == "KeyD" ||
    ev.code == "Numpad6"
  ) {
    ev.preventDefault();
    clearInterval(rightTimeInterval);
  } else console.log(ev.code);
});
