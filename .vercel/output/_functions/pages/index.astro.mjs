import { f as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderComponent, e as createAstro, h as addAttribute } from '../chunks/astro/server_DKbFXoJv.mjs';
import 'kleur/colors';
import { e as escape_html, a as attr, w as works, $ as $$MainLayout } from '../chunks/works_vf79pWRX.mjs';
import 'clsx';
/* empty css                                 */
import { e as ensure_array_like, b as bind_props, p as push, s as stringify, a as pop } from '../chunks/_@astro-renderers_2F4lW3_q.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_2F4lW3_q.mjs';
import { f as fallback, W as WorkCard } from '../chunks/WorkCard_H5n92MLR.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Counter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="impact-section" aria-label="Indicadores clave" data-astro-cid-im6mx3ie> <div class="impact-container" data-astro-cid-im6mx3ie> <div class="impact-grid" data-astro-cid-im6mx3ie> <div class="counter" data-astro-cid-im6mx3ie> <p class="counter-number" data-target="200" data-astro-cid-im6mx3ie> <span class="sign" aria-hidden="true" data-astro-cid-im6mx3ie>+</span> <span class="count-value" data-astro-cid-im6mx3ie>0</span> </p> <p class="counter-title" data-astro-cid-im6mx3ie>Clientes</p> <p class="counter-sub" data-astro-cid-im6mx3ie>satisfechos</p> </div> <div class="counter" data-astro-cid-im6mx3ie> <p class="counter-number" data-target="1200" data-astro-cid-im6mx3ie> <span class="sign" aria-hidden="true" data-astro-cid-im6mx3ie>+</span> <span class="count-value" data-astro-cid-im6mx3ie>0</span> </p> <p class="counter-title" data-astro-cid-im6mx3ie>kWp</p> <p class="counter-sub" data-astro-cid-im6mx3ie>instalados</p> </div> <div class="counter" data-astro-cid-im6mx3ie> <p class="counter-number" data-target="7" data-astro-cid-im6mx3ie> <span class="count-value" data-astro-cid-im6mx3ie>0</span> </p> <p class="counter-title" data-astro-cid-im6mx3ie>a\xF1os</p> <p class="counter-sub" data-astro-cid-im6mx3ie>de trayectoria</p> </div> <div class="counter" data-astro-cid-im6mx3ie> <p class="counter-number" data-target="3750" data-astro-cid-im6mx3ie> <span class="sign" aria-hidden="true" data-astro-cid-im6mx3ie>+</span> <span class="count-value" data-astro-cid-im6mx3ie>0</span> </p> <p class="counter-title" data-astro-cid-im6mx3ie>tCO\u2082</p> <p class="counter-sub" data-astro-cid-im6mx3ie>evitado</p> </div> </div> </div> </section>  <script lang="ts">
  // Animaci\xF3n num\xE9rica con IntersectionObserver (JS + JSDoc para evitar TS errores)
  (() => {
    if (typeof window === 'undefined') return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    /** @type {NodeListOf<HTMLElement>} */
    const counters = document.querySelectorAll('.counter-number');

    /** @type {(el: HTMLElement) => void} */
    const animateCounter = (el) => {
      const targetAttr = el.getAttribute('data-target');
      const target = targetAttr ? Number(targetAttr) : 0;
      const duration = 2000;
      const startTime = performance.now();
      const countSpan = el.querySelector('.count-value');
      if (!(countSpan instanceof HTMLElement)) return;

      if (prefersReduced) {
        countSpan.textContent = String(target);
        return;
      }

      /** @type {(ts: number) => void} */
      const step = (ts) => {
        const progress = Math.min((ts - startTime) / duration, 1);
        countSpan.textContent = String(Math.floor(progress * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            if (el instanceof HTMLElement) {
              animateCounter(el);
              obs.unobserve(el);
            }
          }
        });
      }, { threshold: 0.5 });

      counters.forEach((c) => observer.observe(c));
    } else {
      counters.forEach((c) => animateCounter(c));
    }
  })();
