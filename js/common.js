//세로스크롤링
(function($){
    $.aniPage=function(e,type){
        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
            $("body, html").animate({
                scrollTop:$(window).scrollTop()-$(window).height()
            },1000,function(){
                    $.aniOk = 0;
            });
        }else{
            $("body, html").animate({
                scrollTop:$(window).scrollTop()+$(window).height()
            },1000,function(){
                    $.aniOk = 0;
            });
        }

    };
})(jQuery);
$(function(){
    $(window).height();
    $.aniOk=0;
    $(window).scrollTop(0);

   //웹슬라이더
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true,
      autoplay : true,
      autoplaySpeed : 3000, 
      pauseOnHover : true,
      dots : true, 
    });

    jQuery('#design a').click(function (event) {
      event.preventDefault();
});


$('.top').click(function(){
  event.preventDefault();

  $("html,body").stop().animate({scrollTop:0});
  });//menu.click() 끝

  
    //top버튼 일부 사라져
    $(window).scroll(function(){ 
      if ($(document).scrollTop() >= 500 && $(document).scrollTop() <= 12000){  
        $('.top').fadeIn(); 
      }
     // else if ($(document).scrollTop() >= 3000){
   //     $('#quick').fadeOut();
    //  }
      else {
        $('.top').fadeOut();
      } 
    })//window scroll


    var cont= $('.content').offset().top;
    // alert(cont);
     $(window).scroll(function(){ //윈도우 스크롤을 하면
       if ($(document).scrollTop() >= cont){
         $('.logo a').css({background: "url('images/logo_brown.png') no-repeat"})  //if 만약에 도큐먼트 스크롤탑이 300보다 크거나 같으면
       }
       else {
         $('.logo a').css({background: "url('images/logo_white.png') no-repeat"}) //300보다 작으면
       }
       
     })//window scroll
     

        $('#stage li').click(function(){
          var img = $(this).find('img');
          var a_href = img.attr('title')
          var text_1 = $(this).attr('alt')
          $('.full_zoom').fadeIn();
          $('.full_zoom .img img').attr('src',a_href)
          $('.full_zoom .txt').attr('alt',text_1)       
          $('.full_zoom .button').click(function(){
              $('.full_zoom').fadeOut();
           }) //닫기버튼
        })//그림띄우기

});   //jquery 전체

$(document).on("mousewheel DOMMouseScroll",function(e){
    e.preventDefault();
    if($.aniOk == 0){
        $.aniPage(e,e.type);
        $.aniOk = 1;
    }
});

