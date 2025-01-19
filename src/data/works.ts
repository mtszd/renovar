export interface Work {
    slug: string;
    title: string;
    description: string;
    location: string;
    technicalDetails: {
        kw: number;
        panels: number;
        // otros detalles técnicos...
    };
    imageCount: number;
}

export const works: Work[] = [
    { 
        slug: "moss", 
        title: "Instalación Solar Moss", 
        description: "Sistema fotovoltaico instalado en...", 
        location: "Moss, Buenos Aires",
        technicalDetails: {
            kw: 5,
            panels: 12
        },
        imageCount: 20 
    },
    // ... más trabajos
];

export const getWorkBySlug = (slug: string): Work | undefined => {
    return works.find(work => work.slug === slug);
};

export const getAllWorks = (): Work[] => {
    return works;
};