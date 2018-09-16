$(document).ready(function () {
  

    $('#background ').owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        nav: true,
        dots: false,
        autoplayTimeout: 3000,
             navText: [
            "<i class='fa fa-angle-right'></i>",
            "<i class='fa fa-angle-left'></i>"
        ],
    
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


    $('#advertise ').owlCarousel({
        autoplay: true,
        rtl: true,
        loop: true,
        nav: false,
        dots: false,
        animateIn: 'fadeInDown',
        animateOut: 'fadeOutLeft',
        autoplayTimeout: 3000,
             navText: [
            
        ],

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#offers ').owlCarousel({
        autoplay: true,
        margin:10,
        rtl: true,
        loop: true,
        nav: true,
        dots: true,
        transitionStyle: true,
        autoplayTimeout: 3000,
            navText: [
            "<i class='fa fa-angle-right'></i>",
            "<i class='fa fa-angle-left'></i>"
        ],
    
        responsive: {
            0: {
                items: 1
            },
            590: {
                items: 2
            },
            992: {
            	items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    
    
    new WOW().init();

    $('[data-toggle="popover"]').popover();  


    $('.wide').niceSelect(); 


              
});