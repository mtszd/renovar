<script>
import {fade, slide} from 'svelte/transition';


let isOpen = false;

function openMenu() {
  isOpen = true;
}

function closeMenu() {
  isOpen = false;
}
</script>


<button class="menu__open-button" aria-label="Open menu" on:click={openMenu}>
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
          
          
          <a class="menu__link" href="#projects" type="button">Link 1</a>
          <a class="menu__link" href="#intereses" type="button">Link 2</a>
          <a class="menu__link" href="#lumber" type="button">Link 3</a>
          



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
  background-color: #323232;
  z-index: 100;
}

.menu__open-button {
  color: #727272;
}

.menu__close-button {
  position: absolute;
  top: 2rem;
  right: 3rem;
  color: var(--color-neutral-200);
}

.menu__items {
  display: flex;
  color: var(--color-neutral-100);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

/* .menu__items > div {
  margin-top: 0.5rem;
} */

.menu__link {
  color: var(--color-neutral-100);
  text-decoration: none;
  font-size: var(--font-size-base);
}

/* .menu__category {
  font-size: var(--font-size-small);
  font-weight: 400;
  margin-top: 1rem;
  text-transform: uppercase;
  color: rgb(255, 0, 0);
} */

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