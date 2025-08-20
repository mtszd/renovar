import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_DKbFXoJv.mjs';
import 'kleur/colors';
import { a as attr, g as getWorkBySlug, $ as $$MainLayout, b as getAllWorks } from '../../chunks/works_vf79pWRX.mjs';
import { p as push, e as ensure_array_like, b as bind_props, a as pop } from '../../chunks/_@astro-renderers_2F4lW3_q.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_2F4lW3_q.mjs';
import 'photoswipe/lightbox';
/* empty css                                     */

function LightboxGallery($$payload, $$props) {
	push();

	let galleryId = $$props['galleryId'];
	let slug = $$props['slug'];
	let imageCount = $$props['imageCount'];

	const each_array = ensure_array_like(Array(imageCount));

	$$payload.out += `<div class="gallery-container svelte-jenxnr"><div class="gallery svelte-jenxnr"${attr('id', galleryId)}><!--[-->`;

	for (let i = 0, $$length = each_array.length; i < $$length; i++) {
		each_array[i];

		$$payload.out += `<a${attr('href', `/img/works/${slug}/${i + 1}.webp`)} data-pswp-width="1280" data-pswp-height="720" class="gallery-item svelte-jenxnr"><img${attr('src', `/img/works/${slug}/thumb/${i + 1}.webp`)}${attr('alt', `Instalación solar en ${slug}`)} loading="lazy" class="svelte-jenxnr"></a>`;
	}

	$$payload.out += `<!--]--></div></div>`;
	bind_props($$props, { galleryId, slug, imageCount });
	pop();
}

const $$Astro = createAstro("https://renovarenergia.ar/");
function getStaticPaths() {
  const works = getAllWorks();
  return works.map((work) => ({
    params: { slug: work.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const work = getWorkBySlug(slug);
  if (!work) {
    return Astro2.redirect("/404");
  }
  const [city, province] = work.location.includes(",") ? work.location.split(", ") : [work.location, ""];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": work.title, "data-astro-cid-vmkcdqhe": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="work-detail" data-astro-cid-vmkcdqhe> <div class="top-content" data-astro-cid-vmkcdqhe> <div class="info-column" data-astro-cid-vmkcdqhe> <h1 data-astro-cid-vmkcdqhe>${work.title}</h1> <p class="description" data-astro-cid-vmkcdqhe>${work.description}</p> <div class="key-info-grid" data-astro-cid-vmkcdqhe> <div class="key-info-item" data-astro-cid-vmkcdqhe> <i class="fa-solid fa-location-dot" data-astro-cid-vmkcdqhe></i> <span data-astro-cid-vmkcdqhe><strong data-astro-cid-vmkcdqhe>${city}</strong>${province && `, ${province}`}</span> </div> <div class="key-info-item" data-astro-cid-vmkcdqhe> <span class="badge" data-astro-cid-vmkcdqhe>${work.type}</span> </div> <div class="key-info-item" data-astro-cid-vmkcdqhe> <i class="fa-solid fa-bolt" data-astro-cid-vmkcdqhe></i> <strong data-astro-cid-vmkcdqhe>${work.technicalDetails.kw} kWp</strong> </div> </div> <div class="details-columns-wrapper" data-astro-cid-vmkcdqhe> <div class="details-section" data-astro-cid-vmkcdqhe> <h2 data-astro-cid-vmkcdqhe>Ficha Técnica</h2> <div class="details-grid" data-astro-cid-vmkcdqhe> <div class="grid-card" data-astro-cid-vmkcdqhe> <h4 data-astro-cid-vmkcdqhe>Sistema</h4> <p data-astro-cid-vmkcdqhe>${work.technicalDetails.system}</p> </div> <div class="grid-card" data-astro-cid-vmkcdqhe> <h4 data-astro-cid-vmkcdqhe>Inversores</h4> <p data-astro-cid-vmkcdqhe>${work.technicalDetails.inverters}</p> </div> <div class="grid-card" data-astro-cid-vmkcdqhe> <h4 data-astro-cid-vmkcdqhe>Paneles</h4> <p data-astro-cid-vmkcdqhe>${work.technicalDetails.panelModel} (${work.technicalDetails.panels} u.)</p> </div> <div class="grid-card" data-astro-cid-vmkcdqhe> <h4 data-astro-cid-vmkcdqhe>Producción Anual</h4> <p data-astro-cid-vmkcdqhe>${work.performance.annualProduction ? `${work.performance.annualProduction.toLocaleString("de-DE")} kWh` : "N/D"}</p> </div> </div> </div> <div class="details-section" data-astro-cid-vmkcdqhe> <h2 data-astro-cid-vmkcdqhe>Impacto Ambiental</h2> <div class="details-grid" data-astro-cid-vmkcdqhe> <div class="grid-card" data-astro-cid-vmkcdqhe> <h4 data-astro-cid-vmkcdqhe><i class="fa-solid fa-cloud" data-astro-cid-vmkcdqhe></i> CO₂ Evitado</h4> <p data-astro-cid-vmkcdqhe>${work.environmentalImpact.co2Avoided ? `${work.environmentalImpact.co2Avoided.toLocaleString("de-DE")} kg/a\xF1o` : "N/D"}</p> </div> <div class="grid-card" data-astro-cid-vmkcdqhe> <h4 data-astro-cid-vmkcdqhe><i class="fa-solid fa-tree" data-astro-cid-vmkcdqhe></i> Equivalente</h4> <p data-astro-cid-vmkcdqhe>${work.environmentalImpact.equivalentTrees ? `${work.environmentalImpact.equivalentTrees.toLocaleString("de-DE")} \xE1rboles` : "N/D"}</p> </div> </div> </div> </div> </div> <div class="video-column" data-astro-cid-vmkcdqhe> ${work.videoUrl ? renderTemplate`<iframe${addAttribute(work.videoUrl, "src")} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-astro-cid-vmkcdqhe>
                    </iframe>` : renderTemplate`<div class="video-placeholder" data-astro-cid-vmkcdqhe> <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="play-icon" data-astro-cid-vmkcdqhe> <circle cx="12" cy="12" r="10" data-astro-cid-vmkcdqhe></circle> <polygon points="10 8 16 12 10 16 10 8" data-astro-cid-vmkcdqhe></polygon> </svg> <span data-astro-cid-vmkcdqhe>Próximamente</span> </div>`} </div> </div> <div class="gallery-container" data-astro-cid-vmkcdqhe> ${renderComponent($$result2, "LightboxGallery", LightboxGallery, { "client:load": true, "galleryId": `gallery-${work.slug}`, "slug": work.slug, "imageCount": work.imageCount, "client:component-hydration": "load", "client:component-path": "E:/Escritorio/www/renovar/src/components/gallery/LightboxGallery.svelte", "client:component-export": "default", "data-astro-cid-vmkcdqhe": true })} </div> </main> ` })} `;
}, "E:/Escritorio/www/renovar/src/pages/trabajos/[slug].astro", void 0);

const $$file = "E:/Escritorio/www/renovar/src/pages/trabajos/[slug].astro";
const $$url = "/trabajos/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
