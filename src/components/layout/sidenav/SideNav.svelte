<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import type { CollectionEntry } from 'astro:content';
  
    export let guides: CollectionEntry<'guide'>[];
    export let slug: string;
  
    let isMenuOpen = writable(false);
    let currentPageTitle = writable('');
  
    const toggleMenu = () => {
      isMenuOpen.update(value => !value);
    };
  
    onMount(() => {
      const titleElement = document.querySelector('h1');
      if (titleElement) {
        currentPageTitle.set(titleElement.innerText);
      }
    });
  </script>

<style>

    .nav-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    background-color: var(--color-primary);
    display: flex;
    align-items: center;
    padding: 0 1rem;
    }

    .nav-bar button {
    width: 3rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: var(--color-white);
    cursor: pointer;
    }

    .nav-bar .title {
    flex: 1;
    margin-left: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    position: relative;
    color: var(--color-white);
    }

    .nav-bar .title::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 100%;
    box-shadow: -5px 0 10px -5px var(--color-primary);
    }

    .menu {
    position: fixed;
    bottom: -100vh;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-primary);
    transition: bottom 0.3s ease;
    z-index: 10;
    }

    .menu.open {
    bottom: 0;
    }

    .menu button {
    display: block;
    margin: 1rem auto;
    background: none;
    border: none;
    color: var(--color-white);
    cursor: pointer;
    }

    .menu .links {
    height: calc(100% - 4rem);
    overflow-y: auto;
    padding: 1rem;
    }

    .menu .link {
    color: var(--color-white);
    margin-bottom: 0.5rem;
    display: block;
    text-decoration: none;
    position: relative;
    }

    /* .menu .link.active::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 100%;
    box-shadow: -5px 0 10px -5px var(--color-primary);
    } */

    .subtopics {
    padding-left: 1rem;
    }

    .subtopic {
    margin-bottom: 0.25rem;
    }

    /* .link i {
    margin-left: 0.5rem;
    cursor: pointer;
    } */

    .link.active::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 1rem;
    height: 100%;
    box-shadow: -5px 0 10px -5px var(--color-primary);
    }

    @media (min-width: 768px) {
    .nav-bar {
        height: 4rem;
    }

    .nav-bar button {
        width: 4rem;
        height: 4rem;
    }

    .menu {
        bottom: -100vh;
    }

    .menu.open {
        bottom: 0;
    }

    .menu button {
        margin: 2rem auto;
    }

    .menu .links {
        padding: 2rem;
    }

    /* .link i {
        margin-left: 1rem;
    } */
    }
</style>


<nav class="nav-bar" aria-label="Main Navigation">
    <button on:click={toggleMenu} aria-expanded={$isMenuOpen} aria-controls="guide-menu">
      <i class={`fa-solid fa-angle-${$isMenuOpen ? 'up' : 'down'}`}></i>
    </button>
    <div class="title" role="heading" aria-level="1">{$currentPageTitle}</div>
  </nav>
  
  <div id="guide-menu" class="menu { $isMenuOpen ? 'open' : ''}" role="dialog" aria-modal="true">
    <button on:click={toggleMenu} aria-expanded={!$isMenuOpen} aria-controls="guide-menu">
      <i class="fa-solid fa-angle-up"></i>
    </button>
    <div class="links" role="navigation">
      {#each guides as guide}
        <a class="link" href={`/guide/${guide.slug}`} aria-current={guide.slug === slug ? 'page' : undefined}>
          {guide.data.title}
        </a>
      {/each}
    </div>
  </div>