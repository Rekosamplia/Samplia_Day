# Samplia · Un descuento al día

App web móvil que muestra **un único descuento al día**, a pantalla completa, con poco texto y dos botones. Incluye calendario semanal y mensual de los próximos descuentos, ofertas *drive to store* que se canjean con un QR en tienda física e intro animada con el logotipo de Samplia.

**Demo:** `https://<tu-usuario>.github.io/<nombre-del-repo>/`

## Páginas

| Página | Qué es |
|---|---|
| `index.html` | La app: descuento del día, calendario y QR en tienda |
| `eventos.html` | Calendario animado de días mundiales y momentos de marca (16 oct – 15 nov 2026) |
| `halloween.html` | Animación de Halloween (31 oct) |

## Parámetros útiles para demos

| Parámetro | Efecto |
|---|---|
| `?date=2026-11-03` | Simula otro día (el calendario cubre del 15 oct al 14 nov 2026) |
| `?intro=1` / `?intro=0` | Fuerza u omite la intro (por defecto sale una vez por sesión) |
| `?cal=week` / `?cal=month` | Abre el calendario directamente |
| `?qr=1` | Abre el QR si la oferta del día es en tienda (p. ej. `?date=2026-11-03&qr=1`) |

## Estructura

```
index.html        App principal
intro.js          Intro 3D del logotipo
deals.js          31 ofertas (fecha, marca, condiciones, enlace, fuente) y recursos de cada marca
eventos.html/.js  Días mundiales y sus animaciones
halloween.html    Animación de Halloween
assets/brand      Logotipos de Samplia
assets/logos      Logotipos de las marcas
assets/bg         Fotos de fondo (StockSnap, licencia CC0)
assets/eventos    Imágenes exportadas de cada día mundial (1080×1080)
```

## Publicar con GitHub Pages

1. Sube el contenido de esta carpeta a un repositorio nuevo.
2. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. En uno o dos minutos la app estará en `https://<tu-usuario>.github.io/<nombre-del-repo>/`.

No necesita compilación: es HTML, CSS y JavaScript estáticos.

## Notas

- Las ofertas son reales y se comprobaron el 15–16 de octubre de 2026 en las fuentes indicadas en `deals.js`; las marcas pueden retirarlas antes de su fecha de fin.
- El QR de las ofertas en tienda es de **demostración**: para que lo acepte la caja hace falta un acuerdo con cada marca.
- Los logotipos de las marcas son propiedad de sus titulares y se usan solo para identificar cada oferta.
