// creat array contain all imgs
var i=0;
var slidesImage = ["imgs/img1.jpg","imgs/img2.jpg","imgs/img3.jpg"];

// creat function for slideshow
var slideshow =(function() {
    document.slideshow.src=slidesImage[i]
    if(i <slidesImage.length-1){
        i++
    }
    else{
        i=0
    }

    setTimeout("slideshow()",3000)
    //document.getElementById("demo").onclick = function() {slideshow()};
    
    

})
slideshow()