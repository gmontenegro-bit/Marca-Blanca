# PayPoint Screen Spec

## Objetivo funcional

Pantalla operativa para administrar pagos de servicios con vistas por rol:

- operador: foco en cobro de servicios y operaciones propias
- admin: dashboard, usuarios, operaciones y configuracion de marca
- superadmin: admin + vista de empresas

## Estructura global

1. App shell fijo
- topbar con marca, chip de rol, toggle de tema y avatar
- sidebar en >= 768px
- bottom nav en < 768px
2. Area principal scroll
- `v-ops`: operacion de pagos
- `v-dash`: estadisticas + tabla de operaciones
- `v-users`: gestion de usuarios
- `v-config`: configuracion de marca
- `v-companies`: gestion de empresas (solo superadmin)
3. Overlays
- flujo de pago step-by-step (`pay-overlay`)
- modal de usuario (`user-overlay`)
- snackbar global

## Navegacion por rol

- operador: `ops`
- admin: `dash`, `users`, `ops`, `config`
- superadmin: `companies`, `dash`, `users`, `ops`, `config`

## Flujo principal: pago de servicio

1. Seleccion de servicio (tile)
2. Metodo de captura (manual o escaneo)
3. Ingreso NIS / codigo
4. Seleccion de factura
5. Confirmacion y procesamiento
6. Comprobante final

## Responsive

- Mobile-first.
- Sidebar aparece en >= `768px`.
- Bottom nav desaparece en >= `768px`.
- Modal de pago:
  - mobile: bottom sheet
  - > = `600px`: modal centrado

## Estados de UI

- Tema: light/dark.
- Datos vacios:
  - operaciones del operador vacias
  - tabla filtrada sin resultados
  - sin facturas pendientes
- Seleccion:
  - tab activa
  - nav activa
  - servicio/factura/metodo seleccionados
- Feedback:
  - snackbar ok/warn/err
  - recibo exitoso

## Criterios de aceptacion

- El usuario entra directo al app con sesion demo admin.
- El menu visible cambia segun rol seleccionado por estado de app.
- El flujo de pago avanza solo cuando la data requerida esta completa.
- El comprobante muestra servicio, NIS, referencia, operador y total.
- El cambio de tema actualiza fondo, texto, surfaces y semantic colors.
- La pantalla funciona en mobile y desktop manteniendo navegacion usable.
