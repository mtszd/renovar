<script lang="ts">
  import type { Work } from 'src/data/works.ts';
  import WorkCard from 'src/modules/works/components/WorkCard.svelte';

  export let images: Work[] = [];
</script>

{#if images.length > 0}
  <div class="gallery-container">

    <p>Visita nuestra galería y descubre cómo transformamos ideas en soluciones reales.</p>
    

    <div class="slider-wrapper">
      <div
        class="slider"
        style="--width: 240px; --height: 240px; --quantity: {images.length};"
      >
        <div class="list">
          {#each images as image, i}
            <div class="item" style="--position: {i + 1}">
              <WorkCard work={image} href={`/trabajos/${image.slug}`} showPower={false}/>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <a class="button" href="/trabajos">ver galería completa</a>
  </div>
{/if}

<style>
  .gallery-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    margin: 4rem auto;
    border-radius: 100px;
  }

  p {
    font-size: var(--font-size-large);
    line-height: 1.5;
    text-align: center;
    max-width: 1080px;
  }

  .button {
    padding: 10px 20px;
    margin-bottom: 4rem;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: #007BFF;
    text-decoration: none;
    border-radius: 5px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  .slider-wrapper {
    width: 90vw;
    max-width: calc(var(--width) * var(--quantity) + 40px);
    margin: 0 auto;
  }

  .slider {
    width: 100%;
    height: var(--height);
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      transparent,
      #000 5% 95%,
      transparent
    );
  }

  .slider .list {
    display: flex;
    width: 100%;
    min-width: calc(var(--width) * var(--quantity));
    position: relative;
  }

  .slider .list .item {
    width: var(--width);
    height: var(--height);
    position: absolute;
    left: 100%;
    animation: autoRun 52s linear infinite;
    animation-delay: calc(
      (52s / var(--quantity)) * (var(--position) - 1) - 52s
    ) !important;
  }

  @keyframes autoRun {
    from {
      left: 100%;
    }
    to {
      left: calc(var(--width) * -1);
    }
  }

  .slider:hover .item {
    animation-play-state: paused;
  }

  @media (min-width: 992px) {
    .slider-wrapper {
      width: 60vw;
      min-width: 800px;
    }
  }
</style>
