# Distrito 21 Barber Studio

Sitio estático hecho con HTML, CSS y JavaScript.

## Archivos principales

- `index.html`: secciones, textos, precios, enlaces e imágenes de la galería.
- `css/styles.css`: estilos, colores, imágenes de portada y diseño adaptable.
- `js/script.js`: menú de navegación para celular.
- `img/`: imágenes locales del proyecto.

## Actualizar precios

Abre `index.html` y busca la sección `id="servicios"`. Cada servicio está en un bloque `<article class="service-row">`. Cambia el texto del servicio o el precio dentro de su `<strong>`, por ejemplo `S/20`.

## Reemplazar fotos de la galería

Guarda la foto nueva dentro de `img/` y cambia el atributo `src` de la tarjeta correspondiente en `index.html`, por ejemplo:

```html
src="img/nombre-de-la-foto.jpg"
```

La primera tarjeta ya usa `img/corte-principal.jpg`. Algunas otras fotos y las imágenes de portada siguen usando direcciones externas; para cambiarlas, actualiza sus URL en `index.html` o en `css/styles.css`.

## Ver la página localmente

Abre `index.html` con Live Server desde VS Code. Para que otras personas puedan verla, el proyecto esta publicado en 'https://distrito21-barber-studio.netlify.app'
