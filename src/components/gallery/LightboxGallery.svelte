<script lang="ts">
    import { onMount } from "svelte";
    import PhotoSwipeLightbox from 'photoswipe/lightbox';
    import 'photoswipe/style.css';
    
    interface LightboxGalleryProps {
        galleryId: string;
        slug: string;
        imageCount: number;
    }

    export let galleryId: LightboxGalleryProps['galleryId'];
    export let slug: LightboxGalleryProps['slug'];
    export let imageCount: LightboxGalleryProps['imageCount'];
    
    let lightbox: PhotoSwipeLightbox;
    
    onMount(() => {
        lightbox = new PhotoSwipeLightbox({
            gallery: '#' + galleryId,
            children: 'a',
            pswpModule: () => import('photoswipe'),
            showHideAnimationType: 'fade'
        });
        
        lightbox.init();
        
        return () => {
            if (lightbox) {
                lightbox.destroy();
            }
        };
    });
</script>

<div class="gallery-container">
    <div class="gallery" id={galleryId}>
        {#each Array(imageCount) as _, i}
            <a
                href={`/img/works/${slug}/${i + 1}.webp`}
                data-pswp-width="1280"
                data-pswp-height="720"
                class="gallery-item"
            >
                <img 
                    src={`/img/works/${slug}/thumb/${i + 1}.webp`}
                    alt={`Instalación solar en ${slug}`}
                    loading="lazy"
                />
            </a>
        {/each}
    </div>
</div>

<style>
.gallery-container {
    width: 100%;
    padding: 0 1rem;
}

.gallery {
    column-count: 1; 
    column-gap: 1rem;
}

.gallery-item {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    break-inside: avoid;
}

.gallery-item:nth-child(3n) img {
    height: 300px;
}

.gallery-item:nth-child(4n) img {
    height: 400px;
}

.gallery-item:nth-child(5n) img {
    height: 500px;
}

.gallery-item img {
    width: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    transition: opacity 0.3s ease;
}

.gallery-item img:hover {
    opacity: 0.9;
}


@media (min-width: 768px) {
    .gallery {
        columns: 2;
    }
}

@media (min-width: 1024px) {
    .gallery {
        columns: 3;
    }
}

.gallery-item {
    display: block;
    margin-bottom: 1rem;
    break-inside: avoid;
}

.gallery-item img {
    width: 100%;
    height: auto;
    border-radius: 0.5rem;
    transition: opacity 0.3s ease;
}

.gallery-item img:hover {
    opacity: 0.9;
}
</style>