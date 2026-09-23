# VegaVisual — Filmación con drones

Web de presentación para una empresa audiovisual especializada en **filmación con drones** y filmaking aéreo, inspirada en la estructura de [EFECTO](https://www.efecto.es/).

## Contenido

- **Hero**: Título principal y llamada a la acción
- **Servicios**: Video corporativo, spots, eventos, inmobiliario, cine/documental, redes sociales
- **CTA**: Solicitud de presupuesto
- **Sobre nosotros**: Equipo y enfoque (pilotos certificados + cine)
- **Trabajos**: Galería de proyectos (placeholders con Unsplash)
- **Contacto**: Formulario de solicitud de presupuesto
- **Footer**: Navegación y redes sociales

## Cómo ver la web

1. Abre `index.html` en el navegador (doble clic o arrastra el archivo).
2. O sirve la carpeta con un servidor local, por ejemplo:
   - **Node**: `npx serve .`
   - **Python**: `python -m http.server 8000` y entra en `http://localhost:8000`

## Tecnologías

- HTML5
- CSS3 (variables, Grid, Flexbox, animaciones)
- JavaScript (menú móvil, scroll suave, placeholder del formulario)
- Fuentes: [Bebas Neue](https://fonts.google.com/specimen/Bebas+Neue), [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)

## Personalización

- **Colores**: edita las variables en `:root` en `styles.css` (por ejemplo `--accent`, `--bg-dark`).
- **Contenido**: textos, servicios y enlaces en `index.html`.
- **Imágenes de trabajos**: sustituye las URLs de `--img` en cada `.trabajo-image` por tus propias imágenes.

El formulario de contacto no envía datos a ningún servidor; para producción necesitarás un backend o un servicio (Formspree, Netlify Forms, etc.).
