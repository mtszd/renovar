<script>
  import Rrss from '../../Rrss.svelte';
  import {fade, slide} from 'svelte/transition'

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
    
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
    
        <div transition:fade={{ delay: 200, duration: 200 }} class= "items">

          
          <a href="/">Cotizar Gratis</a>
          <a href="/">Productos</a>
          <a href="/">Red de Instaladores</a>
          
          <span>Soluciones energeticas</span>
          
          <a href="/">Viviendas</a>
          <a href="/">Negocios</a>
          <a href="/">Empresas</a>
          
          <span>Recursos</span>
          
          <a href="/">Blog y noticias</a>
          <a href="/">Guias de energia limpia</a>
          
          <span>Sobre Nosotros</span>
          
          <a href="/">Mision y valores</a>
          <a href="/">Contacto</a>
          
          <div>
          <Rrss/>
          </div>
          
        </div>
  </div>
  

{/if}



<style>
  

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

  .menu {
    display: flex;
    position: fixed;
    justify-content: center;
    top: 0;
    right: 0;
    height: 100vh;
    width: 80%;
    max-width: 400px;
    background-color: var(--color-primary);
    z-index: 100;
  }
  
  .menu .items{
    display: inherit;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    white-space: nowrap;
    
  }

  .menu .items div {
    margin-top: 20%;
  }

  .menu a{
      color: white;
      text-decoration: none;
      font-size: 1rem;
    }

  .menu span{
    font-size: 0.8rem;
    font-weight: bolder;
    color: var(--color-text-category);
    margin-top: 1rem;
  }
  
  .menu a, .menu span {
      text-transform: uppercase;
  }
  
  .menu a:first-child {
      background-color: var(--color-secondary);
      padding: 0.8rem 2rem;
      border-radius: 0.4rem;
      border: 1px solid var(--color-accent);
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