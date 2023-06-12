$(function () {
    feather.replace();
   // $("#cookies_modal")?.modal();

    let navigation = $("body > nav");
    navigation.attr("id", "main-navigation");
});

$(function () {
    (function ($, undefined) {
        $.fn.stickmenu = function (options) {
            options = $.extend({}, $.fn.stickmenu.options, options);
            var elem = $("#main-navigation");
            $(document).on("ready scroll", function () {
                if ($(document).scrollTop() > options.scrollPoint) {
                    if (!elem.hasClass("fixed-menu")) {
                        elem.addClass("fixed-menu");
                        if (options.parentOffset) {
                            elem.parent().css("padding-top", elem.outerHeight(true));
                        }
                    }
                } else if ($(document).scrollTop() < 1) {
                    if (elem.hasClass("fixed-menu")) {
                        elem.removeClass("fixed-menu");

                        if (options.parentOffset) {
                            elem.parent().removeAttr("style");
                        }
                    }
                }
            });
        };

        $.fn.stickmenu.options = {
            scrollPoint: 10,
            showScrollPoint: false,
            parentOffset: true,
        };
    })(jQuery);

    // Run Function - Makefix
    jQuery(".makefix").stickmenu({
        scrollPoint: 200,
        showScrollPoint: false,
        parentOffset: true,
    });

    var sections = $(".section-gap"),
        nav = $("#sticky-nav-con");

    if (nav && sections) {
        let nav_height = nav.outerHeight() + document.getElementById("main-navigation").offsetHeight;

        $(window).on("scroll", function () {
            var cur_pos = $(this).scrollTop();

            sections.each(function () {
                var top = $(this).offset().top - nav_height,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    nav.find("a").removeClass("sticky-nav-active");
                    sections.removeClass("active");

                    $(this).addClass("active");
                    nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("sticky-nav-active");
                }
            });
        })
    };


    // Get the navbar
    var navbar = document.getElementById("sticky-nav");
    if (navbar) {
        navbar.parentElement.style.top =
            document.getElementById("main-navigation").offsetHeight + "px";
        navbar.parentElement.classList.add("sticky");
    }
    // *901# Banking -- Add Active Class to Selected Nav
    var btnContainer = document.getElementById("sticky-nav-con");

    // Get all buttons with class="sticky-tab" inside the container
    if (btnContainer) {
        var btns = btnContainer.querySelectorAll(".sticky-tab a");
    // Loop through the buttons and add the active class to the current/clicked button
        for (var i = 0; i < btns.length; i++) {
            btns[i].classList.remove("sticky-nav-active");
    }
    }

});

$.fn.bootstrapDropdownHover();

$(function () {
    $(".overlay").on({
        hover: function () {
            $(".overlay").fadeOut();
        },
    });
});

// remove plus-minus icon if no child is present
$(function () {
    let lists = Array.from($("#side-menu .list-group-item > ul"));
    let asideMenuLinks = Array.from(document.querySelectorAll("#side-menu .list-group-item .d-flex > a"));
    lists.forEach(el => {
        if (el.children.length <= 0 && el.parentElement.querySelector(".plus-minus")) {
            el.parentElement.querySelector(".plus-minus").style.visibility = "hidden";
        }
        if (el.children.length <= 0) {
            el.style.display = "none";
        }
    });
    asideMenuLinks.forEach(el => {
        if (window.location.href.includes(el.href) || el.href === window.location.pathname) {
            el.parentElement.classList.add("active");
            if (el.parentElement.parentElement.querySelector("ul.list-group")) {
                el.parentElement.parentElement.querySelector("ul.list-group").classList.add("show");
            }
        }
        else el.parentElement.classList.remove("active")
    })
});

