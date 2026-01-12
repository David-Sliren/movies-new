# 🎬 Movie Catalog Pro - Next Gen

Un explorador de cine de alto rendimiento construido con las tecnologías más modernas del ecosistema React. Esta aplicación consume la API de TMDB para ofrecer una experiencia de usuario fluida, animada y optimizada mediante gestión inteligente de caché.

## 🚀 Demo
Explora el catálogo: [Movie Catalog Live](https://david-sliren.github.io/catalogos-de-peliculas-recientes/)

## ✨ Características de Vanguardia
- **React 19 Core:** Aprovechando las últimas mejoras de rendimiento y hooks del framework.
- **TanStack Query (v5):** Gestión de estado asíncrono, almacenamiento en caché inteligente y carga optimizada de datos.
- **Framer Motion:** Transiciones suaves de entrada y micro-interacciones en las tarjetas de películas.
- **Tailwind CSS v4:** Estilizado moderno utilizando el motor de alto rendimiento basado en variables CSS.

## 🛠️ Stack Tecnológico
* **Framework:** React 19
* **Fetching & Cache:** TanStack Query
* **Animaciones:** Framer Motion
* **Estilos:** Tailwind CSS v4
* **Build Tool:** Vite

## ⚙️ Configuración DX (VS Code)
Para el mejor soporte de **Tailwind v4** y sugerencias automáticas:

```json
{
  "editor.quickSuggestions": { "strings": true },
  "tailwindCSS.classFunctions": ["tw", "tw.style"],
  "tailwindCSS.classAttributes": ["style", "className"],
  "tailwindCSS.includeLanguages": {
    "javascriptreact": "javascriptreact"
  }
}
