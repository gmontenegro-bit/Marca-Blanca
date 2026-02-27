# Diseno-FE Prototype

Prototipo administrativo para alinear diseno y front-end con un flujo de trabajo basado en handoff.

## Objetivo

- Mantener paridad entre especificacion de diseno y codigo.
- Implementar en arquitectura modular con HTML, CSS y JavaScript vanilla.
- Evitar CSS/JS inline en HTML.

## Stack

- HTML
- CSS
- JavaScript vanilla
- `http-server` para desarrollo local

## Requisitos

- Node.js LTS
- npm

## Correr el proyecto

1. Instalar dependencias:
   - `npm install`
2. Iniciar servidor local:
   - `npm run dev`
3. Abrir en navegador:
   - `http://localhost:5500/`

Para abrir automaticamente el navegador:

- `npm run dev:open`

Pantalla principal actual:

- `http://localhost:5500/src/html/pages/paypoint.html`

## Modo diseno (UIKit automatico)

1. Ejecutar:
   - `npm run design`
2. Abrir:
   - `http://localhost:5501/src/html/pages/design-uikit.html`

Este modo observa `design/components/*.md` y regenera automaticamente el UIKit en `src/`.

Scripts disponibles:

- `npm run design`: watch + servidor + apertura de UIKit.
- `npm run design:watch`: solo watch/generacion.
- `npm run design:build`: generacion unica.

Entradas y salidas del flujo:

- Entrada: `design/components/*.md`
- Salidas generadas:
  - `src/html/pages/design-uikit.html`
  - `src/css/pages/design-uikit.css`
  - `src/js/pages/design-uikit.js`

## Estructura activa

```text
.
|-- AGENTS.md
|-- README.md
|-- design/
|   |-- components/
|   |-- prompts/
|   |-- screens/
|   `-- tokens/
|-- docs/
|   |-- decisions/
|   `-- handoff/
`-- src/
    |-- assets/
    |   |-- icons/
    |   `-- images/
    |-- css/
    |   |-- base/
    |   |-- components/
    |   |-- pages/
    |   |-- tokens/
    |   `-- utilities/
    |-- html/
    |   |-- layouts/
    |   `-- pages/
    `-- js/
        |-- core/
        |-- modules/
        `-- pages/
```

## Archivos clave (paypoint)

- `src/html/pages/paypoint.html`
- `src/css/tokens/theme.css`
- `src/css/base/reset.css`
- `src/css/pages/paypoint.css`
- `src/js/pages/paypoint.js`
- `docs/handoff/paypoint.md`
- `design/screens/paypoint-screen.md`

## Flujo recomendado

1. Diseno define o ajusta pantalla/componente en `design/`.
2. Se documenta handoff en `docs/handoff/`.
3. FE implementa o actualiza en `src/`.
4. Se valida paridad visual y funcional.

## Convenciones

- Nombres nuevos en `kebab-case`.
- Todo feature relevante debe reflejarse en codigo + handoff.
- Separacion por responsabilidades: `tokens`, `base`, `pages`, `modules`.

## Definition of done

- Pantalla funcional en HTML/CSS/JS.
- Estados importantes cubiertos (default, hover/focus, empty/error/loading cuando aplique).
- Accesibilidad minima: estructura semantica, labels y foco visible.
