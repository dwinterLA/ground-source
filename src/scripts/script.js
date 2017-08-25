$(document).ready(function() {
  $(window).scroll(function() {
    if (window.pageYOffset >= 67) {
      $('#top-nav').hide();
      $('.ham-menu').show();
    }
    if (window.pageYOffset < 67) {
      $('#top-nav').show();
      $('.ham-menu').hide();
    }
  })
  $(".scroll-arrow").click(function() {
    window.scrollTo(0, $('#header-home').height());
  });

  $('.contact-close').click(function() {
    $('.contact-us-modal').fadeToggle();
  });
  $('.contact-us-link').click(function() {
    $('.contact-us-modal').fadeToggle();
    $('.nav-modal').fadeOut();
  });
  $('.ham-menu, .menu-close').click(function(){
    $('.nav-modal').fadeToggle();
  });
})