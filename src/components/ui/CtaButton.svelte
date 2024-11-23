<button on:click={playAudio}><span>No me toques</span></button>

<script>
let audio = new Audio('/sound/yamete.mp4');

function playAudio() {
    audio.play();
}
</script>

<style>
    
button {
    border: 0;
    text-decoration: none;
    border-radius: 8px;
    color: var(--color-text-light);
    background-image: linear-gradient(325deg,
    #C500E9, #ED00C0, #F80261, #FF1B90, #FE3B36, #FF6930, #FF6930, #FE3B36, #FF1B90, #F80261, #ED00C0, #C500E9);    
    display: flex;
    font-size: var(--font-size-small);
    background-size: 200%;
    padding: 4px;
    cursor: pointer;
    transition: 0.3s;
    max-width: 300px;
    
}

button span {
    font-size: var(--font-size-small);
    background-color: var(--color-neutral-500);
    padding: 10px 24px;
    border-radius: 6px;
    transition: 0.3s;
    font-weight: 500;
    letter-spacing: 0.05rem;

}

button:hover, button:focus {
    animation: animate-gradient 1s linear infinite; 
    will-change: background-position;

}

button:active {
    transform: scale(0.9);
}

</style>