// MEGA NAVIGATION
$(function () {
    // add active class to the corresponding link when for each page...
    let links = Array.from(document.querySelectorAll(".MainMenuItems .mega-link"));
    let topLinks = Array.from(document.querySelectorAll(".primary-nav .d-flex li .nav-link"));
   
    links.forEach(el => {
        if (el.children[0].href === window.location.href) el.classList.add("active");
        else el.classList.remove("active");
    });
    topLinks.forEach(el => {
        if (el.href.includes("#")) el.classList.remove("active");
        else if (window.location.href.includes(el.href) || el.href === window.location.pathname) el.classList.add("active")
        else el.classList.remove("active");
    });

    let overlay = document.createElement("div");
    $("body").prepend(overlay);
    overlay.classList.add("overlay");

    let target,
        panels = $(".panel");
    let dropdown_triggers = $('[data-toggle="mega-dropdown"]');
    let internet_banking = $('[data-toggle="internet-banking"]');
    let internet_banking_dropdown = $("#internet-banking-dropdown");
    let internet_banking_dropdown_new = $("#internet-banking-dropdown-new");
    panels.on({
        mouseover: function () {
            $(this).show();
            Array.from(document.querySelectorAll(".mega-link")).forEach(el => el.classList.remove("hovered"));
            document.querySelector(`[data-target=${$(this).attr("id")}]`).parentElement.classList.add("hovered");
            $(".overlay").show();
        },
        mouseleave: function () {
            Array.from(document.querySelectorAll(".mega-link")).forEach(el => el.classList.remove("hovered"));
        }
    });

    internet_banking_dropdown.on({
        mouseenter: function () {
            $(".overlay").show();
        },
        mouseover: function () {
            $(".overlay").show();
        },
        mouseleave: function () {
            $(".overlay").hide();
        },
    });

    internet_banking_dropdown_new.on({
        mouseenter: function () {
            $(".overlay").fadeIn();
        },
        // mouseover: function () {
        // 	$(".overlay").fadeIn();
        // },
        // mouseleave: function () {
        // 	$(".overlay").fadeOut();
        // },
    });
    internet_banking.on({
        mouseleave: function () {
            $(".overlay").fadeOut();
        },
        mouseenter: function () {
            $(".overlay").fadeIn();
        },
        mouseover: function () {
            $(".overlay").fadeIn();
        },
    });
    dropdown_triggers.each(function (i, e) {
        panels.mouseleave(function () {
            let id = $(this).attr("id");
            let trigger = "." + $(`[data-target=${id}]`).parent().attr("class");
            $(".overlay").hide();

            if ($(trigger + ":hover").length != 0) {
                $(this).show();                
            } else {
                $(this).hide();
            }
        });

        e.addEventListener("mouseenter", function () {
            panels.hide();
            target = "#" + $(this).attr("data-target");
            $(target).show();
            Array.from(document.querySelector(target).querySelector(".panel-content").children).forEach(el => !el.className.includes("right") ? el.style.display = "none" : el.style.display = "block");
            document.querySelector(target).querySelector(".panel-content").children[0].style.display = "block"
            $(".overlay").show();
        });

        e.parentElement.addEventListener("mouseleave", function () {
            target = "#" + $(this).children("a").attr("data-target");
            $(".overlay").hide();

            if ($(target + ":hover").length != 0) {
                $(target).show();
            } else {
                $(target).hide();
            }
        });
    });

    $(".panel-nav li").on({
        mouseover: function () {
            // $('.panel-content ul');
        },
    });
});

// MEGA PANEL => INNER PANELS
$(function () {
    let panel_triggers = $('[data-toggle="panel-nav"]');
    let target;
    panel_triggers.each(function (i, e) {
        e.addEventListener("mouseover", function () {
            target = $(this).attr("data-target");
            if ($(target).hasClass("hidden")) {
                // remove all active class from the target in that parentElement before adding it to the target
                Array.from(
                    $(target)[0].parentElement.querySelectorAll(".active")
                ).forEach(item => item.classList.remove("active"));
                $(target).addClass("active");
            }
        });
    });
});

