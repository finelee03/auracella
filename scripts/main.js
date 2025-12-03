// Auracella - Wine Aerator Exhibition Web
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const triggerArea = document.querySelector('.header-trigger');

    if (header && triggerArea) {
        // Show header when mouse enters trigger area
        triggerArea.addEventListener('mouseenter', () => {
            header.classList.add('visible');
        });

        // Keep header visible when hovering over it
        header.addEventListener('mouseenter', () => {
            header.classList.add('visible');
        });

        // Hide header when mouse leaves both trigger and header
        document.addEventListener('mousemove', (e) => {
            const isInTrigger = e.clientY <= 80;
            const isInHeader = header.contains(e.target) ||
                              (e.clientY <= 60 && header.classList.contains('visible'));

            if (!isInTrigger && !isInHeader) {
                header.classList.remove('visible');
            }
        });
    }
});