<\/script>`])), maybeRenderHead());
}, "E:/Escritorio/www/renovar/src/modules/landing/components/Counter.astro", void 0);

const $$BrandSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="slider-wrapper no-filter" role="region" aria-label="Marcas asociadas" data-astro-cid-uy2wsaqh> <div class="slider" style="--quantity: 13;" data-astro-cid-uy2wsaqh> <div class="list" data-astro-cid-uy2wsaqh> <div class="item" style="--position: 1" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/amerisolar.webp" alt="Amerisolar" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 2" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/enertik.webp" alt="Enertik" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 3" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/epever.webp" alt="EPEVER" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 4" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/goodwe.webp" alt="GoodWe" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 5" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/growatt.webp" alt="Growatt" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 6" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/invt.webp" alt="INVT" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 7" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/jinko.webp" alt="Jinko Solar" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 8" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/mizu.webp" alt="Mizu" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 9" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/pylontech.webp" alt="Pylontech" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 10" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/ritar.webp" alt="Ritar" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 11" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/trina.webp" alt="Trina Solar" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 12" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/veichi.webp" alt="Veichi" data-astro-cid-uy2wsaqh></div> <div class="item" style="--position: 13" data-astro-cid-uy2wsaqh><img src="/img/logos/brands/victron-energy.svg" alt="Victron Energy" data-astro-cid-uy2wsaqh></div> </div> </div> </div> `;
}, "E:/Escritorio/www/renovar/src/modules/landing/components/BrandSlider.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero" aria-labelledby="hero-title" data-astro-cid-nlsko4av> <!-- Fila 1: Left / Right --> <div class="hero__top" data-astro-cid-nlsko4av> <div class="hero__left" data-astro-cid-nlsko4av> <span class="eyebrow" data-astro-cid-nlsko4av><i class="fa-solid fa-leaf" style="color: var(--color-accent-dark);" data-astro-cid-nlsko4av></i> Energía verde en Argentina</span> <div class="text__wrapper" data-astro-cid-nlsko4av> <h1 id="hero-title" class="hero__title" data-astro-cid-nlsko4av> <span class="title-line" data-astro-cid-nlsko4av>Convertí un gasto</span> <span class="title-line" data-astro-cid-nlsko4av>en una inversión</span> </h1> <p class="hero__desc" data-astro-cid-nlsko4av>
Impulsamos proyectos residenciales, comerciales e industriales con soluciones fotovoltaicas de alta eficiencia.
</p> </div> <a class="hero__cta" href="#contacto" data-astro-cid-nlsko4av> <span data-astro-cid-nlsko4av>Hablar con un experto</span> <svg class="cta__icon" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-nlsko4av> <path d="M5 12h12M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-nlsko4av></path> </svg> </a> ${renderComponent($$result, "Counter", $$Counter, { "data-astro-cid-nlsko4av": true })} </div> <div class="hero__right" data-astro-cid-nlsko4av> <div class="video-container" data-astro-cid-nlsko4av> <video poster="/img/works/hardfacing/2.webp" autoplay muted loop playsinline preload="auto" class="video-bg" data-astro-cid-nlsko4av> <source src="/videos/hero.mp4" type="video/mp4" data-astro-cid-nlsko4av>
Tu navegador no soporta videos HTML5.
</video> </div> </div> </div> <!-- Fila 2: Slider de marcas --> <div class="hero__bottom" data-astro-cid-nlsko4av> ${renderComponent($$result, "BrandSlider", $$BrandSlider, { "data-astro-cid-nlsko4av": true })} </div> </section> `;
}, "E:/Escritorio/www/renovar/src/modules/landing/components/Hero.astro", void 0);

function TextBlock($$payload, $$props) {
	let textsblocks = fallback($$props['textsblocks'], () => [], true);
	const each_array = ensure_array_like(textsblocks);

	$$payload.out += `<section class="svelte-k7tkvh"><div class="text-wrapper svelte-k7tkvh"><span class="svelte-k7tkvh">Diseñamos e instalamos soluciones de energía solar a medida para hogares, empresas e industrias.</span></div> <div class="text-blocks-wrapper svelte-k7tkvh"><!--[-->`;

	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let featureLanding = each_array[$$index];

		$$payload.out += `<div class="block svelte-k7tkvh"><h2 class="svelte-k7tkvh">${escape_html(featureLanding.title)}</h2> <p class="svelte-k7tkvh">${escape_html(featureLanding.text)}</p></div>`;
	}

	$$payload.out += `<!--]--></div></section>`;
	bind_props($$props, { textsblocks });
}

const $$Astro = createAstro("https://renovarenergia.ar/");
const $$LogoBrand = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LogoBrand;
  const { image, alt, sizeSm = 90, sizeMd = 100, sizeLg = 120 } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="logo-item" data-astro-cid-uikyhpds> <img${addAttribute(image, "src")}${addAttribute(alt, "alt")}${addAttribute(`--size-sm: ${sizeSm}px; --size-md: ${sizeMd}px; --size-lg: ${sizeLg}px;`, "style")} data-astro-cid-uikyhpds> </div> `;
}, "E:/Escritorio/www/renovar/src/modules/brand/components/LogoBrand.astro", void 0);

