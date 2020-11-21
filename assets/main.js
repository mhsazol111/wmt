(function ($) {
  // Proportional height, width, ratio calculation
  $(window).on('load', function () {
    calcViewportHeight();

    if (isMobileTablet() || iOS()) {
      var orientation = window.orientation;
      $('body').addClass('is-mobile-or-tablet');
      if (isAndroid()) {
        $('body').addClass('is-android-device');
      }
      if (orientation === -90 || orientation === 90) {
        $('body').removeClass('portrait-device').addClass('landscape-device');
      } else {
        $('body').removeClass('landscape-device').addClass('portrait-device');
      }
    }
  });

  $(window).on('resize', function () {
    calcViewportHeight();
  });

  function calcViewportHeight() {
    var rem = window.innerWidth * 0.5625 > window.innerHeight ? (window.innerHeight / 1080) * 10 : (window.innerWidth / 1920) * 10;
    document.documentElement.style.setProperty('--rem', rem + 'px');
  }

  function iOS() {
    return (
      ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
  }

  function isMobileTablet() {
    return navigator.userAgent.match(/Android|BlackBerry|Tablet|Mobile|iPhone|iPad|iPod|Opera Mini|IEMobile/i);
  }

  function isAndroid() {
    return navigator.userAgent.match(/Android/i);
  }

  $(document).ready(function ($) {
    // Mobile Fly-out menu toggle
    $('body').on('click', '.toggle-menu', function () {
      $(this).toggleClass('hamburger-active');
      $('#main-header').toggleClass('header-active');
    });
    $('body').on('click', 'span.menu-close', function () {
      $('.toggle-menu').removeClass('hamburger-active');
      $('#main-header').removeClass('header-active');
    });

    // Landing Page Video Background
    if ($('.landing-video-bg').length) {
      var options = {
        muted: true,
        loop: true,
        autoplay: true,
        position: '50% 50%',
        posterType: 'jpg',
        resizing: true,
        className: 'video-player-wrap',
      };
      $('.landing-video-bg').vide(
        {
          mp4: amz.theme_url + '/assets/videos/landing-video-bg.mp4',
          // webm: path/to/video2,
          // ogv: path/to/video3,
          poster: amz.theme_url + '/assets/images/home-bg.jpg',
        },
        options
      );
    }

    $('#amz-gallery-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      dots: false,
      nav: true,
      smartSpeed: 1000,
      navText: [
        "<span><img src='" + amzData.theme_url + "/assets/images/left-arrow-dark.png' alt=''></span>",
        "<span><img src='" + amzData.theme_url + "/assets/images/right-arrow-dark.png' alt=''></span>",
      ],
    });

    $('#amz-styling-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      dots: false,
      nav: true,
      smartSpeed: 1000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      navText: [
        "<span><img src='" + amzData.theme_url + "/assets/images/left-arrow-dark.png' alt=''></span>",
        "<span><img src='" + amzData.theme_url + "/assets/images/right-arrow-dark.png' alt=''></span>",
      ],
    });

    // Back to top
    // $('.amz-back-to-top a').on('click', function () {
    //   $('html, body').animate({ scrollTop: 0 }, 300);
    //   return false;
    // });

    // $(window).on('scroll', function () {
    //   if ($(this).scrollTop() < 100) {
    //     $('.amz-back-to-top a').fadeOut(300);
    //   } else {
    //     $('.amz-back-to-top a').fadeIn(300);
    //   }
    // });

    window.addEventListener('orientationchange', function (event) {
      var orientation = window.orientation;

      if (isMobileTablet() || iOS()) {
        if (orientation === -90 || orientation === 90) {
          $('body').removeClass('portrait-device').addClass('landscape-device');
        } else {
          $('body').removeClass('landscape-device').addClass('portrait-device');
        }

        window.location.reload();
        $('body').removeClass('playing-inFullscreen');
      }
    });

    /* Sample function that returns boolean in case the browser is Internet Explorer*/
    function isIE() {
      ua = navigator.userAgent;
      /* MSIE used to detect old browsers and Trident used to newer ones*/
      var is_ie = ua.indexOf('MSIE ') > -1 || ua.indexOf('Trident/') > -1;

      return is_ie;
    }

    /* Create an alert to show if the browser is IE or not */
    if (isIE()) {
      $('html').addClass('ie_mod');
      alert(
        'Unsupported Browser! This website will offer limited functionality in this browser. We only support the recent versions of major browsers like Chrome, Safari, and Edge.'
      );
    }
  }); // Document Ready
})(jQuery);
