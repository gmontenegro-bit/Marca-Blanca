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
Si se disenan mejoras, priorizar specs para:
- login
- dashboard
- operaciones
- usuarios
- configuracion
