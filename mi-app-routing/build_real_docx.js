const fs = require('fs');
const path = require('path');
const { Document, Packer, Paragraph, TextRun, HeadingLevel, Table, TableRow, TableCell, WidthType, BorderStyle, AlignmentType, ShadingType } = require('docx');

async function generateDocx() {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440,
              right: 1440,
              bottom: 1440,
              left: 1440,
            },
          },
        },
        children: [
          // Cover Title
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 200, after: 100 },
            children: [
              new TextRun({
                text: "DOCUMENTACIÓN TÉCNICA Y ACADÉMICA",
                bold: true,
                size: 36, // 18pt
                color: "1B4F91",
                font: "Calibri",
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 300 },
            children: [
              new TextRun({
                text: "Sistema de Navegación y Servicios Web - CompanyApp (Proyecto5C)",
                size: 26, // 13pt
                color: "1769D1",
                font: "Calibri",
              }),
            ],
          }),

          // Info Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    shading: { fill: "EAF3FF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "Nombre de la Aplicación:", bold: true, color: "1B4F91" })] })],
                  }),
                  new TableCell({
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    shading: { fill: "F8FAFF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "CompanyApp (Proyecto5C)" })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: "EAF3FF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "Repositorio Oficial GitHub:", bold: true, color: "1B4F91" })] })],
                  }),
                  new TableCell({
                    shading: { fill: "F8FAFF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "https://github.com/AngelOrdaya-Dev/Proyecto5C", color: "1769D1" })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: "EAF3FF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "Framework Principal:", bold: true, color: "1B4F91" })] })],
                  }),
                  new TableCell({
                    shading: { fill: "F8FAFF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "Angular 17.3.0 (Standalone Components)" })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: "EAF3FF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "Lenguajes & Herramientas:", bold: true, color: "1B4F91" })] })],
                  }),
                  new TableCell({
                    shading: { fill: "F8FAFF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "TypeScript 5.4 / HTML5 / CSS3 / RxJS" })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: "EAF3FF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "Entorno de Desarrollo:", bold: true, color: "1B4F91" })] })],
                  }),
                  new TableCell({
                    shading: { fill: "F8FAFF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "Node.js v24.15.0 / Angular CLI 17.3.2" })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: "EAF3FF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "Desarrollador / Alumno:", bold: true, color: "1B4F91" })] })],
                  }),
                  new TableCell({
                    shading: { fill: "F8FAFF", val: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: "Angel Ordaya (AngelOrdaya-Dev)" })] })],
                  }),
                ],
              }),
            ],
          }),

          // Heading 1: Descripción General
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 300, after: 100 },
            children: [
              new TextRun({ text: "1. 🎯 Descripción General del Proyecto", bold: true, color: "1B4F91", size: 28 }),
            ],
          }),
          new Paragraph({
            spacing: { after: 150 },
            children: [
              new TextRun({
                text: "CompanyApp es una solución web moderna tipo Single Page Application (SPA) desarrollada sobre el framework Angular 17, diseñada para presentar los servicios corporativos, información institucional y canales de contacto directo de una empresa tecnológica de manera fluida, ágil y visualmente atractiva.",
                size: 22,
              }),
            ],
          }),

          // Objectives Bullet List
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: "Navegación sin recarga de página: ", bold: true }),
              new TextRun({ text: "Utilizar el motor de rutas de Angular (@angular/router) para intercambiar vistas de forma instantánea." }),
            ],
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: "Diseño Adaptativo (Responsive): ", bold: true }),
              new TextRun({ text: "Garantizar soporte completo en computadoras, tabletas y celulares mediante CSS Grid y Flexbox." }),
            ],
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: "Formularios Interactivos: ", bold: true }),
              new TextRun({ text: "Validación activa de datos en tiempo real con enlazamiento bidireccional [(ngModel)]." }),
            ],
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: "Arquitectura Limpia: ", bold: true }),
              new TextRun({ text: "Implementar Standalone Components reduciendo la complejidad del proyecto." }),
            ],
          }),

          // Heading 1: Arquitectura
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 300, after: 100 },
            children: [
              new TextRun({ text: "2. 🏗️ Arquitectura del Sistema y Tecnologías", bold: true, color: "1B4F91", size: 28 }),
            ],
          }),
          new Paragraph({
            spacing: { after: 150 },
            children: [
              new TextRun({ text: "El proyecto adopta las mejores prácticas y estándares del desarrollo web actual:" }),
            ],
          }),

          // Tech Table
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({ shading: { fill: "1769D1", val: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "Tecnología", bold: true, color: "FFFFFF" })] })] }),
                  new TableCell({ shading: { fill: "1769D1", val: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "Versión", bold: true, color: "FFFFFF" })] })] }),
                  new TableCell({ shading: { fill: "1769D1", val: ShadingType.CLEAR }, children: [new Paragraph({ children: [new TextRun({ text: "Función en el Proyecto", bold: true, color: "FFFFFF" })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Angular Core", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "^17.3.0" })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Framework SPA para la interfaz de usuario." })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "TypeScript", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "~5.4.2" })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Lenguaje fuertemente tipado para la lógica." })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Angular Router", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "^17.3.0" })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Sistema de enrutamiento dinámico." })] })] }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Angular Forms", bold: true })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "^17.3.0" })] })] }),
                  new TableCell({ children: [new Paragraph({ children: [new TextRun({ text: "Manejo e interactividad de formularios." })] })] }),
                ],
              }),
            ],
          }),

          // Heading 1: Estructura de Rutas y Componentes
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 300, after: 100 },
            children: [
              new TextRun({ text: "3. 🔀 Rutas y Componentes de la Aplicación", bold: true, color: "1B4F91", size: 28 }),
            ],
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: "AppComponent (Raíz): ", bold: true }),
              new TextRun({ text: "Barra de navegación global con marca CompanyApp, estado de enlaces activos y router-outlet." }),
            ],
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: "HomeComponent (/home): ", bold: true }),
              new TextRun({ text: "Vista inicial de bienvenida con tarjetas de Innovación, Calidad y Soporte." }),
            ],
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: "AboutComponent (/about): ", bold: true }),
              new TextRun({ text: "Información institucional y presentación del equipo de trabajo en grilla." }),
            ],
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: "ContactComponent (/contact): ", bold: true }),
              new TextRun({ text: "Formulario Template-driven interactivo con confirmación visual de envío." }),
            ],
          }),
          new Paragraph({
            bullet: { level: 0 },
            children: [
              new TextRun({ text: "ServiciosComponent (/servicios): ", bold: true }),
              new TextRun({ text: "Catálogo completo de servicios tecnológicos (Web, Redes, Marketing, Software, Hosting, Estrategia, Identidad)." }),
            ],
          }),

          // Heading 1: Optimizaciones y Ejecución
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 300, after: 100 },
            children: [
              new TextRun({ text: "4. ⚙️ Optimizaciones de Compilación y Ejecución", bold: true, color: "1B4F91", size: 28 }),
            ],
          }),
          new Paragraph({
            spacing: { after: 150 },
            children: [
              new TextRun({ text: "1. Se ajustó el presupuesto de estilos (style budgets) en " }),
              new TextRun({ text: "angular.json", bold: true }),
              new TextRun({ text: " a 10kb warning / 15kb error para garantizar la compilación limpia de producción." }),
            ],
          }),
          new Paragraph({
            spacing: { after: 150 },
            children: [
              new TextRun({ text: "2. Comandos para ejecutar el proyecto:" }),
            ],
          }),
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({ text: "• npm install ", bold: true, font: "Consolas" }),
              new TextRun({ text: "(Instalar dependencias necesarias)" }),
            ],
          }),
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({ text: "• npm start ", bold: true, font: "Consolas" }),
              new TextRun({ text: "(Iniciar el servidor local en http://localhost:4200/)" }),
            ],
          }),
          new Paragraph({
            spacing: { after: 100 },
            children: [
              new TextRun({ text: "• npm run build ", bold: true, font: "Consolas" }),
              new TextRun({ text: "(Generar paquete final compilado de producción)" }),
            ],
          }),

          // Footer
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 500, after: 100 },
            children: [
              new TextRun({
                text: "Documento oficial generado en formato binario OpenXML (.docx) para presentación académica y evaluación técnica.",
                italics: true,
                size: 18,
                color: "7F8C8D",
              }),
            ],
          }),
        ],
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  const targetPath = path.join(__dirname, 'DOCUMENTACION_PROYECTO_FINAL.docx');
  fs.writeFileSync(targetPath, buffer);
  console.log('DOCUMENTACION_PROYECTO_FINAL.docx generado exitosamente');
}

generateDocx().catch(console.error);
