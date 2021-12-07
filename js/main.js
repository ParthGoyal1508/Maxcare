/* Medinex Theme Scripts */

(function($) {
    "use strict";

    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

    /*=========================================================================
        Mobile Menu
    =========================================================================*/
    $(function() {
        $('#mainmenu').slicknav({
            prependTo: '.mobile-menu',
            label: '',
            allowParentLinks: true
        });
    });

    /*=========================================================================
        Main Slider
    =========================================================================*/
    // Nivo slider 
    $('#main-slider').nivoSlider({
        effect: 'boxRainGrowReverse',
        autoplay: true,
        animSpeed: 500,
        pauseTime: 10000,
        directionNav: true,
        manualAdvance: false,
        controlNavThumbs: false,
        pauseOnHover: false,
        controlNav: true,
        prevText: "<i class='ti-arrow-left'></i>",
        nextText: "<i class='ti-arrow-right'></i>"
    });

    /*=========================================================================
        Counter Up Active
    =========================================================================*/
    var counterSelector = $('.counter');
    counterSelector.counterUp({
        delay: 10,
        time: 2000
    });

    /*=========================================================================
        Isotope Active
    =========================================================================*/
    $('.gallery_items').imagesLoaded(function() {

        // Add isotope click function
        $('.gallery_filter li').on('click', function() {
            $(".gallery_filter li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr('data-filter');
            $(".gallery_items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });
            return false;
        });

        $(".gallery_items").isotope({
            itemSelector: '.single_item',
            layoutMode: 'masonry',
        });
    });


    /*=========================================================================
        Initialize smoothscroll plugin
    =========================================================================*/
    smoothScroll.init({
        offset: 60
    });


    /*=========================================================================
        Testimonial Carousel
    =========================================================================*/
    $('#testimonial_carousel').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 500,
        items: 1,
        nav: false
    });


    /*=========================================================================
    Doctors Carousel
=========================================================================*/
    $('#doctors_carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });
    $('#doctors_carousel1').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        nav: true,
        navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 3
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            }
        }
    });

    /*=========================================================================
        Sponsor Carousel
    =========================================================================*/
    $('#sponsor_carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 500,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            768: {
                items: 6
            }
        }
    });

    /*=========================================================================
    	Accordion Script
    =========================================================================*/
    if ($('.accordion-box').length) {
        $('.accordion-box .acc-heading').on('click', function() {
            if ($(this).hasClass('active') !== true) {
                $('.accordion-box .acc-heading').removeClass('active');
            }

            if ($(this).next('.acc-content').is(':visible')) {
                $(this).removeClass('active');
                $(this).next('.acc-content').slideUp(500);
            } else {
                $(this).addClass('active');
                $('.accordion-box .acc-content').slideUp(500);
                $(this).next('.acc-content').slideDown(500);
            }
        });
    }

    /*=========================================================================
        Active venobox
    =========================================================================*/
    $('.img_popup').venobox({
        numeratio: true,
        infinigall: true
    });

    /*=========================================================================
        Active Datepicker
    =========================================================================*/
    $('[data-toggle="datepicker"]').datepicker({
        autoHide: true,
        zIndex: 2048,
    });

    /*=========================================================================
      Scroll To Top
    =========================================================================*/
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $('#scroll-to-top').fadeIn();
        } else {
            $('#scroll-to-top').fadeOut();
        }
    });

    /*=========================================================================
           MAILCHIMP
    =========================================================================*/
    if ($('.subscribe_form').length > 0) {
        /*  MAILCHIMP  */
        $('.subscribe_form').ajaxChimp({
            language: 'es',
            callback: mailchimpCallback,
            url: "//alexatheme.us14.list-manage.com/subscribe/post?u=48e55a88ece7641124b31a029&amp;id=361ec5b369"
        });
    }

    function mailchimpCallback(resp) {
        if (resp.result === 'success') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-success').text(resp.msg).fadeIn();
            $('.subscription-error').fadeOut();

        } else if (resp.result === 'error') {
            $('#subscribe-result').addClass('subs-result');
            $('.subscription-error').text(resp.msg).fadeIn();
        }
    }
    $.ajaxChimp.translations.es = {
        'submit': 'Submitting...',
        0: 'We have sent you a confirmation email',
        1: 'Please enter your email',
        2: 'An email address must contain a single @',
        3: 'The domain portion of the email address is invalid (the portion after the @: )',
        4: 'The username portion of the email address is invalid (the portion before the @: )',
        5: 'This email address looks fake or invalid. Please enter a real email address'
    };

    // Active WOW
    new WOW().init();

})(jQuery);