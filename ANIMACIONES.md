# Animaciones Adaptadas de las Plantillas HTML a Angular

## Resumen
Este documento detalla todas las animaciones y efectos JavaScript de las plantillas HTML originales (carpeta `bitcoints`) que han sido adaptadas a Angular.

## 1. Animaciones del Angular Framework (@angular/animations)

### Instalación
```bash
npm install @angular/animations@21.1.2 --legacy-peer-deps
```

### Configuración
- **Archivo**: `src/app/app.config.ts`
- **Importación**: `provideAnimations()` agregado a los providers

### Componentes que usan Angular Animations:

#### a) Personas Component
- **Archivo**: `src/app/pages/personas/personas.ts`
- **Animación**: `fadeIn` trigger
- **Efecto**: Entrada suave de elementos con opacity 0→1
- **Duración**: 600ms con easing ease-out
- **Uso**: Cards de beneficios

#### b) Comercios Component
- **Archivo**: `src/app/pages/comercios/comercios.ts`
- **Animación**: `listAnimation` trigger con stagger
- **Efecto**: Aparición secuencial de elementos de lista
- **Duración**: 100ms de stagger entre elementos
- **Uso**: Lista de requisitos para comercios

#### c) Legal Component
- **Archivo**: `src/app/pages/legal/legal.ts`
- **Animación**: `fadeIn` trigger
- **Efecto**: Transición suave entre tabs
- **Duración**: 400ms
- **Uso**: Contenido de tabs Términos y Privacidad

## 2. Carrusel de Logos (Infinite Scroll)

### Original
- **Archivo**: `bitcoints/js/carrusel.js`
- **Biblioteca**: Custom JavaScript con scroll infinito

### Adaptación Angular
- **Archivo**: `src/app/pages/inicio/inicio.ts`
- **Método**: `iniciarCarruselLogos()`
- **Tecnología**: `requestAnimationFrame` para animación fluida
- **Features**:
  - Scroll automático infinito
  - Duplicación de elementos para efecto seamless
  - Control de velocidad con `scrollSpeed = 1.5`
  - Pausa automática al hacer hover (CSS)
  - Compatible con SSR usando `PLATFORM_ID`

### CSS
- **Archivo**: `src/app/pages/inicio/inicio.css`
- **Clases**: `.carrusel-container`, `.carrusel-item`
- **Efectos**: 
  - Transform translate3d para mejor performance
  - Hover para pausar
  - Responsive con flexbox

## 3. Hero Carousel (Swiper)

### Original
- **Archivo**: `bitcoints/js/swiper.min.js`
- **Biblioteca**: Swiper.js

### Adaptación Angular
- **Archivo**: `src/app/pages/inicio/inicio.ts`
- **Método**: `iniciarCarruselHero()`
- **Tecnología**: RxJS `interval()` operator
- **Features**:
  - Auto-play cada 5000ms
  - Botones prev/next
  - Transición suave con CSS
  - Data binding para slides
  - Compatible con SSR

### Estructura de Datos
```typescript
heroSlides = [
  {
    imagen: string,
    titulo: string,
    descripcion: string,
    botonTexto: string,
    botonUrl: string
  }
]
```

## 4. Video Lightbox (Tobii)

### Original
- **Archivo**: `bitcoints/js/tobii.min.js`
- **Biblioteca**: Tobii Lightbox

### Adaptación Angular
- **Archivo**: `src/app/services/video.service.ts`
- **Método**: `openYouTubeVideo(videoId: string)`
- **Tecnología**: Angular Service con manipulación DOM
- **Features**:
  - Modal overlay con backdrop
  - Iframe responsive para YouTube
  - Botón de cierre
  - Click en overlay para cerrar
  - Prevención de scroll en body cuando modal está abierto
  - Compatible con SSR usando `isPlatformBrowser`

### Uso en Componentes
```typescript
// En el component
constructor(private videoService: VideoService) {}

openVideo(event: Event, videoId: string) {
  event.preventDefault();
  this.videoService.openYouTubeVideo(videoId);
}
```

```html
<!-- En el template -->
<a href="#" (click)="openVideo($event, 'VIDEO_ID')">
  <i class="mdi mdi-play"></i>
</a>
```

## 5. Parallax Effects (Jarallax)

### Original
- **Archivo**: `bitcoints/js/parallax.js`
- **Biblioteca**: Jarallax (Just Another Parallax)

### Adaptación Angular
- **Archivo**: `src/app/directives/parallax.directive.ts`
- **Tecnología**: Angular Directive
- **Features**:
  - Efecto parallax basado en scroll
  - Configurable con `[parallaxSpeed]`
  - Detección de viewport para optimización
  - Compatible con SSR
  - Usa `transform: translate3d()` para mejor performance

### Uso
```html
<div appParallax [parallaxSpeed]="0.5">
  Contenido con efecto parallax
</div>
```

### Valores de Speed
- `0` = Sin movimiento
- `0.5` = Mitad de velocidad (recomendado)
- `1` = Velocidad normal del scroll
- `>1` = Más rápido que el scroll

## 6. Smooth Scroll

