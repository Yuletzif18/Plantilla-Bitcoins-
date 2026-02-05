# Winners Angular App 🏆

Aplicación Angular completamente funcional refactorizada desde el sitio web estático de Winners - Sistema de lealtad y puntos para El Salvador.

## 📋 Descripción

Winners es un sistema de lealtad que permite a los usuarios acumular **WinCoins** en sus compras diarias y redimirlos en una amplia red de comercios afiliados. Esta aplicación ha sido completamente refactorizada a Angular 19+ con las mejores prácticas de desarrollo.

## ✨ Características

- ⚡ **Angular 19+** con Standalone Components
- 🎨 **Bootstrap 5** para diseño responsive
- 🚀 **Lazy Loading** de rutas y componentes
- 📱 **Mobile-First** approach
- 🔐 **Routing** configurado con Angular Router
- 💎 **Componentes modulares** y reutilizables
- 🎯 **Servicios** para manejo de datos
- 🌐 **SSR (Server-Side Rendering)** habilitado
- 📦 **Arquitectura escalable** y mantenible

## 🗂️ Estructura del Proyecto

```
winners-angular-app/
├── src/
│   ├── app/
│   │   ├── core/                    # Componentes principales
│   │   │   ├── header/             # Navegación principal
│   │   │   └── footer/             # Footer del sitio
│   │   ├── pages/                   # Páginas de la aplicación
│   │   │   ├── inicio/             # Página de inicio
│   │   │   ├── personas/           # Sección para personas
│   │   │   ├── comercios/          # Sección para comercios
│   │   │   ├── legal/              # Términos y condiciones
│   │   │   └── blog/               # Blog de noticias
│   │   ├── services/                # Servicios compartidos
│   │   │   ├── data.ts             # Servicio de datos
│   │   │   └── navigation.ts       # Servicio de navegación
│   │   ├── app.ts                   # Componente raíz
│   │   ├── app.routes.ts           # Configuración de rutas
│   │   └── app.config.ts           # Configuración de la app
│   ├── assets/                      # Recursos estáticos
│   │   ├── css/                    # Hojas de estilo
│   │   ├── img/                    # Imágenes
│   │   ├── js/                     # Scripts externos
│   │   └── fonts/                  # Fuentes personalizadas
│   ├── styles.css                   # Estilos globales
│   └── index.html                   # HTML principal
├── angular.json                     # Configuración de Angular
├── package.json                     # Dependencias del proyecto
└── tsconfig.json                    # Configuración de TypeScript
```

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (v18 o superior)
- npm o yarn
- Angular CLI (`npm install -g @angular/cli`)

### Pasos de instalación

```bash
# 1. Navegar al directorio del proyecto
cd winners-angular-app

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
ng serve

# 4. Abrir el navegador en:
# http://localhost:4200
```

### Compilar para producción

```bash
# Build de producción
ng build

# Build con SSR
ng build --configuration production

# Los archivos compilados estarán en: dist/
```

## 📄 Páginas Disponibles

| Ruta | Componente | Descripción |
|------|-----------|-------------|
| `/` | Redirect | Redirige a `/inicio` |
| `/inicio` | InicioComponent | Página principal con hero y comercios |
| `/personas` | PersonasComponent | Información para usuarios |
| `/comercios` | ComerciosComponent | Información para comercios afiliados |
| `/legal` | LegalComponent | Términos y condiciones |
| `/blog` | BlogComponent | Blog de noticias y consejos |

## 🎨 Tecnologías y Librerías

### Core
- **Angular 19** - Framework principal
- **TypeScript 5** - Lenguaje de programación
- **RxJS** - Programación reactiva

### UI/UX
- **Bootstrap 5** - Framework CSS
- **Font Awesome 6** - Iconos
- **Google Fonts** - Tipografías (Amaranth, Montserrat)
- **Swiper.js** - Carruseles y sliders

### Estilos Personalizados
- Material Design Icons
- Tobii (lightbox)
- Tiny Slider
- Estilos corporativos de Winners

## 🎯 Funcionalidades Principales

### Para Personas
- ✅ Registro de usuarios
- ✅ Acumulación de WinCoins
- ✅ Redención de puntos
- ✅ Sistema de referidos
- ✅ Ofertas exclusivas

