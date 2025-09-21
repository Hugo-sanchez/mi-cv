
# CV Web "perrón" (plantilla)

Este paquete incluye una página moderna para tu CV con modo claro/oscuro, botones y secciones listas.
Funciona perfecto en **Visual Studio Code** (usa la extensión _Live Server_ para ver cambios al vuelo).

## Archivos
- `index.html` — Estructura principal
- `styles.css` — Estilos y tema visual (fácil de ajustar colores)
- `script.js` — Modo claro/oscuro, scroll suave y utilidades
- `assets/favicon.svg` y `assets/avatar.svg` — Iconos/imagen base
- `cv.pdf` — PDF de ejemplo para el botón "Descargar CV"

## Cómo usar
1. Abre la carpeta en **Visual Studio Code**.
2. Cambia los textos (nombre, correo, links, proyectos) directo en `index.html`.
3. Ajusta colores en `styles.css` si quieres un look distinto.
4. Corre con **Live Server** o simplemente abre `index.html` en tu navegador.
5. Reemplaza `cv.pdf` por tu CV real si ya lo tienes.

## Personalización rápida
- Botón de tema: se guarda en `localStorage` y recuerda tu preferencia.
- Secciones: agrega más proyectos duplicando tarjetas dentro de `<section id="proyectos">`.
- Email: cambia `tucorreo@correo.com` (en `index.html`) a tu correo real.

¡Listo para presumir tu perfil! 🚀
