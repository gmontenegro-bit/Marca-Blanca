# Data Table Component

## Objetivo
Mostrar informacion operativa y administrativa en formato tabular.

## Uso en pantalla
- Tabla de operaciones globales (`#ops-tbody`)
- Tabla de operaciones del operador (`#my-ops-tbody`)
- Tabla de usuarios (`#users-tbody`)
- Tabla de empresas (estatica demo)

## Estructura
- Wrapper scroll horizontal: `.tbl-wrap`
- Tabla base: `table`, `thead`, `tbody`, `th`, `td`
- Chips de estado para celda de estado

## Estados
- Empty state con bloque `.empty`.
- Hover en filas para enfoque visual.
- Filtrado en vivo por input/select (ops y users).

## Criterios de aceptacion
- Encabezados legibles en mobile mediante scroll horizontal.
- Tipografia monoespaciada para campos de referencia/monto (`.mono`).
- Empty state visible cuando no hay resultados.
