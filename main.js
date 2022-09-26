
document.addEventListener('DOMContentLoaded', function() {
  bannerDots();
}, false);

function bannerDots(){
    var c = document.getElementById("myCanvas");
     let ctx =  c.getContext("2d");
    let maxHeight = c.getBoundingClientRect().height;
    let maxWidth = c.getBoundingClientRect().width;
    console.log(maxHeight)
    let x;
    let y;
    
    //const dotElem = document.getElementById('dots');
  //  const parentElem = document.getElementById('banner-background')
    for(let i = 0; i<maxWidth/10; i++){
        x = Math.floor(Math.random() * maxWidth);

        y = Math.floor(Math.random() * maxHeight);

      
        ctx.beginPath();
      
        ctx.arc(x, y, 5, 0,2*Math.PI);
        ctx.stroke();
        ctx.fill();
    //    let clone = dotElem.cloneNode(true);
    //    clone.id
    //    parentElem.appendChild(clone)
    }
}