// SEARCH COMPONENT
$(function () {
    let loading = false;
    let suggesting = false;

    let search = $(".search-field");
    document.querySelector(".search_input").placeholder =
        "Start typing and hit enter to search...";
    search.click(() => {
        $("#search_panel").fadeIn(300);
        $(".overlay").show();

        if (loading === true) {
            $(".search_content").children(".active").hide();
            $(".search_content").children("#loader").show();
        } else {
            $(".search_content").children(".active").show();
        }

        if (suggesting === true) {
            $(".search_content").children(".active").hide();
            $(".search_content").children("#auto_suggest").show();
        }
    });

    $(".close_button").click(() => {
        $("#search_panel").fadeOut(300);
        $(".overlay").hide();
    });

    //   display popular search or loader on search input
    //   document.querySelector(".search_input").oninput = function () {
    //     if (this.value.trim() === "") {
    //       loading = false;
    //     } else {
    //       loading = true;
    //     }

    //     if (loading) {
    //       $(".search_content").children(".active").hide();
    //       $(".search_content").children("#loader").show();
    //     } else {
    //       $(".search_content").children(".active").show();
    //       $(".search_content").children("#loader").hide();
    //     }

    //     if (suggesting === true) {
    //       $(".search_content").children(".active").hide();
    //       $(".search_content").children("#auto_suggest").show();
    //     }
    //   };
});

// INTERNET BANKING DROPDOWN
$(function () {
    $(".individualBanking").on({
        mouseover: function () {
            $("#individualBanking").slideDown();
            $("#businessBanking").slideUp();
        },
    });

    $(".businessBanking").on({
        mouseover: function () {
            $("#individualBanking").slideUp();
            $("#businessBanking").slideDown();
        },
    });
});

// MOBILE NAVIGATION
$(function () {
    let dropdown_triggers = $('[data-toggle="primary_nav"]');
    let location_list = $('[data-target="#mobile_location_list"]');
    let primary_nav = $('[data-target="#mobile_primary_nav"]');
    dropdown_triggers.click(function () {
        $(this).find(".active-icon").toggle();
        $(this).find(".hidden").toggleClass("active");

        let target = $(this).attr("data-target");
        $(target).siblings("div").hide();
        $(target).slideToggle(500);
    });
    primary_nav.on("click", function () {
        if (location_list.find(".hidden").hasClass("active")) {
            location_list.find(".active-icon").toggle();
            location_list.find(".hidden").removeClass("active");
        }
    });
    location_list.on("click", function () {
        if (primary_nav.find(".hidden").hasClass("active")) {
            primary_nav.find(".active-icon").toggle();
            primary_nav.find(".hidden").removeClass("active");
        }
    });
});

// FOOTER
$(function () {
    $(".mobile-view .newsletter-text").click(function () {
        $("#dropdown-control").toggleClass("fa-chevron-up");
        // console.log($('#dropdown-control').attr('data-feather'))
        $("#newsletterForm").slideToggle();
    });

    var allPanels = $(".accordions .accordion-body").hide();

    $(".accordions .accordion-header").click(function () {
        let currentHeader = $(this);
        let currentBody = $(this).next();
        currentBody.slideToggle();
        // current.toggleClass('active');
    });
});

// BACK TO TOP BUTTON
$(function () {
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        var mybutton = document.getElementById("myBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }

        mybutton.addEventListener("click", topFunction);
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        $('html, body').animate({ scrollTop: 0 }, '50');
    }
}
)



$('#internet_banking[data-toggle="collapse"]').on("click", function (e) {
    let attr = $(this).attr("data-target");
    let sibling = $(attr).siblings();
    $(attr).slideDown("slow");
    sibling.slideUp("slow");
});

$('#mobile_menus [data-toggle="collapse"]').on("click", function (e) {
    let attr = $(this).attr("data-target");
    let sibling = $(attr).siblings();
    $(attr).slideDown("slow");
    sibling.slideUp("slow");
});

//Function for mega menu hover
// $(function () {
// 	$(`.panel-content #account`).on("mouseover", function () {
// 		$(`.panel-nav [data-target="#account"]`).addClass("hover-color");
// 	});
// 	$(`.panel-content #account`).on("mouseout", function () {
// 		$(`.panel-nav [data-target="#account"]`).removeClass("hover-color");
// 	});
// });

