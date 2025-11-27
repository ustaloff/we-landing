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

    // Floating UI integration for a language dropdown.
    // Manages the positioning and visibility of a language selection dropdown
    // including an arrow indicator, ensuring it stays correctly aligned with its trigger button.
    const langButton = document.getElementById('lang-button');
    const langDropdown = document.getElementById('lang-dropdown');
    const arrowElement = document.getElementById('arrow');

    if (langButton && langDropdown && arrowElement) {
        const { computePosition, flip, shift, offset, arrow } = FloatingUIDOM;
        let isOpen = false; // Tracks the current visibility state of the dropdown.

        // Calculates and applies the position of the dropdown and its arrow
        // relative to the language button using Floating UI middleware.
        function update() {
            computePosition(langButton, langDropdown, {
                placement: 'bottom-end', // Defines the preferred initial placement.
                middleware: [
                    offset(10), // Provides spacing between the button and dropdown.
                    flip(), // Allows dropdown to reposition if it overflows viewport.
                    shift({ padding: 5 }), // Prevents dropdown from overlapping viewport edges.
                    arrow({ element: arrowElement }), // Links the arrow to the dropdown for positioning.
                ],
            }).then(({ x, y, placement, middlewareData }) => {
                // Apply calculated position to the dropdown.
                Object.assign(langDropdown.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                });

                // Position the arrow element based on Floating UI's calculations
                // and the current placement of the dropdown.
                const { x: arrowX, y: arrowY } = middlewareData.arrow;
                const staticSide = {
                    top: 'bottom', right: 'left', bottom: 'top', left: 'right',
                }[placement.split('-')[0]];

                Object.assign(arrowElement.style, {
                    left: arrowX != null ? `${arrowX}px` : '',
                    top: arrowY != null ? `${arrowY}px` : '',
                    right: '', bottom: '',
                    [staticSide]: '-4px', // Adjusts arrow to point correctly.
                });
            });
        }

        // Toggles the visibility of the language dropdown and updates its position if shown.
        function toggleDropdown() {
            isOpen = !isOpen;
            if (isOpen) {
                langDropdown.style.display = 'block';
                update(); // Recalculate position when opening.
            } else {
                langDropdown.style.display = 'none';
            }
        }

        // Event listener to open/close the dropdown when the button is clicked.
        langButton.addEventListener('click', toggleDropdown);

        // Global click listener to close the dropdown if a click occurs outside of it
        // or its trigger button.
        document.addEventListener('click', (event) => {
            if (isOpen && !langButton.contains(event.target) && !langDropdown.contains(event.target)) {
                isOpen = false;
                langDropdown.style.display = 'none';
            }
        });
    }
});
