
//Анимация при наведении мыши на иконку


let bigsize = "300";
let smallsize = "150";
let pic;

function changeSize(im){
    if(im.height == bigsize) im.height = smallsize;
    else im.height = bigsize;
}

window.onload = function(){
    pic = document.querySelector("#pic")
    console.log(pic);

}

//Анимация скролла

let last_position = 0;
let ticking = false;


//Наведение на иконку
function dosome2(){
    if(!onmouseover)
    document.querySelector('.ico').style.marginBottom = "400px";
    else
    document.querySelector('.ico').style.marginBottom = "50px";
}
    


window.addEventListener('show', function() {
    
    ico.requestAnimationFrame(function(){
        dosome2();
    })
    ticking = true;
})
