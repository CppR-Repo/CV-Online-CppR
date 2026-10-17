/**
 * Arquitectura de Interactividad - CV Cristian Portillo
 * Tema claro/oscuro, metadatos dinámicos e impresión.
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const downloadPdfBtn = document.getElementById('download-pdf');
    const htmlElement = document.documentElement;
    const footerYear = document.getElementById('footer-year');
    const brandTitle = document.querySelector('.global-controls__title');

    // 1. Automatización del año del pie de página
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // 2. Definición de iconos vectoriales dinámicos
    const iconLight = 'icons/theme-light.svg'; // Icono Sol (se muestra en modo oscuro)
    const iconDark = 'icons/theme-dark.svg'; // Icono Luna (se muestra en modo claro)

    // 3. Actualización visual y accesible del botón
    const updateButtonState = (currentTheme) => {
        if (!themeToggleBtn || !themeIcon) return;

        const isDark = currentTheme === 'dark';

        themeIcon.src = isDark ? iconLight : iconDark;
        themeIcon.alt = isDark ? 'Sol' : 'Luna';

        themeToggleBtn.title = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';

        themeToggleBtn.setAttribute(
            'aria-label',
            isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'
        );

        themeToggleBtn.setAttribute(
            'aria-pressed',
            String(isDark)
        );
    };

    // 4. Carga y validación del tema guardado
    let savedTheme = null;

    try {
        savedTheme = localStorage.getItem('theme');
    } catch (error) {
        // El sitio seguirá funcionando aunque localStorage no esté disponible.
    }

    const initialTheme =
        savedTheme === 'light' || savedTheme === 'dark'
            ? savedTheme
            : 'dark';

    htmlElement.setAttribute('data-theme', initialTheme);
    updateButtonState(initialTheme);

    // 5. Alternancia del tema
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme =
                htmlElement.getAttribute('data-theme');

            const newTheme =
                currentTheme === 'dark' ? 'light' : 'dark';

            htmlElement.setAttribute('data-theme', newTheme);
            updateButtonState(newTheme);

            try {
                localStorage.setItem('theme', newTheme);
            } catch (error) {
                // El cambio visual funciona aunque no se pueda guardar.
            }
        });
    }

    // 6. Ocultar el título de marca al desplazarse
    if (brandTitle) {
        const updateBrandTitle = () => {
            brandTitle.classList.toggle(
                'global-controls__title--hidden',
                window.scrollY > 40
            );
        };

        window.addEventListener('scroll', updateBrandTitle, {
            passive: true
        });

        updateBrandTitle();
    }

    // 7. Impresión del CV mediante el navegador
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', (event) => {
            event.preventDefault();
            window.print();
        });
    }
});
