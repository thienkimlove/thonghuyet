/*$(function () {
  var sidebar = $('#sidebar');
  var top = sidebar.offset().top - parseFloat(sidebar.css('margin-top'));
  $(window).scroll(function (event) {
    var y = $(this).scrollTop();
    if (y >= top) {
      sidebar.addClass('fixed');
    } else {
      sidebar.removeClass('fixed');
    }
  });
});*/
/*  $(function() {
    var top = $('#sidebar').offset().top - parseFloat($('#sidebar').css('marginTop').replace(/auto/, 0));
    var footTop = $('#footer').offset().top - parseFloat($('#footer').css('marginTop').replace(/auto/, 0));

    var maxY = footTop - $('#sidebar').outerHeight();

    $(window).scroll(function(evt) {
        var y = $(this).scrollTop();
        if (y > top) {
          if (y < maxY) {
            $('#sidebar').addClass('fixed').removeAttr('style');
          } else {
            $('#sidebar').removeClass('fixed').css({
              position: 'absolute',
              top: (maxY - top) + 'px'
            });
          }
        } else {
          $('#sidebar').removeClass('fixed');
        }
    });
});*/
$(document).ready(function() {
    // check where the shoppingcart-div is
    var offset = $('#sidebar').offset();
    console.log(offset.top);
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        // check the visible top of the browser
        if (offset.top<scrollTop) {
            $('#sidebar').addClass('fixed');
        } else {
            $('#sidebar').removeClass('fixed');
        }
    });
});