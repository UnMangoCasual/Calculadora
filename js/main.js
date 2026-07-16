/* ============================================
   LAS VASCAS - CARTA DIGITAL
   JavaScript - Interactividad
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ===== CARGA SUAVE DE PÁGINA =====
    // Pequeño retraso para asegurar que CSS esté listo
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // ===== REFERENCIAS DEL DOM =====
    const navMenu = document.getElementById('nav-menu');
    const navButtons = document.querySelectorAll('.nav-btn');
    const navContainer = document.querySelector('.nav-container');
    const sections = document.querySelectorAll('.menu-section');
    const menuItems = document.querySelectorAll('.menu-item');
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    // ===== NAVEGACIÓN SUAVE =====
    // Al hacer clic en un botón de categoría, scroll suave a la sección
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = btn.getAttribute('data-section');
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                const navHeight = navMenu ? navMenu.offsetHeight : 0;
                const targetPosition = targetSection.getBoundingClientRect().top
                    + window.pageYOffset - navHeight - 16;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== RESALTADO DE CATEGORÍA ACTIVA =====
    // Intersection Observer para detectar sección visible
    if (sections.length > 0 && navButtons.length > 0) {
        const sectionObserverOptions = {
            root: null,
            rootMargin: '-80px 0px -60% 0px',
            threshold: 0
        };

        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;

                    // Actualizar botón activo
                    navButtons.forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.getAttribute('data-section') === sectionId) {
                            btn.classList.add('active');

                            // Auto-scroll del nav para mostrar botón activo
                            if (navContainer) {
                                const btnLeft = btn.offsetLeft;
                                const btnWidth = btn.offsetWidth;
                                const containerWidth = navContainer.offsetWidth;
                                const scrollLeft = btnLeft - (containerWidth / 2) + (btnWidth / 2);

                                navContainer.scrollTo({
                                    left: scrollLeft,
                                    behavior: 'smooth'
                                });
                            }
                        }
                    });
                }
            });
        }, sectionObserverOptions);

        sections.forEach(section => {
            sectionObserver.observe(section);
        });
    }

    // ===== ANIMACIONES DE ENTRADA (FADE IN) =====
    // Intersection Observer para animar cards al entrar en viewport
    if (menuItems.length > 0) {
        const itemObserverOptions = {
            root: null,
            rootMargin: '0px 0px -50px 0px',
            threshold: 0.1
        };

        // Contador para escalonar animaciones por grupo visible
        let animationBatch = [];
        let batchTimeout = null;

        const itemObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animationBatch.push(entry.target);
                    itemObserver.unobserve(entry.target);

                    // Agrupar items que aparecen al mismo tiempo
                    clearTimeout(batchTimeout);
                    batchTimeout = setTimeout(() => {
                        animationBatch.forEach((item, index) => {
                            item.style.setProperty('--stagger-delay', `${index * 0.1}s`);
                            item.classList.add('visible');
                        });
                        animationBatch = [];
                    }, 50);
                }
            });
        }, itemObserverOptions);

        menuItems.forEach(item => {
            itemObserver.observe(item);
        });
    }

    // ===== SOMBRA DEL NAV AL HACER SCROLL =====
    // Agregar clase cuando se pasa del hero
    if (navMenu && hero) {
        const navObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    navMenu.classList.add('nav-scrolled');
                } else {
                    navMenu.classList.remove('nav-scrolled');
                }
            });
        }, {
            root: null,
            threshold: 0,
            rootMargin: '-10px 0px 0px 0px'
        });

        navObserver.observe(hero);
    }

    // ===== EFECTO PARALLAX DEL HEADER =====
    // Solo en pantallas grandes para rendimiento
    if (heroContent && window.innerWidth > 1024) {
        let ticking = false;

        const handleParallax = () => {
            const scrollY = window.pageYOffset;
            const heroHeight = hero ? hero.offsetHeight : 0;

            // Solo aplicar cuando el hero es visible
            if (scrollY < heroHeight) {
                const translateY = scrollY * 0.3;
                const opacity = 1 - (scrollY / heroHeight) * 0.8;

                heroContent.style.transform = `translateY(${translateY}px)`;
                heroContent.style.opacity = Math.max(opacity, 0);
            }
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleParallax();
                    ticking = false;
                });
                ticking = true;
            }
        }, { passive: true });
    }

});
