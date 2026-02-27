# User Modal Component

## Objetivo
Alta y edicion de usuarios desde vista administrativa.

## Estructura
- Overlay: `#user-overlay`
- Contenido: `.bsheet`
- Form fields:
  - nombre
  - apellido
  - tipo de cedula
  - numero de cedula
  - rol
  - contrasena temporal

## Interacciones
- Abrir: boton "Agregar" o accion editar.
- Cerrar:
  - boton cerrar
  - click en backdrop
  - boton cancelar
- Guardar: valida nombre, apellido y cedula obligatorios.

## Estados
- Modo alta: titulo "Agregar Usuario".
- Modo edicion: titulo "Editar Usuario" y campos precargados.

## Criterios de aceptacion
- Guardar agrega usuario al listado y muestra snackbar de confirmacion.
- Editar precompleta los campos del usuario seleccionado.