### Original
- **Archivo**: `bitcoints/js/app.js`
- **Función**: Smooth scroll to anchors

### Adaptación Angular
- **Archivo**: `src/app/directives/smooth-scroll.directive.ts`
- **Tecnología**: Angular Directive con HostListener
- **Features**:
  - Scroll suave a elementos con ID
  - Offset configurable para header fijo
  - Prevención de comportamiento por defecto
  - Compatible con SSR

### Uso
```html
<a appSmoothScroll [target]="'#seccion'" [offset]="70">
  Ir a Sección
</a>
```

## 7. Back to Top Button

### Original
- **Archivo**: `bitcoints/js/app.js`
- **Función**: `topFunction()`

### Adaptación Angular
- **Archivo**: `src/app/components/back-to-top.component.ts`
- **Tecnología**: Standalone Component
- **Features**:
  - Aparece después de 300px de scroll
  - Animación de fade in/out
  - Smooth scroll al top
  - Hover effect con transform
  - Compatible con SSR

### Uso
```html
<!-- En app.html -->
<app-back-to-top></app-back-to-top>
```

## 8. Sticky Navigation

### Original
- **Archivo**: `bitcoints/js/app.js`
- **Función**: Active menu on scroll

### Adaptación Angular
- **Archivo**: `src/app/core/header/header.ts`
- **Tecnología**: HostListener + Class Binding
- **Features**:
  - Navbar se vuelve sticky después de 50px de scroll
  - Agrega clase `.nav-sticky` para estilos
  - Optimizado con passive event listener
  - Compatible con SSR

### Implementación
```typescript
@HostListener('window:scroll', ['$event'])
onWindowScroll() {
  this.isSticky = window.pageYOffset > 50;
}
```

## 9. Mobile Menu Toggle

### Original
- **Archivo**: `bitcoints/js/app.js`
- **Función**: `toggleMenu()`

### Adaptación Angular
- **Archivo**: `src/app/core/header/header.ts`
- **Método**: `toggleMenu()`
- **Features**:
  - Toggle con estado reactivo
  - Animación CSS hamburger icon
  - Responsive breakpoints

## 10. Form Collapse/Accordion (Bootstrap)

### Original
- **Biblioteca**: Bootstrap JavaScript
- **Atributos**: `data-bs-toggle="collapse"`

### Adaptación Angular
- **Archivo**: `src/app/pages/personas/redime.ts`
- **Tecnología**: Bootstrap collapse nativo + Angular
- **Features**:
  - FAQ accordion
  - Toggle con `data-bs-toggle` y `data-bs-target`
  - No requiere JavaScript adicional
  - Compatible con Bootstrap 5

### Uso
```html
<div class="accordion" id="faqAccordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" 
              data-bs-toggle="collapse" 
              data-bs-target="#faq1">
        Pregunta
      </button>
    </h2>
    <div id="faq1" 
         class="accordion-collapse collapse show" 
         data-bs-parent="#faqAccordion">
      <div class="accordion-body">Respuesta</div>
    </div>
  </div>
</div>
```

## Bibliotecas NO Adaptadas (No Usadas en Templates)

### Tiny Slider
- **Archivo**: `bitcoints/js/tiny-slider.js`
- **Estado**: No implementado - Se usa carrusel custom con requestAnimationFrame

### Feather Icons
- **Archivo**: `bitcoints/js/feather.min.js`
- **Estado**: No implementado - Se usan Material Design Icons

### Plugins Init
- **Archivo**: `bitcoints/js/plugins.init.js`
- **Estado**: No necesario - Cada animación se inicializa en su componente

## Resumen de Compatibilidad SSR

Todos los componentes y directivas están preparados para Server-Side Rendering:

```typescript
constructor(@Inject(PLATFORM_ID) platformId: object) {
  this.isBrowser = isPlatformBrowser(platformId);
}

ngOnInit() {
  if (this.isBrowser) {
    // Código que usa DOM/Window
  }
}
```

## Testing de Animaciones

### Checklist
- [ ] Hero carousel auto-play funciona
- [ ] Carrusel de logos scroll infinito
- [ ] Botones prev/next del hero
- [ ] Video modal se abre y cierra
- [ ] Parallax effect en scroll
- [ ] Smooth scroll a secciones
- [ ] Back to top aparece y funciona
- [ ] Navbar sticky en scroll
- [ ] Mobile menu toggle
- [ ] FAQ accordion expand/collapse
- [ ] Animaciones fadeIn en cards
- [ ] Lista stagger animation

## Notas de Performance

1. **requestAnimationFrame**: Usado para animaciones suaves del carrusel
2. **transform: translate3d**: Mejor performance que left/top
3. **Passive Event Listeners**: Para scroll events
4. **OnPush Change Detection**: Considerar para componentes con animaciones intensivas
5. **RxJS takeUntil**: Limpieza automática de subscriptions

## Próximos Pasos

1. Agregar tests unitarios para animaciones
2. Implementar lazy loading de componentes pesados
3. Optimizar imágenes del carrusel
4. Agregar preload hints para mejor performance
5. Implementar Service Worker para caching
