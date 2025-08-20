import { p as push, b as bind_props, a as pop } from './_@astro-renderers_2F4lW3_q.mjs';
/* empty css                         */
import { a as attr, e as escape_html } from './works_vf79pWRX.mjs';

// Store the references to globals in case someone tries to monkey patch these, causing the below
// to de-opt (this occurs often when using popular extensions).

/**
 * @template V
 * @param {V} value
 * @param {V | (() => V)} fallback
 * @param {boolean} [lazy]
 * @returns {V}
 */
function fallback(value, fallback, lazy = false) {
	return value === undefined
		? lazy
			? /** @type {() => V} */ (fallback)()
			: /** @type {V} */ (fallback)
		: value;
}

function WorkCard($$payload, $$props) {
	push();

	let imageSrc, city, province, power;
	let work = $$props['work'];
	let href = fallback($$props['href'], undefined);
	let showPower = fallback($$props['showPower'], true);

	imageSrc = work ? `img/works/${work.slug}/thumb/1.webp` : '';
	[city, province] = work ? work.location.split('–').map((s) => s.trim()) : ['', ''];
	power = work ? work.technicalDetails.kw : 0;

	if (work && href) {
		$$payload.out += '<!--[-->';
		$$payload.out += `<a${attr('href', href)} class="work-card svelte-1mihvy9"><img class="work-card__image svelte-1mihvy9"${attr('src', imageSrc)}${attr('alt', work.title)}> <div class="work-card__overlay-top svelte-1mihvy9"><div class="work-card__location svelte-1mihvy9"><i class="fa-solid fa-location-dot" style="font-size: var(--font-size-medium);"></i> <div class="location-text__wrapper svelte-1mihvy9"><span class="localidad svelte-1mihvy9">${escape_html(city)}</span> <span class="provincia svelte-1mihvy9">${escape_html(province)}</span></div></div> `;

		if (showPower) {
			$$payload.out += '<!--[-->';
			$$payload.out += `<div class="work-card__power svelte-1mihvy9"><i class="fa-solid fa-bolt" style="color:goldenrod"></i> <span class="power-value">${escape_html(power)}</span> KWp</div>`;
		} else {
			$$payload.out += '<!--[!-->';
		}

		$$payload.out += `<!--]--></div> <div class="work-card__overlay-bottom svelte-1mihvy9"><div class="work-card__client svelte-1mihvy9"><div class="work-card__client-avatar svelte-1mihvy9">${escape_html(work.title.split(' ').map((word) => word[0]).join('').toUpperCase().slice(0, 2))}</div> <div class="work-card__client-info svelte-1mihvy9"><h3 class="work-card__client-name svelte-1mihvy9">${escape_html(work.title)}</h3> <p class="work-card__client-type svelte-1mihvy9">${escape_html(work.type || 'Proyecto')}</p></div></div></div></a>`;
	} else {
		$$payload.out += '<!--[!-->';
	}

	$$payload.out += `<!--]-->`;
	bind_props($$props, { work, href, showPower });
	pop();
}

export { WorkCard as W, fallback as f };
