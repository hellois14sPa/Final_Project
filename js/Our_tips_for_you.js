$(document).ready(function(){

 $("#B1").click(function(){
    $(".plan1").css("display" , "none");
    $(".plan2").css("display" , "block");
    $(".plan3").css("display" , "none");
    $(".plan4").css("display" , "none");
    $(".plan5").css("display" , "none");

 });

 $("#B2").click(function(){
    $(".plan1").css("display" , "none");
    $(".plan2").css("display" , "none");
    $(".plan3").css("display" , "block");
    $(".plan4").css("display" , "none");
    $(".plan5").css("display" , "none");

 });

 $("#B3").click(function(){
    $(".plan1").css("display" , "none");
    $(".plan2").css("display" , "none");
    $(".plan3").css("display" , "none");
    $(".plan4").css("display" , "block");
    $(".plan5").css("display" , "none");

 });

 $("#B4").click(function(){
    $(".plan1").css("display" , "none");
    $(".plan2").css("display" , "none");
    $(".plan3").css("display" , "none");
    $(".plan4").css("display" , "none");
    $(".plan5").css("display" , "block");

 });



 
});




var section4 = document.querySelector(".con1");

window.onscroll = function(){
     if(window.scrollY  >=  section4.offsetTop + 100  && window.scrollY  <=  section4.offsetTop + 1515250)
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