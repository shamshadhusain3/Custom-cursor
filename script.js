var main=document.querySelector('main')
var crsr=document.querySelector('.cursor1')  

main.addEventListener('mousemove', function(e){
    crsr.style.left=e.clientX+'px';
    crsr.style.top=e.clientY+'px';

})