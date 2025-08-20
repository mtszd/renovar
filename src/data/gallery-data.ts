export interface GalleryImage {
  src: string;
  alt: string;
  galleryUrl: string;
  location: string;
  amount: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "/img/works/abraham/thumb/1.webp",
    alt: "Instalacion Abraham",
    galleryUrl: "/trabajos/abraham",
    location: "Funes",
    amount: "5 KW",
  },
  {
    src: "/img/works/alborada/thumb/1.webp",
    alt: "Instalacion alborada",
    galleryUrl: "/trabajos/alborada",
    location: "Piñero",
    amount: "33 KW",
  },
  {
    src: "/img/works/residencial-ibarlucea/thumb/1.webp",
    alt: "Instalacion residencial-ibarlucea",
    galleryUrl: "/trabajos/residencial-ibarlucea",
    location: "Ibarlucea",
    amount: "44 KW",
  },
  {
    src: "/img/works/depaoli/thumb/1.webp",
    alt: "Instalacion Depaoli & Trosce",
    galleryUrl: "/trabajos/depaoli",
    location: "Ibarlucea",
    amount: "57 KW",
  },
  {
    src: "/img/works/hardfacing/thumb/1.webp",
    alt: "Instalacion hardfacing",
    galleryUrl: "/trabajos/hardfacing ",
    location: "San Lorenzo",
    amount: "34 KW",
  },
  {
    src: "/img/works/mostaza/thumb/1.webp",
    alt: "Instalacion Mostaza",
    galleryUrl: "/trabajos/mostaza ",
    location: "Santa Fe",
    amount: "34 KW",
  },
];
