# Winners Angular App

Aplicación web de Winners - Sistema de lealtad y recompensas.

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 21.1.2.

## 🚀 Inicio Rápido

### Instalación
```bash
npm install
```

### Desarrollo
Para iniciar el servidor de desarrollo:

```bash
npm start
# o
ng serve
```

La aplicación estará disponible en `http://localhost:4200/` y se recargará automáticamente cuando modifiques archivos.

## 📦 Build de Producción

Para compilar el proyecto:

```bash
npm run build
```

Esto generará los archivos optimizados en `dist/winners-angular-app/`. La configuración por defecto genera un build **sin SSR** que funciona perfectamente.

### Comandos de Build Disponibles

- `npm run build` - Build de producción (sin SSR) ✅ Recomendado
- `npm run build:no-ssr` - Build sin SSR (explícito)
- `npm run build:ssr` - Build con SSR ⚠️ Issue conocido NG0401

## ⚠️ Nota Importante sobre SSR

El proyecto tiene configurado Server-Side Rendering (SSR) pero actualmente presenta el error **NG0401** durante el build de producción con SSR habilitado. 

**Solución actual:** La configuración por defecto usa el build sin SSR que genera una aplicación SPA completamente funcional y optimizada.

**Para desarrollo:** El servidor de desarrollo (`npm start`) funciona perfectamente con todas las funcionalidades.

## 🧪 Pruebas Unitarias

Para ejecutar las pruebas unitarias con [Vitest](https://vitest.dev/):

```bash
ng test
```

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── components/          # Componentes reutilizables
│   ├── core/               # Header, Footer
│   ├── pages/              # Páginas de la aplicación
│   │   ├── inicio/
│   │   ├── personas/
│   │   ├── comercios/
│   │   ├── legal/
│   │   └── blog/
│   ├── services/           # Servicios de datos
│   ├── directives/         # Directivas personalizadas
│   └── app.routes.ts       # Configuración de rutas
├── assets/                 # Recursos estáticos
└── styles.css             # Estilos globales
```

## 🎨 Características

- ✅ Angular 21 con componentes standalone
- ✅ Lazy loading de rutas
- ✅ Animaciones con Angular Animations
- ✅ Diseño responsive
- ✅ Carrusel de imágenes
- ✅ Integración con videos de YouTube
- ✅ Smooth scroll y parallax effects
- ✅ Optimización de bundles

## 📚 Documentación Adicional

- [ANIMACIONES.md](ANIMACIONES.md) - Documentación de animaciones
- [MANUAL.md](MANUAL.md) - Manual de usuario
- [REFACTORIZACION.md](REFACTORIZACION.md) - Historial de refactorización
- [ERRORES-CORREGIDOS.md](ERRORES-CORREGIDOS.md) - Errores resueltos

## 🔧 Scaffolding de Código

Angular CLI incluye herramientas de scaffolding. Para generar un nuevo componente:

```bash
ng generate component component-name
```

Para ver todos los schematics disponibles (componentes, directivas, pipes, etc.):

```bash
ng generate --help
```

## 📖 Recursos Adicionales

Para más información sobre Angular CLI, visita [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli).

