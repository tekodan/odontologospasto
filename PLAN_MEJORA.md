# Registro de Mejoras — odontologospasto.com.co

## Fecha: Mayo 2026
## Stack: Astro 6 + Tailwind CSS 4 + Alpine.js 3.14

---

## Resumen

Se partió de un sitio migrado de WordPress/WPBakery con una homepage de 8 secciones básicas.
Se expandió a **14 secciones** con contenido rico, un blog de 4 artículos, SEO avanzado, y mejoras sustanciales de UI/UX.

---

## 1. Bugs Corregidos

| Bug | Archivo | Cambio |
|-----|---------|--------|
| CTA "Agendar Cita" del header apuntaba a Instagram | `src/layouts/BaseLayout.astro` | Ahora apunta a WhatsApp (+57 310 536 7290) tanto en desktop como mobile |
| Formulario de contacto apuntaba a `tekodan@gmail.com` | `src/pages/[...slug].astro` | Corregido al email real de la clínica |

---

## 2. Homepage — Nuevas Secciones (6 añadidas)

La homepage pasó de **8 a 14 secciones**:

| # | Sección | Novedad | Descripción |
|---|---------|---------|-------------|
| 2 | **Indicadores de Confianza** | NUEVO | 6 métricas en barra navy: 12+ años, 3200+ pacientes, 9 especialidades, 1800+ endodoncias, 420+ implantes, 650+ diseños de sonrisa. Números en dorado, animación de conteo. |
| 4 | **Conoce a la Dra. Maryllen** | NUEVO | Foto + bio como endodoncista y especialista en estética (U de Antioquia), badge flotante "12+ años", doble CTA. |
| 5 | **Instagram Feed (base)** | NUEVO | Grid masonry de 6 placeholders listos para conectar API de Instagram. Sección ubicada justo después de la bio de la Dra. para aprovechar el impulso de confianza. |
| 6 | **Tu Primera Visita** | NUEVO | 4 pasos visuales con iconos SVG numerados: Agenda → Evaluación sin costo → Diagnóstico digital → Plan personalizado. Reduce ansiedad de nuevos pacientes. |
| 9 | **Tecnología y Equipos** | NUEVO | Grid de 6 cards: Scanner intraoral 3D, Radiografía digital, Cirugía guiada, Esterilización hospitalaria, Sillón premium, Fotocurado LED. |
| 10 | **FAQ (Preguntas Frecuentes)** | NUEVO | 6 preguntas con acordeón Alpine.js: ¿Duele la endodoncia?, ¿A qué edad llevar a mi hijo?, ¿Cuánto dura un implante?, ¿Seguros?, ¿Planes de pago?, ¿Urgencias? |
| 11 | **Seguros y Planes de Pago** | NUEVO | 3 cards: EPS y Seguros, Planes de Pago, Múltiples Métodos de Pago. |
| 14 | **Urgencias Dentales** | NUEVO | Card flotante con encabezado navy, ícono rojo (único acento de alerta), botón dorado. Menciona que la Dra. es especialista en urgencias. Mismo diseño replicado en `/contacto`. |

### Secciones originales conservadas y mejoradas:

| # | Sección | Mejoras |
|---|---------|---------|
| 1 | Hero carrusel | Sin cambios (ya excelente: 3 slides, Ken Burns, overlay gradiente) |
| 3 | Valores (Confianza, Cambios Visibles, Crea tu mejor versión) | Sin cambios. Componente `FeatureCard` reutilizado |
| 7 | Acerca de nosotros + Video | Sin cambios. Componente `VideoPopup` ya existente |
| 8 | Servicios (9 cards) | Hover mejorado: `-translate-y-1` + shadow más pronunciado |
| 12 | CTA WhatsApp | Sin cambios. Ya era sólido |
| 13 | Testimonios | Sin cambios. Componente `TestimonialCarousel` con Alpine.js |

---

## 3. Mejoras UI/UX

