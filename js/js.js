$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });

    // $(window).on('scroll', function() {
    //     var $header = $('.header'),
    //         $menuItem = $('.header__link'),
    //         scroll = $(this).scrollTop();
    
    //     if (scroll > 10) {
    //         $header.addClass('navbar-scroll');
    //         $menuItem.addClass('header__link-color');
    //     } else {
    //         $menuItem.removeClass('header__link-color');
    //         $header.removeClass('navbar-scroll');
    //     }
    // });
});


var keys = {37: 1, 38: 1, 39: 1, 40: 1, 33: 1, 34: 1, 32: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) 
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault;
  window.onmousewheel = document.onmousewheel = preventDefault;
  window.ontouchmove  = preventDefault;
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}

$(document).ready(function(){
    $('#btn').on('click', function(){
        $('.form__phone').fadeIn(400, disableScroll);
    });
});

$('.close').on('click', function(event){
    if(event.target == this)
    {
        $('.form__phone').fadeOut(400, enableScroll);
    }
});


$(document).ready(function(){
    $('#callbak').on('click', function(){
        $('.form__phone').fadeIn(400, disableScroll);
    });
});

$('.close').on('click', function(event){
    if(event.target == this)
    {
        $('.form__phone').fadeOut(400, enableScroll);
    }
});
/***************/

new WOW().init();