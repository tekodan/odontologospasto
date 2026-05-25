# Plan de Mejora — odontologospasto.com.co

## 1. Contenido — Páginas

### 1.1 Homepage (`/index.astro`)
**Estado actual:** Hero genérico + valores grid + services grid + about simple + CTA  
**Estado original:** Página WPBakery completa (ID 63) con 6 secciones bien definidas

**Sección 1: Hero / "Por qué escogernos?"**
```
[tm_heading] → subtitle "POR QUÉ ESCOGERNOS?" en #486683, letter-spacing 1.75px
[tm_box_icon style="10"] × 3 con FontAwesome 5:
  • Confianza — fal fa-home-heart
  • Cambios visibles — fal fa-laugh
  • Crea tu mejor versión — fal fa-briefcase-medical
```
- [ ] Subtítulo con uppercase y letter-spacing
- [ ] Iconos mapeados de FontAwesome → Lucide/SVG

**Sección 2: Acerca de nosotros (fondo #967e76)**
```
[tm_heading] → "ACERCA DE NOSOTROS" en rgba(255,255,255,0.82)
[tm_heading h5] → "En la clínica odontológica Maryllen Guevara Márquez somos un grupo certificado..."
[tm_heading div] → Descripción extendida
[tm_popup_video] → Video YouTube https://youtu.be/XgTCAUSig8Y?si=8-DIsL3N2Uu03MSI con poster ID 2628
[tm_heading] → "Brindamos atención integral, oportuna y de calidad..."
```
- [ ] Implementar video popup (modal con YouTube embed)
- [ ] Descargar imagen poster del video (ID 2628)
- [ ] Texto completo extraído del WP

**Sección 3: Nuestros Servicios (fondo #f2f6f9)**
```
[tm_heading] → "NUESTROS SERVICIOS" en #486683
[tm_heading] → "Servicios en nuestra Clínica" font_size xs:36;lg:42
[tm_heading div] → "Nuestra clínica ofrece todo tipo de servicios..."
[tm_service] → Grid con 9 servicios, 3 columnas
```

**Sección 4: CTA WhatsApp (fondo #967e76)**
```
[tm_heading] → "Escribenos para programar un cita?"
[tm_button] → WhatsApp: 573105367290, style=modern, bg=secondary, text=white
```
- [ ] Ya existe en homepage — mejorar estilo visual

**Sección 5: Testimonios**
```
[tm_testimonial style="8"] → Carrusel de testimonios
```
- [ ] Extraer testimonios del CPT `testimonial`
- [ ] Implementar carrusel con Swiper.js

**Sección 6: Instagram Feed**
```
[vc_raw_html] base64 → [instagram-feed feed=1]
```
- [ ] Integrar feed de Instagram

**Lo que NO migrar** (demo content deshabilitado originalmente):
- Pricing plans (disable_element="yes")
- Blog/news carousel (disable_element="yes")

### 1.2 Contacto (`/contacto`)
**Estado actual:** Formulario básico + WhatsApp  
**Original:** Página WPBakery (ID 823) con layout 2 columnas

- [ ] Google Maps iframe embed con ubicación: Cra 34 #19-76, Pasto
- [ ] Columna derecha con info de contacto:
  - Dirección: Cra 34 #19-76, Pasto, Nariño
  - Teléfono: +573105367290
  - Email: guevaramarquezmaryllen071448@gmail.com
  - Horario: Lun-Vie 9:00-18:00, Sáb 9:00-12:00
- [ ] Iconos FontAwesome 5 para cada dato: map, phone, envelope, clock
- [ ] El formulario en columna izquierda

### 1.3 Servicios — Cada página individual
**Estado actual:** 1 párrafo genérico por servicio  
**Original:** Cada servicio tiene contenido extenso HTML en su CPT

| Slug | ID CPT | Contenido real a escribir |
|------|--------|--------------------------|
| `/servicios/endodoncia` | 2595 | Definición, síntomas (5 items), tipos (unirradicular, birradicular, multirradicular) |
| `/servicios/periodoncia` | 2597 | Definición, fases: higiénica (raspado/alisado), correctiva/quirúrgica (regeneración tisular, alargamiento coronario), mantenimiento |
| `/servicios/estetica-dental` | 2601 | Blanqueamiento, carillas (cerámicas vs resina, indicaciones), galería de casos éxito |
| `/servicios/rehabilitacion-oral` | 2604 | Prótesis fija, corona única, sobre implantes, removible, total |
| `/servicios/cirugia-oral-y-maxilofacial` | 2606 | Extracción cordales, extracciones quirúrgicas, bichectomía |
| `/servicios/implantologia-dental` | 2608 | Definición técnica, tornillos de titanio, biocompatibilidad |
| `/servicios/ortodoncia` | 2610 | Removible vs fija, brackets (metálico, zafiro, porcelana, lingual), Invisalign (12 ventajas) |
| `/servicios/odontopediatria` | 2612 | Profilaxis, sellantes, extracciones, resinas, coronas acero |
| `/servicios/estetica-orofacial` | 2614 | Bichectomía, ácido hialurónico (labios, rinomodelación, surcos nasogenianos), toxina botulínica (arrugas, sonrisa gingival, bruxismo), plasma |

---

## 2. Estilos — SmilePure Theme

### 2.1 Colores
**Actual:** `#486683` (primary), `#967e76` (earth), `#f2f6f9` (bg-light)  
**Mejoras:**
- [ ] Color secondary para botones (el original usa `button_bg_color="secondary"`)
- [ ] Transparencias para texto sobre earth: `rgba(255,255,255,0.82)`, `rgba(255,255,255,0.8)`

### 2.2 Tipografía
**Actual:** Poppins — correcto  
**Mejoras:**
- [ ] Poppins 300 (light), 500 (medium), 600, 700
- [ ] Letter-spacing `1.75px` para subtítulos
- [ ] Text-transform `uppercase` para labels de sección
- [ ] Tamaños responsive: `xs:36; lg:42` → `text-4xl md:text-5xl`
- [ ] Font size body: `lg:17`, labels: `lg:14`

### 2.3 Componentes WPBakery → Astro

#### tm_heading
```astro
<Heading 
  text="POR QUÉ ESCOGERNOS" 
  tag="span"           // h1-h6, div, span
  size="lg:14"         // responsive sizes
  weight="500"
  uppercase={true}
  align="center"
  color="#486683"
  letterSpacing="1.75px"
/>
```
- [ ] Crear componente con estas props

#### tm_box_icon (style="10" — homepage valores)
```astro
<FeatureCard 
  icon="heart"
  heading="Confianza"
  text="Transparencia, atención oportuna..."
/>
```
- [ ] Icono centrado arriba sin círculo
- [ ] Heading abajo, texto descripción
- [ ] Mapear FontAwesome 5 → Lucide: home-heart→Heart, laugh→Smile, briefcase-medical→Stethoscope

#### tm_box_icon (style="12" — contacto)
```astro
<ContactInfo 
  icon="map-pin"
  heading="Cra 34 #19-76"
  text="Pasto, Nariño - Colombia"
  link="..."          // opcional
/>
```
- [ ] Icono a la izquierda, heading bold, texto debajo

#### tm_popup_video
```astro
<VideoPopup 
  videoUrl="https://youtu.be/XgTCAUSig8Y?si=8-DIsL3N2Uu03MSI"
  poster="/assets/poster-video.jpg"
/>
```
- [ ] Imagen poster con botón play overlay
- [ ] Modal con YouTube iframe al clickear
- [ ] Descargar poster (attachment ID 2628)

#### tm_testimonial (style="8")
```astro
<TestimonialCarousel testimonials={...} />
```
- [ ] Carrusel con Swiper.js
- [ ] Leer del CPT `testimonial`

#### tm_button
```astro
<Button 
  variant="modern"     // modern, outline, text
  color="secondary"    // primary, secondary, tertiary
  href="https://api.whatsapp.com/..."
>
  Programar cita
</Button>
```
- [ ] `hover` cambia bg a blanco con border secondary, texto secondary

---

## 3. Imágenes y Assets

### 3.1 Imágenes a descargar del servidor
```bash
# Poster del video YouTube (ID 2628)
# Buscar y descargar

# Logos (algunos ya descargados)
LOGO-CLINICA-1.png ✓
logo-light.png ✓
logo.png ✓

# Imágenes de servicios (las que existan en uploads/2023)
```

### 3.2 Iconos FontAwesome 5 → Lucide
| FontAwesome 5 | Lucide |
|---|---|
| fal fa-home-heart | Heart / ShieldCheck |
| fal fa-laugh | Smile |
| fal fa-briefcase-medical | Stethoscope |
| fal fa-map | MapPin |
| fal fa-envelope | Mail |
| fal fa-clock | Clock |
| fal fa-phone | Phone |

### 3.3 Video
- URL: https://youtu.be/XgTCAUSig8Y
- Implementar como modal YouTube
- Descargar poster desde attachment ID 2628

---

## 4. Funcionalidades Faltantes

### 4.1 Formulario de Contacto completo
Estado actual: Nombres, Apellidos, Teléfono, Email, Mensaje  
Mejora: mismo estilo SmilePure con rounded-lg, shadow

### 4.2 Instagram Feed
- [ ] Embed script de Instagram en homepage
- [ ] Opciones: API Graph de Instagram, elfsight widget, o Simple embed HTML

### 4.3 Video Popup YouTube
- [ ] Modal con overlay + iframe
- [ ] Imagen poster con botón play

### 4.4 Google Maps
- [ ] Embed en contacto: Cra 34 #19-76, Pasto
- [ ] Coordenadas: 1.2249, -77.2817

### 4.5 Testimonios Carrusel
- [ ] Extraer del CPT y mostrar en carrusel

### 4.6 SEO
- [ ] JSON-LD `MedicalBusiness` ya existe ✓
- [ ] JSON-LD `LocalBusiness` con dirección exacta
- [ ] BreadcrumbList JSON-LD
- [ ] OpenGraph image con logo

---

## 5. Plan de Ejecución

### Fase 1: Contenido (3-4h)
1. Convertir HTML de cada service CPT a `.md`
2. Escribir contenido completo de los 9 servicios
3. Escribir homepage completa con las 5 secciones reales
4. Contacto con Google Maps, datos reales

### Fase 2: Componentes (2-3h)
1. `<Heading>` — props: tamaño, color, uppercase, letterSpacing
2. `<FeatureCard>` — style 10 (icon, heading, text)
3. `<ContactInfo>` — style 12 (icon, heading, text, link)
4. `<VideoPopup>` — poster + modal YouTube
5. `<TestimonialCarousel>` — Swiper

### Fase 3: Imágenes (1h)
1. Descargar poster video
2. Mapear FontAwesome → Lucide
3. Favicon optimizado

### Fase 4: Funcionalidades (1-2h)
1. Instagram feed embed
2. Google Maps en contacto
3. JSON-LD adicionales
4. Carrusel testimonios

### Fase 5: Estilos finos (1h)
1. Letter-spacing 1.75px en labels
2. Uppercase subtítulos
3. Tamaños responsive
4. Efectos hover en cards

**Total estimado: 8-11 horas**
