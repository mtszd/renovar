<script lang="ts">
    import RadioInput from "src/components/inputs/RadioInput.svelte";
    import { surveyStore } from '../stores/surveyStore';

    export let options: string[] = [];
    export let inputName: string = "";

    $: savedAnswer = $surveyStore[inputName] as string;

    function handleChange(event: Event) {
        const target = event.target as HTMLInputElement;
        surveyStore.setAnswer(inputName, target.value);
    }
</script>

<form class="radio-group">
    {#each options as option}
        <RadioInput 
            name={inputName} 
            value={option} 
            label={option}
            checked={savedAnswer === option}
            on:change={handleChange}
        />
    {/each}
</form>