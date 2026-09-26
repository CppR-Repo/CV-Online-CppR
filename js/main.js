/**
 * Arquitectura de Interactividad - Cristian Portillo CV
 * Manejo dinámico de Tema Claro/Oscuro y Automatización de Metadatos
 */
document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const downloadPdfBtn = document.getElementById('download-pdf');
    const htmlElement = document.documentElement;
    const footerYear = document.getElementById('footer-year');

    // 1. Automatización del año del pie de página
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    // 2. Definición de iconos vectoriales dinámicos
    const iconLight = 'icons/theme-light.svg'; // Icono Sol (se muestra en modo oscuro)
    const iconDark = 'icons/theme-dark.svg'; // Icono Luna (se muestra en modo claro)

    // Función para actualizar el estado visual y la accesibilidad del botón
    const updateButtonState = (currentTheme) => {
        if (currentTheme === 'dark') {
            themeIcon.src = iconLight;
            themeIcon.alt = 'Icono Modo Claro';
            themeToggleBtn.title = 'Cambiar a Modo Claro';
        } else {
            themeIcon.src = iconDark;
            themeIcon.alt = 'Icono Modo Oscuro';
            themeToggleBtn.title = 'Cambiar a Modo Oscuro';
        }
    };

    // 3. Persistencia de preferencias del sistema (LocalStorage)
    const savedTheme = localStorage.getItem('theme');
    
    // Si existe preferencia se aplica, de lo contrario se inicializa en 'dark'
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateButtonState(savedTheme);
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        updateButtonState('dark');
    }

    // 4. Manejador del cambio de tema interactivo
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButtonState(newTheme);
    });

    // 5. Control de opacidad y visibilidad del título "CV Online" en scroll
    const brandTitle = document.querySelector('.global-controls__title');
    if (brandTitle) {
        window.addEventListener('scroll', () => {
            // Si el usuario scrollea más de 40 píxeles, ocultamos el texto
            if (window.scrollY > 40) {
                brandTitle.classList.add('global-controls__title--hidden');
            } else {
                brandTitle.classList.remove('global-controls__title--hidden');
            }
        }, { passive: true }); // 'passive: true' optimiza el rendimiento del scroll en móviles
    }

    // ==========================================================================
    // EXPORTACIÓN AUTOMÁTICA DE HTML A PDF REAL (LLENO)
    // ==========================================================================
    if (downloadPdfBtn) {
        downloadPdfBtn.addEventListener('click', (event) => {
            // Evitamos que intente buscar el archivo local vacío en el href
            event.preventDefault();

            // Disparamos el motor nativo del sistema operativo.
            // Esto aplicará AUTOMÁTICAMENTE tu archivo css/print.css
            window.print();
        });
    }
});
