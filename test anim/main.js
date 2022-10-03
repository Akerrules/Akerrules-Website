let canvas  = document.getElementById("myCanvas");

let context = canvas.getContext("2d");

var window_height  = window.innerHeight;
var window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8";

//context.fillRect(0, 0, 100, 200);

// context.beginPath();

// context.arc(100, 100, 50, 0, Math.PI * 2, false);
// context.stroke();
// context.fill();
// context.closePath();

class Circle{
    constructor(xpos, ypos, radius, color, speed){
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.speed = speed;
        this.dx = 1 * speed;
        this.dy = 1 * speed;
    }

    draw(context){
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.fill();
        context.closePath();
    }
    update(){
        this.draw(context);
        if((this.xpos + this.radius ) >window_width || (this.xpos - this.radius ) < 0 ){
             this.dx = -this.dx;
        }
        if(this.ypos + this.radius >window_height || (this.ypos - this.radius ) < 0){
            this.dy = -this.dy;
        }
        this.xpos += this.dx;
        this.ypos += this.dy;
    }
}


let randx = Math.random()*window_height;
let list_Of_Blob = [];


for (var i = 0; i<10; i++){
    let randy = Math.random()*window_height;
    let randx = Math.random()*window_width;
    let my_circle = new Circle(randx, randy, 20, "black", 2);
    list_Of_Blob.push(my_circle);
}

let updateCircle = function(){
    requestAnimationFrame(updateCircle);
    context.clearRect(0, 0, window_width, window_height);

    list_Of_Blob.forEach(element =>{
        element.update();
    })
}

updateCircle();

