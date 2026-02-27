# AGENTS.md

## Objetivo del proyecto
Este repositorio alinea a diseno y front-end usando agentes en un prototipo administrativo.

## Stack y alcance
- Stack obligatorio: HTML, CSS y JavaScript vanilla.
- No usar frameworks UI ni bundlers salvo acuerdo explicito.
- Todo prototipo recibido debe pasar a arquitectura modular (sin CSS/JS inline en HTML).

## Estructura activa
- `design/`: specs de pantallas, componentes y tokens.
- `docs/handoff/`: handoff entre diseno y FE.
- `docs/decisions/`: decisiones de UX/tecnicas.
- `src/`: implementacion.
  - `src/html/pages/paypoint.html`: pagina principal del prototipo actual.
  - `src/css/tokens/theme.css`: tokens y tema light/dark.
  - `src/css/base/reset.css`: reset/base global.
  - `src/css/pages/paypoint.css`: estilos de pagina/componentes del prototipo.
  - `src/js/pages/paypoint.js`: logica e interacciones de la pagina.

## Flujo recomendado
1. Diseno define o ajusta pantalla/componente en `design/`.
2. Se documenta handoff en `docs/handoff/`.
3. FE implementa o actualiza en `src/`.
4. Se valida paridad visual y funcional.

## Convenciones globales
- Nombres en `kebab-case` para carpetas y archivos nuevos.
- Un feature relevante debe reflejarse en codigo + handoff.
- Separar responsabilidades: `tokens`, `base`, `pages`, `modules`.
- Regla obligatoria de componentes:
  - Si se solicita un componente nuevo, crear archivos separados por componente (HTML/CSS/JS) y luego integrarlo en la pantalla.
  - Si se solicita una pantalla nueva y aparece un componente inexistente, primero crear ese componente por separado y despues consumirlo desde la pantalla.
  - No resolver componentes nuevos con bloques inline ni codigo duplicado dentro de `pages`.
- Ubicaciones objetivo para componentes implementados:
  - HTML: `src/html/components/<componente>.html` o `src/html/components/<pantalla>/<componente>.html`.
  - CSS: `src/css/components/<componente>.css`.
  - JS: `src/js/modules/<componente>.js`.

## Definition of done
- Pantalla funcional en HTML/CSS/JS.
- Estados importantes cubiertos (default, hover/focus, empty/error/loading cuando aplique).
- Accesibilidad minima: estructura semantica, labels, foco visible.
- Si hubo componente nuevo: existe spec en `design/components/`, implementacion separada en `src/` y pantalla conectada a ese componente.
