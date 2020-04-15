/* ========================================================================

Skivo: Main.js ( Main Theme JS file )

Theme Name: Skivo - Creative Agency Landing Page with Blog
Version: 1.0
Author: Bassil Qureshi
Author URI: https://themeforest.net/user/markupthemes
If you having trouble in editing js. please send a mail to bassilqureshi@gmail.com
 
=========================================================================
 */


"use strict";


/*======== Doucument Ready Function =========*/
jQuery(document).ready(function () {

    //CACHE JQUERY OBJECTS
    var $window = $(window);

    $window.on( 'load', function () {
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");
        $("body").delay(350).css({ "overflow": "visible" });
        /* Init Wow Js */
        new WOW().init();

        /*========= Masonry Grid Script ==========*/

        $(".grid-masonry").masonry({
            // options...
            itemSelector: ".grid-item",
            columnWidth: ".grid-item",

        });

        /*========== End Masonry Grid ==========*/

        /* Preloader */
        
        $("#status").fadeOut();
        $("#preloader").delay(350).fadeOut("slow");

        /* END of Preloader */

    });

    /* END of Preloader */

    /*======= jQuery navbar on scroll =========*/


    $window.on('scroll' , function () {

        if ($(".navbar-default").add(".navbar-inverse").offset().top > 50) {
            $(".reveal-menu-home").addClass("sticky-nav");
            $(".reveal-menu-blog").addClass("sticky-nav-white");
        } else {
            $(".reveal-menu-home").removeClass("sticky-nav");
            $(".reveal-menu-blog").removeClass("sticky-nav-white");
        }
    });

    /*======= End jQuery navbar on scroll =========*/

    /*======= Main Slider Init =========*/

    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        grabCursor: true,
        watchSlidesProgress: true,
        mousewheelControl: true,
        keyboardControl: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        on: {
            progress: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                var slideProgress = swiper.slides[i].progress;
                var innerOffset = swiper.width * interleaveOffset;
                var innerTranslate = slideProgress * innerOffset;
                swiper.slides[i].querySelector(".slide-inner").style.transform =
                  "translate3d(" + innerTranslate + "px, 0, 0)";
              }
            },
            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },
            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };
    var swiper = new Swiper(".swiper-container", swiperOptions);

    /*======= End Main Slider Init =========*/


    /*======= Banner Resize with window size =========*/

    $window.on( 'resize', function () {
        var bodyheight = $(this).height();
        $("#mt_banner").height(bodyheight);
    }).resize();

    /*======= End Banner Resize with window size =========*/

    /*======== Real Time Numbers Script ========= */
    GetRealTimeNumbers();
    /*===== End of Real Time Numbers Script ===== */

    /*========= Fun and Facts Script ======== */

    try {
        $(".fun-facts_wrapper").appear(function () {
            $(".timer").countTo();
        });
    } catch (err) {

        console.log(err.message);
    }

    /*========= End Fun and Facts Script ======== */

    /*======== Parallax Backgrounds =========*/

    $("#mt_banner").parallax("50%", 0);

    /*======== End Parallax Backgrounds =========*/


    /*======== One Page Scrolling ======= */

    $("#navigation").onePageNav({
        currentClass: "active",
        changeHash: true,
        scrollSpeed: 1000,
        scrollThreshold: 0.5,
        filter: "",
        easing: "swing",
        begin: function () {
            //I get fired when the animation is starting
        },
        end: function () {
            //I get fired when the animation is ending
        },
        scrollChange: function ($currentListItem) {
            //I get fired when you enter a section and I pass the list item of the section
        }
    });

    /*======== End One Page Scrolling ========*/

    /*======== Isotope Filter Script =========*/

    var mt_personal = window.mt_personal || {},
        $win = $(window);

        mt_personal.Isotope = function () {

        // 4 column layout
        var isotopeContainer = $(".isotopeContainer");
        if (!isotopeContainer.length || !jQuery().isotope) return;
        $win.on('load' , function(){
            isotopeContainer.isotope({
                itemSelector: ".isotopeSelector"
            });
            $(".mt_filter").on("click", "a", function (e) {
                $(".mt_filter ul li").find(".active").removeClass("active");
                $(this).addClass("active");
                var filterValue = $(this).attr("data-filter");
                isotopeContainer.isotope({ filter: filterValue });
                e.preventDefault();
            });
        });

    };

    mt_personal.Isotope();


    /* End Isotope Filter */

    /*======= End Portfolio =======*/


    /*======== Testimonial Section =========*/

    $("#mt_testimonial .owl-carousel").owlCarousel({
        loop: false,
        margin: 24,
        autoplay: false,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        dot: true,
        smartSpeed:850,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            600: {
                items: 1,
                dots: true
            },
            1000: {
                items: 3,
                dots: true
            },
            1201: {
                items: 3,
                dots: true
            }
        }
    });

    /*======== End Testimonial Section =========*/


    /*======== Team Section =========*/
    $("#mt_team .owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplaySpeed: 1000,
        smartSpeed:850,
        responsive: {
            0: {
                items: 1,
                dots: true
            },
            450: {
                items: 2,
                dots: true
            },
            500: {
                items: 2,
                dots: true
            },
            600: {
                items: 2,
                dots: true
            },
            1000: {
                items: 4,
                dots: true
            },
            1201: {
                items: 4,
                dots: true
            }
        }
    });

    /*======== End Team Section =========*/

    /*======== Portfolio Gallery =========*/

    $(".project_gallery .owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsiveBaseElement: window,
        responsiveClass: true,
        navText: ["<img src='images/arrow-left.png'>","<img src='images/arrow-right.png'>"],
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            1000: {
                items: 1,
                nav: true
            },
            1201: {
                items: 1,
                nav: true
            }
        }
    });

    /*======== End Portfolio Gallery =========*/


    /*======== Youtube Background Init =========*/
    
    $("#bgndVideo").YTPlayer();

    /*======== End Youtube Background Init =========*/


    /*======== Fancy Box Init ========*/
    
    $(".various").fancybox({
        maxWidth: 800,
        maxHeight: 600,
        fitToView: false,
        width: "70%",
        height: "70%",
        autoSize: false,
        closeClick: true,
        openEffect: "elastic",
        closeEffect: "none"
    });

    /*======== End Fancy Box ========*/

    /*======== Fancy Box Gallery Init ========*/

    var FancYB = $('.fancybox');
    FancYB.fancybox({
        openEffect: 'fade',
        closeEffect: 'fade',
        padding : 0,
        closeBtn: true,
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
              locked: false
            },
            buttons: {}
        }
    });
    FancYB.attr('rel','gallery');

    /*======== End Fancy Box Gallery ========*/
    
    /*======== Contact Form ========*/

    $('#submit-btn').on('click',function (event){
        event.preventDefault();
        $.ajax({
            dataType: 'JSON',
            url: 'sendmail.php',
            type: 'POST',
            data: $('#contact_form').serialize(),
            beforeSend: function (xhr) {
                $('.mt_load').show();
            },
            success: function (response) {
                if (response) {
                    console.log(response);
                    if (response['signal'] == 'ok') {
                        toastr.success(response['msg']);
                        $('#msg').hide();
                        $('input, textarea').val(function () {
                            return this.defaultValue;
                        });
                    }
                    else {
                        $('#msg').show();
                        $('#msg').html('<div class="mt_error">'+ response['msg'] +'</div>');
                    }
                }
            },
            error: function () {
                $('#msg').show();
                $('#msg').html('<div class="mt_error">Errors occur. Please try again later.</div>');
            },
            complete: function () {
                $('.mt_load').hide();
            }
        });
    });
    /*======== End Contact Form ========*/

});
/*======== End Doucument Ready Function =========*/