// services slider function as used on the home page
$(function () {
    var serviceSwiper = new Swiper(".service-container", {
        slidesPerView: 1,
        spaceBetween: 18,
        pagination: {
            el: ".service_swiper_indicator .service-swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".service-swiper-button-next",
            prevEl: ".service-swiper-button-prev",
        },
        breakpoints: {
            // when window width is >= 700px
            767: {
                slidesPerView: 2,
                spaceBetween: 18,
            },
            // when window width is >= 1100px
            1020: {
                slidesPerView: 3,
                spaceBetween: 18,
            },
        },
    });

    var photosSwiper = new Swiper(".photos-swiper-container", {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".photos-swiper-button-next",
            prevEl: ".photos-swiper-button-prev",
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
                spaceBetween: 4,
                centeredSlides: true,
            },
            650: {
                slidesPerView: 1,
                spaceBetween: 4,
                centeredSlides: true,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1020: {
                slidesPerView: 2.5,
                spaceBetween: 10,
            },
        },
    });

    var videosThumbnailSwiper = new Swiper(".thumbnail-swiper-container", {
        spaceBetween: 10,
        slidesPerView: 1,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".thumbnail-swiper-button-next",
            prevEl: ".thumbnail-swiper-button-prev",
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            1020: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 10,
            },
        },
    });

    var videosSwiper = new Swiper(".videos-swiper-container", {
        slidesPerView: 1,
        spaceBetween: 10,
        thumbs: {
            swiper: videosThumbnailSwiper,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true,
    });

    // youtube videos slider 
    var accessMoreSwiper = new Swiper(".more-about-banking", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".more-about-banking-swiper-btn-next",
            prevEl: ".more-about-banking-swiper-btn-prev",
        },
        // autoplay: {
        // 	delay: 3000,
        // 	disableOnInteraction: false
        // },
        // loop: true,
        breakpoints: {
            // when window width is >= 700px
            300: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            600: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            800: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },
    });

    var helpfulToolsSwiper = new Swiper(".helpful-tools-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            // when window width is >= 700px
            300: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            800: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 6,
                spaceBetween: 0,
            },
        },
    });

    var swiper = new Swiper(".album-1", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var swiper = new Swiper(".album-2", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// Get year
$(function () {
    var currentYear = new Date().getFullYear();
    $(".date").html(`${currentYear}`);
});

// Cookie removal function on timeout or click
$(function () {
    setTimeout(function () {
        $(".footer-cookie ").fadeOut("slow", function () {
            $(".footer-cookie ").remove();
        });
    }, 5000);
    $(".cookie-button").on("click", function () {
        $(".footer-cookie ").remove();
    });
});

//Loan Calculator
//Loan Calculator
$(function () {
    let payday_calc = $(".payday-calc.section-gap");
    var is_dragging;

    function disableScroll() {
        // document.body.classList.add("stop-scrolling");
    }

    function enableScroll() {
        document.body.classList.remove("stop-scrolling");
    }

    is_dragging = false;
    payday_calc.on("mousedown touchstart", ".loan-drag-circle", function (e) {
        disableScroll();
        return (is_dragging = true);
    });
    payday_calc.on("mouseup touchend", function (e) {
        enableScroll();
        return (is_dragging = false);
    });
    return $(window).on("mousemove touchmove", function (e) {
        var angle,
            center_x,
            center_y,
            circle,
            delta_x,
            delta_y,
            pos_x,
            pos_y,
            touch;
        if (is_dragging) {
            circle = $(".loan-drag-circle");
            touch = void 0;
            if (e.originalEvent.touches) {
                touch = e.originalEvent.touches[0];
            }
            center_x = $(circle).outerWidth() / 2 + $(circle).offset().left;
            center_y = $(circle).outerHeight() / 2 + $(circle).offset().top;
            pos_x = e.pageX || touch.pageX;
            pos_y = e.pageY || touch.pageY;
            delta_y = center_y - pos_y;
            delta_x = center_x - pos_x;
            angle = Math.atan2(delta_y, delta_x) * (180 / Math.PI); // Calculate Angle between circle center and mouse pos
            angle -= 90;
            if (angle < 0) {
                angle = 360 + angle; // Always show angle positive
            }
            angle = Math.round(angle);
            $(".loan-drag-dot").css("transform", "rotate(" + angle + "deg)");
            //set Loan amount
            $(".payday-calc-float-amount").html(
                "N" + (angle * 1000 * 1.0421).toLocaleString("en")
            );
            // set monthly salary
            return $(".loan-amount").html("N" + (angle * 13889).toLocaleString("en"));
        }
    });
});

// explore slider as used on about page
$(function () {
    var exploreSlider = new Swiper(".explore-container", {
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: ".explore_top_indicators .explore-swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // when window width is >= 700px
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            // when window width is >= 1100px
            1020: {
                slidesPerView: 3,
                spaceBetween: 15,
            },
        },
    });
});

// gallery slider as used on about page
$(function () {
    function loadLine() {
        $(".gallery-slide-shell #loadingLine").removeClass("loading-line");
        $(".gallery-slide-shell #loadingLine").addClass("loading-line");
    }
    function removeLine() {
        $(".gallery-slide-shell #loadingLine").removeClass("loading-line");
    }

    var gallerySlider = new Swiper(".gallery-container", {
        spaceBetween: 35,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            // this should be 5s but seems there's some lag
            delay: 4990,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        effect: "coverflow", // 'cube', 'fade', 'coverflow',
        coverflowEffect: {
            rotate: 0, // Slide rotate in degrees
            stretch: 0, // Stretch space between slides (in px)
            depth: 100, // Depth offset in px (slides translate in Z axis)
            modifier: 1, // Effect multiplier
        },
        parallax: true,
        on: {
            init: loadLine, // add on init
            slideChangeTransitionStart: removeLine, // maybe this is needed?
            slideChangeTransitionEnd: loadLine, // maybe this is needed?
        },
    });
});

// another gallery slider as used on career page
$(function () {
    function loadLine() {
        $(".gallery-slide-shell-2 #loadingLine").removeClass("loading-line");
        $(".gallery-slide-shell-2 #loadingLine").addClass("loading-line");
    }
    function removeLine() {
        $(".gallery-slide-shell-2 #loadingLine").removeClass("loading-line");
    }

    var gallerySlider2 = new Swiper(".gallery-container-2", {
        spaceBetween: 35,
        slidesPerView: 1,
        loop: true,
        autoplay: {
            // this should be 5s but seems there's some lag
            delay: 4990,
            disableOnInteraction: false,
        },
        speed: 500,
        centeredSlides: true,
        effect: "fade", // 'cube', 'fade', 'coverflow',
        fadeEffect: {
            crossFade: true,
        },
        on: {
            init: loadLine, // add on init
            slideChangeTransitionStart: removeLine, // maybe this is needed?
            slideChangeTransitionEnd: loadLine, // maybe this is needed?
        },
    });
});

var Expand = (function () {
    var tile = $(".strips__strip");
    var tileLink = $(".strips__strip > .strip__content");
    var tileText = tileLink.find(".strip__inner-text");
    var stripClose = $(".strip__close");

    var expanded = false;

    var open = function () {
        var tile = $(this).parent();

        if (!expanded) {
            tile.addClass("strips__strip--expanded");
            // add delay to inner text
            tileText.css("transition", "all .5s .3s cubic-bezier(0.23, 1, 0.32, 1)");
            stripClose.addClass("strip__close--show");
            stripClose.css("transition", "all .6s 1s cubic-bezier(0.23, 1, 0.32, 1)");
            expanded = true;
        }
    };

    var close = function () {
        if (expanded) {
            tile.removeClass("strips__strip--expanded");
            // remove delay from inner text
            tileText.css("transition", "all 0.15s 0 cubic-bezier(0.23, 1, 0.32, 1)");
            stripClose.removeClass("strip__close--show");
            stripClose.css(
                "transition",
                "all 0.2s 0s cubic-bezier(0.23, 1, 0.32, 1)"
            );
            expanded = false;
        }
    };

    var bindActions = function () {
        tileLink.on("click", open);
        stripClose.on("click", close);
    };

    var init = function () {
        bindActions();
    };

    return {
        init: init,
    };
})();

Expand.init();

$(function () {
    var maxWidth = $("#cClock").width();
    var maxHeight = $("#cClock").height();

    $(window).resize(function (evt) {
        var $window = $(window);
        var width = $window.width();
        var height = $window.height();
        var scale;

        // early exit
        if (width >= maxWidth && height >= maxHeight) {
            $("#cClock").css({ "-webkit-transform": "" });
            $("#cClockWrap").css({ width: "", height: "" });
            return;
        }

        scale = Math.min(width / maxWidth, height / maxHeight);

        $("#cClock").css({ "-webkit-transform": "scale(" + scale + ")" });
        $("#cClockWrap").css({
            width: maxWidth * scale,
            height: maxHeight * scale,
        });
    });
});

$(function () {
    var spinnerPos = null;
    var itemsNum = 7; // 7 items in the wheel
    var itemArea = 360 / itemsNum;
    var middle = itemArea / 2;
    var spinner = $("#spinner");

    $(".jsClockbtn").each(function () {
        var num = $(this).attr("data-num");
        var deg = itemArea * num - middle; // get middle position of each item

        $(this).hover(
            function () {
                $(spinner).css({
                    transform: "translate(-50%, -50%) rotate(" + deg + "deg)",
                });
            },
            function () {
                $(spinner).attr("style", spinnerPos);
            }
        );

        $(this).click(function () {
            $(".jsClockbtn, .cClock__item").removeClass("is-active");
            $(spinner)
                .addClass("is-active")
                .css({
                    transform: "translate(-50%, -50%) rotate(" + deg + "deg)",
                });
            spinnerPos = $(spinner).attr("style");
            $("#item" + num).addClass("is-active");
            $(this).addClass("is-active");
        });
    });
});

$(function () {
    // script for parent icon removal
    let mobileNav = document.getElementsByClassName("mobile-mega-link");
    for (var i = 0; i < mobileNav.length; i++) {
        if (mobileNav[i].querySelector(".mega-desc")) {
            mobileNav[i]
                .querySelector(".mega-desc")
                .querySelector(".mobile-mega-link-icon").style.visibility = "hidden";
        }
    }
    for (var i = 0; i < mobileNav.length; i++) {
        if (mobileNav[i].querySelectorAll(".second_level").length) {
            mobileNav[i]
                .querySelector(".mega-desc")
                .querySelector(".mobile-mega-link-icon").style.visibility = "visible";
            mobileNav[i]
                .querySelector(".mega-desc")
                .querySelector(".mobile-mega-link-icon").style.color = "#EE7E01";
        }
    }
    // script for inner tag icon removal
    let innerNav = document.getElementsByClassName("inner-nav");

    for (var i = 0; i < innerNav.length; i++) {
        if (innerNav[i].children.length < 2) {
            innerNav[i]
                .querySelector(".inner-nav-link")
                .querySelector(".inner-nav-link-icon").style.display = "none";
        }
    }
   
    // script for displaying inner nav content
    let desktopNav = document.getElementsByClassName("panel-wrapper");

    for (var i = 0; i < desktopNav.length; i++) {
        const nestedchild = desktopNav[i].children[0].querySelector("ul").children;
        Array.from(nestedchild).forEach(el => {
            el.children[0].addEventListener("mouseover", function (e) {
                let innerNavWrapper = el.parentElement.parentElement.parentElement.querySelector(".panel-content");
                
                Array.from(innerNavWrapper.children).forEach(item => {
                    if (item.className.includes("right")) item.style.display = "block";
                    else if (e.target.dataset.target === `#${item.id}` && e.target.dataset.target !== "#") item.style.display = "block";
                    else if (e.target.dataset.target !== "#") item.style.display = "none";
                })
            });
        })
    }

    // add active class to inner link on inner nav moveover 
    Array.from(document.querySelectorAll(".panel-content")).forEach(el => {
        Array.from(el.children).forEach(item => {
            document.querySelector(`[data-target="#${item.id}"`)?.classList?.remove("active");
            item.addEventListener("mousemove", () => {
                if (window.getComputedStyle(item).display !== "none") {
                    document.querySelector(`[data-target="#${item.id}"`)?.classList?.add("active");
                } else document.querySelector(`[data-target="#${item.id}"`)?.classList?.remove("active");
            });
            item.addEventListener("mouseleave", () => {
                document.querySelector(`[data-target="#${item.id}"`)?.classList?.remove("active")
            })
        })
    })
});

$(function () {
    $(".mood-container + div").slideUp();

    $(".mood-container .mood-icon").click(function () {
        $(".mood-container .mood-icon").removeClass("mood-icon-scaled");
        $(this).addClass("mood-icon-scaled");
        $(".mood-container + div").slideDown();
    });
    $("#closeCommentBox").click(function () {
        $(".mood-container .mood-icon").removeClass("mood-icon-scaled");
        $(".mood-container + div").slideUp();
    });

    // Featured Boxes Slider
    var swiper = new Swiper(".featured-boxes-container-new", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".swiper_indicator .swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            // when window width is >= 700px
            600: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
        },
    });

    // Featured Boxes Slider -- Other categories
    var featureSwiper = new Swiper(".featured-boxes-container-others", {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: ".swiper_indicator .swiper-pagination",
            type: "bullets",
            clickable: true,
        },
        breakpoints: {
            // when window width is >= 700px
            600: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
        },
    });

    // Homepage / Access More
    var accessMoreSwiper = new Swiper(".access-more-container", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            nextEl: ".access-more-swiper-button-next",
            prevEl: ".access-more-swiper-button-prev",
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        loop: true,
        breakpoints: {
            // when window width is >= 700px
            300: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            600: {
                slidesPerView: 3,
                spaceBetween: 0,
            },
            800: {
                slidesPerView: 4,
                spaceBetween: 0,
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 5,
                spaceBetween: 0,
            },
            // when window width is >= 1200px
            1200: {
                slidesPerView: 6,
                spaceBetween: 0,
            },
        },
    });
});

