<script lang="ts">
    // Definimos los tipos para las encuestas disponibles
    type SurveyType = 'paneles-solares' | 'bombas-solares' | '';

    // Props que recibe el componente
    export let nextUrl: string;
    
    // Estado local
    let selectedSurvey: SurveyType = '';
    let isDisabled = true;

    // Objeto con las URLs correspondientes a cada tipo de encuesta
    const surveyUrls: Record<Exclude<SurveyType, ''>, string> = {
    'paneles-solares': '/surveys/paneles-solares/step-1',
    'bombas-solares': '/surveys/bombas-solares/step-1'
    };

    // Función que se ejecuta cuando cambia la selección
    function handleSurveyChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    selectedSurvey = select.value as SurveyType;
    
    // Actualizar el estado del botón y la URL
    isDisabled = selectedSurvey === '';
    if (!isDisabled) {
        nextUrl = surveyUrls[selectedSurvey as Exclude<SurveyType, ''>];
    }
    }

    // Suscribirse al evento change del select cuando el componente se monta
    let selectElement: HTMLSelectElement;
    
    function initializeSelect() {
    selectElement = document.getElementById('survey-select') as HTMLSelectElement;
    if (selectElement) {
        selectElement.addEventListener('change', handleSurveyChange);
    }
    }
    
    // Lifecycle hook para inicializar
    import { onMount } from 'svelte';
    
    onMount(() => {
    initializeSelect();
    return () => {
        // Limpieza al desmontar el componente
        if (selectElement) {
        selectElement.removeEventListener('change', handleSurveyChange);
        }
    };
    });
</script>

<button 
    class="start-survey-button"
    disabled={isDisabled}
    on:click={() => {
    if (!isDisabled) {
        window.location.href = nextUrl;
    }
    }}
>
    Empezar
</button>

<style>
.start-survey-button {
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

.start-survey-button:disabled {
    background-color: var(--color-neutral-300);
    cursor: not-allowed;
}

.start-survey-button:hover:not(:disabled) {
    background-color: var(--color-blue-500);
}
</style>