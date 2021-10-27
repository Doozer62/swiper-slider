new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
        el: '.swiper-scrollbar',
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});