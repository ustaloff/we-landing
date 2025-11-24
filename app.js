document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

const offersSwiper = new Swiper('.offers__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    slidesPerColumn: 1,
    spaceBetween: 32,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

const gamesSwiper = new Swiper('.games__swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
    slidesPerGroup: 1,
    slidesPerColumn: 2,
    spaceBetween: 7,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});