const $$LogoSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="logo-section" data-astro-cid-s3irokgh> <h2 class="logo-brand__title" data-astro-cid-s3irokgh>Confían en nosotros
</h2> <div class="logo-brand" data-astro-cid-s3irokgh> <div class="logo-brand__container" data-astro-cid-s3irokgh> ${renderComponent($$result, "LogoBrand", $$LogoBrand, { "image": "/img/logos/clients/alborada.svg", "alt": "logo Alborada", "sizeSm": 90, "sizeMd": 100, "sizeLg": 100, "data-astro-cid-s3irokgh": true })} ${renderComponent($$result, "LogoBrand", $$LogoBrand, { "image": "/img/logos/clients/tracsa.svg", "alt": "Logo Tracsa", "sizeSm": 110, "sizeMd": 140, "sizeLg": 140, "data-astro-cid-s3irokgh": true })} ${renderComponent($$result, "LogoBrand", $$LogoBrand, { "image": "/img/logos/clients/mostaza.svg", "alt": "Logo Mostaza", "sizeSm": 90, "sizeMd": 100, "sizeLg": 100, "data-astro-cid-s3irokgh": true })} ${renderComponent($$result, "LogoBrand", $$LogoBrand, { "image": "/img/logos/clients/shell.svg", "alt": "Logo Shell", "sizeSm": 90, "sizeMd": 100, "sizeLg": 100, "data-astro-cid-s3irokgh": true })} ${renderComponent($$result, "LogoBrand", $$LogoBrand, { "image": "/img/logos/clients/fumisem.svg", "alt": "logo Fumisem", "sizeSm": 100, "sizeMd": 120, "sizeLg": 120, "data-astro-cid-s3irokgh": true })} ${renderComponent($$result, "LogoBrand", $$LogoBrand, { "image": "/img/logos/clients/depaoli.svg", "alt": "logo Depaoli", "sizeSm": 110, "sizeMd": 130, "sizeLg": 130, "data-astro-cid-s3irokgh": true })} ${renderComponent($$result, "LogoBrand", $$LogoBrand, { "image": "/img/logos/clients/hf.svg", "alt": "logo Hardfacing", "sizeSm": 120, "sizeMd": 160, "sizeLg": 160, "data-astro-cid-s3irokgh": true })} ${renderComponent($$result, "LogoBrand", $$LogoBrand, { "image": "/img/logos/clients/cade.svg", "alt": "logo Cade", "sizeSm": 120, "sizeMd": 160, "sizeLg": 160, "data-astro-cid-s3irokgh": true })} </div> </div> </section> `;
}, "E:/Escritorio/www/renovar/src/modules/landing/components/LogoSection.astro", void 0);

const $$Bentobox = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="unique-features" data-astro-cid-n44cq67t> <div class="container" data-astro-cid-n44cq67t> <header class="header" data-astro-cid-n44cq67t> <h2 class="title" data-astro-cid-n44cq67t>
The essence of extraordinary living lies in the <em data-astro-cid-n44cq67t>little things</em>.
</h2> <p class="subtitle" data-astro-cid-n44cq67t>
Explore what makes each Oeffar home unique.
</p> </header> <div class="features-grid" data-astro-cid-n44cq67t> <div class="card image-card custom-design" id="custom-design-card" data-astro-cid-n44cq67t> <div class="card-content" data-astro-cid-n44cq67t> <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-n44cq67t> <path d="M3 7V5c0-1.1.9-2 2-2h2" data-astro-cid-n44cq67t></path> <path d="M17 3h2c1.1 0 2 .9 2 2v2" data-astro-cid-n44cq67t></path> <path d="M21 17v2c0 1.1-.9 2-2 2h-2" data-astro-cid-n44cq67t></path> <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" data-astro-cid-n44cq67t></path> <rect x="7" y="7" width="10" height="10" rx="1" data-astro-cid-n44cq67t></rect> </svg> <h3 class="card-title" data-astro-cid-n44cq67t>Soluciones</h3> <p class="card-description" data-astro-cid-n44cq67t>
Each Haven home is a unique creation, tailored to fit your lifestyle and taste.
</p> <img src="https://picsum.photos/400/250?random=1" alt="A modern white house with clean lines" class="card-image" data-astro-cid-n44cq67t> </div> </div> <div class="card text-card prime-locations" id="prime-locations-card" data-astro-cid-n44cq67t> <div class="card-content" data-astro-cid-n44cq67t> <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-n44cq67t> <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" data-astro-cid-n44cq67t></path> <circle cx="12" cy="10" r="3" data-astro-cid-n44cq67t></circle> </svg> <h3 class="card-title" data-astro-cid-n44cq67t>Beneficios</h3> <p class="card-description" data-astro-cid-n44cq67t>
Nestled in serene settings, Haven homes provide privacy and breathtaking views.
</p> </div> </div> <div class="card image-card innovative-living" id="innovative-living-card" data-astro-cid-n44cq67t> <div class="card-content" data-astro-cid-n44cq67t> <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-n44cq67t> <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" data-astro-cid-n44cq67t></path> <polyline points="9,22 9,12 15,12 15,22" data-astro-cid-n44cq67t></polyline> <circle cx="12" cy="8" r="1" data-astro-cid-n44cq67t></circle> </svg> <h3 class="card-title" data-astro-cid-n44cq67t>Generacion Distribuida</h3> <p class="card-description" data-astro-cid-n44cq67t>
Experience luxury and efficiency with smart technology and eco-friendly features.
</p> <img src="https://picsum.photos/400/250?random=2" alt="A stylish home with a pool and smart features" class="card-image" data-astro-cid-n44cq67t> </div> </div> <div class="card text-card craftsmanship" id="craftsmanship-card" data-astro-cid-n44cq67t> <div class="card-content" data-astro-cid-n44cq67t> <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-n44cq67t> <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" data-astro-cid-n44cq67t></path> </svg> <h3 class="card-title" data-astro-cid-n44cq67t>Prosumidores 4.0</h3> <p class="card-description" data-astro-cid-n44cq67t>
Meticulously crafted with top-tier materials for unmatched quality.
</p> </div> </div> <div class="card image-card-horizontal smooth-journey" id="smooth-journey-card" data-astro-cid-n44cq67t> <div class="card-content" data-astro-cid-n44cq67t> <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-n44cq67t> <path d="M22 12h-4l-3 9L9 3l-3 9H2" data-astro-cid-n44cq67t></path> </svg> <h3 class="card-title" data-astro-cid-n44cq67t>Como trabajamos</h3> <p class="card-description" data-astro-cid-n44cq67t>
From start to finish, we ensure a seamless process, dedicated to realizing your vision.
</p> <img src="https://picsum.photos/400/200?random=3" alt="A contemporary building with a curved roof by the water" class="card-image" data-astro-cid-n44cq67t> </div> </div> <div class="card text-card adaptable-design" id="adaptable-design-card" data-astro-cid-n44cq67t> <div class="card-content" data-astro-cid-n44cq67t> <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-astro-cid-n44cq67t> <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" data-astro-cid-n44cq67t></path> <rect x="8" y="2" width="8" height="4" rx="1" ry="1" data-astro-cid-n44cq67t></rect> </svg> <h3 class="card-title" data-astro-cid-n44cq67t>Adaptable Design</h3> <p class="card-description" data-astro-cid-n44cq67t>
Our designs provide adaptable spaces that grow with your needs for lasting functionality.
</p> </div> </div> </div> </div> </section> `;
}, "E:/Escritorio/www/renovar/src/modules/landing/components/Bentobox.astro", void 0);

