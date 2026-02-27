# Feedback Components

## Snackbar

### Objetivo
Feedback breve y contextual para acciones del usuario.

### Estructura
- Contenedor: `.snack` (`#snack`)
- Icono: `#snack-ico`
- Texto: `#snack-txt`

### Variantes
- ok
- warn
- err

### Estados
- oculto por default
- visible con clase `.show`
- autocierre aprox. `3.5s`

## Empty State

### Objetivo
Comunicar ausencia de datos en tablas/listas.

### Estructura
- `.empty`
- icono `.mi`
- titulo `.empty-t`
- subtitulo `.empty-s`

### Criterios de aceptacion
- Cada lista/tabla critica muestra empty state legible en vez de quedar vacia sin mensaje.
