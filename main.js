
document.addEventListener('DOMContentLoaded', function() {
//  bannerDots();

}, false);
//   let point_list = [];
// function bannerDots(){
//     var c = document.getElementById("myCanvas");
     
//      c.height = window.innerHeight;
//      c.width=window.innerWidth-(window.innerHeight*0.05);
//      let ctx =  c.getContext("2d");
//     let maxHeight = c.getBoundingClientRect().height;
//     let maxWidth = c.getBoundingClientRect().width;
//     console.log(maxHeight)
//     let x;
//     let y;
  
//     //const dotElem = document.getElementById('dots');
//   //  const parentElem = document.getElementById('banner-background')
//     for(let i = 0; i<maxWidth/10; i++){
//         x = Math.floor(Math.random() * maxWidth);

//         y = Math.floor(Math.random() * maxHeight);
//         ctx.beginPath();
//         point_list.push([x,y]);
//      ctx.arc(x, y, 5, 0,2*Math.PI);
//         ctx.stroke();
//         ctx.fill();
//     }
//     let i=0;
//  ctx.clearRect(0,0,maxWidth,maxHeight);
//      moveTest();
// }
//   let i=0;
// function moveTest(){

   

//  var c = document.getElementById("myCanvas");
    
//     let ctx =  c.getContext("2d");
//     let maxHeight = c.getBoundingClientRect().height;
//     let maxWidth = c.getBoundingClientRect().width;
   
//       ctx.beginPath();
//        let   direction = Math.floor(Math.random() * 10);
//     if(i>=point_list.length){
//        ctx.clearRect(0,0,maxWidth,maxHeight);
//         i=0;
//     }
    
//     if(direction<=5){
//         ctx.arc(point_list[i][0], point_list[i][1], 5, 0,2*Math.PI);
//        point_list[i][0]=point_list[i][0]+1;
//    }else{
//         ctx.arc(point_list[i][0], point_list[i][1], 5, 0,2*Math.PI);
// point_list[i][1]=point_list[i][1]+1;

//    }
//      i++
//         ctx.stroke();
//         ctx.fill();
//      setTimeout(() => {
//     requestAnimationFrame(moveTest);
//   }, 1000 / 100);

    
// }

const blobs = document.querySelectorAll(".blob");
console.log(document.querySelectorAll(".blob"));
let last = 0;
let changeSpeed = 1500;
let rAF;

function render(now) {
 if (!last || now - last >= changeSpeed) {
    last = now;
    blobs.forEach(blob => {
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
  return Math.floor((Math.random() * 1000000));
};
 
render(last);



