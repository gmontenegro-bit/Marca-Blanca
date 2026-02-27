# Handoff Tecnico - PayPoint

## Estado tecnico
- Implementado en HTML/CSS/JS vanilla.
- Sin backend y sin persistencia.
- Datos mock en memoria.

## Source of truth
- `src/html/pages/paypoint.html`
- `src/html/layouts/paypoint/manifest.json`
- `src/html/layouts/paypoint/login-layout.html`
- `src/html/layouts/paypoint/app-layout.html`
- `src/html/layouts/paypoint/pay-overlay-layout.html`
- `src/html/layouts/paypoint/user-overlay-layout.html`
- `src/html/layouts/paypoint/snack-layout.html`
- `src/css/tokens/theme.css`
- `src/css/base/reset.css`
- `src/css/pages/paypoint.css`
- `src/js/pages/paypoint.js`
- `src/js/content/paypoint-texts.json`

## Estructura tecnica
### HTML
- `paypoint.html` actua como shell y monta `#app-root`.
- `manifest.json` define el orden de ensamblado de mini-layouts.
- Layout dividido en parciales:
  - `login-layout.html` (`pg-login`)
  - `app-layout.html` (`pg-app`)
  - `pay-overlay-layout.html` (`pay-overlay`)
  - `user-overlay-layout.html` (`user-overlay`)
  - `snack-layout.html` (`snack`)
- El copy del layout usa atributos `data-i18n`, `data-i18n-placeholder`, `data-i18n-title` y `data-i18n-value`.

### CSS
- `theme.css`: tokens + dark mode
- `reset.css`: base/reset/global
- `paypoint.css`: layout, componentes y estados visuales de la pagina

### JS
- Estado global en objeto `S`.
- Datos mock: usuarios, servicios, facturas, operaciones, stats.
- Textos UI centralizados en `src/js/content/paypoint-texts.json`.
- `bootstrap()` carga `manifest.json`, ensambla parciales de layout, aplica i18n y luego inicializa reloj + credenciales demo.
- Render dinamico de nav, tablas, cards y overlays.

## Mapa de funciones clave (paypoint.js)
- Autenticacion y sesion:
  - `doLogin()`
  - `doLogout()`
  - `enterApp(user)`
- Navegacion:
  - `showPage(id)`
  - `showView(id)`
  - `buildNav()`
- Tema:
  - `toggleTheme()`
- Pago:
  - `startPayFlow()`
  - `goStep2()`, `goStep3()`, `goStep4()`
  - `processPayment()`
- Tablas y filtros:
  - `renderOpsTable()`
  - `filterOps()`
  - `buildUsersTable()`
  - `filterUsers()`
- Marca:
  - `previewBrand()`
  - `applyColor()`
  - `saveBrand()`
- Feedback:
  - `snack()`

## Contrato de datos (actual)
### Sesion
- `S.user`
- `S.role`
- `S.dark`

### Flujo de pago
- `S.payService`
- `S.payMethod`
- `S.payNIS`
- `S.payBill`

### Operaciones locales
- `S.myOps` (solo sesion)

## Reglas de negocio implementadas
- Login requiere cedula y password no vacios.
- Menu se arma por rol.
- Flujo de pago bloquea avance cuando falta metodo/NIS/factura.
- Facturas se resuelven por servicio desde `MOCK_INVOICES`.
- Procesar pago agrega registro a `S.myOps` y genera comprobante.

## Checklist tecnico QA
1. Carga inicial en `pg-login` con datos demo precargados.
2. Login admin carga vistas admin en nav.
3. Logout vuelve a login.
4. Toggle tema alterna `data-theme` y icono.
5. Boton continuar en paso 1 de pago inicia deshabilitado.
6. Sin NIS/codigo en paso 2 debe mostrar error.
7. Sin factura seleccionada en paso 3 no permite confirmar pago.
8. Procesar pago agrega fila en tabla "Mis operaciones hoy".
9. Modal de usuario permite alta y actualiza tabla.
10. Overlay se cierra con backdrop click.

## Limitaciones conocidas
- Sin API/autenticacion real.
- Sin persistencia de usuarios/operaciones/configuracion.
- Filtro por operador en dashboard no implementado.
- "Agregar servicio" sin logica de alta real.

## Siguiente iteracion recomendada
1. Extraer logica por modulos en `src/js/modules/`.
2. Migrar componentes reutilizables de estilos a `src/css/components/`.
3. Definir contrato API para auth, operaciones y usuarios.
4. Agregar suite de pruebas smoke (manual + automatica ligera).
