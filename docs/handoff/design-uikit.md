# Handoff - Design UIKit

## Objetivo
Permitir que diseno visualice rapido el impacto de cambios en specs de componentes sin tocar codigo manualmente.

## Entradas
- `design/components/*.md`

## Salidas generadas
- `src/html/pages/design-uikit.html`
- `src/html/components/design-uikit/*.html` (un archivo por componente)
- `src/css/pages/design-uikit.css`
- `src/js/pages/design-uikit.js`
- `design/.uikit-meta.json`

## Flujo operativo
1. Diseno edita un archivo en `design/components/`.
2. `npm run design:watch` regenera el UIKit automaticamente.
3. La pagina `design-uikit.html` carga cada componente desde `src/html/components/design-uikit/`.
4. Si cambia el stamp en `design/.uikit-meta.json`, la pagina se recarga sola.

## Comando principal
- `npm run design`

Este comando inicia watch + servidor local en `http://localhost:5501/src/html/pages/design-uikit.html`.

## Cobertura actual del preview
- App shell
- Service tile
- Payment flow sheet
- Data table
- Feedback
- User modal

Cada card del UIKit muestra:
- objetivo
- estructura
- estados
- variantes
- criterios de aceptacion

La informacion se toma desde el markdown del componente.