### Para Comercios
- ✅ Afiliación de comercios
- ✅ Gestión de promociones
- ✅ Análisis y reportes
- ✅ Fidelización de clientes

## 🔧 Servicios

### DataService
Maneja los datos de la aplicación:
- `getComercios()` - Lista de comercios afiliados
- `getSecciones()` - Secciones de la página inicio
- `getBeneficiosPersonas()` - Beneficios para usuarios
- `getBeneficiosComercios()` - Beneficios para comercios

## 🌈 Paleta de Colores

```css
--primary-winners: #6a0dad;     /* Morado principal */
--secondary: #5a0b9d;           /* Morado oscuro */
--warning: #ffc107;             /* Amarillo/Naranja */
--dark: #202942;                /* Azul oscuro para footer */
```

## 📱 Responsive Design

La aplicación está optimizada para:
- 📱 Móviles (< 768px)
- 📱 Tablets (768px - 1024px)
- 💻 Desktop (> 1024px)

## 🔗 Enlaces Importantes

- **App Download**: [https://concd.me/getwinners](https://concd.me/getwinners)
- **Registro**: [https://registro.winners.sv](https://registro.winners.sv)

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm start                    # Inicia servidor de desarrollo
ng serve                     # Alias de npm start

# Testing
ng test                      # Ejecuta tests unitarios
ng e2e                       # Ejecuta tests end-to-end

# Build
ng build                     # Build de desarrollo
ng build --prod              # Build de producción

# Linting
ng lint                      # Verifica código con ESLint

# Generadores
ng generate component <name>  # Genera nuevo componente
ng generate service <name>    # Genera nuevo servicio
ng generate module <name>     # Genera nuevo módulo
```

## 🎓 Conceptos de Angular Aplicados

1. **Standalone Components** - Todos los componentes son standalone
2. **Lazy Loading** - Carga diferida de componentes por ruta
3. **Dependency Injection** - Servicios inyectados
4. **Reactive Programming** - Uso de observables
5. **Routing** - Navegación con Angular Router
6. **Template Syntax** - Directivas `*ngFor`, `*ngIf`, bindings
7. **Component Communication** - Servicios compartidos
8. **SSR** - Server-Side Rendering configurado

## 📚 Próximas Mejoras

- [ ] Implementar autenticación con JWT
- [ ] Agregar tests unitarios completos
- [ ] Integrar con backend REST API
- [ ] Implementar PWA (Progressive Web App)
- [ ] Agregar internacionalización (i18n)
- [ ] Implementar estado global con signals
- [ ] Agregar animaciones con Angular Animations
- [ ] Mejorar SEO con meta tags dinámicos

## 🤝 Contribución

Este proyecto fue refactorizado desde un sitio web estático HTML/CSS/JS a una aplicación Angular moderna y escalable.

### Migración Realizada

```
Sitio Original          →    Aplicación Angular
├── index.html          →    app.ts + routing
├── site/inicio.html    →    pages/inicio/
├── site/personas.html  →    pages/personas/
├── site/comercios.html →    pages/comercios/
├── css/*               →    assets/css/ + styles.css
├── js/*                →    assets/js/ + TypeScript
└── img/*               →    assets/img/
```

## 📄 Licencia

© 2026 Winners. Todos los derechos reservados.

## 👨‍💻 Autor

Refactorizado a Angular por **GitHub Copilot**

---

## 🚨 Notas de Desarrollo

### Navegación
El menú de navegación está en `core/header` e incluye:
- Personas
- Comercios
- Legal
- Blog

### Estilos
Los estilos están organizados en:
- `styles.css` - Estilos globales
- `assets/css/` - CSS del sitio original
- Componentes individuales tienen sus propios `.css`

### Imágenes
Las imágenes se cargan desde:
- `assets/img/` - Imágenes locales
- URLs externas - Para contenido dinámico

---

**¡La aplicación está lista para usar! 🎉**

Para comenzar:
```bash
cd winners-angular-app
ng serve
```

Luego abre [http://localhost:4200](http://localhost:4200) en tu navegador.
