$(document).ready(function ($) {

    "use strict";
    var loader = function () {

        setTimeout(function () {
            if ($('#pb_loader').length > 0) {
                $('#pb_loader').removeClass('show');
            }
        }, 700);
    };
    loader();

    // scroll
    var scrollWindow = function () {
        $(window).scroll(function () {
            var $w = $(this),
                st = $w.scrollTop(),
                navbar = $('.pb_navbar'),
                sd = $('.js-scroll-wrap');

            if (st > 150) {
                if (!navbar.hasClass('scrolled')) {
                    navbar.addClass('scrolled');
                }
            }
            if (st < 150) {
                if (navbar.hasClass('scrolled')) {
                    navbar.removeClass('scrolled sleep');
                }
            }
            if (st > 350) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }

                if (sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if (st < 350) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if (sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();

    // slick sliders
    var slickSliders = function () {
        $('.single-item').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 2000,
            nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
            prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
            arrows: true,
            draggable: false,
            adaptiveHeight: true
        });

        $('.single-item-no-arrow').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
            prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
            arrows: false,
            draggable: false
        });

        $('.multiple-items').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
            infinite: true,

            autoplay: true,
            autoplaySpeed: 2000,

            arrows: true,
            nextArrow: '<span class="next"><i class="ion-ios-arrow-right"></i></span>',
            prevArrow: '<span class="prev"><i class="ion-ios-arrow-left"></i></span>',
            draggable: false,
            responsive: [
                {
                    breakpoint: 1125,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
		    },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
		    },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
		    }
		  ]
        });

        $('.js-pb_slider_content').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-pb_slider_nav',
            adaptiveHeight: false
        });
        $('.js-pb_slider_nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.js-pb_slider_content',
            dots: false,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: true,
            arrows: false
        });

        $('.js-pb_slider_content2').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.js-pb_slider_nav2',
            adaptiveHeight: false
        });
        $('.js-pb_slider_nav2').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.js-pb_slider_content2',
            dots: false,
            centerMode: true,
            centerPadding: "0px",
            focusOnSelect: true,
            arrows: false
        });
    };
    slickSliders();

    // navigation
    var OnePageNav = function () {
        $(".smoothscroll[href^='#'], #probootstrap-navbar ul li a[href^='#']").on('click', function (e) {
            e.preventDefault();
            var hash = this.hash,
                navToggler = $('.navbar-toggler');
            $('html, body').animate({

                scrollTop: $(hash).offset().top
            }, 700, 'easeInOutExpo', function () {
                window.location.hash = hash;
            });

            if (navToggler.is(':visible')) {
                navToggler.click();
            }
        });
        $('body').on('activate.bs.scrollspy', function () {
            console.log('nice');
        })
    };
    OnePageNav();

    var offCanvasNav = function () {
        var toggleNav = $('.js-pb_nav-toggle'),
            offcanvasNav = $('.js-pb_offcanvas-nav_v1');
        if (toggleNav.length > 0) {
            toggleNav.click(function (e) {
                $(this).toggleClass('active');
                offcanvasNav.addClass('active');
                e.preventDefault();
            });
        }
        offcanvasNav.click(function (e) {
            if (offcanvasNav.hasClass('active')) {
                offcanvasNav.removeClass('active');
                toggleNav.removeClass('active');
            }
            e.preventDefault();
        })
    };
    offCanvasNav();

    var ytpPlayer = function () {
        if ($('.ytp_player').length > 0) {
            $('.ytp_player').mb_YTPlayer();
        }
    }
    ytpPlayer();
    $(document).ready(function () {
        var itemsMainDiv = ('.MultiCarousel');
        var itemsDiv = ('.MultiCarousel-inner');
        var itemWidth = "";

        $('.leftLst, .rightLst').click(function () {
            var condition = $(this).hasClass("leftLst");
            if (condition)
                click(0, this);
            else
                click(1, this)
        });

        ResCarouselSize();




        $(window).resize(function () {
            ResCarouselSize();
        });

        //this function define the size of the items
        function ResCarouselSize() {
            var incno = 0;
            var dataItems = ("data-items");
            var itemClass = ('.item');
            var id = 0;
            var btnParentSb = '';
            var itemsSplit = '';
            var sampwidth = $(itemsMainDiv).width();
            var bodyWidth = $('body').width();
            $(itemsDiv).each(function () {
                id = id + 1;
                var itemNumbers = $(this).find(itemClass).length;
                btnParentSb = $(this).parent().attr(dataItems);
                itemsSplit = btnParentSb.split(',');
                $(this).parent().attr("id", "MultiCarousel" + id);


                if (bodyWidth >= 1200) {
                    incno = itemsSplit[3];
                    itemWidth = sampwidth / incno;
                } else if (bodyWidth >= 992) {
                    incno = itemsSplit[2];
                    itemWidth = sampwidth / incno;
                } else if (bodyWidth >= 768) {
                    incno = itemsSplit[1];
                    itemWidth = sampwidth / incno;
                } else {
                    incno = itemsSplit[0];
                    itemWidth = sampwidth / incno;
                }
                $(this).css({
                    'transform': 'translateX(0px)',
                    'width': itemWidth * itemNumbers
                });
                $(this).find(itemClass).each(function () {
                    $(this).outerWidth(itemWidth);
                });

                $(".leftLst").addClass("over");
                $(".rightLst").removeClass("over");

            });
        }


        //this function used to move the items
        function ResCarousel(e, el, s) {
            var leftBtn = ('.leftLst');
            var rightBtn = ('.rightLst');
            var translateXval = '';
            var divStyle = $(el + ' ' + itemsDiv).css('transform');
            var values = divStyle.match(/-?[\d\.]+/g);
            var xds = Math.abs(values[4]);
            if (e == 0) {
                translateXval = parseInt(xds) - parseInt(itemWidth * s);
                $(el + ' ' + rightBtn).removeClass("over");

                if (translateXval <= itemWidth / 2) {
                    translateXval = 0;
                    $(el + ' ' + leftBtn).addClass("over");
                }
            } else if (e == 1) {
                var itemsCondition = $(el).find(itemsDiv).width() - $(el).width();
                translateXval = parseInt(xds) + parseInt(itemWidth * s);
                $(el + ' ' + leftBtn).removeClass("over");

                if (translateXval >= itemsCondition - itemWidth / 2) {
                    translateXval = itemsCondition;
                    $(el + ' ' + rightBtn).addClass("over");
                }
            }
            $(el + ' ' + itemsDiv).css('transform', 'translateX(' + -translateXval + 'px)');
        }

        //It is used to get some elements from btn
        function click(ell, ee) {
            var Parent = "#" + $(ee).parent().attr("id");
            var slide = $(Parent).attr("data-slide");
            ResCarousel(ell, Parent, slide);
        }

    });


});

function popUpCalendario() {
  var popup = document.getElementById("scrum_master_julio_2018");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.classList.toggle("show");
    }
}

function popUpCalendario2() {
  var popup = document.getElementById("product_owner_julio_2018");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.classList.toggle("show");
    }
}

function cerrarPopUpCalendario() {
  var popup = document.getElementById("scrum_master_julio_2018");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

function cerrarPopUpCalendario2() {
  var popup = document.getElementById("product_owner_julio_2018");
    if (popup.style.display === "none") {
        popup.style.display = "block";
    } else {
        popup.style.display = "none";
    }
}

function popUpKanban() {
    var partner = document.getElementById("partner_kanban");
    if (partner.style.display === "none") {
        partner.style.display = "block";
    } else {
        partner.classList.toggle("show");
    }
}

function popUpScrum() {
    var partner = document.getElementById("partner_scrum");
    if (partner.style.display === "none") {
        partner.style.display = "block";
    } else {
        partner.classList.toggle("show");
    }
}

function popUpManagement() {

}

function popUpDesign() {

}

function redireccionarFacebook() {
    //location.href = "https://www.facebook.com/itlearningcapacitaciones/"
    window.open('https://www.facebook.com/itlearningcapacitaciones/', '_blank');
}