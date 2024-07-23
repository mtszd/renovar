<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
  
    export let guides: { slug: string; title: string }[];
    export let currentSlug: string;
  
    const dispatch = createEventDispatcher<{
      loadMore: { nextSlug: string }
    }>();
  
    let observer: IntersectionObserver;
    let currentIndex = guides.findIndex(g => g.slug === currentSlug);
  
    onMount(() => {
      observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && currentIndex < guides.length - 1) {
          dispatch('loadMore', { nextSlug: guides[currentIndex + 1].slug });
          currentIndex++;
        }
      }, { rootMargin: '200px' });
  
      const target = document.getElementById('infinite-scroll-trigger');
      if (target) observer.observe(target);
  
      return () => {
        if (observer) observer.disconnect();
      };
    });
  </script>
  
  <div id="infinite-scroll-trigger" style="height: 1px;"></div>
  