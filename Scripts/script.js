//Добавление событий после полной прогрузки DOM
let n;

window.addEventListener('DOMContentLoaded', function(){



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
})


//Новые всплывающие окна

//Предупреждение
function alertion(text){
    elem = document.querySelector('#altx');
    elem.textContent = text;
    console.log(text);

    aler = document.querySelector('.aler');
    aler.style.display = 'block';

    clos = document.querySelector('#closer');
    clos.style.display = 'block';

    aler.style.opacity = "1";
    clos.style.opacity = '0.5';
}

//Закрытие окна
function closeal(){
    aler = document.querySelector('.aler');
    clos = document.querySelector('#closer');
    setTimeout(opa(clos), 500);
    setTimeout(opa(aler), 500);
    aler.addEventListener('transitionend', function(e){
        dis(clos);
        dis(aler);
    })

        clos.addEventListener('transitionend', function(e){
            dis(clos);
            dis(aler);
        })
}

//Подтверждение
function confirmtion(text, text_2, func, text_3, n){
    document.addEventListener("click", event => n = event.target.id)
    elem2 = document.querySelector('#btn_tx')
    elem2.textContent = text_2;
    console.log(text_2);

    elem = document.querySelector('#conftx');
    elem.textContent = text;
    console.log(text);

    conf = document.querySelector('.conf');
    conf.style.display = 'block';

    clos = document.querySelector('#closer2');
    clos.style.display = 'block';

    conf.style.opacity = '1';
    clos.style.opacity = '0.5';

    document.getElementById('btn_tx').addEventListener('click', func);
    if(n !== undefined){
        if(n !== 'btn_tx'){
            alertion(text_3)
        }
    }
    document.getElementById('btn_tx').removeEventListener('click', func);
    document.removeEventListener("click", event => n = event.target.id)

    
}


//Закрытие окна
function closeco(){
    conf = document.querySelector('.conf');
    clos = document.querySelector('#closer2');
    setTimeout(opa(clos), 500);
    setTimeout(opa(conf), 500);

        clos.addEventListener('transitionend', function(e){
            dis(clos);
            dis(conf);
        })

        conf.addEventListener('transitionend', function(e){
            dis(clos);
            dis(conf);
        })  
       
    return false;
}

//Плавное закрытие
function opa(elem){
    elem.style.opacity = '0';
}
    
function dis(elem){
    elem.style.display = 'none';
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