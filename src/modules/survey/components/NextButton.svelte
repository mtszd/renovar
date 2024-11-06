<script lang="ts">
    // Props
    export let nextUrl: string;
    export let isValid = false;

    // Handler para la navegación
    function handleNavigation() {
        if (isValid) {
            window.location.href = nextUrl;
    }
    }
</script>

<button 
    class="next-button"
    disabled={!isValid}
    on:click={handleNavigation}
>
    Siguiente
</button>


<style>
.next-button {
    border: 0;
    border-radius: 4px;
    color: var(--color-text-light);
    background-color: var(--color-blue-400);
    font-size: var(--font-size-small);
    padding: 0.5rem 1rem;
    cursor: pointer;
    max-width: 300px;
    transition: background-color 0.3s, transform 0.2s ease-in-out;
}

.next-button:disabled {
    background-color: var(--color-neutral-300);
    cursor: not-allowed;
}

.next-button:hover:enabled {
    background-color: var(--color-blue-500);
}

.next-button:active:enabled {
    transform: scale(0.98);
}
</style>