function GetRealTimeNumbers() {
    $.get("https://api.covid19india.org/data.json").success(function(result){
        $("#totalCases").text(FormatNumbers(result.statewise[0].confirmed));
        $("#activeCases").text(FormatNumbers(result.statewise[0].active));
        $("#recoveredCases").text(FormatNumbers(result.statewise[0].recovered));
        $("#deaths").text(FormatNumbers(result.statewise[0].deaths));
    });
}

function FormatNumbers(value) {
    var val = value.toString();
    var lastThree = val.substring(val.length-3);
    var otherNumbers = val.substring(0, val.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res;
}

/*======== Init Google Map =========*/

function initMap() {

    // Specify features and elements to define styles.
    var styleArray = [
      {
          featureType: "all",
          stylers: [
           { saturation: -80 }
          ]
      }, {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            { hue: "#00ffee" },
            { saturation: 50 }
          ]
      }, {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
      }
    ];

    // Create a map object and specify the DOM element for display.
    var latlng = new google.maps.LatLng(42.780113, 12.408678);// Change a map coordinate here!
    var map = new google.maps.Map(document.getElementById("map"), {
        center: latlng, 
        scrollwheel: false,
        // Apply the map style array to the map.
        styles: styleArray,
        zoom: 13
    });
}

/*========= End Google Map =========*/