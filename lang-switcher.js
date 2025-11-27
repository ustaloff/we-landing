/**
 * @typedef {Object} LangSwitcherOptions
 * @property {boolean} [showArrow=true] - Whether to show the arrow element.
 */

/**
 * Initializes a language switcher component with a dropdown menu.
 * This function encapsulates the logic for a language switcher, making it reusable.
 * It uses Floating UI to position the dropdown menu relative to a button.
 *
 * @param {string} containerId - The ID of the main container element for the language switcher.
 *                               This container should contain a button and a dropdown element.
 * @param {LangSwitcherOptions} [options] - Configuration options for the language switcher.
 */
function initLangSwitcher(containerId, options) {
    const { computePosition, flip, shift, offset, arrow } = FloatingUIDOM;

    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Language switcher container with id "${containerId}" not found.`);
        return;
    }

    const button = container.querySelector('.lang-selector');
    const dropdown = container.querySelector('.lang-dropdown');
    const arrowElement = options && options.showArrow ? container.querySelector('.arrow') : null;

    if (!button || !dropdown) {
        console.error(`Button or dropdown not found within container "${containerId}".`);
        return;
    }

    let isOpen = false;

    function updatePosition() {
        const middleware = [
            offset(10),
            flip(),
            shift({ padding: 5 }),
        ];

        if (arrowElement) {
            middleware.push(arrow({ element: arrowElement }));
        }

        computePosition(button, dropdown, {
            placement: 'bottom-end',
            middleware: middleware,
        }).then(({ x, y, placement, middlewareData }) => {
            Object.assign(dropdown.style, {
                left: `${x}px`,
                top: `${y}px`,
            });

            if (arrowElement && middlewareData.arrow) {
                const { x: arrowX, y: arrowY } = middlewareData.arrow;

                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[placement.split('-')[0]];

                Object.assign(arrowElement.style, {
                    left: arrowX != null ? `${arrowX}px` : '',
                    top: arrowY != null ? `${arrowY}px` : '',
                    right: '',
                    bottom: '',
                    [staticSide]: '-4px',
                });
            }
        });
    }

    function toggleDropdown(event) {
        event.stopPropagation();
        isOpen = !isOpen;
        dropdown.style.display = isOpen ? 'block' : 'none';

        if (isOpen) {
            updatePosition();
        }
    }

    button.addEventListener('click', toggleDropdown);

    document.addEventListener('click', (event) => {
        if (isOpen && !container.contains(event.target)) {
            isOpen = false;
            dropdown.style.display = 'none';
        }
    });

    dropdown.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const langText = this.textContent.trim();
            const langImgSrc = this.querySelector('img').src;

            const buttonSpan = button.querySelector('span');
            const buttonImg = button.querySelector('img');

            if (buttonSpan) buttonSpan.textContent = langText;
            if (buttonImg) buttonImg.src = langImgSrc;

            isOpen = false;
            dropdown.style.display = 'none';
        });
    });
}
