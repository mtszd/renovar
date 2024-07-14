<script>
  import { onMount } from 'svelte';

  export let onIntersect;

  let intersectionObserver;

  function createObserver() {
    intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        onIntersect();
      }
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });
  }

  function observe(target) {
    if (intersectionObserver) {
      intersectionObserver.observe(target);
    }
  }

  onMount(() => {
    createObserver();
    observe(document.querySelector('#scroll-end'));
  });
</script>

<div id="scroll-end"></div>
