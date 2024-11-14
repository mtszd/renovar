<script lang="ts">
    import RadioInput from "src/components/inputs/RadioInput.svelte";

    export let options: string [] = [];
    export let inputName: string = "";

</script>

<form class="radio-group">
    {#each options as options}
        <RadioInput 
            name={inputName} 
            value={options} 
            label={options} 
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