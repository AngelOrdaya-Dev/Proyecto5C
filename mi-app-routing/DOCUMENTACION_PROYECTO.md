# 📄 DOCUMENTACIÓN TÉCNICA Y ACADÉMICA DEL PROYECTO
## **Sistema de Navegación y Servicios Web - CompanyApp (Proyecto5C)**

---

### 📌 **DATOS GENERALES DEL PROYECTO**
- **Nombre de la Aplicación:** CompanyApp
- **Repositorio Oficial de GitHub:** [https://github.com/AngelOrdaya-Dev/Proyecto5C](https://github.com/AngelOrdaya-Dev/Proyecto5C)
- **Framework Principal:** Angular 17.3.0
- **Lenguaje:** TypeScript 5.4 / HTML5 / CSS3
- **Arquitectura:** Single Page Application (SPA) con *Standalone Components*
- **Entorno de Desarrollo:** Node.js v24.15 / Angular CLI 17.3.2

---

## 📑 **ÍNDICE DE CONTENIDOS**
1. [Descripción General del Proyecto](#1-descripción-general-del-proyecto)
2. [Arquitectura del Sistema y Tecnologías](#2-arquitectura-del-sistema-y-tecnologías)
3. [Estructura de Directorios del Código Fuente](#3-estructura-de-directorios-del-código-fuente)
4. [Configuración de Rutas (Angular Router)](#4-configuración-de-rutas-angular-router)
5. [Detalle de Componentes y Funcionalidades](#5-detalle-de-componentes-y-funcionales)
   - [5.1 Componente Principal (AppComponent)](#51-componente-principal-appcomponent)
   - [5.2 Página de Inicio (HomeComponent)](#52-página-de-inicio-homecomponent)
   - [5.3 Página Acerca de (AboutComponent)](#53-página-acerca-de-aboutcomponent)
   - [5.4 Página de Contacto (ContactComponent)](#54-página-de-contacto-contactcomponent)
   - [5.5 Módulo de Servicios (ServiciosComponent)](#55-módulo-de-servicios-servicioscomponent)
6. [Diseño Responsivo y Estilos (Responsive Design)](#6-diseño-responsivo-y-estilos-responsive-design)
7. [Optimizaciones y Resolución de Errores de Build](#7-optimizaciones-y-resolución-de-errores-de-build)
8. [Guía de Instalación y Ejecución Local](#8-guía-de-instalación-y-ejecución-local)
9. [Conclusiones y Buenas Prácticas](#9-conclusiones-y-buenas-prácticas)

---

## 1. 🎯 **Descripción General del Proyecto**

**CompanyApp** es una solución web moderna tipo *Single Page Application* (SPA) desarrollada sobre el framework **Angular 17**, diseñada para presentar los servicios corporativos, información institucional y canales de contacto directo de una empresa tecnológica de manera fluida, ágil y visualmente atractiva.

### **Objetivos Principales:**
- **Navegación sin recarga:** Utilizar el motor de enrutamiento de Angular (`@angular/router`) para alternar entre diferentes vistas institucionales de forma instantánea.
- **Diseño Adaptativo (Responsive):** Garantizar la compatibilidad en dispositivos de escritorio, tabletas y teléfonos móviles mediante media queries personalizadas.
- **Interactividad en Formularios:** Proveer validación de formularios en tiempo real con vinculación de datos bidireccional (`[(ngModel)]`).
- **Arquitectura Limpia:** Implementar *Standalone Components*, reduciendo la complejidad del proyecto al eliminar la necesidad de `NgModules` tradicionales.

---

## 2. 🏗️ **Arquitectura del Sistema y Tecnologías**

### **Stack Tecnológico:**
| Tecnología / Herramienta | Versión | Función en el Proyecto |
| :--- | :--- | :--- |
| **Angular Core** | ^17.3.0 | Framework SPA para el desarrollo de la interfaz de usuario |
| **TypeScript** | ~5.4.2 | Lenguaje de programación tipado para lógica de negocio |
| **RxJS** | ~7.8.0 | Manejo de flujos asíncronos y reactividad |
| **Angular Router** | ^17.3.0 | Sistema de navegación entre componentes |
| **Angular Forms** | ^17.3.0 | Captura, enlazamiento bidireccional y validación de datos |
| **HTML5 & Vanilla CSS** | Estándar W3C | Estructuración y diseño adaptativo sin librerías pesadas |
| **Git / GitHub** | Control de Versiones | Almacenamiento y control del repositorio remoto |

### **Patrón de Arquitectura:**
El proyecto adopta el estándar de **Standalone Components** introducido en versiones recientes de Angular, donde cada componente declara explícitamente sus dependencias directas en su decorador `@Component`. Esto mejora la modularidad, facilita la carga perezosa (*lazy loading*) y reduce el consumo de memoria.

---

## 3. 📂 **Estructura de Directorios del Código Fuente**

```text
mi-app-routing/
├── angular.json               # Configuración del CLI de Angular y presupuestos de compilación
├── package.json               # Dependencias y scripts del proyecto
├── tsconfig.json              # Configuración global del compilador de TypeScript
├── src/
│   ├── index.html             # Plantilla HTML raíz
│   ├── main.ts                # Punto de entrada de la aplicación
│   ├── styles.css             # Estilos globales
│   └── app/
│       ├── app.component.ts   # Componente raíz (Navbar + RouterOutlet)
│       ├── app.routes.ts      # Tabla de rutas principal
│       ├── app.config.ts      # Configuración de proveedores (Router)
│       ├── home/              # Vista de Inicio
│       │   └── home.component.ts
│       ├── about/             # Vista Acerca de Nosotros
│       │   └── about.component.ts
│       ├── contact/           # Vista de Formulario de Contacto
│       │   └── contact.component.ts
│       └── servicios/         # Módulo y Catálogo de Servicios
│           ├── servicios.component.ts
│           ├── servicios-detalle.css
│           ├── web/
│           ├── redes-sociales/
│           ├── marketing/
│           ├── software/
│           ├── hosting/
│           ├── estrategia/
│           └── identidad/
```

---

## 4. 🔀 **Configuración de Rutas (Angular Router)**

La navegación del sistema está centralizada en el archivo `app.routes.ts`. Permite redirigir al usuario entre las secciones principales y las subpáginas especializadas de servicios:

```typescript
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiciosComponent } from './servicios/servicios.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'servicios', component: ServiciosComponent },
  // Rutas específicas para cada servicio
  { path: 'servicios/web', component: WebComponent },
  { path: 'servicios/redes-sociales', component: RedesSocialesComponent },
  { path: 'servicios/marketing', component: MarketingComponent },
  { path: 'servicios/software', component: SoftwareComponent },
  { path: 'servicios/hosting', component: HostingComponent },
  { path: 'servicios/estrategia', component: EstrategiaComponent },
  { path: 'servicios/identidad', component: IdentidadComponent },
  // Comodín para redirigir rutas inexistentes a inicio
  { path: '**', redirectTo: 'home' }
];
```

---

## 5. 🧩 **Detalle de Componentes y Funcionalidades**

### 5.1 **Componente Principal (`AppComponent`)**
- **Ubicación:** `src/app/app.component.ts`
- **Función:** Contenedor global de la interfaz. Alberga la barra de navegación (*Navbar*) con el nombre institucional **CompanyApp**, el menú con estado activo mediante `routerLinkActive="active"`, y la etiqueta `<router-outlet>` donde se inyectan dinámicamente las vistas.

### 5.2 **Página de Inicio (`HomeComponent`)**
- **Ubicación:** `src/app/home/home.component.ts`
- **Características:**
  - Encabezado de bienvenida corporativa.
  - Tarjeta principal informativa con enlaces rápidos hacia la sección "Acerca de" y "Contacto".
  - Grilla de 3 pilares corporativos: **Innovación**, **Calidad** y **Soporte**.
  - Botones de acción directa (*Call-To-Action*).

### 5.3 **Página Acerca de (`AboutComponent`)**
- **Ubicación:** `src/app/about/about.component.ts`
- **Características:**
  - Sección de historia y visión de la empresa.
  - Tarjetas del equipo de trabajo (*Team Members*) con fotografías circulares, cargos y descripciones (CEO, Desarrollador Senior, Diseñadora UX/UI).
  - Bloque CTA para invitar al cliente a solicitar una cotización o contacto.

### 5.4 **Página de Contacto (`ContactComponent`)**
- **Ubicación:** `src/app/contact/contact.component.ts`
- **Características:**
  - **Paneles interactivos:** Disposición en 2 columnas (Información institucional vs. Formulario de contacto).
  - **Formulario Template-driven:** Implementa `[(ngModel)]` para capturar nombre, correo electrónico, asunto y mensaje.
  - **Validación activa:** El botón "Enviar Mensaje" permanece deshabilitado hasta que el usuario complete correctamente los campos obligatorios.
  - **Retroalimentación dinámica:** Muestra una alerta verde de éxito al enviar el formulario y reinicia los campos automáticamente tras 3 segundos.

### 5.5 **Módulo de Servicios (`ServiciosComponent`)**
- **Ubicación:** `src/app/servicios/servicios.component.ts`
- **Características:**
  - Catálogo interactivo de servicios tecnológicos ofrecidos por la empresa (Desarrollo Web, Gestión de Redes Sociales, Marketing Digital, Software a Medida, Hosting & Servidores, Estrategia Digital e Identidad de Marca).
  - Subpáginas detalladas para cada especialidad con rutas dedicadas.

---

## 6. 📱 **Diseño Responsivo y Estilos (Responsive Design)**

El proyecto incluye soporte adaptativo nativo mediante CSS Grid y Flexbox combinado con `@media` queries para tres resoluciones principales:

1. **Escritorio (> 768px):** Distribución multicolumna (Grid de 3 columnas para equipos/características y 2 columnas para contacto).
2. **Tabletas y Celulares (< 768px):** Adaptación a columna única (1fr), ajuste del tamaño de tipografías y botones expandidos al 100% de ancho.
3. **Celulares Pequeños (< 480px):** Reducción de márgenes y tamaños de iconos para evitar el desbordamiento horizontal.

---

## 7. ⚙️ **Optimizaciones y Resolución de Errores de Build**

Durante la fase de compilación en producción (`ng build`), el compilador de Angular detectó un exceso en los presupuestos de tamaño del estilo inline (*style budgets*).

### **Solución Aplicada:**
Se modificó el archivo de configuración `angular.json` en la sección `budgets` para incrementar los límites aceptados por componente:

```json
{
  "type": "anyComponentStyle",
  "maximumWarning": "10kb",
  "maximumError": "15kb"
}
```

Gracias a este ajuste, la compilación de producción genera satisfactoriamente el *bundle* en `dist/mi-app-routing` en menos de 16 segundos.

---

## 8. 💻 **Guía de Instalación y Ejecución Local**

Para clonar y ejecutar este proyecto localmente en cualquier computador:

### **Paso 1: Clonar el Repositorio**
```bash
git clone https://github.com/AngelOrdaya-Dev/Proyecto5C.git
cd Proyecto5C/mi-app-routing
```

### **Paso 2: Instalar Dependencias**
```bash
npm install
```

### **Paso 3: Iniciar el Servidor de Desarrollo**
```bash
npm start
```
*La aplicación estará disponible en [http://localhost:4200/](http://localhost:4200/)*.

---

## 9. 🎓 **Conclusiones y Buenas Prácticas**

- **Eficiencia SPA:** La aplicación minimiza la latencia de navegación al no recargar la página completa entre cambios de sección.
- **Tipado Estricto:** La utilización de TypeScript garantiza un desarrollo robusto y previene errores en tiempo de ejecución.
- **Componentes Independientes:** El uso de *Standalone Components* alineado a Angular 17 facilita el mantenimiento y escalabilidad a futuro.
- **Versión Pública:** El proyecto se encuentra versionado y publicado en GitHub bajo buenas prácticas de *Commits* y control de versiones.

---
*Documentación generada para presentación académica y evaluación técnica.*
