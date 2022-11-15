$(document).ready(function(){

    // $("#h1_header").animate({"opacity" : "0.2"} , 3000,function(){

        // $("#h1_header").animate({"opacity" : "0.7"} , 3000,function(){
            // $("#h1_header").animate({"opacity" : "1"} , 3000);

        // });

    // });
 

//    $(".div3 button").css("opacity" , "1");
//    $(".div2 h1").css("opacity" , "1");
//    $(".div1 ul li").css("opacity" , "1");
   $(".sec3 .div1").css({"top" : "0px" , "opacity" : "1" , "transform" : "scale(1.0, 1.0)"});
   $(".sec3 h1").css({"top" : "0px"});
   $(".sec3 h1").css({"right" : "0px"});
   
   
   $('.carousel').carousel({
    interval: 0
  })
 
});




var section2 = document.querySelector(".se5");
var section3 = document.querySelector(".se6");
var section4 = document.querySelector(".sec3");

window.onscroll = function(){
    if(window.scrollY  >=  section2.offsetTop - 400  && window.scrollY  <=  section2.offsetTop + 30  )
    {

    $(".se5 .div1").css("background-color" , "#2a1717");   
    $(".se5 .div1 h1").css("color" , "#FFF");   
    $(".se5 .div1 .icon").css("color" , "#FFF");   

    }else if(window.scrollY  >=  section3.offsetTop - 400  && window.scrollY  <=  section3.offsetTop + 30  )
    {

        $(".de").css("letter-spacing" , "0px");
        $(".se6 img").css("transform" , "skew(0deg)");
     
    }else if(window.scrollY  >=  section4.offsetTop + 100  && window.scrollY  <=  section4.offsetTop + 1515250)
    {
        $(document).ready(function(){
    
            $(".U_p").css("display" , "block");
    
    });
    
      
    
    }else
    {
        $(document).ready(function(){
    
            $(".U_p").css("display" , "none");
    
    });
    }
}; 