var helpSwiper = new Swiper(".access-help-center-swiper", {
    spaceBetween: 0,
    speed: 400,
    slidesPerView: 1,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    centeredSlides: false,
    loop: true,

    pagination: {
        el: ".swiper_indicator ._swiper-pagination",
        type: "bullets",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            spaceBetween: 5,
            centeredSlides: true,

        },
        400: {
            slidesPerView: 1,
            spaceBetween: 5,
            centeredSlides: true,
        },
        700: {
            slidesPerView: 1,
            spaceBetween: 5,
        },
        1040: {
            slidesPerView: 2,
            spaceBetween: 10,


        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30,


        },
    },
});