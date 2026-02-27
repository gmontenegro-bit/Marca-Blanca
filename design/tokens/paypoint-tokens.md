# PayPoint Tokens

## Objetivo
Definir los tokens visuales usados por el prototipo implementado en `src/css/tokens/theme.css`.

## Color tokens

### Brand
- `--p`: `#3c005f` (brand principal)
- `--p-l`: `#5c0090` (hover/active de brand)
- `--p-ll`: `#8b00d4` (accent intenso)
- `--p-surf`: `#f5eaff` (surface tint brand)
- `--p-bdr`: `#dfc5f8` (borde brand suave)

### Neutrals (light)
- `--bg`: `#f2f2f7`
- `--surf`: `#ffffff`
- `--surf2`: `#f8f8fc`
- `--surf3`: `#efeff5`
- `--on`: `#0e0e16`
- `--on-mid`: `#56566e`
- `--on-sub`: `#9898b0`
- `--line`: `#e2e2ee`

### Semantic
- `--ok`: `#166534`
- `--ok-bg`: `#dcfce7`
- `--warn`: `#92400e`
- `--warn-bg`: `#fef3c7`
- `--err`: `#991b1b`
- `--err-bg`: `#fee2e2`
- `--info`: `#1e40af`
- `--info-bg`: `#dbeafe`

### Dark mode overrides
- Base surface/text/border pasan a paleta oscura (`--bg`, `--surf`, `--surf2`, `--surf3`, `--on`, `--on-mid`, `--on-sub`, `--line`).
- `--p-surf` y `--p-bdr` se oscurecen para mantener contraste.
- Semantic backgrounds se oscurecen y semantic foregrounds se aclaran.

## Typography
- UI font family: `Sora`.
- Numeric/data font family: `JetBrains Mono`.

### Scale observada
- Titulos principales: `26px` desktop / `22px` mobile (`.ph-title`).
- Titulos de seccion: `15px`.
- Texto base: `14px`.
- Inputs: `13px` a `15px`.
- Labels y metadata: `10px` a `12px`.

## Radius
- `--radius`: `16px` (cards, tiles)
- `--radius-sm`: `10px` (buttons, inputs)
- Extra usados por componentes: `12px`, `14px`, `24px` (sheet)

## Elevation
- `--sh-xs`: borde/sombra sutil de card
- `--sh-sm`: elevacion ligera
- `--sh-md`: elevacion interactiva (hover tiles)
- `--sh-lg`: overlays/snackbar

## Layout constants
- `--nav-h`: `60px` (topbar fija)
- `--bottom-h`: `64px` (bottom nav mobile)
- `--safe-b`: safe area inferior

## Motion
- Transiciones cortas: `0.1s` a `0.25s` para hover/focus/estado.
- Sheets: `0.3s` con easing `cubic-bezier(.32,.72,0,1)`.
- Feedback puntual: `popIn` en comprobante.
