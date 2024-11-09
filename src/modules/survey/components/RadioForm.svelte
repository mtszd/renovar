<script lang="ts">
    import RadioInput from "src/components/inputs/RadioInput.svelte";

    export let options: { value: string, label: string }[] = [];
    export let inputName: string = "";

</script>

<form class="radio-group">
    {#each options as { value, label }}
        <RadioInput 
            name={inputName} 
            value={value} 
            label={label} 
        />
    {/each}
</form> 

<style>
    .radio-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}
</style>
