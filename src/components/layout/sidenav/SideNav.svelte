<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store';
    import type { CollectionEntry } from 'astro:content';
    import {fade, slide} from 'svelte/transition'
    import { expoInOut } from 'svelte/easing';


    export let guides: CollectionEntry<'guide'>[];
    export let slug: string;

    let isOpenNav = false;
    let currentPageTitle = writable('');
    
    function toggleMenu() {
    isOpenNav = !isOpenNav;
    }

    onMount(() => {
    
        const titleElement = document.querySelector('h1');
    
        if (titleElement) {
            currentPageTitle.set(titleElement.innerText);
        } else {
            console.warn('No se encontró ningún titulo');
        }

    });

</script>

<style>

    .nav-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 4rem;
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

    i {
        color: #fff;
        font-size: 1.5rem;
    }

    .nav-bar .title {
    flex: 1;
    margin-left: 0.5rem;
    font-size: 1.05rem;
    overflow: hidden;
    text-overflow: hidden;
    white-space: nowrap;
    position: relative;
    color: var(--color-text-light);
    }

    .nav-bar .title::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 4rem;
    height: 100%;
    box-shadow: inset -30px 0px 10px -5px var(--color-primary);
    z-index: 5;
}

.menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    bottom: 0vh;
    left: 0;
    width: 100%;
    height: 60%;
    background-color: var(--color-primary);
    z-index: 5;
    }

    .menu button {
    display: block;
    margin: 1rem auto;
    background: none;
    border: none;
    color: var(--color-text-light);
    cursor: pointer;
    }

    .menu .links {
    width: 80%;
    font-size: 1.05rem;
    overflow: hidden;
    overflow-y: auto;
    text-overflow: hidden;
    white-space: nowrap;
    color: var(--color-text-light);
    }

    .menu .link {
    max-width: 60vw;
    color: var(--color-white);
    margin-bottom: 0.5rem;
    display: block;
    text-decoration: none;
    position: relative;
    }

    .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
    }



    @media (width > 576px) {
    
    }

</style>


<nav class="nav-bar" aria-label="Navegacion de los contenidos de la guia">

    <button on:click={toggleMenu} aria-controls="guide-menu">
        {#if isOpenNav}
            <i class="fa-solid fa-angle-up"></i>
        {:else}
            <i class="fas fa-angle-down"></i>
        {/if}
    </button>
    <div class="title" role="heading" aria-level="2">{$currentPageTitle}</div>
</nav>

{#if isOpenNav}
    <div transition:fade={{ delay: 50, duration: 200 }} class="overlay"></div>
    <div transition:slide={{ duration: 1000, axis: 'y', easing: expoInOut}} id="guide-menu" class="menu open" role="dialog" aria-modal="true">
        <button on:click={toggleMenu} aria-controls="guide-menu">
        <i class="fa-solid fa-angle-up"></i>
        </button>
        <div transition:fade={{ delay: 300, duration: 300 }} class="links" role="navigation">
        {#each guides as guide}
            <a class="link" href={`/guide/${guide.slug}`} aria-current={guide.slug === slug ? 'page' : undefined}>
            {guide.data.title}
            </a>
        {/each}
        </div>
    </div>
{/if}