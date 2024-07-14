<script>
    import { changeUrl } from '../scripts/historyApi.js';
  
    export let url;
  
    async function loadNewContent() {
      const response = await fetch(url);
      const newContent = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(newContent, 'text/html');
      const newPost = doc.querySelector('.blog-post');
      document.querySelector('#content').appendChild(newPost);
      changeUrl(url);
    }
  </script>
  
  <button on:click={loadNewContent}>Load More</button>
  