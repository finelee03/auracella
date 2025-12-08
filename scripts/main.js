// Auracella - Wine Aerator Exhibition Web
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const isMainPage = header && header.classList.contains('visible');

    if (isMainPage) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // 스크롤 내리면 호버 모드
                header.classList.add('scroll-mode');
                header.classList.remove('visible');
            } else {
                // 맨 위로 돌아오면 고정 모드
                header.classList.remove('scroll-mode');
                header.classList.add('visible');
            }
        });

        // Hover to show header after scrolling
        document.addEventListener('mousemove', (e) => {
            if (header.classList.contains('scroll-mode')) {
                const isInTrigger = e.clientY <= 80;
                const isInHeader = header.contains(e.target);

                if (isInTrigger || isInHeader) {
                    header.classList.add('visible');
                } else {
                    header.classList.remove('visible');
                }
            }
        });
    } else {
        // Subpage behavior
        const triggerArea = document.querySelector('.header-trigger');

        if (header && triggerArea) {
            triggerArea.addEventListener('mouseenter', () => {
                header.classList.add('visible');
            });

            header.addEventListener('mouseenter', () => {
                header.classList.add('visible');
            });

            document.addEventListener('mousemove', (e) => {
                const isInTrigger = e.clientY <= 80;
                const isInHeader = header.contains(e.target) ||
                                  (e.clientY <= 60 && header.classList.contains('visible'));

                if (!isInTrigger && !isInHeader) {
                    header.classList.remove('visible');
                }
            });
        }
    }
});
