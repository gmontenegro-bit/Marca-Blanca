# AGENTS.md (src)

## Rol
Implementacion front-end del prototipo en HTML, CSS y JS.

## Entradas actuales
- Pagina principal: `html/pages/paypoint.html`.
- Estilos:
  - `css/tokens/theme.css`
  - `css/base/reset.css`
  - `css/pages/paypoint.css`
- Logica:
  - `js/pages/paypoint.js`

## Reglas de implementacion
- No agregar CSS/JS inline nuevos en HTML.
- Mantener HTML semantico y accesible.
- Si una pieza se reutiliza, moverla a `css/components/` o `js/modules/`.
- Conservar compatibilidad mobile + desktop.
- Mantener textos y estados alineados con `docs/handoff/` cuando exista.

## Checklist por cambio
- HTML en `html/pages/`.
- CSS en capa correcta (`tokens`, `base`, `components`, `pages`).
- JS encapsulado y sin dependencias innecesarias.
- Validacion manual minima: login, navegacion, flujo principal y modales.
