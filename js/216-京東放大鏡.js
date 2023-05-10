//所有元素加載完後再運行js
window.addEventListener('load',function(){
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big')
    //1.鼠標經過 preview_img 就顯示和隱藏mask和大盒子
    preview_img.addEventListener('mouseover',function(){
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout',function(){
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove',function(e){
         //需注意這個盒子的父盒子有沒有定位，因為offsetLeft是當前盒子距離有定位的父盒子的左側的距離，如父元素沒有定位就是距離瀏覽器左側的距離，此時為量度距離瀏覽器左側的距離，使用e.pageX - 該距離，可得到鼠標在盒子的距離
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        //遮罩跟隨鼠標在盒子中的坐標（因遮罩以鼠標為中心點 因此left和top各再減遮罩高度的一半）
       //mask移動的距離
        var maskX =  x - mask.offsetWidth /2 ;
        var maskY =  y - mask.offsetHeight /2 ;
        //遮罩移動的距離  不能超出圖片盒子 如果x坐標小於0 就讓他停在0的位置 遮罩移動的距離不應大於圖片盒子與遮罩的寬/高差，否側黃色遮罩可以跑出圖片盒子的右邊和下面的邊框

        //遮罩的最大移動距離
        var maskMax = preview_img.offsetWidth - mask.offsetWidth
        if(maskX <=0){
            maskX = 0
        } 
        if(maskX >= maskMax){
            maskX = maskMax
        }

        if(maskY <=0){
            maskY = 0
        } 
        if(maskY >= maskMax){
            maskY = maskMax
        }
        
        mask.style.left = maskX + 'px'
        mask.style.top = maskY + 'px'
        //大圖片的移動距離 = 遮罩移動距離/遮罩最大移動距離 * 大圖片最大移動距離 （因遮罩的移動比例和大圖片的移動比例是相同的）

        var bigIMG = document.querySelector('.bigImg');
        //大圖片最大移動距離 = 圖片大小-圖片盒子大小
        var bigMax = bigIMG.offsetWidth - big.offsetWidth;
        //大圖片的移動距離
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        //遮罩移動的方向應與圖片移動方向相反
        bigIMG.style.left = -bigX + 'px';
        bigIMG.style.top = -bigY + 'px';
        

       
    })
})