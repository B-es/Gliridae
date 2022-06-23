//Добавление событий после полной прогрузки DOM
let n;

window.addEventListener('DOMContentLoaded', function(){


    window.addEventListener("click", event => console.log(event.target.id))
    //Иконка
    let pic = document.getElementById('pic');
    pic.addEventListener('click', test)
    console.log(pic);
    pic.addEventListener('click', sound);
    //Кнопки
    let elem = document.getElementsByClassName('nav__link')
    console.log(elem[2]);
    for (let index = 0; index < elem.length-1; index++) {
        elem[index].addEventListener('click', () => confirmtion('Тут будет музычка, хочешь?..', "Да...", goUrl, "Ну как хочешь...", n)); 
    }
    document.getElementById("AUS").addEventListener('click', () => confirmtion('Давай, тут отдохнёт твоя душа, хочешь?..', "Да...", Gliridae, "Ну как хочешь...", n));
    document.getElementById('conf').addEventListener('click', closeco);
    document.getElementById('closer2').addEventListener('click', closeco);
    document.getElementById('closer').addEventListener('click', closeal);
    document.getElementById('aler').addEventListener('click', closeal);
    document.getElementById('btn_tx').addEventListener('mouseover', newColor);
    document.getElementById('btn_tx').addEventListener('mouseout',  newColor2);
    document.getElementById('main_btn').addEventListener('click', () => confirmtion('Сюда нельзя...', "Льзя...", main_Button, "Ну как хочешь...", n));

    //Здесь текста для наших иконок
    this.document.getElementById('D1').addEventListener('click',()=> alertion("Её рекорды похожи на: спала меньше всех, почти адекватна."));
    this.document.getElementById('D2').addEventListener('click',()=> alertion("Оживил мёртвое и сам умер..."));
    this.document.getElementById('D3').addEventListener('click',()=> alertion("Хотел всё уничтожить, но только хотел."));
    this.document.getElementById('D4').addEventListener('click',()=> alertion("Мы о нём знаем столько же, сколько и вы."));
    
    //Вот эти две строчки отвечают за приветствие
    /*let audio2 = new Audio('https://zvukogram.com/mp3/cats/1200/o-privet.mp3');
    audio2.play();*/

    //Анимация скролла
    let element = document.querySelector("#bb");
    let options = {
        root: document.querySelector('intro'),
        rootMargin: "2px",
        threshold: 0.2,
    };

    let callback = function(entries, observer){
        entries.forEach(entry=> {
            if(!entry.isIntersecting){
                console.log('Я работаю.');
                entry.target.classList.add('bottom_back_off');
                
            }
            else{
                console.log('Я работаю.');
                entry.target.classList.add('bottom_back');
                entry.target.classList.remove('bottom_back_off');
                
            }
            
        })
    }

    let observer = new IntersectionObserver(callback, options);
   
    observer.observe(element);
   

    let btnScrollDown = document.querySelector('#US');
    let body = document.querySelector('body');
    
    console.log(body);
    function scrollDown() {
      let windowCoords = body.clientHeight;
      (function scroll() {
        if ((window.innerHeight + window.scrollY) < document.body.offsetHeight - (document.body.offsetHeight/4 - 100)) {
            window.scrollBy(0, 20);
            setTimeout(scroll, 0);
            console.log(window.pageYOffset);
        }
        if (window.pageYOffset >= windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);


//Новые всплывающие окна

//Предупреждение
function alertion(text){
    elem = document.querySelector('#altx');
    elem.textContent = text;
    console.log(text);

    elem.classList.add('altx_on');
    if(elem.classList.contains('altx_off')){
        elem.classList.remove('altx_off')
    }
    
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
    elem = document.querySelector('#altx');
    clos.style.animation = 'fades2 .35s linear 0s 1';
    aler.style.animation = 'fade2 .35s linear 0s 1';


    setTimeout(function(){
        aler.classList.remove('aler_on');
        aler.classList.add('aler_off');

        elem.classList.remove('altx_on');
        elem.classList.add('altx_off');

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

    elem.classList.add('altx_on');
    if(elem.classList.contains('altx_off')){
        elem.classList.remove('altx_off')
    }
    
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

        elem.classList.remove('altx_on');
        elem.classList.add('altx_off');
    
        clos.classList.remove('closer2');
        clos.classList.add('closer2_off');
    }, 350)
    
    
    return false;
}


    

function test(){
    confirmtion("Что жмёшь-то, я никого не трогаю", "Иди отсель туды...", importantCow, "С одной стороны правильно...", n);
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

function Gliridae(){
    document.location.href ="https://www.youtube.com/watch?v=4h2-2Aj3xmQ"; 
}

function main_Button(){
    document.location.href ="https://www.youtube.com/watch?v=qqK1FrO3BdM&t=0s";
}

function sound(){
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'https://d6.hotplayer.ru/downloadm/c12beb07c92eab99c0533a78b0fa7eea/273234793_456241210/f10ba770dae0-1c447b9037c1-6464e9c1b4d/%D1%82%D1%8F%D0%B6%D0%B5%D0%BB%D0%BE...%20-%20%D1%82%D1%8F%D0%B6%D0%B5%D0%BB%D0%BE....mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

function importantCow(){
    document.location.href = '//www.youtube.com/watch?v=kk3_5AHEZxE';
}