// Tamada Live Chat
document.addEventListener("DOMContentLoaded", function () {
    mockChat.init({
        id: "mockChat",
        data: [
            "Hello Tamada!",
            "Hello, this is Tamada",
            "Hello Tamada, I need the code to transact ion my mobile",
            "Sure! here is it, *901#",
        ],
        loop: true,
        delay: 1000,
        startDelay: 1200,
        restartDelay: 3000,
        loop: true,
    });
});

let mockChat = {
    instances: Object,
    init(args) {
        /*
         * DEFAULT PARAMETERS
         */
        let params = {
            id: args.id ? args.id : "mockChat",
            data: args.data
                ? args.data
                : ["Hmm... It looks like there is no data to display"],
            delay: args.delay ? args.delay : 1300,
            startDelay: args.startDelay ? args.startDelay : 1050,
            restartDelay: args.restartDelay ? args.restartDelay : 2000,
            loop: args.loop ? args.loop : true,
        };

        /*
         * CREATE MARKUP
         */

        let mockChatContainer = document.querySelector("#" + params.id);
        if (mockChatContainer) {
            mockChatContainer.innerHTML = `
					<div class="device">
						<div class="screen">
							<div class="app">
							</div>
						</div>
					</div>
				`;
            mockChatContainer.classList.add("mockchat");
        }
        /*
         * TEMPLATES
         */

        let reply = function (content) {
            let el = document.createElement("div");
            let text = document.createTextNode(content);
            el.classList.add("reply");
            el.appendChild(text);
            return el;
        };

        let replyDots = function () {
            const dot1 = document.createElement("span");
            const dot2 = document.createElement("span");
            const dot3 = document.createElement("span");
            let el = document.createElement("div");
            el.appendChild(dot1);
            el.appendChild(dot2);
            el.appendChild(dot3);
            el.classList.add("dots", "reply");
            return el;
        };

        /*
         *	MOCKUP
         */

        const chatScreen = mockChatContainer?.querySelector(".app");
        function draw(data) {
            if (chatScreen) {
                chatScreen.innerHTML = "";
                chatScreen.appendChild(replyDots());
                setTimeout(function () {
                    chatScreen.innerHTML = "";
                }, params.startDelay);
                for (i = 0; i < data.length; i++) {
                    let key = i;
                    setTimeout(function () {
                        chatScreen.appendChild(reply(data[key]));
                    }, params.startDelay + i * params.delay);
                }
            }
        }

        if (params.loop) {
            draw(params.data);

            this.instances[params.id] = setInterval(function () {
                draw(params.data);
            }, params.restartDelay + params.delay * params.data.length + 200);
        } else {
            draw(params.data);
        }
    },

    stop(id) {
        clearInterval(this.instances[id]);
    },
};

