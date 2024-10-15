<script>
import Rrss from '../../../components/brand/Rrss.svelte';
import SurveyButton from 'src/components/ui/SurveyButton.svelte';
import {fade, slide} from 'svelte/transition';

let isOpen = false;

function openMenu() {
  isOpen = true;
}

function closeMenu() {
  isOpen = false;
}
</script>


<button aria-label="Open menu" on:click={openMenu}>
  <i class="fas fa-bars"></i>
</button>

{#if isOpen}

  <div transition:fade={{ delay: 50, duration: 200 }} class="overlay" on:click={closeMenu} role="button" 
  tabindex="0" on:keydown={(e) => e.key === 'Enter' && closeMenu()}></div>

  <div transition:slide={{ duration: 300, axis: 'x' }} class="menu">
    
        <div transition:fade={{ delay: 200, duration: 200 }} class= "menu__items">

          <button class="menu__close-button" aria-label="Close menu" on:click={closeMenu}>
            <i class="fas fa-times"></i>
          </button>
          
          <SurveyButton/>
          
          <span class="menu__category">Soluciones energeticas</span>
          
          <a class="menu__link" href="/">Viviendas</a>
          <a class="menu__link" href="/">Negocios</a>
          <a class="menu__link" href="/">Empresas</a>
          
          <span class="menu__category">Recursos</span>
          
          <a class="menu__link" href="/">Informacion de productos</a>
          <a class="menu__link" href="/">Guias de energia limpia</a>
          <a class="menu__link" href="/">Blog</a>
          <a class="menu__link" href="/">Noticias</a>
          
          <span class="menu__category">Sobre Nosotros</span>
          <a class="menu__link" href="/">Red de Instaladores</a>
          <a class="menu__link" href="/">Contacto</a>
          
          <div style="--icon-color: var(--color-neutral-400);">
          <Rrss/>
          </div>
          
        </div>
  </div>
  

{/if}



<style>

button {
  background: none;
  border: none;
  font-size: var(--font-size-medium);
}

/* Estilos del menú */
.menu {
  display: flex;
  position: fixed;
  justify-content: center;
  top: 0;
  right: 0;
  height: 100vh;
  width: 80%;
  max-width: 400px;
  background-color: var(--color-neutral-100);
  z-index: 100;
}

.menu__close-button {
  position: absolute;
  top: 1rem;
  right: 2rem;
  color: var(--color-neutral-400);
}

.menu__items {
  display: flex;
  color: var(--color-neutral-300);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  white-space: nowrap;
}

.menu__items > div {
  margin-top: 3rem;
}

.menu__link {
  color: var(--color-neutral-400);
  text-decoration: none;
  font-size: var(--font-size-base);
}

.menu__category {
  font-size: var(--font-size-small);
  font-weight: bolder;
  margin-top: 1rem;
  text-transform: uppercase;
  color: var(--color-green-300);
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 90;
}
  
</style>