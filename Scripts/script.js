//Добавление событий после полной прогрузки DOM
let n;

window.addEventListener('DOMContentLoaded', function(){


    window.addEventListener("click", event => console.log(event.target.id))
    //Иконка
    let pic = document.getElementById('pic');
    pic.addEventListener('click', test)
    console.log(pic);

    //Кнопки
    let elem = document.getElementsByClassName('nav__link')
    console.log(elem[2]);
    for (let index = 0; index < elem.length; index++) {
        elem[index].addEventListener('click', () => confirmtion('Тут будет музычка, хочешь?..', "Да...", goUrl, "Ну как хочешь...", n));
        
    }

    
    
    
    document.getElementById('conf').addEventListener('click', closeco);
    document.getElementById('closer2').addEventListener('click', closeco);
    document.getElementById('closer').addEventListener('click', closeal);
    document.getElementById('aler').addEventListener('click', closeal);
    document.getElementById('btn_tx').addEventListener('mouseover', newColor);
    document.getElementById('btn_tx').addEventListener('mouseout',  newColor2);


    //Новые всплывающие окна

//Предупреждение
function alertion(text){
    elem = document.querySelector('#altx');
    elem.textContent = text;
    console.log(text);

    
    clos = document.querySelector('#closer');
    aler = document.querySelector('#aler');
    aler.classList.add('aler_on');
    if(aler.classList.contains('aler_off')){
        aler.classList.remove('aler_off')
    }
    
    clos.style.animation = 'fades .35s linear 0s 1';
    aler.style.animation = 'fade .35s linear 0s 1';
    
    clos.classList.add('closer');
    if(clos.classList.contains('closer_off')){
        clos.classList.remove('closer_off')
    }


}

//Закрытие окна
function closeal(){
    aler = document.querySelector('#aler');
    clos = document.querySelector('#closer');

    clos.style.animation = 'fades2 .35s linear 0s 1';
    aler.style.animation = 'fade2 .35s linear 0s 1';


    setTimeout(function(){
        aler.classList.remove('aler_on');
        aler.classList.add('aler_off');

        clos.classList.remove('closer');
        clos.classList.add('closer_off');
    }, 350)
    
    


    return false;
}

//Подтверждение
function confirmtion(text, text_2, func, text_3, n){
    window.addEventListener("click", event => n = event.target.id)
    elem2 = document.querySelector('#btn_tx')
    elem2.textContent = text_2;
    console.log(text_2);

    elem = document.querySelector('#conftx');
    elem.textContent = text;
    console.log(text);

    
    clos = document.querySelector('#closer2');
    conf = document.querySelector('#conf');
    conf.classList.add('conf_on');
    if(conf.classList.contains('conf_off')){
        conf.classList.remove('conf_off')
    }
    
    clos.style.animation = 'fades .35s linear 0s 1';
    conf.style.animation = 'fade .35s linear 0s 1';
    
    clos.classList.add('closer2');
    if(clos.classList.contains('closer2_off')){
        clos.classList.remove('closer2_off')
    }

    document.getElementById('btn_tx').addEventListener('click', func);
    if(n !== undefined){
        if(n !== 'btn_tx'){
            alertion(text_3)
        }
    }
    document.removeEventListener("click", event => n = event.target.id)


}


//Закрытие окна
function closeco(){
    conf = document.querySelector('#conf');
    clos = document.querySelector('#closer2');
    clos.style.animation = 'fades2 .35s linear 0s 1';
    conf.style.animation = 'fade2 .35s linear 0s 1';
  
    setTimeout(function(){
        conf.classList.remove('conf_on');
        conf.classList.add('conf_off');
    
        clos.classList.remove('closer2');
        clos.classList.add('closer2_off');
    }, 350)
    
    
    return false;
}


    

function test(){
    alertion("Что жмёшь-то, я никого не трогаю");
}


//Кнопки, что вечно мертвы

function goUrl(){
    document.location.href ="https://youtu.be/D-SQqppuGvc";  
}

function newColor(){
    document.getElementById('btn_tx').classList.add('befo');
    if(document.getElementById('btn_tx').classList.contains('afte')){
        document.getElementById('btn_tx').classList.remove('afte');
    }
}

function newColor2(){
    document.getElementById('btn_tx').classList.add('afte');
    if(document.getElementById('btn_tx').classList.contains('befo')){
        document.getElementById('btn_tx').classList.remove('befo');
    }
}
})


