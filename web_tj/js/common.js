$(function(){
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        autoplay : true,	
        autoplaySpeed : 3000, 
        pauseOnHover : true,
      });

	
        $('.top').click(function(){
          event.preventDefault();
      
          $("html,body").stop().animate({scrollTop:0});
          });//menu.click() 끝
      
          $('.nav_btn').click(function(){
            $('#nav_mo').css({'top':'0'})
            })
            
            $('#nav_mo .close span').click(function(){
              $('#nav_mo').css({'top':'-110%'})
            })
            


      $(".menu_papa").mouseover(function() {		
        $(this).find('img').attr("src", $(this).find('img').attr("src").replace(".png","_on.png"));
      });	
      $(".menu_papa").mouseout(function() {
        $(this).find('img').attr("src", $(this).find('img').attr("src").replace("_on.png",".png"));
      });
    }); //end
