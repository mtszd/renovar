export interface Work {
    slug: string;
    client: string;
    title: string;
    description: string;
    location: string;
    type: 'Residencial' | 'Comercial' | 'Industrial';
    imageCount: number;
    featured?: boolean;
    videoUrl?: string;
    technicalDetails: {
        kw: number;
        panels: number;
        system: string;
        inverters: string;
        panelModel: string;
        structure: string;
    };
    performance: {
        annualProduction: number | null;
        consumptionCoverage: string;
    };
    environmentalImpact: {
        co2Avoided: number | null;
        equivalentTrees: number | null;
    };
}

export const works: Work[] = [
    {
        slug: "fumisem",
        client: "FUMISEM S.A.",
        title: "FUMISEM S.A.",
        description: "Fumisem S.A., uno de los criaderos porcinos más importantes de Santa Fe, necesitaba una solución energética eficiente para reducir su elevada demanda eléctrica. Diseñamos e instalamos un sistema solar On Grid de 290 kWp que cubre el 100 % del consumo de la planta, disminuyendo sus costos operativos y reforzando su compromiso con la innovación y la sustentabilidad en el sector agroindustrial.",
        location: "Villa Cañas – Santa Fe",
        type: 'Industrial',
        imageCount: 15,
        technicalDetails: {
            kw: 290,
            panels: 600,
            system: "OnGrid",
            inverters: "3 GROWATT Trifásicos 80kW + 1 GROWATT Trifásico 50kW",
            panelModel: "600 TRINA SOLAR 575Wp",
            structure: "Coplanar sobre chapa",
        },
        performance: {
            annualProduction: 416483,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 176172,
            equivalentTrees: 8092.43,
        },
    },
    {
        slug: "depaoli",
        client: "DEPAOLI & TROSCE",
        title: "DEPAOLI & TROSCE",
        description: "La constructora DePaoli & Trosce incorporó un sistema solar de 52,8 kWp en su sede de Ibarlucea, Santa Fe, con el objetivo de reducir su impacto ambiental y fortalecer su compromiso con la eficiencia energética. Esta instalación cubre la totalidad del consumo eléctrico de la empresa y se integra estéticamente a su estructura edilicia, diferenciándose en el rubro por su apuesta a la innovación y la sustentabilidad.",
        location: "Ibarlucea – Santa Fe",
        type: 'Comercial',
        imageCount: 24, // Manteniendo el valor original si existía
        technicalDetails: {
            kw: 52.8,
            panels: 96,
            system: "OnGrid",
            inverters: "Solaxpower 50 kVA",
            panelModel: "96 AMERISOLAR 550Wp",
            structure: "Coplanar sobre chapa",
        },
        performance: {
            annualProduction: 81864,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 34628,
            equivalentTrees: 1590.65,
        },
    },
    {
        slug: "centibox",
        client: "CENTIBOX S.A.",
        title: "CENTIBOX S.A.",
        description: "Centibox S.A., empresa especializada en gestión de archivos, eligió una solución híbrida de 15,4 kWp en su sede de Rosario, con una futura ampliación prevista para almacenamiento con baterías. El sistema actual les permite generar energía limpia y disminuir su dependencia de la red, garantizando ahorro y continuidad operativa en sus servicios clave.",
        location: "Rosario – Santa Fe",
        type: 'Comercial',
        imageCount: 15,
        technicalDetails: {
            kw: 15.40,
            panels: 28,
            system: "Híbrido (sin baterías)",
            inverters: "DEYE Trifásico Híbrido 15 kW",
            panelModel: "28 JINKO SOLAR 550 Wp",
            structure: "Coplanar sobre chapa",
        },
        performance: {
            annualProduction: 23870,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 10097,
            equivalentTrees: 463.80,
        },
    },
    {
        slug: "residencial-ibarlucea",
        client: "RESIDENCIAL IBARLUCEA",
        title: "Residencial en Ibarlucea",
        description: "Esta vivienda unifamiliar ubicada en Ibarlucea fue equipada con un sistema híbrido de 3,3 kWp, compuesto por 6 paneles RISEN y un inversor híbrido DEYE, junto a dos baterías RW-M5.3 Pro. Esta solución permite al hogar disponer de energía solar incluso durante la noche o ante cortes de suministro, brindando mayor autonomía, previsibilidad de costos y compromiso con el ambiente.",
        location: "Ibarlucea – Santa Fe",
        type: 'Residencial',
        imageCount: 15,
        technicalDetails: {
            kw: 3.30,
            panels: 6,
            system: "Híbrido",
            inverters: "DEYE 6 kW",
            panelModel: "6 RISEN 550Wp",
            structure: "Triangular sobre losa",
        },
        performance: {
            annualProduction: null,
            consumptionCoverage: "No disponible",
        },
        environmentalImpact: {
            co2Avoided: null,
            equivalentTrees: null,
        },
    },
    {
        slug: "arcoiris",
        client: "ARCOIRIS",
        title: "Supermercado Arcoiris",
        description: "El supermercado Arcoiris apostó por la eficiencia energética mediante la instalación de un sistema solar On Grid de 64,35 kWp en su sucursal de Las Parejas. Esta solución cubre la totalidad del consumo eléctrico de uno de sus suministros, generando un ahorro significativo y fortaleciendo su imagen como empresa comprometida con el cuidado ambiental.",
        location: "Las Parejas – Santa Fe",
        type: 'Comercial',
        imageCount: 15,
        technicalDetails: {
            kw: 64.35,
            panels: 110,
            system: "OnGrid",
            inverters: "Trifásico GROWATT 50kW",
            panelModel: "110 ASTRO N5 585 Wp",
            structure: "Coplanar sobre techo parabólico",
        },
        performance: {
            annualProduction: 99795,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 42213,
            equivalentTrees: 1939.06,
        },
    },
    {
        slug: "cade",
        client: "CADE",
        title: "CADE",
        description: "La empresa metalúrgica CADE incorporó un sistema solar On Grid de 32,2 kWp en su planta de Carcarañá. Este sistema cubre su consumo energético completo, reduciendo costos operativos y mejorando su competitividad en el sector industrial, al tiempo que promueve prácticas sustentables.",
        location: "Carcarañá – Santa Fe",
        type: 'Industrial',
        imageCount: 15,
        technicalDetails: {
            kw: 32.20,
            panels: 56,
            system: "OnGrid",
            inverters: "Trifásico HUAWEI 30 kW",
            panelModel: "56 LONGI 575 Wp",
            structure: "Coplanar sobre techo parabólico",
        },
        performance: {
            annualProduction: 41692,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 17636,
            equivalentTrees: 810.09,
        },
    },
    {
        slug: "hardfacing",
        client: "HARDFACING",
        title: "Hardfacing",
        description: "Hardfacing, ubicada en el Parque Industrial de San Lorenzo, implementó un sistema On Grid de 34,2 kWp con una estructura triangular para optimizar la captación solar en techos orientados al sur. Con esta mejora, la empresa asegura eficiencia energética y un fuerte compromiso ambiental.",
        location: "San Lorenzo – Santa Fe",
        type: 'Industrial',
        imageCount: 7, // Manteniendo el valor original
        technicalDetails: {
            kw: 34.2,
            panels: 60,
            system: "OnGrid",
            inverters: "Trifásico HUAWEI 30 kW",
            panelModel: "60 LONGI 570 Wp",
            structure: "Triangular sobre chapa engrafada",
        },
        performance: {
            annualProduction: 53000,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 22419,
            equivalentTrees: 1029.81,
        },
    },
    {
        slug: "mostaza",
        client: "MOSTAZA",
        title: "Mostaza Rosario",
        description: "La cadena de restaurantes Mostaza decidió incorporar energía solar en su local de Rosario con un sistema On Grid de 34,5 kWp. Este sistema cubre el 30 % del consumo energético del establecimiento, generando ahorros directos en su factura eléctrica y reforzando su posicionamiento como empresa moderna y sustentable.",
        location: "Rosario – Santa Fe",
        type: 'Comercial',
        imageCount: 7, // Manteniendo el valor original
        technicalDetails: {
            kw: 34.50,
            panels: 60,
            system: "OnGrid",
            inverters: "Trifásico HUAWEI 40 kW",
            panelModel: "60 LONGI 575 Wp",
            structure: "Coplanar sobre chapa",
        },
        performance: {
            annualProduction: 47549,
            consumptionCoverage: "30%",
        },
        environmentalImpact: {
            co2Avoided: 20113,
            equivalentTrees: 923.90,
        },
    },
    {
        slug: "residencial-baigorria",
        client: "RESIDENCIAL BAIGORRIA",
        title: "Residencial en Granadero Baigorria",
        description: "Esta vivienda de Granadero Baigorria incorporó un sistema solar On Grid de 4,4 kWp que cubre su consumo energético total. El sistema está conectado a la red y permite inyectar excedentes, lo que se traduce en ahorro económico y en un mayor compromiso con el ambiente.",
        location: "Granadero Baigorria – Santa Fe",
        type: 'Residencial',
        imageCount: 15,
        technicalDetails: {
            kw: 4.40,
            panels: 8,
            system: "OnGrid",
            inverters: "Monofásico GROWATT 3.6 kW",
            panelModel: "8 RISEN 550 Wp",
            structure: "RS10 sobre chapa",
        },
        performance: {
            annualProduction: 6820,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 2885,
            equivalentTrees: 132.52,
        },
    },
    {
        slug: "oaisa",
        client: "OAISA",
        title: "OAISA",
        description: "La empresa química OAISA instaló un sistema solar On Grid de 17,55 kWp en su planta de Rosario. Gracias a una estructura triangular que reorienta los paneles hacia el norte, la instalación maximiza la captación solar, mejorando la eficiencia operativa y reduciendo su huella ambiental.",
        location: "Rosario – Santa Fe",
        type: 'Comercial',
        imageCount: 15,
        technicalDetails: {
            kw: 17.55,
            panels: 30,
            system: "OnGrid",
            inverters: "Trifásico GROWATT 20 kW",
            panelModel: "30 JINKO SOLAR 585 Wp",
            structure: "Triangular sobre chapa",
        },
        performance: {
            annualProduction: 25493,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 10784,
            equivalentTrees: 495.34,
        },
    },
    {
        slug: "shell-humberto-primo",
        client: "SHELL",
        title: "Estación de Servicio Shell",
        description: "Esta estación de servicio Shell, ubicada en Humberto Primo, incorporó un sistema fotovoltaico On Grid de 19,55 kWp para cubrir su consumo energético anual. La instalación representa un importante ahorro económico y una apuesta firme por la transición energética.",
        location: "Humberto Primo – Santa Fe",
        type: 'Comercial',
        imageCount: 15,
        technicalDetails: {
            kw: 19.55,
            panels: 34,
            system: "OnGrid",
            inverters: "Trifásico HUAWEI 20 kW",
            panelModel: "34 LONGI 575 Wp",
            structure: "Coplanar sobre chapa autoportante",
        },
        performance: {
            annualProduction: 27323,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 11558,
            equivalentTrees: 530.90,
        },
    },
    {
        slug: "distribuidora-tieppo",
        client: "DISTRIBUIDORA TIEPPO",
        title: "Distribuidora Tieppo",
        description: "Distribuidora Tieppo de alimentos, en su planta de Casilda, instaló un sistema solar On Grid de 40,6 kWp para abastecer toda su demanda energética. Esta acción reafirma su compromiso con la eficiencia operativa, la sostenibilidad y la reducción de la huella de carbono.",
        location: "Casilda – Santa Fe",
        type: 'Comercial',
        imageCount: 15,
        technicalDetails: {
            kw: 40.60,
            panels: 70,
            system: "OnGrid",
            inverters: "Trifásico HUAWEI 40 kW",
            panelModel: "70 LONGI 580 Wp",
            structure: "Coplanar sobre chapa autoportante",
        },
        performance: {
            annualProduction: 56713,
            consumptionCoverage: "100%",
        },
        environmentalImpact: {
            co2Avoided: 23990,
            equivalentTrees: 1101.96,
        },
    },
];

export const getWorkBySlug = (slug: string): Work | undefined => {
    return works.find(work => work.slug === slug);
};

export const getAllWorks = (): Work[] => {
    return works;
};

// Funciones útiles adicionales
export const getWorksByType = (type: string): Work[] => {
    return works.filter(work => work.type === type);
};

export const getFeaturedWorks = (): Work[] => {
    return works.filter(work => work.featured);
};

export const getWorksByLocation = (location: string): Work[] => {
    return works.filter(work => work.location.toLowerCase().includes(location.toLowerCase()));
};