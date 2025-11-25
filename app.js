document.getElementById('myButton').addEventListener('click', function () {
    alert('Button clicked!');
});

const offersSwiper = new Swiper('.offers__swiper', {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 32,
});

const gamesSwiper = new Swiper('.games__swiper', {
    loop: false,
    slidesPerView: 6,
    slidesPerGroup: 2,
    spaceBetween: 7,
    grid: {
        rows: 2,
        fill: 'row'
    },
});

const providersSwiper = new Swiper('.providers__swiper', {
    loop: false,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 26,
});

const benefitsSwiper = new Swiper('.benefits__swiper', {
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 40,
});

const testimonialsSwiper = new Swiper('.testimonials__swiper', {
    loop: false,
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 24,
});