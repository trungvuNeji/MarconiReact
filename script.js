$(document).ready(function() {
  // For smooth scrolling
  $('.click-btn').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
          scrollTop: $(hash).offset().top
        },
        1000,
        function() {
          window.location.hash = hash;
        }
      );
    }
  });

  // Fixing scrolling behavior in mobile
  if (window.innerWidth <= 767) {
    window.addEventListener("hashchange", function() {
      scrollBy(0, -30);
    });
  }

});