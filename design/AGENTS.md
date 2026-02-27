# AGENTS.md (design)

## Rol
Carpeta de trabajo de diseno para especificar pantallas, componentes y tokens.

## Entregables esperados
- `components/`: specs por componente (`<nombre>-component.md`).
- `screens/`: specs por pantalla (`<nombre>-screen.md`).
- `tokens/`: color, tipografia, spacing, radios y elevaciones.
- `prompts/`: prompts reutilizables para agentes de diseno.

## Regla de handoff
Cada pantalla o componente debe incluir:
- objetivo funcional
- estructura visual
- estados y variantes
- reglas responsive
- criterios de aceptacion para FE

El handoff final se guarda en `docs/handoff/`.

## Contexto actual
El prototipo implementado en codigo es `paypoint`.
Archivos base de diseno ya creados:
- `screens/paypoint-screen.md`
- `tokens/paypoint-tokens.md`
- `components/app-shell-component.md`
- `components/service-tile-component.md`
- `components/payment-flow-sheet-component.md`
- `components/data-table-component.md`
- `components/user-modal-component.md`
- `components/feedback-components.md`

Si se disenan mejoras, priorizar specs para:
- app shell y navegacion por rol
- dashboard y estadisticas
- operaciones y flujo de pago
- usuarios y modal de alta/edicion
- configuracion de marca
