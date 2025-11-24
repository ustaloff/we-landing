document.getElementById('myButton').addEventListener('click', function() {
    alert('Button clicked!');
});

const swiper = new Swiper('.swiper', {
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