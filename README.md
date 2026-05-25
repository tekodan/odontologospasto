# Odontólogos Pasto — Dra. Maryllen Guevara Márquez

Sitio web profesional para clínica odontológica en Pasto, Nariño, Colombia.
Migrado desde WordPress/WPBakery (tema SmilePure) a **Astro 6** + **Tailwind CSS 4** + **Alpine.js**.

## Tecnologías

| Stack | Versión |
|---|---|
| [Astro](https://astro.build) | 6.x |
| [Tailwind CSS](https://tailwindcss.com) | 4.x |
| [Alpine.js](https://alpinejs.dev) | 3.14 |
| Node.js | >= 22.12 |

## Estructura del proyecto

```
src/
├── components/        Componentes reutilizables
│   ├── ContactInfo.astro
│   ├── FeatureCard.astro
│   ├── TestimonialCarousel.astro
│   └── VideoPopup.astro
├── content/
│   ├── pages/         Páginas de contenido (contacto)
│   └── services/      9 servicios odontológicos en .md
├── layouts/
│   └── BaseLayout.astro   Layout principal (header, footer, SEO)
├── pages/
│   ├── index.astro         Homepage
│   └── [...slug].astro     Páginas dinámicas (servicios + contacto)
└── styles/
    └── global.css          Tailwind + estilos globales
public/
├── images/
│   ├── clinica/            Fotos reales de la clínica
│   └── servicios/          Imágenes por servicio (9)
├── IMG_2308-1-scaled.jpg   Hero principal (Dra. Maryllen)
├── logo.png / logo-light.png
├── poster-video.jpg         Thumbnail video institucional
└── robots.txt
```

## Páginas generadas (11)

| Ruta | Descripción |
|---|---|
| `/` | Homepage con hero carrusel, valores, servicios, testimonios, Instagram |
| `/contacto` | Formulario + Google Maps + datos de contacto |
| `/servicios/endodoncia` | 9 servicios con contenido completo |

## Componentes

- **FeatureCard** — Icono + título + descripción (valores del home)
- **ContactInfo** — Icono Lucide + texto + link opcional
- **VideoPopup** — Modal con YouTube iframe, poster y autoplay al click
- **TestimonialCarousel** — Carrusel con Alpine.js, auto-rotación cada 5s

## SEO / Schema

- JSON-LD `MedicalBusiness` con dirección, horarios, teléfono, redes
- JSON-LD `LocalBusiness`
- Open Graph + Twitter Cards
- Sitemap automático (`@astrojs/sitemap`)
- Canonical URLs por página

## Assets

Imágenes extraídas del backup `.wpress` original de WordPress. Optimizadas a 800-1000px con calidad 80.

## Comandos

```bash
npm run dev        # Desarrollar local
npm run build      # Compilar a /dist
npm run preview    # Vista previa del build
```

## Créditos

Desarrollado por [danialva.com](https://danialva.com)
