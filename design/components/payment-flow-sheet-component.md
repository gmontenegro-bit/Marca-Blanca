# Payment Flow Sheet Component

## Objetivo
Guiar el pago en pasos cortos dentro de un overlay modal.

## Contenedor
- Overlay: `.overlay` (`#pay-overlay`)
- Sheet: `.bsheet` (`#pay-sheet`)

## Steps
1. Metodo (`pay-step-1`)
2. Identificacion cliente (`pay-step-2`)
3. Facturas (`pay-step-3`)
4. Confirmacion (`pay-step-4`)
5. Comprobante (`pay-step-5`)

## Subcomponentes
- Indicador de pasos: `.steps`, `.step-dot`, `.step-line`
- Metodo: `.method-card`
- Factura: `.bill-card`
- Resumen: `.summ-card`
- Recibo: `.receipt`

## Estados e interacciones
- Overlay cerrado/abierto: `.open`.
- Metodo seleccionado: `.method-card.sel`.
- Factura seleccionada: `.bill-card.sel`.
- Botones de continuar deshabilitados hasta cumplir requisito de dato.
- Backdrop click cierra overlay.

## Responsive
- Mobile: sheet anclado abajo.
- >= 600px: modal centrado y escalado.

## Criterios de aceptacion
- El usuario puede completar el flujo sin salir de contexto.
- Cada paso muestra titulo y contenido acorde al estado.
- El comprobante final incluye codigo unico y acciones de enviar/imprimir.
