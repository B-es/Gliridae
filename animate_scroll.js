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


