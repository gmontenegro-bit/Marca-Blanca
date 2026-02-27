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
- Componente nuevo solicitado => crear modulo separado siempre:
  - HTML en `html/components/<componente>.html` (o `html/components/<pantalla>/<componente>.html`).
  - CSS en `css/components/<componente>.css`.
  - JS en `js/modules/<componente>.js`.
  - La pantalla en `html/pages/` solo consume/ensambla componentes; no define el componente desde cero inline.
- Pantalla nueva con componente inexistente => implementar primero el componente separado y luego integrarlo.

## Checklist por cambio
- HTML en `html/pages/`.
- CSS en capa correcta (`tokens`, `base`, `components`, `pages`).
- JS encapsulado y sin dependencias innecesarias.
- Validacion manual minima: login, navegacion, flujo principal y modales.
- Si hay componente nuevo: verificar archivo separado en `html/components`, `css/components` y/o `js/modules`, mas integracion en la pantalla.
