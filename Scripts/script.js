function test(){
    alert("Что жмёшь-то, я и так никого тут не трогаю")
}

//Анимация при наведении мыши на иконку

window.addEventListener('DOMContentLoaded', function(){
    let pic = document.getElementById('pic');
    pic.addEventListener('onclick', test)
    console.log(pic);
})

    







//Анимация скролла

let last_position = 0;
let ticking = false;


function dosome(scroll_pos){
    if(scroll_pos > 600)
    document.querySelector('.background').style.backgroundColor = "red";
    else
    document.querySelector('.background').style.backgroundColor = "aquamarine";
}


window.addEventListener('scroll', function() {
    last_position = this.window.scrollY;

    if(!ticking){
        this.window.requestAnimationFrame(function() {
            dosome(last_position);
            ticking = false;
        })
    }

    ticking = true;
})


//Кнопки, что вечно мертвы

function goUrl(){
    let right = confirm("Хочешь посмотреть видик?..", 'Gliridae...');

    if(right){
        document.location.href ="https://youtu.be/D-SQqppuGvc"; 
    }
    
}




let elem = document.getElementsByClassName('nav__link')
elem[2].addEventListener('onclick', goUrl);
console.log(elem[2]);