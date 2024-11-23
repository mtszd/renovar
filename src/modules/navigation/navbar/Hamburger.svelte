<script>
import CtaButton from 'src/components/ui/CtaButton.svelte';
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
          
          <span class="menu__category">En esta pagina</span>
          
          <a class="menu__link" href="#projects" type="button">Tech Stack</a>
          <a class="menu__link" href="#intereses" type="button">Intereses</a>
          <a class="menu__link" href="#lumber" type="button">Lumber Jack</a>
          
          <span class="menu__category">Redes Personales</span>

          <div class="rrss-container">
              <a target="_blank" href="https://www.discord.gg/4NFk6TamAB" class="rrss-link">
                  <img src="/icons/x-dark.svg" alt="x-logo"/>
              </a>
              <a target="_blank" href="https://www.instagram.com/dager.32/" class="rrss-link">
                  <img src="/icons/instagram_dark.svg" alt="instagram-logo"/>
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/mariano-luis-villa/" class="rrss-link">
                <img src="/icons/linkedin.svg" alt="linkeding-logo"/>
              </a>
              <a target="_blank" href="https://github.com/MarianoVilla" class="rrss-link">
                  <img src="/icons/Github_dark.svg" alt="github-logo"/>
              </a>
          </div>

          <span class="menu__category">Contenido Principal</span>

          <div class="rrss-container">
              <a target="_blank" href="www.youtube.com/@DotDager" class="rrss-link">
                <img src="/icons/youtube.svg" alt="youtube-logo"/>
              </a>
              <a target="_blank" href="https://www.twitch.tv/dagerxiv" class="rrss-link">
                  <img src="/icons/twitch.svg" alt="twitch-logo"/>
              </a>
              <a target="_blank" href="https://www.tiktok.com/@elantrodedager" class="rrss-link">
                  <img src="/icons/tiktok.svg" alt="tiktok-logo"/>
              </a>
              <a target="_blank" href="https://www.discord.gg/4NFk6TamAB" class="rrss-link">
                  <img src="/icons/discord.svg" alt="discord-logo"/>
              </a>
          </div>

          <span class="menu__category">Contenido Musical</span>

          <div class="rrss-container">
            <a target="_blank" href="https://www.youtube.com/c/DagerMusic" class="rrss-link">
              <img src="/icons/youtube.svg" alt="youtube-logo"/>
            </a>
            <a target="_blank" href="https://open.spotify.com/intl-es/artist/6bkClBMJd4qKxJp0J5vHsz?si=mbfNHqvBT9SKSQ-ZNhXHJg&nd=1" class="rrss-link">
                <img src="/icons/spotify.svg" alt="spotify-logo"/>
            </a>
          </div>

          <span class="menu__category">Contenido variado</span>

          <div class="rrss-container">
            <a target="_blank" href="https://www.youtube.com/@DagerLive" class="rrss-link">
              <img src="/icons/youtube.svg" alt="youtube-logo"/>
            </a>
            <a target="_blank" href="https://www.youtube.com/c/DagerXIV" class="rrss-link">
              <img src="/icons/youtube.svg" alt="youtube-logo"/>
            </a>
          </div>


          <p>*Este boton no da su consentimiento*</p>
          <CtaButton/>
        </div>
  </div>
  

{/if}



<style>

p{
  font-size: var(--font-size-small);
  font-weight: 300;
  margin-top: 1rem;
  color: #823686;
  margin-bottom: 0.5rem;

}

.rrss-container {
    display: flex;
    align-items: center;
    gap:15px;
}

.rrss-link img {
    height: 20px;
    width: 20px;
    filter: grayscale(1);
}

.rrss-link img:hover {
    filter: grayscale(0);
}

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
  background-color: #3d103f;
  z-index: 100;
}

.menu__open-button {
  color: var(--color-neutral-200);
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

.menu__items > div {
  margin-top: 0.5rem;
}

.menu__link {
  color: var(--color-neutral-100);
  text-decoration: none;
  font-size: var(--font-size-base);
}

.menu__category {
  font-size: var(--font-size-small);
  font-weight: 400;
  margin-top: 1rem;
  text-transform: uppercase;
  color: rgb(255, 136, 0);
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