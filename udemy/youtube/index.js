
    var search_input = document.querySelector('.search_input');
    document.addEventListener('keyup', function(e){
        if(e.keyCode === 83){
            search_input.focus();
        }
    })
