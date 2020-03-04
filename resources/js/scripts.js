  /* MOBILE MENU ICON TOGGLE */


  $('.js-nav-icon').click(function() {
        var nav = $('.js-main-nav');
        var icon = $('.js-nav-icon ionicon');
        
        nav.slideToggle(200);
        
        });

    $('.js-aboutme').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '50px;'
    });