$(function () {
    // Loan Calculator -- Personal Banking Landing Page
    let slider = document.getElementById("range-slider");
    let amount = document.getElementById("eligible-amount");
    let sliderLabel = document.getElementById("slider-value");
    function addCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    if (amount && slider) {
    amount.innerHTML = addCommas(slider.value * 0.75);
    sliderLabel.innerHTML = `<span>N</span>${addCommas(slider.value)}`;

    // calculate position of slider
    function moveSlider() {
        let bulletPosition = slider.value / (slider.max - slider.min);
        console.log();
        sliderLabel.style.left = `calc(${bulletPosition * 100 + "%"} - 80px)`;
        console.log(sliderLabel);
    }
    moveSlider();

    slider.oninput = function () {
        amount.innerHTML = addCommas(this.value * 0.75);
        sliderLabel.innerHTML = `<span>N</span>${addCommas(this.value)}`;
        moveSlider();
    };
    }
})


// $('#myCarousel').carousel({
//     interval: false
// });
// $('#carousel-thumbs').carousel({
//     interval: false
// });

// handles the carousel thumbnails
// https://stackoverflow.com/questions/25752187/bootstrap-carousel-with-thumbnails-multiple-carousel
// $('[id^=carousel-selector-]').click(function () {
//     var id_selector = $(this).attr('id');
//     var id = parseInt(id_selector.substr(id_selector.lastIndexOf('-') + 1));
//     $('#myCarousel').carousel(id);
// });
// Only display 3 items in nav on mobile.
// if ($(window).width() < 575) {
//     $('#carousel-thumbs .row div:nth-child(4)').each(function () {
//         var rowBoundary = $(this);
//         $('<div class="row mx-0">').insertAfter(rowBoundary.parent()).append(rowBoundary.nextAll().addBack());
//     });
//     $('#carousel-thumbs .carousel-item .row:nth-child(even)').each(function () {
//         var boundary = $(this);
//         $('<div class="carousel-item">').insertAfter(boundary.parent()).append(boundary.nextAll().addBack());
//     });
// }
// Hide slide arrows if too few items.
// if ($('#carousel-thumbs .carousel-item').length < 2) {
//     $('#carousel-thumbs [class^=carousel-control-]').remove();
//     $('.machine-carousel-container #carousel-thumbs').css('padding', '0 5px');
// }
// when the carousel slides, auto update
// $('#myCarousel').on('slide.bs.carousel', function (e) {
//     var id = parseInt($(e.relatedTarget).attr('data-slide-number'));
//     $('[id^=carousel-selector-]').removeClass('selected');
//     $('[id=carousel-selector-' + id + ']').addClass('selected');
// });
// when user swipes, go next or previous
// $('#myCarousel').swipe({
//     fallbackToMouseEvents: true,
//     swipeLeft: function (e) {
//         $('#myCarousel').carousel('next');
//     },
//     swipeRight: function (e) {
//         $('#myCarousel').carousel('prev');
//     },
//     allowPageScroll: 'vertical',
//     preventDefaultEvents: false,
//     threshold: 75
// });
/*
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});
*/

