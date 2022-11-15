$(document).ready(function(){

    $("#h1_header").animate({"opacity" : "0.2"} , 3000,function(){

        $("#h1_header").animate({"opacity" : "0.7"} , 3000,function(){
            $("#h1_header").animate({"opacity" : "1"} , 3000);

        });

    });
 

   $(".div3 button").css("opacity" , "1");
   $(".div2 h1").css("opacity" , "1");
   $(".div1 ul li").css("opacity" , "1");
   $(".sec3 .div1").css({"top" : "0px" , "opacity" : "1"});
   $(".sec3 .div2 img").css({"right" : "0px"});
   $(".sec3 .div2 img").css({"transform" : "rotate(360deg)"});
   
  
 
});



var section1 = document.querySelector(".sec4");
var section2 = document.querySelector(".sec5");
var section3 = document.querySelector(".sec6");
var section4 = document.querySelector(".sec3");

window.onscroll = function(){
    if(window.scrollY  >=  section1.offsetTop - 300  && window.scrollY  <=  section1.offsetTop + 50  )
{

        $(".sec4 .div1").css("opacity" , "1");
        $(".sec4 .div2").css("opacity" , "1");
        $(".sec4 .div3").css("opacity" , "1");
        $(".sec4 .div4").css("opacity" , "1");
        $(".sec4 .div5").css("opacity" , "1");
        $(".sec4 .div6").css("opacity" , "1");
        $(".sec4 .div7").css("opacity" , "1");
        $(".sec4 .div8").css("opacity" , "1");
        $(".sec4 .div9").css("opacity" , "1");
        $(".sec4 .div10").css("opacity" , "1");

}else if(window.scrollY  >=  section2.offsetTop - 300  && window.scrollY  <=  section2.offsetTop + 50)
{
    $(".sec5 .div1 img").css({"opacity" : "1" , "right" :"0" });
  

}else if(window.scrollY  >=  section3.offsetTop - 300  && window.scrollY  <=  section3.offsetTop + 50)
{
    $(".sec6 .Responsive").css({"font-size" : "49px"});
  

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