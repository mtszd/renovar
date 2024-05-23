<script>
  import Rrss from '../../Rrss.svelte';
  import DropMenuContent from './DropMenuContent.svelte';
  import {fade, slide} from 'svelte/transition'

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    console.log("El menú se ha abierto/cerrado");
  }
</script>


<button aria-label="Toggle menu" on:click={toggleMenu}>
  {#if isOpen}
    <i class="fas fa-times"></i>
  {:else}
    <i class="fas fa-bars"></i>
  {/if}
</button>

{#if isOpen}
  <div transition:fade={{ delay: 50, duration: 200 }} class="overlay"></div>
  <div transition:slide={{ duration: 300, axis: 'x' }} class="menu">
    
      <DropMenuContent />
      <div class="rrss">
        <Rrss/>
      </div>
  
  </div>
{/if}



<style>
  .menu {
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 80%;
    max-width: 400px;
    background-color: var(--color-primary);
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    z-index: 100;
    }

  button {
    position: relative;
    background: none;
    border: none;
    color: var(--color-text-light);
    font-size: clamp(1.6rem, 5vw, 1.8rem);
    width: 4rem;
    height: 3rem;
    z-index: 110;
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

  .rrss{
    margin-top: 10%;
  }

</style>