<script lang="ts">
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


  export let selectedModel: 'guitar' | 'cat' | 'philosoraptor' | 'pickle' = 'pickle';
  export let ambientLightIntensity: number = 2.2;
  export let directionalLightIntensity: number = 4.0;
  export let rotationSpeed: number = 0.01;
  export let cameraDistanceMultiplier: number = 1.5; 

  let container: HTMLDivElement | null = null;
  let model: THREE.Object3D | null = null;

  const modelPaths: Record<'guitar' | 'cat' | 'philosoraptor' | 'pickle', string> = {
    guitar: '/models/guitar.glb',
    cat: '/models/cat.glb',
    philosoraptor: '/models/philosoraptor.glb',
    pickle: '/models/pickle.glb',
  };


  let isMouseDown = false;
  let previousMousePosition = { x: 0, y: 0 };

  onMount(() => {
    if (!container) return;


    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true para fondo transparente
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);


    renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, ambientLightIntensity);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, directionalLightIntensity);
    directionalLight.position.set(2, 5, 3);
    scene.add(directionalLight);


    const loader = new GLTFLoader();
    loader.load(
      modelPaths[selectedModel],
      (gltf) => {
        model = gltf.scene;
        scene.add(model);


        const boundingBox = new THREE.Box3().setFromObject(model);
        const size = boundingBox.getSize(new THREE.Vector3());
        const maxSize = Math.max(size.x, size.y, size.z);
        const distance = maxSize * 2;
        camera.position.set(0, maxSize / 6, distance * cameraDistanceMultiplier);
        camera.lookAt(0, 0, 0);
      }
    );

    container!.addEventListener('mousedown', (event) => {
      isMouseDown = true;
      previousMousePosition = { x: event.clientX, y: event.clientY };
      container!.style.cursor = 'grabbing';
    });

    container.addEventListener('mousemove', (event) => {
      if (!isMouseDown || !model) return;

      const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y,
      };

      model.rotation.y += deltaMove.x * 0.01;
      model.rotation.x += deltaMove.y * 0.01;


      model.rotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, model.rotation.x));

      previousMousePosition = { x: event.clientX, y: event.clientY };
    });

    container.addEventListener('mouseup', () => {
      isMouseDown = false;
      container!.style.cursor = 'grab';
    });


    window.addEventListener('resize', () => {
      if (container) {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }
    });


    function animate() {
      requestAnimationFrame(animate);
      if (model) model.rotation.y += rotationSpeed;
      renderer.render(scene, camera);
    }
    animate();
  });
</script>

<div bind:this={container} class="model-container"></div>

<style>
  .model-container {
    width: 400px;
    height: 400px;
    position: relative;
    overflow: visible;
    cursor: grab;
  }

  .model-container:active {
    cursor: grabbing;
  }
</style>
