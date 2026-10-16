/*
 * Intro de Samplia: presentación del logotipo en 3D sobre fondo de estudio premium.
 *
 * Línea de tiempo (ms):
 *    0  Fondo de estudio: luz cenital granate que se enciende y un barrido de luz suave
 *  250  El icono, extruido en 3D (capas apiladas en Z), entra girando desde la profundidad
 * 1700  Asienta de frente con un ligero rebote; brillo especular recorre la superficie texturizada
 * 2100  El wordmark se revela con acabado satinado metálico; aparece el lema
 * 3700  Salida: el icono avanza hacia cámara y el rojo de marca inunda la pantalla → la app
 *
 * Se muestra una vez por sesión. ?intro=1 la fuerza, ?intro=0 la omite. Toque = saltar.
 */
(() => {
  const params = new URLSearchParams(location.search);
  let seen = false;
  try { seen = sessionStorage.getItem("samplia-intro") === "1"; } catch {}
  if (params.get("intro") === "0" || (seen && params.get("intro") !== "1")) return;
  try { sessionStorage.setItem("samplia-intro", "1"); } catch {}

  window.__introActive = true;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ICON = "assets/brand/samplia-icon.png";
  const WORD = "assets/brand/samplia-wordmark.png";
  const DEPTH = 22;                       // capas de extrusión
  const STEP = 1.4;                       // px entre capas → grosor ≈ 30px

  const NOISE = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E";

  const css = `
  #intro { position: fixed; inset: 0; z-index: 1000; overflow: hidden; cursor: pointer; background: #0B0306; perspective: 1100px; }
  #intro .studio { position: absolute; inset: 0; opacity: 0;
    background:
      radial-gradient(60% 45% at 50% 30%, #6B1426 0%, rgba(107,20,38,0) 70%),
      radial-gradient(90% 60% at 50% 110%, #3A0A15 0%, rgba(58,10,21,0) 70%),
      linear-gradient(180deg, #1C060C 0%, #12040A 55%, #0B0306 100%); }
  #intro .floor { position: absolute; left: -20%; right: -20%; top: 62%; bottom: -10%; opacity: 0;
    background: radial-gradient(50% 40% at 50% 0%, rgba(232,46,69,.28) 0%, rgba(232,46,69,0) 70%);
    transform: rotateX(70deg); transform-origin: 50% 0; }
  #intro .horizon { position: absolute; left: 0; right: 0; top: 62%; height: 1px; opacity: 0;
    background: linear-gradient(90deg, transparent, rgba(255,150,170,.35), transparent); }
  #intro .sweep { position: absolute; top: -30%; bottom: -30%; width: 40%; left: -60%; opacity: .0; pointer-events: none;
    background: linear-gradient(100deg, transparent, rgba(255,120,145,.10) 45%, rgba(255,170,185,.16) 50%, rgba(255,120,145,.10) 55%, transparent);
    transform: skewX(-18deg); filter: blur(8px); }
  #intro .grain { position: absolute; inset: -50%; opacity: .06; pointer-events: none; mix-blend-mode: overlay;
    background-image: url("${NOISE}"); animation: introGrain .5s steps(5) infinite; }
  @keyframes introGrain { 0%{transform:translate(0,0)} 20%{transform:translate(-3%,2%)} 40%{transform:translate(2%,-3%)} 60%{transform:translate(-2%,-1%)} 80%{transform:translate(3%,1%)} }
  #intro .vignette { position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(75% 60% at 50% 42%, transparent 45%, rgba(0,0,0,.7) 100%); }

  #intro .rig { position: absolute; left: 50%; top: 42%; transform: translate(-50%, -50%); transform-style: preserve-3d;
    display: flex; flex-direction: column; align-items: center; gap: clamp(22px, 4.5vh, 40px); }
  #intro .stage3d { position: relative; width: min(46vw, 220px); aspect-ratio: 1; transform-style: preserve-3d; }
  #intro .obj { position: absolute; inset: 0; transform-style: preserve-3d; opacity: 0; will-change: transform; }
  #intro .layer { position: absolute; inset: 0; width: 100%; height: 100%; backface-visibility: hidden; }
  #intro .side { filter: brightness(.42) saturate(1.2); }
  #intro .face { position: absolute; inset: 0; }
  #intro .face img { width: 100%; height: 100%; display: block; }
  /* Textura y luz sobre la cara frontal, recortadas con la silueta del icono */
  #intro .tex, #intro .spec, #intro .rim { position: absolute; inset: 0; pointer-events: none;
    -webkit-mask: url(${ICON}) center / contain no-repeat; mask: url(${ICON}) center / contain no-repeat; }
  #intro .tex { background-image: url("${NOISE}"); background-size: 140px; mix-blend-mode: soft-light; opacity: .55; }
  #intro .rim { background: linear-gradient(160deg, rgba(255,255,255,.28) 0%, rgba(255,255,255,0) 28%, rgba(0,0,0,0) 60%, rgba(40,0,8,.35) 100%); }
  #intro .spec { background: linear-gradient(115deg, transparent 30%, rgba(255,240,244,.75) 47%, rgba(255,255,255,.95) 50%, rgba(255,240,244,.75) 53%, transparent 70%);
    background-size: 320% 100%; background-position: 130% 0; mix-blend-mode: screen; opacity: 0; }
  #intro .shadow { position: absolute; left: 10%; right: 10%; bottom: -26%; height: 18%; border-radius: 50%; opacity: 0;
    background: radial-gradient(closest-side, rgba(0,0,0,.65), rgba(0,0,0,0)); filter: blur(6px); transform: translateZ(-60px); }
  #intro .reflect { position: absolute; left: 0; right: 0; top: 104%; height: 32%; opacity: 0; pointer-events: none;
    background: url(${ICON}) center top / contain no-repeat; transform: scaleY(-1); filter: blur(3px) brightness(.7);
    -webkit-mask-image: linear-gradient(0deg, rgba(0,0,0,.45), transparent 70%); mask-image: linear-gradient(0deg, rgba(0,0,0,.45), transparent 70%); }

  #intro .word { position: relative; width: min(66vw, 320px); aspect-ratio: 1400 / 366; opacity: 0; }
  /* Letras en blanco como imagen real (siempre visibles) + brillo satinado encima */
  #intro .word img { position: absolute; inset: 0; width: 100%; height: 100%; display: block; filter: drop-shadow(0 4px 18px rgba(232,46,69,.35)); }
  #intro .word .metal { position: absolute; inset: 0; mix-blend-mode: multiply; opacity: .55;
    -webkit-mask: url(${WORD}) center / contain no-repeat; mask: url(${WORD}) center / contain no-repeat;
    background: linear-gradient(100deg, #E9D9DC 0%, #FFF4F6 22%, #B99BA2 38%, #FFF8F9 52%, #D7C2C7 68%, #FFF4F6 84%, #CDB4BA 100%);
    background-size: 250% 100%; background-position: 100% 0; }
  /* Lema: más grande, más brillante y sobre una cápsula roja translúcida */
  #intro .claim { font: 700 clamp(15px, 4.4vw, 20px)/1 Inter, system-ui, sans-serif; letter-spacing: .22em; text-transform: uppercase; white-space: nowrap;
    color: #FFF3F5; opacity: 0; padding: 12px 20px 12px calc(20px + .22em); border-radius: 999px;
    background: rgba(232,46,69,.2); border: 1px solid rgba(255,122,142,.5);
    box-shadow: 0 0 28px rgba(232,46,69,.35), inset 0 0 12px rgba(255,122,142,.15); text-shadow: 0 0 14px rgba(255,140,160,.55); }
  #intro .claim b { color: #FF6B82; font-weight: 800; }

  #intro .flood { position: absolute; inset: 0; opacity: 0; pointer-events: none;
    background: radial-gradient(circle at 50% 42%, #F04A60 0%, #E82E45 45%, #B5182F 100%); }
  #intro .skip { position: absolute; right: 16px; bottom: max(16px, env(safe-area-inset-bottom)); font: 600 11px Inter, system-ui, sans-serif;
    letter-spacing: .14em; text-transform: uppercase; color: rgba(255,200,210,.45); }
  `;

  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);

  // Extrusión: capas traseras oscurecidas (cantos) + cara frontal con textura y luz
  let sides = "";
  for (let i = DEPTH; i >= 1; i--) sides += `<img class="layer side" src="${ICON}" alt="" style="transform:translateZ(${-i * STEP}px)">`;

  const root = document.createElement("div");
  root.id = "intro";
  root.setAttribute("aria-label", "Samplia");
  root.innerHTML = `
    <div class="studio"></div>
    <div class="floor"></div>
    <div class="horizon"></div>
    <div class="sweep"></div>
    <div class="rig">
      <div class="stage3d">
        <div class="shadow"></div>
        <div class="reflect"></div>
        <div class="obj">
          ${sides}
          <div class="face layer" style="transform:translateZ(0)">
            <img src="${ICON}" alt="">
            <div class="tex"></div><div class="rim"></div><div class="spec"></div>
          </div>
        </div>
      </div>
      <div class="word"><img src="assets/brand/samplia-wordmark-white.png" alt="Samplia"><div class="metal"></div></div>
      <div class="claim">Un descuento <b>al día</b></div>
    </div>
    <div class="flood"></div>
    <div class="vignette"></div>
    <div class="grain"></div>
    <div class="skip">Toca para saltar</div>`;

  const mount = () => document.body.prepend(root);
  document.body ? mount() : document.addEventListener("DOMContentLoaded", mount);

  const q = s => root.querySelector(s);
  const timers = [];
  const at = (ms, fn) => timers.push(setTimeout(fn, ms));
  const A = (el, frames, opts) => el.animate(frames, { fill: "both", ...opts });
  const smooth = "cubic-bezier(.22,1,.36,1)", inOut = "cubic-bezier(.65,0,.35,1)", accel = "cubic-bezier(.7,0,.84,0)";

  // ---------- Fondo ----------
  A(q(".studio"), [{ opacity: 0 }, { opacity: 1 }], { duration: 900, easing: "ease-out" });
  A(q(".floor"), [{ opacity: 0 }, { opacity: 1 }], { duration: 1400, delay: 300, easing: "ease-out" });
  A(q(".horizon"), [{ opacity: 0, transform: "scaleX(.2)" }, { opacity: 1, transform: "scaleX(1)" }], { duration: 1600, delay: 400, easing: smooth });

  if (reduced) {
    A(q(".obj"), [{ opacity: 0 }, { opacity: 1 }], { duration: 600 });
    A(q(".word"), [{ opacity: 0 }, { opacity: 1 }], { duration: 600, delay: 300 });
    A(q(".claim"), [{ opacity: 0 }, { opacity: 1 }], { duration: 600, delay: 500 });
    at(1800, finish);
  } else {
    A(q(".sweep"), [{ left: "-60%", opacity: 1 }, { left: "120%", opacity: 1 }], { duration: 2600, delay: 200, easing: inOut });

    // Entrada 3D: desde la profundidad, girando, hasta asentarse de frente
    at(250, () => {
      A(q(".obj"), [
        { opacity: 0, transform: "translateZ(-900px) translateY(40px) rotateX(38deg) rotateY(-120deg) rotateZ(-14deg)" },
        { opacity: 1, transform: "translateZ(-200px) translateY(10px) rotateX(18deg) rotateY(-40deg) rotateZ(-4deg)", offset: .45 },
        { opacity: 1, transform: "translateZ(30px) rotateX(-4deg) rotateY(14deg) rotateZ(1deg)", offset: .8 },
        { opacity: 1, transform: "translateZ(0) rotateX(8deg) rotateY(-18deg) rotateZ(0)" }
      ], { duration: 1750, easing: "cubic-bezier(.25,.8,.25,1)" });
      A(q(".shadow"), [{ opacity: 0, transform: "translateZ(-60px) scale(.4)" }, { opacity: .9, transform: "translateZ(-60px) scale(1)" }], { duration: 1600, delay: 300, easing: smooth });
      A(q(".reflect"), [{ opacity: 0 }, { opacity: 1 }], { duration: 900, delay: 1000, easing: "ease-out" });
    });

    // Brillo especular sobre la textura + leve respiración posterior
    at(1650, () => {
      A(q(".spec"), [{ opacity: 1, backgroundPosition: "130% 0" }, { opacity: 1, backgroundPosition: "-30% 0" }], { duration: 1100, easing: inOut });
    });
    at(2000, () => {
      A(q(".obj"), [
        { transform: "translateZ(0) translateY(0) rotateX(8deg) rotateY(-18deg)" },
        { transform: "translateZ(10px) translateY(-6px) rotateX(4deg) rotateY(16deg)" },
        { transform: "translateZ(0) translateY(0) rotateX(8deg) rotateY(-18deg)" }
      ], { duration: 4200, easing: inOut, iterations: Infinity });
    });

    // Wordmark satinado + lema
    at(2100, () => {
      A(q(".word"), [
        { opacity: 0, transform: "translateY(18px) rotateX(55deg)", filter: "blur(8px)" },
        { opacity: 1, transform: "translateY(0) rotateX(0)", filter: "blur(0)" }
      ], { duration: 900, easing: smooth });
      A(q(".word .metal"), [{ backgroundPosition: "100% 0" }, { backgroundPosition: "0% 0" }], { duration: 1800, easing: inOut });
      A(q(".claim"), [{ opacity: 0, letterSpacing: ".5em", transform: "translateY(10px) scale(.96)" }, { opacity: 1, letterSpacing: ".22em", transform: "none" }], { duration: 1000, delay: 450, easing: smooth });
    });

    // Salida: empuje a cámara y rojo de marca
    at(3700, () => {
      A(q(".rig"), [
        { transform: "translate(-50%,-50%) translateZ(0)", opacity: 1 },
        { transform: "translate(-50%,-50%) translateZ(700px)", opacity: 0 }
      ], { duration: 650, easing: accel });
      A(q(".flood"), [{ opacity: 0 }, { opacity: 1 }], { duration: 550, delay: 150, easing: "ease-in" });
      at(720, finish);
    });
  }

  // ---------- Salida ----------
  let done = false;
  function finish() {
    if (done) return; done = true;
    timers.forEach(clearTimeout);
    const out = root.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 450, easing: "ease-out", fill: "forwards" });
    window.__introActive = false;
    window.dispatchEvent(new Event("intro:done"));
    out.onfinish = () => { root.getAnimations({ subtree: true }).forEach(a => a.cancel()); root.remove(); style.remove(); };
  }
  root.addEventListener("click", finish);
  addEventListener("keydown", e => (e.key === "Escape" || e.key === " " || e.key === "Enter") && finish(), { once: true });
})();
