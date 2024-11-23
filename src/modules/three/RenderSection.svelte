<script lang="ts">

  import Model3D from './Model3D.svelte';


  type ModelType = 'guitar' | 'cat' | 'philosoraptor' | 'pickle';


  export let selectedModel: ModelType = 'guitar'; 
  export let reverse = false;


  const modelData: Record<ModelType, {
    title: string;
    description: string;
    badge: string;
    ambientLightIntensity: number;
    directionalLightIntensity: number;
    cameraDistanceMultiplier: number;
    cameraDistanceMultiplierMobile: number; 
  }> = {
    guitar: {
      title: 'El código del alma',
      description: 'Mis playlists incluyen desde Metal para debuggear hasta jazz para filosofar. Siempre en desarrollo, nunca estable.',
      badge: 'Música',
      ambientLightIntensity: 2.0,
      directionalLightIntensity: 2.0,
      cameraDistanceMultiplier: 0.8,
      cameraDistanceMultiplierMobile: 1.2,
    },
    cat: {
      title: 'Hackers silenciosos',
      description: 'Siempre ahí, testeando límites. Como cuando intentás entender por qué el código no funciona, y de repente saltan y rompen el teclado... para "ayudar".',
      badge: 'Gatos',
      ambientLightIntensity: 2.5,
      directionalLightIntensity: 4.0,
      cameraDistanceMultiplier: 1.5,
      cameraDistanceMultiplierMobile: 2,
    },
    philosoraptor: {
      title: 'El IDE de la existencia',
      description: 'Mientras otros debugean errores, yo debugeo ideas. Porque la vida no siempre tiene un try-catch, pero al menos podés lanzar una excepción.',
      badge: 'Filosofía',
      ambientLightIntensity: 5,
      directionalLightIntensity: 5.5,
      cameraDistanceMultiplier: 1.0,
      cameraDistanceMultiplierMobile: 1.5,
    },
    pickle: {
      title: 'NullReferenceException no es lo unico que tenés roto ',
      description: 'No todo en la vida son líneas de código y reflexiones profundas. A veces, necesitás un buen chiste de mierda para reiniciar el sistema.',
      badge: 'Pepinos',
      ambientLightIntensity: 2.0,
      directionalLightIntensity: 4.5,
      cameraDistanceMultiplier: 1,
      cameraDistanceMultiplierMobile: 1.5,
    },
  };

  $: currentData = modelData[selectedModel];
</script>


<div class="appear render-section">
    <div class="render-wrapper" class:reverse={reverse}>
    <div class="text-container">
        <span class="badge">{currentData.badge}</span>
        <h2>{currentData.title}</h2>
        <p>{currentData.description}</p>
    </div>
    <div class="model-container">
        <Model3D 
        selectedModel={selectedModel}
        ambientLightIntensity={currentData.ambientLightIntensity}
        directionalLightIntensity={currentData.directionalLightIntensity}
        cameraDistanceMultiplier={currentData.cameraDistanceMultiplier}
        />
    </div>
    <div class="model-container-mobile">
        <Model3D 
        selectedModel={selectedModel}
        ambientLightIntensity={currentData.ambientLightIntensity}
        directionalLightIntensity={currentData.directionalLightIntensity}
        cameraDistanceMultiplier={currentData.cameraDistanceMultiplierMobile}
      />
    </div>
    </div>
</div>

<style>

.badge{
  padding: 4rem;
  font-size: var(--font-size-small);
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  background-color: transparent;
  backdrop-filter: blur(20px);
  background-image: linear-gradient(
    120deg,
    rgba(255,136,0,0.3),
    rgba(233, 0, 245, 0.2)
  );
}

.render-section {
width: 80%;
margin: 0rem auto;
display: flex;
flex-direction: column;
align-items: center;
height: 450px;
}

.render-wrapper {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
}

.text-container {
text-align: left;
justify-content: end;
color: white;
flex: 1;
max-width: 500px;

}

.text-container h2 {
font-size: var(--font-size-large);
font-weight: 700;
line-height: 1.2;
margin-bottom: 1rem;
margin-top: 0.5rem;
}

.text-container p {
font-size: var(--font-size-base);
font-weight: 400;
line-height: 1.6;
max-width: 100%;
word-wrap: break-word;
}

.model-container {
justify-content: start;
height: 400px;
width: 400px;
overflow: hidden;
display: block; 
}

.model-container-mobile {
display: none; 
}

.render-wrapper.reverse {
    flex-direction: row-reverse;
}

@media (max-width: 992px) {
.render-wrapper {
    flex-direction: column-reverse !important;
    justify-content: center;
    gap: 2rem;
    height: 500px;
}

.text-container {
    text-align: center;
    max-width: 440px; 
}

.model-container {
    display: none; 
}

.model-container-mobile {
    display: block; 
    height: 300px; 
}
}

@media (max-width: 480px) {
.render-section {
    height: 450px; 
}

.text-container {
    max-width: 80%;
    margin-top: 2rem;
}

.text-container h2 {
    font-size: var(--font-size-base);
}

.text-container p {
    font-size: var(--font-size-small);
}

.model-container-mobile {
    height: 250px;
}
}

</style>