// $('#myCarousel .carousel-item img').on('click', function (e) {
//     var src = $(e.target).attr('data-remote');
//     if (src) $(this).ekkoLightbox();
// });


//Corporate Banking Hover Panels
$(function () {
    function handleWhyAccess() {
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName("content-item-box")[i]?.addEventListener("mouseover", function () {
                ;
                if (i == 0) {
                    document.getElementById("contents").style.backgroundImage = "url(/content/images/corporate-banking/bg-1.png)";
                }
                if (i == 1) {
                    document.getElementById("contents").style.backgroundImage = "url(/content/images/corporate-banking/bg-2.png)";
                }
                if (i == 2) {
                    document.getElementById("contents").style.backgroundImage = "url(/content/images/corporate-banking/bg-1.png)";
                }
                if (i == 3) {
                    document.getElementById("contents").style.backgroundImage = "url(/content/images/corporate-banking/bg-2.png)";
                }
                // else{
                //  document.getElementById("contents").style.backgroundImage = "url(../assets/images/corporate-banking/bg-1.png)";
                // }
                for (let j = 0; j < 4; j++) {
                    if (j != i) {
                        document.getElementsByClassName("content-item")[j].classList.remove("active")
                    }
                }

                document.getElementsByClassName("content-item")[i].classList.add("active")
            })
        }
    }

    handleWhyAccess()
});