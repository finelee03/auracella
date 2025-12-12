// Auracella - Wine Aerator Exhibition Web
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const isMainPage = header && header.classList.contains('visible');

    // Video fade loop for main page
    const video = document.querySelector('.full-width-video');
    if (video) {
        video.addEventListener('ended', () => {
            video.style.transition = 'opacity 0.8s ease';
            video.style.opacity = '0';
            setTimeout(() => {
                video.currentTime = 0;
                video.play();
                video.style.opacity = '1';
            }, 800);
        });
    }

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
        // Subpage behavior - same as main page
        if (header) {
            // 맨 위에서는 헤더 보이기
            if (window.scrollY <= 50) {
                header.classList.add('visible');
            }

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
        }
    }
});
