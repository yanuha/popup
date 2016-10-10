$(function() {
  $('.js-popup__icon').on('click', function() {
    $('.js-popup').toggleClass('popup_visible');
  });
});

(function($){
    $(window).on("load",function(){
        $(".js-custom-scroll").mCustomScrollbar({
          theme:"dark-2"
        });
    });
})(jQuery);