# App Shell Component

## Objetivo
Definir la estructura de navegacion y marco visual del sistema.

## Partes
- Topbar (`.topbar`)
- Sidebar (`.sidebar`)
- Bottom nav (`.bottom-nav`)
- Main scroll (`.main-scroll`)

## Comportamiento
- Topbar fija siempre visible.
- Sidebar visible solo en >= `768px`.
- Bottom nav visible solo en < `768px`.
- Estado activo se marca con clase `.active` en botones de navegacion.

## Variantes
- Rol operador: menos items de navegacion.
- Rol admin/superadmin: incluye vistas administrativas.

## Estados
- Botones icono hover.
- Avatar hover con halo.
- Chip de rol por clase:
  - `.role-chip.admin`
  - `.role-chip.operador`
  - `.role-chip.superadmin`

## Criterios de aceptacion
- Navegacion desktop y mobile no se muestran al mismo tiempo.
- Estado activo se sincroniza con vista actual.
- El ancho de sidebar se compensa en `main-scroll` con `margin-left` en desktop.
