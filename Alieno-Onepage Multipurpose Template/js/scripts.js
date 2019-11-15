/*
* ----------------------------------------------------------------------------------------
Author       : Fullstackdev
Template Name: Alieno - Onepage Creative Business Template
Version      : 1.0                                          
* ----------------------------------------------------------------------------------------
*/

(function ($) {
    "use strict";
/*
 * ----------------------------------------------------------------------------------------
 *  PRELOADER 
 * ----------------------------------------------------------------------------------------
 */
    $(window).on('load',function () {
        $('.preloader').fadeOut();
        $('.preloader-area').delay(350).fadeOut('slow');
    });
/*
 * ----------------------------------------------------------------------------------------
 *  Hero Youtube Background
 * ----------------------------------------------------------------------------------------
 */
    $('.player').mb_YTPlayer();
/*
 * ----------------------------------------------------------------------------------------
 *  Function for Quote slider
 * ----------------------------------------------------------------------------------------
 */
    function owlQuote() {
        $('.owl-carousel-quote').owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            rewind: true,
            autoplayTimeout: 4200,
            autoplaySpeed: 500,
        });
    }
/*
 * ----------------------------------------------------------------------------------------
 *  Function for Testimonial slider
 * ----------------------------------------------------------------------------------------
 */
    function owlTestimonials() {
        $('.owl-carousel-testimonials').owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            autoplayTimeout: 4200,
            autoplaySpeed: 500,
            dots: true
        });
    }

/*
 * ----------------------------------------------------------------------------------------
 *  Function for Client logo slider
 * ----------------------------------------------------------------------------------------
 */
    function owlClients() {
        $('.owl-clients').owlCarousel({
            autoplay: true,
            autoplayTimeout: 4000,
            rewind: true,
            dots: false,
            nav: false,
            navText: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 5,
                    nav: true,
                    loop: false
                }
            }
        });
    }
/*
 * ----------------------------------------------------------------------------------------
 *  Function for Counter Up
 * ----------------------------------------------------------------------------------------
 */
    function counterUp() {
        $('.counter').counterUp({
            delay: 16,
            time: 3000
        });
    }
/*
 * ----------------------------------------------------------------------------------------
 *  Smooth scroll
 * ----------------------------------------------------------------------------------------
 */

    $('a[data-scroll]').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });


    // Navigation Close On Click Function
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $(this).collapse('hide');
        }
    });
/*
 * ----------------------------------------------------------------------------------------
 *  Function Back To Top Button
 * ----------------------------------------------------------------------------------------
 */    
function backtoTop() {
    $(window).on("scroll", function () {
        var back_to_top = $("#back-to-top");
        if ($(window).scrollTop() > 70) {
            back_to_top.stop().animate({ opacity: '1' }, 150);
        } else {
            back_to_top.stop().animate({ opacity: '0' }, 150);
        }
    });
}
/*
 * ----------------------------------------------------------------------------------------
 *  Portfolio Fullwidth - 3 Columns
 * ----------------------------------------------------------------------------------------
 */    

$('#portfolio-fullwidth-col-3').cubeportfolio({
    filters: '.portfolio-filter',
    loadMore: '#js-loadMore-lightbox-gallery',
    loadMoreAction: 'click',
    layoutMode: 'grid',
    mediaQueries: [{
        width: 1500,
        cols: 3,
    }, {
        width: 1100,
        cols: 2,
    }, {
        width: 800,
        cols: 2,
    }, {
        width: 480,
        cols: 1
    }],
    defaultFilter: '*',
    animationType: 'sequentially',
    gapHorizontal: 10,
    gapVertical: 10,
    gridAdjustment: 'responsive',
    caption: 'fadeIn'
});


/*
 * ----------------------------------------------------------------------------------------
 *  Portfolio Boxed - 3 Columns
 * ----------------------------------------------------------------------------------------
 */  

$('#portfolio-boxed-col-3').cubeportfolio({
    filters: '.portfolio-filter',
    loadMore: '#js-loadMore-lightbox-gallery',
    loadMoreAction: 'click',
    layoutMode: 'grid',
    mediaQueries: [{
        width: 1500,
        cols: 3,
    }, {
        width: 1100,
        cols: 3,
    }, {
        width: 800,
        cols: 2,
    }, {
        width: 480,
        cols: 1
    }],
    defaultFilter: '*',
    animationType: 'sequentially',
    gapHorizontal: 10,
    gapVertical: 10,
    gridAdjustment: 'responsive',
    caption: 'fadeIn'
});



/*
 * ----------------------------------------------------------------------------------------
 *  Portfolio Boxed - 2 Columns
 * ----------------------------------------------------------------------------------------
 */  
$('#portfolio-boxed-col-2').cubeportfolio({
    filters: '.portfolio-filter, .posts-filter',
    loadMore: '#js-loadMore-lightbox-gallery',
    loadMoreAction: 'click',
    layoutMode: 'grid',
    mediaQueries: [{
        width: 1500,
        cols: 2,
    }, {
        width: 1100,
        cols: 2,
    }, {
        width: 800,
        cols: 2,
    }, {
        width: 480,
        cols: 1
    }],
    defaultFilter: '*',
    animationType: 'sequentially',
    gapHorizontal: 30,
    gapVertical: 30,
    gridAdjustment: 'responsive',
    caption: 'fadeIn'
});

/*
 * ----------------------------------------------------------------------------------------
 *  Fadeout Content On Scroll & Navbar Animation
 * ----------------------------------------------------------------------------------------
 */  

$(window).on("scroll", function(){
$(".hero-content").css("opacity", 1 - $(window).scrollTop() / $('.hero-content').height());
/*
 * ----------------------------------------------------------------------------------------
 *   Navbar On Scroll Animation
 * ----------------------------------------------------------------------------------------
 */  

var navbar = $(".navbar");
if (navbar.offset().top > 50) {
    navbar.addClass("nav-collapsed");
} else {
    navbar.removeClass("nav-collapsed");
}        
});


/*
 * ----------------------------------------------------------------------------------------
 * Function call on document ready
 * ----------------------------------------------------------------------------------------
 */  

$(document).ready(function () {
parallaxen();//function call for parallax from parallax.min.js
owlQuote();
counterUp();
owlTestimonials();
owlClients();
backtoTop();
});




}(jQuery));