| Mejora | Implementación |
|--------|---------------|
| **Smooth scroll** | `scroll-behavior: smooth` en `global.css` |
| **CTA sticky mobile** | Barra fija inferior en móvil con botón verde "Agendar por WhatsApp". El botón flotante circular se mantiene en desktop. Archivo: `BaseLayout.astro` |
| **Pulso WhatsApp flotante** | Animación `pulse-wa` en `global.css` aplicada al botón flotante |
| **Hover mejorado en cards** | Servicios: `hover:-translate-y-1` + `hover:shadow-lg`. Botones: `hover:scale-105` |
| **Animaciones de entrada** | Secciones usan `x-data="{ visible: true }"` con transiciones CSS. El conteo de indicadores usa `x-init="setTimeout(() => counting = true, 400)"` |
| **Indicadores en dorado** | Números en `text-accent` (#c6a279) para contraste sobre fondo navy |
| **Urgencias integrado** | Card blanco con header navy (no rojo), solo el ícono del pin en rojo. Botón CTA en dorado (`accent`). Consistente con la paleta del sitio |

---

## 4. Páginas de Servicios — Mejoras

Archivo: `src/pages/[...slug].astro`

| Mejora | Descripción |
|--------|-------------|
| **Breadcrumb** | Navegación Inicio → Servicios → [Nombre] en todas las páginas de servicio |
| **BreadcrumbList schema** | JSON-LD dinámico por página |
| **FAQ por servicio** | 2-3 preguntas específicas para cada uno de los 9 servicios, con acordeón Alpine |
| **CTA WhatsApp final** | Bloque navy con "¿Interesado/a en [servicio]? Consultar por WhatsApp" |
| **Imagen de cabecera** | Conservada del diseño original (imagen por servicio) |

---

## 5. Página de Contacto — Mejoras

Archivo: `src/pages/[...slug.astro]` (sección `entry.id === 'contacto'`)

| Mejora | Descripción |
|--------|-------------|
| **Badge de Urgencias** | Card navy con ícono rojo + CTA dorado, mismo diseño que la sección 14 del homepage |
| **Horarios visuales** | Tags con fondo de color: Lun-Vie azul, Sáb dorado, Dom gris |
| **Formulario** | Conservado y corregido. Action apuntando al email real |

---

## 6. SEO y Performance

| Mejora | Archivo |
|--------|---------|
| **FAQPage schema** | `src/pages/index.astro` — JSON-LD con las 6 preguntas del FAQ |
| **BreadcrumbList schema** | `src/pages/[...slug].astro` — dinámico por página |
| **MedicalBusiness + LocalBusiness schema** | Ya existían en `BaseLayout.astro` — sin cambios |
| **Preload hero image** | `<link rel="preload">` en `BaseLayout.astro` para la imagen principal del carrusel |
| **Página 404 personalizada** | `src/pages/404.astro` — diseño con logo, mensaje cálido, links a inicio/servicios y WhatsApp |
| **Sitemap** | `@astrojs/sitemap` ya configurado — 17 páginas generadas |
| **Blog en navegación** | Link "Blog" agregado al header nav (desktop + mobile) y al footer |

---

## 7. Blog

### Colección
Archivo: `src/content.config.ts` — nueva colección `posts` con schema: `title`, `description`, `date`, `author`, `image`, `published`.

### Artículos (4)
| Ruta | Título |
|------|--------|
| `/blog/cada-cuanto-ir-al-odontologo` | ¿Cada cuánto debo ir al odontólogo? |
| `/blog/alimentos-danan-esmalte-dental` | 5 alimentos que dañan el esmalte dental sin que lo sepas |
| `/blog/brackets-vs-invisalign` | Brackets vs Invisalign: ¿cuál elegir para tu sonrisa? |
| `/blog/primer-visita-hijo-odontologo` | ¿Cuándo llevar a mi hijo al odontólogo por primera vez? |

### Páginas
| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/blog` | `src/pages/blog.astro` | Listado con cards (imagen, autor, fecha, extracto) |
| `/blog/[slug]` | `src/pages/blog/[...slug].astro` | Artículo individual con breadcrumb, hero image, contenido markdown, CTA final |

---

## 8. Estructura Final de Archivos Modificados/Creados

```
src/
├── components/           (sin cambios)
│   ├── ContactInfo.astro
│   ├── FeatureCard.astro
│   ├── TestimonialCarousel.astro
│   └── VideoPopup.astro
├── content/
│   ├── config.ts         → MODIFICADO: colección posts agregada
│   ├── pages/
│   │   └── contacto.md   (sin cambios)
│   ├── posts/            → NUEVO: 4 artículos .md
│   │   ├── cada-cuanto-ir-al-odontologo.md
│   │   ├── alimentos-danan-esmalte-dental.md
│   │   ├── brackets-vs-invisalign.md
│   │   └── primer-visita-hijo-odontologo.md
│   └── services/         (sin cambios, 9 archivos .md)
├── layouts/
│   └── BaseLayout.astro  → MODIFICADO: CTA WhatsApp, blog nav, preload, CTA sticky mobile, footer
├── pages/
│   ├── 404.astro         → NUEVO: página 404 personalizada
│   ├── blog.astro        → NUEVO: listado de blog
│   ├── blog/
│   │   └── [...slug].astro → NUEVO: artículo individual
│   ├── index.astro       → REESCRITO: 14 secciones
│   └── [...slug].astro   → REESCRITO: breadcrumb, FAQ/CTA servicios, badge urgencias, horarios
└── styles/
    └── global.css        → MODIFICADO: smooth scroll, pulse-wa animation
```

---

## 9. Datos Pendientes de Reemplazar (inventados por ahora)

| Sección | Qué reemplazar | Info real necesaria |
|---------|---------------|-------------------|
| Indicadores | 3200 pacientes, 1800 endodoncias, 420 implantes, 650 diseños | Números reales de la clínica |
| Bio Dra. | U de Antioquia, 12+ años, trayectoria | Universidad real, años exactos |
| Tecnología | Scanner 3D, radiografía digital, etc. | Equipos que realmente tienen |
| FAQ homepage + servicios | Preguntas y respuestas | Preguntas frecuentes reales |
| Blog | 4 artículos completos | Revisión/aprobación de la Dra. |

---

## 10. Páginas Generadas en Build

17 páginas estáticas:
- `/` (homepage)
- `/contacto`
- `/404.html`
- `/blog`
- `/blog/cada-cuanto-ir-al-odontologo`
- `/blog/alimentos-danan-esmalte-dental`
- `/blog/brackets-vs-invisalign`
- `/blog/primer-visita-hijo-odontologo`
- `/servicios/endodoncia`
- `/servicios/periodoncia`
- `/servicios/estetica-dental`
- `/servicios/rehabilitacion-oral`
- `/servicios/cirugia-oral-y-maxilofacial`
- `/servicios/implantologia-dental`
- `/servicios/ortodoncia`
- `/servicios/odontopediatria`
- `/servicios/estetica-orofacial`

---

## 11. Comandos

```bash
npm run dev        # Desarrollo local
npm run build      # Build de producción → /dist
npm run preview    # Vista previa del build
```
