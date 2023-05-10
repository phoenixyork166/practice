function animate(obj, target, callback) {
    clearInterval(obj.timer);
   ;
    obj.timer = setInterval(function() {
        //distance 需要寫在定時器裡面
        //把distance改為整數 不要出現小數
        //var distance = Math.ceil((target - obj.offsetLeft)/20)
        var distance = (target - obj.offsetLeft)/10;
        distance = distance > 0 ? Math.ceil(distance) : Math.floor(distance);
   
        if (obj.offsetLeft == target){ 
            //停止動畫
        clearInterval(obj.timer)
        //回調函數寫在定時器結束時
        callback && callback();
    }     

    //運算動畫就是 盒子當前的位置 + 固定值
    //緩速動畫就是 盒子當前位置 + 變化值
    obj.style.left = obj.offsetLeft + distance +'px'
},15)
}