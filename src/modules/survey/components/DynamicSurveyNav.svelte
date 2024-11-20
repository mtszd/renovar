<script lang="ts">
    import { onMount } from "svelte";
    import { surveyStore } from "../stores/surveyStore";
    import NextButton from "./NextButton.svelte";

    export let prevUrl: string;
    export let nextUrl: string;
    export let inputSelector: string;
    export let inputName: string;

    let isValid = false;

    // Función combinada para validar y actualizar URL
    function handleInputChange() {
        validateInput();
        setTimeout(updateNextUrl, 0); // Aseguramos que el DOM refleje los cambios
    }

    // Valida inputs de tipo radio
    function validateInput() {
        const checkedInput = document.querySelector(`${inputSelector}:checked`);
        isValid = !!checkedInput; // Es válido si hay un input seleccionado
    }

    // Actualiza la URL dinámicamente
    function updateNextUrl() {
        const selectedInput = document.querySelector<HTMLInputElement>(
            `${inputSelector}:checked`
        );
        if (selectedInput?.value === "techo") {
            nextUrl = "/surveys/paneles-solares/step-4b";
        } else {
            nextUrl = "/surveys/paneles-solares/step-5";
        }
    }

    // Detecta y aplica valores preexistentes en el store
    function initializeFromStore() {
        const storedValue = $surveyStore[inputName]; // Obtiene el valor del store
        if (storedValue) {
            // Simula la selección del input correspondiente
            const inputToSelect = document.querySelector<HTMLInputElement>(
                `${inputSelector}[value="${storedValue}"]`
            );
            if (inputToSelect) {
                inputToSelect.checked = true; // Marca el input
                validateInput(); // Actualiza la validez
                updateNextUrl(); // Ajusta la URL según el valor almacenado
            }
        }
    }

    onMount(() => {
        // Validación inicial desde el store
        setTimeout(() => {
            initializeFromStore();
        }, 0);

        // Registrar eventos
        const inputs = document.querySelectorAll<HTMLInputElement>(inputSelector);
        inputs.forEach((input) =>
            input.addEventListener("change", handleInputChange)
        );

        // Cleanup
        return () => {
            inputs.forEach((input) =>
                input.removeEventListener("change", handleInputChange)
            );
        };
    });
</script>

<nav class="survey-nav">
    <button
        class="prev-button"
        on:click={() => (window.location.href = prevUrl)}
    >
        Anterior
    </button>

    <NextButton {nextUrl} {isValid} />
</nav>

<style>
    .survey-nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    }

    .prev-button {
    padding: 0.75rem 1.5rem;
    font-size: var(--font-size-small);
    font-weight: 600;
    color: #727272;
    background-color: transparent;
    border: none;
    cursor: pointer;
    }

</style>