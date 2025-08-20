import 'clsx';
import { e as createAstro, f as createComponent, h as addAttribute, r as renderTemplate, m as maybeRenderHead, l as renderScript, k as renderComponent, n as renderHead, o as renderSlot } from './astro/server_DKbFXoJv.mjs';
import 'kleur/colors';
/* empty css                         */

const ATTR_REGEX = /[&"<]/g;
const CONTENT_REGEX = /[&<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value ?? '');

	const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}

/**
 * `<div translate={false}>` should be rendered as `<div translate="no">` and _not_
 * `<div translate="false">`, which is equivalent to `<div translate="yes">`. There
 * may be other odd cases that need to be added to this list in future
 * @type {Record<string, Map<any, string>>}
 */
const replacements = {
	translate: new Map([
		[true, 'yes'],
		[false, 'no']
	])
};

/**
 * @template V
 * @param {string} name
 * @param {V} value
 * @param {boolean} [is_boolean]
 * @returns {string}
 */
function attr(name, value, is_boolean = false) {
	if (value == null || (!value && is_boolean) || (value === '' && name === 'class')) return '';
	const normalized = (name in replacements && replacements[name].get(value)) || value;
	const assignment = is_boolean ? '' : `="${escape_html(normalized, true)}"`;
	return ` ${name}${assignment}`;
}

const $$Astro$1 = createAstro("https://renovarenergia.ar/");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/img/logos/renovar.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- FontAwesome CDN--><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">`;
}, "E:/Escritorio/www/renovar/src/layouts/BaseHead.astro", void 0);

const $$Logo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="container" data-astro-cid-fm6pt2mr> <a href="/" aria-label="Home" data-astro-cid-fm6pt2mr> <div class="logo-wrapper" data-astro-cid-fm6pt2mr> <img src="/img/logos/renovar/renovar-logo.svg" alt="Logo Renovar Energia" data-astro-cid-fm6pt2mr> <div class="logo-text" data-astro-cid-fm6pt2mr> <span data-astro-cid-fm6pt2mr>Renovar</span> <span data-astro-cid-fm6pt2mr>Energia</span> </div> </div> </a> </div> `;
}, "E:/Escritorio/www/renovar/src/modules/brand/components/Logo.astro", void 0);

const $$HeaderNav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="desktop-only navbar" data-astro-cid-sxgecknu> <ul class="navbar-menu" data-astro-cid-sxgecknu> <li class="menu-item" data-astro-cid-sxgecknu> <a href="#projects" type="button" data-astro-cid-sxgecknu>Obras</a> </li> <li class="menu-item" data-astro-cid-sxgecknu> <a href="#intereses" type="button" data-astro-cid-sxgecknu>Soluciones</a> </li> <li class="menu-item" data-astro-cid-sxgecknu> <a href="#lumber" type="button" data-astro-cid-sxgecknu>Contacto</a> </li> </ul> </nav> `;
}, "E:/Escritorio/www/renovar/src/modules/navigation/navbar/HeaderNav.astro", void 0);

