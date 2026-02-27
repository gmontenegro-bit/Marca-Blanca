# Diseno-FE Prototype

Prototipo para alinear equipos de diseno y front-end usando agentes en un sistema de administracion de tareas.

## Instalar npm en Windows

`npm` se instala junto con Node.js.

Opciones recomendadas:

1. Instalador oficial:
   - Ir a `https://nodejs.org/`
   - Descargar la version **LTS** para Windows
   - Ejecutar el instalador y dejar opciones por defecto
2. Con `winget` (PowerShell):
   - Ejecutar `winget install OpenJS.NodeJS.LTS`

Verificar instalacion (en una terminal nueva):

- `node -v`
- `npm -v`

## Ejecucion simple (para diseno y FE)

Requisitos:

- Node.js LTS instalado

Pasos:

1. Abrir terminal en la carpeta del proyecto.
2. Ejecutar `npm install` (solo la primera vez).
3. Ejecutar `npm run dev:open`.

Esto abre el proyecto en `http://localhost:5500/`.

Pantalla implementada actualmente:

- `http://localhost:5500/src/html/pages/paypoint.html`

Si preferis abrir manualmente el navegador:

1. Ejecutar `npm run dev`.
2. Abrir `http://localhost:5500/`.

## Estructura

```text
.
|-- AGENTS.md
|-- README.md
|-- design
|   |-- AGENTS.md
|   |-- components
|   |-- prompts
|   |-- screens
|   `-- tokens
|-- docs
|   |-- decisions
|   `-- handoff
`-- src
    |-- AGENTS.md
    |-- assets
    |   |-- icons
    |   `-- images
    |-- css
    |   |-- base
    |   |-- components
    |   |-- pages
    |   |-- tokens
    |   `-- utilities
    |-- html
    |   |-- layouts
    |   `-- pages
    `-- js
        |-- core
        |-- modules
        `-- pages
```

## Proximo paso sugerido

Documentar el handoff de la pantalla actual en `docs/handoff/paypoint.md` y su spec visual en `design/screens/paypoint-screen.md`.
