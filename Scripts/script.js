function test(){
    alert("Что жмёшь-то, я и так никого тут не трогаю")
}

//Анимация при наведении мыши на иконку



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


//Кнопки, что вечно мертвы

function goUrl(){
    let right = confirm("Хочешь посмотреть видик?..", 'Gliridae...');

    if(right){
        document.location.href ="https://youtu.be/D-SQqppuGvc"; 
    }
    else{
        alert("Как хочешь...")
    }
}



//Добавление событий после полной прогрузки DOM

window.addEventListener('DOMContentLoaded', function(){

    //Иконка
    let pic = document.getElementById('pic');
    pic.addEventListener('click', test)
    console.log(pic);

    //Кнопки
    let elem = document.getElementsByClassName('nav__link')
    console.log(elem[2]);
    for (let index = 0; index < elem.length; index++) {
        elem[index].addEventListener('click', goUrl);
        
    }

})
