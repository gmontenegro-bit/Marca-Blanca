# Service Tile Component

## Objetivo
Representar servicios pagables en una grilla de seleccion rapida.

## Estructura
- Contenedor: `.svc-tile`
- Icono: `.svc-ico` + `.mi`
- Nombre: `.svc-name`
- Subtexto: `.svc-sub`

## Variantes
- Estandar: servicio existente
- Agregar: `.add-tile` (borde dashed)

## Estados
- Default: fondo surface, borde line
- Hover/active: borde brand soft + elevacion
- Barra superior decorativa: `::before` con opacidad

## Interaccion
- Click en tile abre flujo de pago para ese servicio.
- Click en `add-tile` muestra feedback warn.

## Criterios de aceptacion
- El grid responde a breakpoints:
  - 2 columnas base
  - 3 columnas >= 480px
  - 4 columnas >= 768px
- Al hover, el tile no rompe layout y mantiene alineacion vertical.
