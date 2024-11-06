<script lang="ts">
    export let label: string;
    export let value: boolean = false;
    export let required: boolean = false;
    export let id: string;

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.checked;
    dispatch("change", value);
    }
</script>

<div class="checkbox-group">
    <label>
    <input
        type="checkbox"
        {id}
        checked={value}
        {required}
        on:change={handleChange}
    />
    {label}{required ? "*" : ""}
    </label>
</div>

<style>
    .checkbox-group {
    margin-bottom: 1rem;
    }
    label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    }
</style>
