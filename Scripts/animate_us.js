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