const featureLanding = [
  {
    title: "Energía Renovable",
    text: "Transforma pasivos ambientales en activos estratégicos con impacto real."
  },
  {
    title: "Ahorro Garantizado",
    text: "Disminuye tu factura de electricidad con sistemas eficientes y accesibles."
  },
  {
    title: "Tecnología Avanzada",
    text: "Simulamos el rendimiento del sistema con software especializado para garantizar máxima eficiencia."
  },
  {
    title: "Soporte Profesional",
    text: "Te acompañamos en todo el proceso en todo el proceso desde el diseño hasta mantenimiento."
  }
];

function GalleryLink($$payload, $$props) {
	push();

	let images = fallback($$props['images'], () => [], true);

	if (images.length > 0) {
		$$payload.out += '<!--[-->';

		const each_array = ensure_array_like(images);

		$$payload.out += `<div class="gallery-container svelte-m5s0gg"><p class="svelte-m5s0gg">Visita nuestra galería y descubre cómo transformamos ideas en soluciones reales.</p> <div class="slider-wrapper svelte-m5s0gg"><div class="slider svelte-m5s0gg"${attr('style', `--width: 240px; --height: 240px; --quantity: ${stringify(images.length)};`)}><div class="list svelte-m5s0gg"><!--[-->`;

		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let image = each_array[i];

			$$payload.out += `<div class="item svelte-m5s0gg"${attr('style', `--position: ${stringify(i + 1)}`)}>`;

			WorkCard($$payload, {
				work: image,
				href: `/trabajos/${image.slug}`,
				showPower: false
			});

			$$payload.out += `<!----></div>`;
		}

		$$payload.out += `<!--]--></div></div></div> <a class="button svelte-m5s0gg" href="/trabajos">ver galería completa</a></div>`;
	} else {
		$$payload.out += '<!--[!-->';
	}

	$$payload.out += `<!--]-->`;
	bind_props($$props, { images });
	pop();
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const sliderWorks = works;
  console.log("sliderWorks.length =", sliderWorks.length);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "TextBlock", TextBlock, { "textsblocks": featureLanding })} ${renderComponent($$result2, "GalleryLink", GalleryLink, { "client:load": true, "images": sliderWorks, "client:component-hydration": "load", "client:component-path": "src/modules/landing/components/GalleryLink.svelte", "client:component-export": "default" })} ${renderComponent($$result2, "LogoSection", $$LogoSection, {})} ${renderComponent($$result2, "Bentobox", $$Bentobox, {})} ` })} `;
}, "E:/Escritorio/www/renovar/src/pages/index.astro", void 0);

const $$file = "E:/Escritorio/www/renovar/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
