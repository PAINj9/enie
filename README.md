# ENIE — the home of Ñ

Landing de una sola pantalla que resuelve un problema real: copiar la letra **Ñ** cuando el teclado no la tiene. Un clic, al portapapeles, listo. Alrededor de eso, una experiencia sobre la eñe: palabra y animal del día, y los pares mínimos que demuestran para qué sirve.

## Correrlo

```
npm install
npm run dev
```

Abre en `http://localhost:5173`.

```
npm run build
npm run preview
```

`build` corre `tsc --noEmit` antes de compilar, así que un error de tipos frena el deploy.

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind 3
- Framer Motion (animaciones)
- lucide-react (iconos)

Sin router: es una sola página con anclas. Sin backend, sin cookies, sin analytics.

## Estructura

```
index.html               SEO estático: title, OG, Twitter, JSON-LD
public/
  favicon.svg            Ñ lima sobre fondo tinta
  og.png                 1200×630 para redes
  apple-touch-icon.png
  robots.txt · sitemap.xml
src/
  data/content.ts        TODO el contenido del sitio. Fuente única de verdad.
  lib/
    daily.ts             lo que rota "una vez por día", derivado de la fecha local
    hooks.ts             usePersistent, portapapeles, reduced-motion, flash
    copy-context.tsx     estado global de copiado: contador, toast, pulse
  components/            Nav, Footer, Toast, CopyButton, EnieMark, EnieBurst
  components/ui/         primitives compartidas (Reveal, Section, SectionHead…)
  sections/              Hero, DailyDuo, Pairs
```

Para cambiar cualquier texto, palabra, animal o curiosidad: `src/data/content.ts`. Los componentes no hardcodean copy.

## Decisiones que conviene conocer

**El contador de copias es real y es tuyo.** Vive en `localStorage` bajo `enie:count` y se muestra en el hero. No hay servidor ni analytics: nadie más lo ve.

**La palabra y el animal del día no son aleatorios.** `pickOfTheDay()` usa los días transcurridos desde epoch módulo el largo de la lista. Cambia a medianoche, en la zona horaria del visitante, sin servidor.

**El portapapeles tiene fallback.** `navigator.clipboard` sólo existe en contexto seguro (https o localhost). En http plano cae al viejo truco de `textarea` + `execCommand`. Si las dos fallan, el toast lo dice en vez de mentir.

**La barra espaciadora copia la ñ minúscula**, que es la que se necesita en medio de una frase. Sólo cuando el foco está en el `body`: si hay un botón enfocado gana el comportamiento nativo del navegador, y nunca secuestra la escritura en un campo.

**`prefers-reduced-motion` apaga todo:** el loop del hero, el burst de partículas, el autoplay del carrusel y el smooth scroll.

## Pendiente

- **Dominio placeholder.** `enie.example` aparece en el canonical, el JSON-LD, `robots.txt` y `sitemap.xml`. Al comprar el dominio real hay que reemplazarlo en esos cuatro lugares.

## Deploy

`vercel.json` ya trae el rewrite de SPA. En Vercel: importar el repo, framework **Vite**, build `npm run build`, output `dist`. El `package.json` tiene que estar en la raíz del repo.
