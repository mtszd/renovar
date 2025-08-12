<script lang="ts">
  import type { Work } from 'src/data/works.ts';

  export let work: Work;
  export let href: string | undefined = undefined;
  export let showPower: boolean = true;


  $: imageSrc = work ? `img/works/${work.slug}/thumb/1.webp` : '';
  $: [city, province] = work ? work.location.split('–').map(s => s.trim()) : ['', ''];
  $: power = work ? work.technicalDetails.kw : 0;
</script>

{#if work && href}
    <a {href} class="work-card">
      <img class="work-card__image" src={imageSrc} alt={work.title} />
        <div class="work-card__overlay-top">
            <div class="work-card__location">
              <i class="fa-solid fa-location-dot" style="font-size: var(--font-size-medium);"></i>
              <div class="location-text__wrapper">
                  <span class="localidad">{city}</span>
                  <span class="provincia">{province}</span>
              </div>
            </div>
            {#if showPower}
            <div class="work-card__power">
              <i class="fa-solid fa-bolt" style="color:goldenrod"></i> 
              <span class="power-value">{power}</span> KWp
            </div>
            {/if}
          </div>

          <div class="work-card__overlay-bottom">
            <div class="work-card__client">
              <div class="work-card__client-avatar">
                {work.title.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2)}
              </div>
              <div class="work-card__client-info">
                <h3 class="work-card__client-name">{work.title}</h3>
                <p class="work-card__client-type">{work.type || 'Proyecto'}</p>
              </div>
            </div>
          </div>
    </a>

{/if}

<style>
.work-card {
  position: relative;
  aspect-ratio: 1;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  background: var(--color-bg-card);
  box-shadow: var(--shadow-md);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--color-neutral-200);
}

.work-card:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: var(--shadow-xl);
}

.work-card:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Imagen de fondo */
.work-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.work-card:hover .work-card__image {
  transform: scale(1.05);
}

/* Overlay superior (información técnica) - Oculto por defecto */
.work-card__overlay-top {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-md);
  background: linear-gradient(
    to bottom,
    var(--color-bg-overlay) 0%,
    rgba(0, 0, 0, 0.4) 70%,
    transparent 100%
  );
  opacity: 0;
  transform: translateY(-10px);
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.work-card:hover .work-card__overlay-top {
  opacity: 1;
  transform: translateY(0);
}

/* Overlay inferior (información del cliente) - Siempre visible */
.work-card__overlay-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--spacing-md);
  background: linear-gradient(
    to top,
    var(--color-bg-overlay) 0%,
    rgba(0, 0, 0, 0.6) 70%,
    transparent 100%
  );
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

/* Información técnica en overlay superior */
.work-card__location {
  font-family: var(--font-family-text);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.location-text__wrapper {
  display: flex;
  flex-direction: column-reverse;
  justify-content:start;
  align-items: flex-start;
}
.work-card__location::before {
  font-size: var(--font-size-medium);
}

.work-card__power {
  font-family: var(--font-family-text);
  font-size: var(--font-size-medium);
  font-weight: var(--font-weight-semibold);
  color: #dadada;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.work-card__power::before {
  font-size: var(--font-size-medium);
}

  .localidad {
    font-weight: 600;
  }

  .provincia {
    font-weight: 300;
    color: #dadada;
  }
/* Información del cliente en overlay inferior */
.work-card__client {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex: 1;
}

.work-card__client-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--color-primary);
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-family-text);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-semibold);
  flex-shrink: 0;
}

.work-card__client-info {
  flex: 1;
  min-width: 0;
}

.work-card__client-name {
  font-family: var(--font-family-text);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-white);
  margin: 0;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.work-card__client-type {
  font-family: var(--font-family-text);
  font-size: var(--font-size-xsmall);
  color: var(--color-text-muted);
  margin: 0;
  line-height: 1.2;
}

</style>