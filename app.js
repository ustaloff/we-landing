document.addEventListener('DOMContentLoaded', function () {
    // Helper function to initialize Swiper carousels dynamically.
    const initSwiper = (selector, options) => {
        const element = document.querySelector(selector);
        if (element) {
            new Swiper(selector, options);
        }
    };

    // Initialize various Swiper carousels across the page with specific configurations.
    initSwiper('.offers__swiper', {
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 32,
    });

    initSwiper('.games__swiper', {
        loop: false,
        slidesPerView: 6,
        slidesPerGroup: 2,
        spaceBetween: 7,
        grid: {
            rows: 2,
            fill: 'row'
        },
    });

    initSwiper('.providers__swiper', {
        loop: false,
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 26,
    });

    initSwiper('.benefits__swiper', {
        loop: false,
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
    });

    initSwiper('.testimonials__swiper', {
        loop: false,
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 24,
    });

    // Implement toggle functionality for the SEO text section.
    // This allows users to expand/collapse a block of text and rotates an indicator icon.
    const seoTextToggle = document.getElementById('seo-text-toggle');
    const seoTextContent = document.getElementById('seo-text-content');

    if (seoTextToggle && seoTextContent) {
        seoTextToggle.addEventListener('click', () => {
            seoTextContent.classList.toggle('hidden');
            const isHidden = seoTextContent.classList.contains('hidden');
            seoTextToggle.querySelector('span').style.transform = isHidden ? 'rotate(0deg)' : 'rotate(180deg)';
        });
    }

    // Initialize language switchers
    initLangSwitcher('lang-switcher-header', { showArrow: true });
    initLangSwitcher('lang-switcher-footer', { showArrow: true });
});
