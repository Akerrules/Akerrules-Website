function bannerDots(){
    const dotElem = document.getElementById('dots');
    const parentElem = document.getElementById('banner-background')
    for(let i = 0; i<20; i++){
        let clone = dotElem.cloneNode();
        parentElem.appendChild(clone)
    }
}