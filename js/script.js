var menu = ['R 13-15', 'R16', 'R17', 'R18', 'R19', 'R20', 'R21-22']
var mySwiper = new Swiper('.swiper-container', {

    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },
})




// new Swiper('.image-slider', {
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//     },

//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },

//     pagination: {
//         el: '.swiper-pagination',
//         type: 'bullets',
//         // dynamicBullets: true,
//         renderBullet: function(index, className) {

//             var arr = new Array('R 13-15',
//                 'R 16', 'R 17', 'R 18', 'R 19', 'R 20', 'R 21-22');
//             return '' + (arr[index]) + '';
//         },
//     },
// });








// renderBullet: function (index, className) {

//     var arr = new Array('R 13-15', 'R 16', 'R 17', 'R 18', 'R 19', 'R 20', 'R 21-22');
//     return '' + (arr[index]) + '';



// var menu = ['Slide 1', 'Slide 2', 'Slide 3']
// var mySwiper = new Swiper('.swiper-container', {
//             // If we need pagination
//             pagination: {
//                 el: '.swiper-pagination',
//                 clickable: true,
//                 renderBullet: function(index, className) {
//                     return '<span class="' + className + '">' + (menu[index]) + '</span>';
//                 },
//             },