function Hamburger($$payload) {

	$$payload.out += `<button class="menu__open-button svelte-15j9rnk" aria-label="Open menu"><i class="fas fa-bars svelte-15j9rnk"></i></button> `;

	{
		$$payload.out += '<!--[!-->';
	}

	$$payload.out += `<!--]-->`;
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "E:/Escritorio/www/renovar/src/modules/navigation/navbar/Header.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<header data-astro-cid-5iyi2cbd> <nav class="navbar visible" data-astro-cid-5iyi2cbd> <div class="container" data-astro-cid-5iyi2cbd> <div class="logo-wrapper" data-astro-cid-5iyi2cbd> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-5iyi2cbd": true })} </div> <div class="nav-wrapper" data-astro-cid-5iyi2cbd> ${renderComponent($$result, "HeaderNav", $$HeaderNav, { "data-astro-cid-5iyi2cbd": true })} </div> <div class="mobile-only" data-astro-cid-5iyi2cbd> ${renderComponent($$result, "Hamburger", Hamburger, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "E:/Escritorio/www/renovar/src/modules/navigation/navbar/Hamburger.svelte", "client:component-export": "default", "data-astro-cid-5iyi2cbd": true })} </div> </div> </nav> </header> `;
}, "E:/Escritorio/www/renovar/src/modules/navigation/navbar/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-fhnyzpit> <div class="footer-container" data-astro-cid-fhnyzpit> <div class="footer-logo-section" data-astro-cid-fhnyzpit> <a href="/" class="footer-logo" data-astro-cid-fhnyzpit>Renovar Energía</a> </div> <div class="footer-columns" data-astro-cid-fhnyzpit> <div class="footer-column" data-astro-cid-fhnyzpit> <h4 data-astro-cid-fhnyzpit>Soluciones</h4> <ul data-astro-cid-fhnyzpit> <li data-astro-cid-fhnyzpit><a href="/productos/paneles-solares" class="footer-link" data-astro-cid-fhnyzpit>Paneles solares</a></li> <li data-astro-cid-fhnyzpit><a href="/productos/bombas-solares" class="footer-link" data-astro-cid-fhnyzpit>Bombas solares</a></li> <li data-astro-cid-fhnyzpit><a href="/productos/termotanques" class="footer-link" data-astro-cid-fhnyzpit>Termotanques solares</a></li> <li data-astro-cid-fhnyzpit><a href="/productos/proyectos-especiales" class="footer-link" data-astro-cid-fhnyzpit>Proyectos especiales</a></li> </ul> </div> <div class="footer-column" data-astro-cid-fhnyzpit> <h4 data-astro-cid-fhnyzpit>Empresa</h4> <ul data-astro-cid-fhnyzpit> <li data-astro-cid-fhnyzpit><a href="/quienes-somos" class="footer-link" data-astro-cid-fhnyzpit>Quiénes somos</a></li> <li data-astro-cid-fhnyzpit><a href="/clientes" class="footer-link" data-astro-cid-fhnyzpit>Clientes</a></li> <li data-astro-cid-fhnyzpit><a href="/empleo" class="footer-link" data-astro-cid-fhnyzpit>Trabaja con nosotros</a></li> </ul> </div> <div class="footer-column" data-astro-cid-fhnyzpit> <h4 data-astro-cid-fhnyzpit>Recursos</h4> <ul data-astro-cid-fhnyzpit> <li data-astro-cid-fhnyzpit><a href="/guias" class="footer-link" data-astro-cid-fhnyzpit>Guía sobre energía solar</a></li> <li data-astro-cid-fhnyzpit><a href="/faq" class="footer-link" data-astro-cid-fhnyzpit>Preguntas frecuentes</a></li> <li data-astro-cid-fhnyzpit><a href="/blog" class="footer-link" data-astro-cid-fhnyzpit>Blog y noticias</a></li> </ul> </div> <div class="footer-column" data-astro-cid-fhnyzpit> <h4 data-astro-cid-fhnyzpit>Contacto</h4> <ul data-astro-cid-fhnyzpit> <li data-astro-cid-fhnyzpit><a href="/contacto" class="footer-link" data-astro-cid-fhnyzpit>Formulario de contacto</a></li> <li data-astro-cid-fhnyzpit><a href="https://wa.me/XXXXXXXXXXX" class="footer-link" data-astro-cid-fhnyzpit>Escríbenos por WhatsApp</a></li> </ul> </div> </div> <div class="footer-note" data-astro-cid-fhnyzpit> <div class="footer-legal-links" data-astro-cid-fhnyzpit> <a href="/legal/privacidad" class="footer-link" data-astro-cid-fhnyzpit>Política de privacidad</a> <span class="footer-separator" data-astro-cid-fhnyzpit>·</span> <a href="/legal/terminos" class="footer-link" data-astro-cid-fhnyzpit>Términos de uso</a> </div> <p data-astro-cid-fhnyzpit><a href="/" data-astro-cid-fhnyzpit>Renovar Energia</a> &copy; ${today.getFullYear()}. Todos los derechos reservados.</p> </div> </div> </footer> `;
}, "E:/Escritorio/www/renovar/src/modules/navigation/footer/Footer.astro", void 0);

