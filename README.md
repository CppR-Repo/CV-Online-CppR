# 🌐 CV Online Profesional — Cristian Pablo Portillo Rios

Plataforma web nativa, altamente optimizada y **totalmente responsive** (Mobile-First) diseñada para alojar y distribuir mi perfil profesional enfocado en la **intersección de tres mundos**: la Ingeniería de Industrias de Procesos (OT), el Desarrollo de Software / Análisis de Datos (IT), y la Gestión Comercial / Ventas.

Este proyecto fue construido desde cero utilizando **tecnologías web nativas y CSS Puro**, demostrando buenas prácticas de arquitectura de software, modularidad y legibilidad de código sin dependencias externas.

---

## 🛠️ Tecnologías & Arquitectura del Código

- **Estructura Semántica:** HTML5 avanzado con optimización SEO y etiquetas Open Graph para un fuerte impacto visual al compartir el enlace en redes sociales o LinkedIn.
- **Estilos Puros & Escalables:** CSS3 modular dividiendo la responsabilidad de las hojas de estilo (`fonts.css`, `reset.css`, `styles.css` y `print.css`).
- **Metodología BEM:** Bloque, Elemento, Modificador utilizado de manera rigurosa en todos los componentes para garantizar un código limpio, mantenible y legible.
- **Variables CSS (Custom Properties):** Motor de diseño cromático dinámico basado en atributos de datos (`data-theme`) para gestionar el cambio de tema.
- **Interactividad Nativa (Vanilla JS):** Código JavaScript asíncrono y desacoplado (`js/main.js`) encargado del control de estado del tema, persistencia en caché y optimización del scroll.

---

## ✨ Características Principales

- **🌗 Cambio de Tema en Vivo:** Botón flotante superior interactivo que alterna entre un Modo Oscuro tecnológico (para entornos de software/ingeniería) y un Modo Claro corporativo de alta legibilidad.
- **💾 Persistencia en LocalStorage:** El navegador recuerda automáticamente la preferencia de tema elegida por el usuario para futuras visitas.
- **📱 Diseño Responsive Fluido:** Estructura basada en _CSS Grid_ y _Flexbox_ con Media Queries estratégicas para un renderizado simétrico y sin huecos en Escritorio, Tablets y Celulares (con botones adaptados ergonómicamente al pulgar).
- **📉 Desvanecimiento Inteligente (Scroll UX):** El indicador textual "CV Online" se desvanece de forma suave hacia arriba mediante transiciones CSS al hacer scroll, liberando espacio útil de lectura.
- **📄 Descarga Nactiva de PDF:** Enlace directo de descarga en segundo plano para el archivo binario del currículum, optimizado de forma paralela en la hoja de estilos de impresión (`print.css`).
- **🎨 Tratamiento SVG Selectivo:** Filtros adaptativos de CSS para invertir el color de los iconos negros de fábrica en modo oscuro, protegiendo los colores nativos de marca de LinkedIn, WhatsApp y logos.

---

## 📁 Estructura del Proyecto

```text
mi-cv/
├── assets/
│   ├── cv/
│   │   └── cv-cristian-portillo.pdf
│   └── img/
│       ├── perfil.webp
│       ├── og-image.webp
│       └── og-image.jpg
├── css/
│   ├── reset.css
│   ├── fonts.css
│   ├── styles.css
│   └── print.css
├── fonts/
│   └── inter/
│       └── *.woff2
├── favicons/
│   ├── apple-touch-icon.png
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── favicon.ico
│   └── site.webmanifest
├── icons/
│   └── *.svg
├── js/
│   └── main.js
├── index.html
├── README.md
├── .gitignore
├── robots.txt
└── sitemap.xml
```

---

## 🚀 Despliegue en Producción

El proyecto se encuentra desplegado de forma continua en producción y puede visitarse en vivo a través del siguiente enlace:
🔗 **[cv-online.cppr-programmer](https://cppr-repo.github.io/CV-Online-CppR/)**
