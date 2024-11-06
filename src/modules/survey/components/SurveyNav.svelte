<script lang="ts">
    import NextButton from './NextButton.svelte';
    import { onMount } from 'svelte';
    import type { InputType } from 'src/modules/survey/types/InputType';

    // Props
    export let prevUrl: string;
    export let nextUrl: string;
    export let inputType: InputType;
    export let inputSelector: string;

    let isValid = false;

    // Función para validar inputs de tipo radio
    function validateRadio(): boolean {
        const radioInputs = document.querySelectorAll(`${inputSelector}:checked`);
        return radioInputs.length > 0;
    }

    // Función para validar inputs de tipo checkbox
    function validateCheckbox(): boolean {
        const checkboxInputs = document.querySelectorAll(`${inputSelector}:checked`);
        return checkboxInputs.length > 0;
    }

    // Función para validar inputs de texto y textarea
    function validateText(): boolean {
        const textInput = document.querySelector(inputSelector) as HTMLInputElement | HTMLTextAreaElement | null;
        return Boolean(textInput?.value.trim());
    }

    // Función para validar input file
    function validateFile(): boolean {
        const fileInput = document.querySelector(inputSelector) as HTMLInputElement | null;
        return Boolean(fileInput?.files && fileInput.files.length > 0);
    }

    // Función principal de validación
    function validateInput(): void {
        switch (inputType) {
            case 'radio':
            isValid = validateRadio();
            break;
            case 'checkbox':
            isValid = validateCheckbox();
            break;
            case 'text':
            case 'textarea':
            isValid = validateText();
            break;
            case 'file':
            isValid = validateFile();
            break;
            default:
            isValid = false;
        }
    }

    // Setup de los event listeners según el tipo de input
    function setupValidation() {
        const inputs = document.querySelectorAll(inputSelector);
        
        inputs.forEach(input => {
            switch (inputType) {
            case 'radio':
            case 'checkbox':
                input.addEventListener('change', validateInput);
                break;
            case 'text':
            case 'textarea':
                input.addEventListener('input', validateInput);
                break;
            case 'file':
                input.addEventListener('change', validateInput);
                break;
            }
        });
    }

    onMount(() => {
        setupValidation();
        // Validación inicial
        validateInput();

        // Cleanup
        return () => {
            const inputs = document.querySelectorAll(inputSelector);
            inputs.forEach(input => {
            input.removeEventListener('change', validateInput);
            input.removeEventListener('input', validateInput);
            });
        };
    });
</script>

<nav class="survey-nav">
    <button 
    class="prev-button"
    on:click={() => window.location.href = prevUrl}
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
    color: var(--color-text-dark);
    background-color: transparent;
    border: none;
    cursor: pointer;
    }

</style>