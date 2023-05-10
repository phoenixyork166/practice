window.addEventListener('load',function(){
    var container = document.querySelector('.container')
    var lis = document.querySelectorAll('.container li');
    var ps = document.querySelectorAll('.container li p')
    for(var i = 0 ; i < lis.length; i++){
        lis[i].addEventListener('mouseover',function() {
           
            var p = this.querySelector('p');
            p.style.top = '0'
            p.style.transition = '0.25s'
           
           
        })
    }
    for(var i = 0 ; i < lis.length; i++){
        lis[i].addEventListener('mouseleave',function() {
           
            var p = this.querySelector('p');
            p.style.top = '-100%';
            p.style.transition = '0.25s'
           
        })
    }


})