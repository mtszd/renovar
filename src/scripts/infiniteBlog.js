import { setupIntersectionObserver } from './intersectionObserver.svelte';
import { changeUrl } from './historyApi.js';
import { loadNewContent } from './loadContent.svelte';

let currentPost = 1;
const baseUrl = 'https://www.bbva.com/es/sostenibilidad/eficiencia-energetica-en-edificios-y-comunidades-de-vecinos/';

function loadNextPost() {
    currentPost += 1;
    const nextPostUrl = `${baseUrl}?post=${currentPost}`;
    loadNewContent(nextPostUrl);
    changeUrl(nextPostUrl);
}

async function loadNewContent(url) {
    const response = await fetch(url);
    const newContent = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(newContent, 'text/html');
    const newPost = doc.querySelector('.blog-post');
    document.querySelector('#content').appendChild(newPost);
}


setupIntersectionObserver(loadNextPost);
