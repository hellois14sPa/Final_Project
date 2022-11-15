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
   $(".sp1").animate({"left" : "0px"},100,function(){
    $(".sp2").animate({"left" : "0px"},100,function(){
        $(".sp3").animate({"left" : "0px"},100,function(){
            $(".sp4").animate({"left" : "0px"},100,function(){
                $(".sp5").animate({"left" : "0px"},100,function(){
                    $(".sp6").animate({"left" : "0px"},100,function(){
                        $(".sp7").animate({"left" : "0px"},100,function(){
                            $(".sp8").animate({"left" : "0px"},100,function(){
                                $(".sp9").animate({"left" : "0px"},100,function(){
                                    $(".sp10").animate({"left" : "0px"},100);

                                });

                            });

                        });

                    });

                });
            
            });

        });

    });

   });
   
   
//    $('.carousel').carousel({
//     interval: 0
//   })
 
});




var section4 = document.querySelector(".so1");

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