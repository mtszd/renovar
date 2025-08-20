import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DKbFXoJv.mjs';
import 'kleur/colors';
import { $ as $$MainLayout, w as works } from '../chunks/works_vf79pWRX.mjs';
import { W as WorkCard } from '../chunks/WorkCard_H5n92MLR.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/_@astro-renderers_2F4lW3_q.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Nuestros Trabajos - Energ\xEDa Solar", "data-astro-cid-esombyfp": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="works-gallery" data-astro-cid-esombyfp> <div class="works-text__container" data-astro-cid-esombyfp> <h1 class="works-gallery__title" data-astro-cid-esombyfp>Obras realizadas</h1> <p class="works-gallery__subtitle" data-astro-cid-esombyfp>
Descubre los proyectos de energía solar que hemos realizado,
        transformando espacios con soluciones sustentables.
</p> </div> <div class="works-grid" data-astro-cid-esombyfp> ${works.map((work) => renderTemplate`${renderComponent($$result2, "WorkCard", WorkCard, { "work": work, "href": `/trabajos/${work.slug}`, "client:load": true, "client:component-hydration": "load", "client:component-path": "src/modules/works/components/WorkCard.svelte", "client:component-export": "default", "data-astro-cid-esombyfp": true })}`)} </div> </section> ` })} `;
}, "E:/Escritorio/www/renovar/src/pages/trabajos/index.astro", void 0);

const $$file = "E:/Escritorio/www/renovar/src/pages/trabajos/index.astro";
const $$url = "/trabajos";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