const $$Astro = createAstro("https://renovarenergia.ar/");
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const {
    title = "Renovar Energia",
    description = "Cotiza proyectos fotovoltaicos para hogares, empresas y agroindustrias, descubre casos de \xE9xito reales y recibe asesor\xEDa experta para maximizar tu ahorro energ\xE9tico."
  } = Astro2.props;
  return renderTemplate`<html lang="es" data-astro-cid-ouamjn2i> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-ouamjn2i": true })}${renderHead()}</head> <body data-astro-cid-ouamjn2i> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-ouamjn2i": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-ouamjn2i": true })} </body></html>`;
}, "E:/Escritorio/www/renovar/src/layouts/MainLayout.astro", void 0);

const works = [
  {
    slug: "fumisem",
    client: "FUMISEM S.A.",
    title: "FUMISEM S.A.",
    description: "Fumisem S.A., uno de los criaderos porcinos más importantes de Santa Fe, necesitaba una solución energética eficiente para reducir su elevada demanda eléctrica. Diseñamos e instalamos un sistema solar On Grid de 290 kWp que cubre el 100 % del consumo de la planta, disminuyendo sus costos operativos y reforzando su compromiso con la innovación y la sustentabilidad en el sector agroindustrial.",
    location: "Villa Cañas – Santa Fe",
    type: "Industrial",
    imageCount: 15,
    technicalDetails: {
      kw: 290,
      panels: 600,
      system: "OnGrid",
      inverters: "3 GROWATT Trifásicos 80kW + 1 GROWATT Trifásico 50kW",
      panelModel: "600 TRINA SOLAR 575Wp",
      structure: "Coplanar sobre chapa"
    },
    performance: {
      annualProduction: 416483,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 176172,
      equivalentTrees: 8092.43
    }
  },
  {
    slug: "depaoli",
    client: "DEPAOLI & TROSCE",
    title: "DEPAOLI & TROSCE",
    description: "La constructora DePaoli & Trosce incorporó un sistema solar de 52,8 kWp en su sede de Ibarlucea, Santa Fe, con el objetivo de reducir su impacto ambiental y fortalecer su compromiso con la eficiencia energética. Esta instalación cubre la totalidad del consumo eléctrico de la empresa y se integra estéticamente a su estructura edilicia, diferenciándose en el rubro por su apuesta a la innovación y la sustentabilidad.",
    location: "Ibarlucea – Santa Fe",
    type: "Comercial",
    imageCount: 24,
    // Manteniendo el valor original si existía
    technicalDetails: {
      kw: 52.8,
      panels: 96,
      system: "OnGrid",
      inverters: "Solaxpower 50 kVA",
      panelModel: "96 AMERISOLAR 550Wp",
      structure: "Coplanar sobre chapa"
    },
    performance: {
      annualProduction: 81864,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 34628,
      equivalentTrees: 1590.65
    }
  },
  {
    slug: "centibox",
    client: "CENTIBOX S.A.",
    title: "CENTIBOX S.A.",
    description: "Centibox S.A., empresa especializada en gestión de archivos, eligió una solución híbrida de 15,4 kWp en su sede de Rosario, con una futura ampliación prevista para almacenamiento con baterías. El sistema actual les permite generar energía limpia y disminuir su dependencia de la red, garantizando ahorro y continuidad operativa en sus servicios clave.",
    location: "Rosario – Santa Fe",
    type: "Comercial",
    imageCount: 15,
    technicalDetails: {
      kw: 15.4,
      panels: 28,
      system: "Híbrido (sin baterías)",
      inverters: "DEYE Trifásico Híbrido 15 kW",
      panelModel: "28 JINKO SOLAR 550 Wp",
      structure: "Coplanar sobre chapa"
    },
    performance: {
      annualProduction: 23870,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 10097,
      equivalentTrees: 463.8
    }
  },
  {
    slug: "residencial-ibarlucea",
    client: "RESIDENCIAL IBARLUCEA",
    title: "Residencial en Ibarlucea",
    description: "Esta vivienda unifamiliar ubicada en Ibarlucea fue equipada con un sistema híbrido de 3,3 kWp, compuesto por 6 paneles RISEN y un inversor híbrido DEYE, junto a dos baterías RW-M5.3 Pro. Esta solución permite al hogar disponer de energía solar incluso durante la noche o ante cortes de suministro, brindando mayor autonomía, previsibilidad de costos y compromiso con el ambiente.",
    location: "Ibarlucea – Santa Fe",
    type: "Residencial",
    imageCount: 15,
    technicalDetails: {
      kw: 3.3,
      panels: 6,
      system: "Híbrido",
      inverters: "DEYE 6 kW",
      panelModel: "6 RISEN 550Wp",
      structure: "Triangular sobre losa"
    },
    performance: {
      annualProduction: null,
      consumptionCoverage: "No disponible"
    },
    environmentalImpact: {
      co2Avoided: null,
      equivalentTrees: null
    }
  },
  {
    slug: "arcoiris",
    client: "ARCOIRIS",
    title: "Supermercado Arcoiris",
    description: "El supermercado Arcoiris apostó por la eficiencia energética mediante la instalación de un sistema solar On Grid de 64,35 kWp en su sucursal de Las Parejas. Esta solución cubre la totalidad del consumo eléctrico de uno de sus suministros, generando un ahorro significativo y fortaleciendo su imagen como empresa comprometida con el cuidado ambiental.",
    location: "Las Parejas – Santa Fe",
    type: "Comercial",
    imageCount: 15,
    technicalDetails: {
      kw: 64.35,
      panels: 110,
      system: "OnGrid",
      inverters: "Trifásico GROWATT 50kW",
      panelModel: "110 ASTRO N5 585 Wp",
      structure: "Coplanar sobre techo parabólico"
    },
    performance: {
      annualProduction: 99795,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 42213,
      equivalentTrees: 1939.06
    }
  },
  {
    slug: "cade",
    client: "CADE",
    title: "CADE",
    description: "La empresa metalúrgica CADE incorporó un sistema solar On Grid de 32,2 kWp en su planta de Carcarañá. Este sistema cubre su consumo energético completo, reduciendo costos operativos y mejorando su competitividad en el sector industrial, al tiempo que promueve prácticas sustentables.",
    location: "Carcarañá – Santa Fe",
    type: "Industrial",
    imageCount: 15,
    technicalDetails: {
      kw: 32.2,
      panels: 56,
      system: "OnGrid",
      inverters: "Trifásico HUAWEI 30 kW",
      panelModel: "56 LONGI 575 Wp",
      structure: "Coplanar sobre techo parabólico"
    },
    performance: {
      annualProduction: 41692,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 17636,
      equivalentTrees: 810.09
    }
  },
  {
    slug: "hardfacing",
    client: "HARDFACING",
    title: "Hardfacing",
    description: "Hardfacing, ubicada en el Parque Industrial de San Lorenzo, implementó un sistema On Grid de 34,2 kWp con una estructura triangular para optimizar la captación solar en techos orientados al sur. Con esta mejora, la empresa asegura eficiencia energética y un fuerte compromiso ambiental.",
    location: "San Lorenzo – Santa Fe",
    type: "Industrial",
    imageCount: 7,
    // Manteniendo el valor original
    technicalDetails: {
      kw: 34.2,
      panels: 60,
      system: "OnGrid",
      inverters: "Trifásico HUAWEI 30 kW",
      panelModel: "60 LONGI 570 Wp",
      structure: "Triangular sobre chapa engrafada"
    },
    performance: {
      annualProduction: 53e3,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 22419,
      equivalentTrees: 1029.81
    }
  },
  {
    slug: "mostaza",
    client: "MOSTAZA",
    title: "Mostaza Rosario",
    description: "La cadena de restaurantes Mostaza decidió incorporar energía solar en su local de Rosario con un sistema On Grid de 34,5 kWp. Este sistema cubre el 30 % del consumo energético del establecimiento, generando ahorros directos en su factura eléctrica y reforzando su posicionamiento como empresa moderna y sustentable.",
    location: "Rosario – Santa Fe",
    type: "Comercial",
    imageCount: 7,
    // Manteniendo el valor original
    technicalDetails: {
      kw: 34.5,
      panels: 60,
      system: "OnGrid",
      inverters: "Trifásico HUAWEI 40 kW",
      panelModel: "60 LONGI 575 Wp",
      structure: "Coplanar sobre chapa"
    },
    performance: {
      annualProduction: 47549,
      consumptionCoverage: "30%"
    },
    environmentalImpact: {
      co2Avoided: 20113,
      equivalentTrees: 923.9
    }
  },
  {
    slug: "residencial-baigorria",
    client: "RESIDENCIAL BAIGORRIA",
    title: "Residencial en Granadero Baigorria",
    description: "Esta vivienda de Granadero Baigorria incorporó un sistema solar On Grid de 4,4 kWp que cubre su consumo energético total. El sistema está conectado a la red y permite inyectar excedentes, lo que se traduce en ahorro económico y en un mayor compromiso con el ambiente.",
    location: "Granadero Baigorria – Santa Fe",
    type: "Residencial",
    imageCount: 15,
    technicalDetails: {
      kw: 4.4,
      panels: 8,
      system: "OnGrid",
      inverters: "Monofásico GROWATT 3.6 kW",
      panelModel: "8 RISEN 550 Wp",
      structure: "RS10 sobre chapa"
    },
    performance: {
      annualProduction: 6820,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 2885,
      equivalentTrees: 132.52
    }
  },
  {
    slug: "oaisa",
    client: "OAISA",
    title: "OAISA",
    description: "La empresa química OAISA instaló un sistema solar On Grid de 17,55 kWp en su planta de Rosario. Gracias a una estructura triangular que reorienta los paneles hacia el norte, la instalación maximiza la captación solar, mejorando la eficiencia operativa y reduciendo su huella ambiental.",
    location: "Rosario – Santa Fe",
    type: "Comercial",
    imageCount: 15,
    technicalDetails: {
      kw: 17.55,
      panels: 30,
      system: "OnGrid",
      inverters: "Trifásico GROWATT 20 kW",
      panelModel: "30 JINKO SOLAR 585 Wp",
      structure: "Triangular sobre chapa"
    },
    performance: {
      annualProduction: 25493,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 10784,
      equivalentTrees: 495.34
    }
  },
  {
    slug: "shell-humberto-primo",
    client: "SHELL",
    title: "Estación de Servicio Shell",
    description: "Esta estación de servicio Shell, ubicada en Humberto Primo, incorporó un sistema fotovoltaico On Grid de 19,55 kWp para cubrir su consumo energético anual. La instalación representa un importante ahorro económico y una apuesta firme por la transición energética.",
    location: "Humberto Primo – Santa Fe",
    type: "Comercial",
    imageCount: 15,
    technicalDetails: {
      kw: 19.55,
      panels: 34,
      system: "OnGrid",
      inverters: "Trifásico HUAWEI 20 kW",
      panelModel: "34 LONGI 575 Wp",
      structure: "Coplanar sobre chapa autoportante"
    },
    performance: {
      annualProduction: 27323,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 11558,
      equivalentTrees: 530.9
    }
  },
  {
    slug: "distribuidora-tieppo",
    client: "DISTRIBUIDORA TIEPPO",
    title: "Distribuidora Tieppo",
    description: "Distribuidora Tieppo de alimentos, en su planta de Casilda, instaló un sistema solar On Grid de 40,6 kWp para abastecer toda su demanda energética. Esta acción reafirma su compromiso con la eficiencia operativa, la sostenibilidad y la reducción de la huella de carbono.",
    location: "Casilda – Santa Fe",
    type: "Comercial",
    imageCount: 15,
    technicalDetails: {
      kw: 40.6,
      panels: 70,
      system: "OnGrid",
      inverters: "Trifásico HUAWEI 40 kW",
      panelModel: "70 LONGI 580 Wp",
      structure: "Coplanar sobre chapa autoportante"
    },
    performance: {
      annualProduction: 56713,
      consumptionCoverage: "100%"
    },
    environmentalImpact: {
      co2Avoided: 23990,
      equivalentTrees: 1101.96
    }
  }
];
const getWorkBySlug = (slug) => {
  return works.find((work) => work.slug === slug);
};
const getAllWorks = () => {
  return works;
};

export { $$MainLayout as $, attr as a, getAllWorks as b, escape_html as e, getWorkBySlug as g, works as w };
