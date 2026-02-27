# Handoff UX - PayPoint

## Objetivo de experiencia
Permitir que un operador/admin/superadmin complete tareas diarias de cobro y administracion con una interfaz clara, rapida y consistente en mobile y desktop.

## Audiencia
- Operador/a de caja
- Administrador/a de sucursal
- Super Admin de plataforma

## IA de la pantalla
- Login (`pg-login`)
- App (`pg-app`)
  - Operaciones (`v-ops`)
  - Dashboard (`v-dash`)
  - Usuarios (`v-users`)
  - Configuracion (`v-config`)
  - Empresas (`v-companies`)
- Overlays
  - Flujo de pago (`pay-overlay`)
  - Modal de usuario (`user-overlay`)
- Feedback
  - Snackbar (`snack`)

## Flujos UX principales
### 1. Login
1. Usuario ve login con credenciales demo precargadas.
2. Completa/ajusta cedula y password.
3. Entra al sistema.
4. Si falta dato, recibe error por snackbar.

### 2. Navegacion por rol
- Operador: foco en operaciones.
- Admin: acceso a dashboard, usuarios, operaciones y configuracion.
- Superadmin: suma gestion de empresas.

### 3. Pago de servicio (flujo principal)
1. Selecciona servicio.
2. Elige metodo (manual o escaneo).
3. Ingresa NIS/codigo.
4. Selecciona factura pendiente.
5. Confirma y procesa.
6. Recibe comprobante y puede enviar/imprimir.

### 4. Gestion de usuarios
1. Admin abre modal desde Usuarios.
2. Alta o edicion de datos.
3. Guarda y ve feedback de confirmacion.

### 5. Configuracion de marca
1. Ajusta nombre, logo y color primario.
2. Ve preview en tiempo real.
3. Guarda cambios visuales.

## Comportamientos y estados UX
- Tema light/dark con toggle en topbar.
- Estados vacios en tablas y listas.
- Estados de seleccion en tabs, nav, tarjetas de metodo/factura.
- Snackbars `ok`, `warn`, `err` como feedback rapido.

## Responsive UX
- Mobile-first.
- `<768px`: bottom nav.
- `>=768px`: sidebar fija, sin bottom nav.
- Overlay de pago:
  - mobile: bottom sheet
  - `>=600px`: modal centrado

## Guia de estilo UX
- Tokens visuales: `design/tokens/paypoint-tokens.md`.
- Component specs: carpeta `design/components/`.
- Screen spec base: `design/screens/paypoint-screen.md`.

## Criterios de aceptacion UX
1. Login visible al entrar y acceso bloqueado si campos vacios.
2. Navegacion disponible segun rol.
3. Flujo de pago completo sin salir de contexto.
4. Comprobante final muestra datos clave de la operacion.
5. Estados vacios y feedback visibles cuando corresponde.
6. Uso consistente en mobile y desktop.
