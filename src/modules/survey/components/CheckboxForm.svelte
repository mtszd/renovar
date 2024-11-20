<script lang="ts">
    import CheckboxInput from 'src/components/inputs/CheckboxInput.svelte';
    import { surveyStore } from '../stores/surveyStore';
    export let options: { label: string; value: string; imageUrl: string }[] = [];
    export let inputName: string = "";

    $: savedAnswers = $surveyStore[inputName] as string[] || [];

    function handleChange({ value, checked }: { value: string; checked: boolean }) {
    if (checked) {
        surveyStore.setAnswer(inputName, [...savedAnswers, value]);
    } else {
        surveyStore.setAnswer(inputName, savedAnswers.filter((answer) => answer !== value));
    }
    }
</script>

<form class="checkbox-group">
    {#each options as option}
    <CheckboxInput
        name={inputName}
        value={option.value}
        label={option.label}
        imageUrl={option.imageUrl}
        checked={savedAnswers.includes(option.value)}
        on:change={handleChange}
    />
    {/each}
</form>