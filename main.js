addEventListener("resize", (event) => {});

onresize = (event) => {};

let canvas = document.getElementById("myCanvas");

let context = canvas.getContext("2d");

let parentBanner = document.getElementById("banner-background");
console.log(parentBanner.offsetWidth);
var window_height = parentBanner.offsetHeight;
var window_width = parentBanner.offsetWidth;
console.log(parentBanner.offsetWidth);
canvas.width = window_width;
canvas.height = window_height;

//context.fillRect(0, 0, 100, 200);

// context.beginPath();

// context.arc(100, 100, 50, 0, Math.PI * 2, false);
// context.stroke();
// context.fill();
// context.closePath();

class Circle {
  randomMin_Max(min, max) {
    return Math.random() * (max - min) + min;
  }

  constructor(radius, color, speed) {
    this.radius = radius;
    this.orignalRad = radius;
    this.color = color;
    this.speed = speed;
    this.dx = 1 * speed;
    this.pulse = true;
    this.dy = 1 * speed;
    this.xpos = Math.random() * (window_width - this.radius) + this.radius;

    this.ypos = Math.random() * (window_height - this.radius) + this.radius;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.color;
    context.fill();

    context.closePath();
  }
  update() {
    // let alternator = randomMin_Max(0,10);
    if (this.orignalRad / this.radius >= 1) {
      this.pulse = true;
      this.radius = this.orignalRad;
    }
    if (
      this.orignalRad / this.radius <= 1 &&
      this.orignalRad / this.radius >= 0.5 &&
      this.pulse
    ) {
      this.radius += 0.1;
    } else {
      this.radius -= 0.1;
      this.pulse = false;
    }
    this.draw(context);
    if (this.xpos + this.radius > window_width || this.xpos - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (
      this.ypos + this.radius > window_height ||
      this.ypos - this.radius < 0
    ) {
      this.dy = -this.dy;
    }
    this.xpos += this.dx;
    this.ypos += this.dy;
  }
}

let randomNumber = function (min, max) {
  var result = Math.random() * (max - min) + min;
  return result;
};
let list_Of_Blob = [];

//let radius = 20;
let numOfBlob = Math.round(window_width * 0.15);
for (var i = 0; i < numOfBlob; i++) {
  let speed = randomNumber(1, 5);
  var alternator = randomNumber(0, 10);
  var radius = randomNumber(window_width * 0.001, window_width * 0.005);

  alternator < 5 ? (speed = -speed) : speed;
  let my_circle = new Circle(radius, "black", speed / 10);
  list_Of_Blob.push(my_circle);
}

let updateCircle = function () {
  requestAnimationFrame(updateCircle);
  context.clearRect(0, 0, window_width, window_height);

  list_Of_Blob.forEach((element) => {
    element.update();
  });
};

updateCircle();

// //for loop to create more blob
// const rootBlobParent = document.getElementById("banner-logo");
// const blobObject =  document.getElementsByClassName("blob-wrap x")[0];
// for (var i = 0; 100>i; i++){
//   clone = blobObject.cloneNode(true);
//   console.log("adding blob");
// rootBlobParent.appendChild(clone);
// }

const blobs = document.querySelectorAll(".blob");
console.log(document.querySelectorAll(".blob"));

let last = 0;
let changeSpeed = 1500;
let rAF;

function render(now) {
  //blob effect
  if (!last || now - last >= changeSpeed) {
    last = now;
    blobs.forEach((blob) => {
      blob.style.borderTopLeftRadius = `${random()}px ${random()}px`;
      blob.style.borderTopRightRadius = `${random()}px ${random()}px`;
      blob.style.borderBottomLeftRadius = `${random()}px ${random()}px`;
      blob.style.borderBottomRightRadius = `${random()}px ${random()}px`;
    });
  }
  rAF = requestAnimationFrame(render);
}
const root = document.documentElement;

const random = () => {
  return Math.floor(Math.random() * 1000000);
};

render(last);


window.scrollToDiv = function(target){
  target.scrollIntoView({behavior: "smooth"});
}

let  goToProject = function(){
  scrollToDiv(document.getElementById("projects"));
}
let  goToAboutme = function(){
  scrollToDiv(document.getElementById("about-me"));
}
let  goToUpcoming= function(){
  scrollToDiv(document.getElementById("upcoming"));
}

document.getElementById("nav-about-me").addEventListener("click", goToAboutme, false)
document.getElementById("nav-projects").addEventListener("click", goToProject, false)
document.getElementById("nav-upcoming").addEventListener("click", goToUpcoming, false)



footer = document.getElementById("footer");
canvasFooter = document.getElementById("footer-canvas");
canvasFooter.width = footer.offsetWidth;
const ctx = canvasFooter.getContext('2d')
let increment = 0
let amplitude = 50
let freq = 0;
let y= canvasFooter.height /1.5

function drawSineWave() {
  ctx.clearRect(0, 0, canvasFooter.width, canvasFooter.height)
  increment++
  ctx.beginPath()
  for (let i = 0; i < canvasFooter.width; i++) {
    ctx.lineTo(i, y + Math.sin(increment / 50) * amplitude * Math.sin(i * 0.02 + freq))
  }

  ctx.lineTo(canvasFooter.width, canvasFooter.height) // bottom right
  ctx.lineTo(0, canvasFooter.height)         
  ctx.fillStyle = "black"// bottom left
  ctx.fill()
}
function animate() {
  requestAnimationFrame(animate)
  drawSineWave()
}
animate();

