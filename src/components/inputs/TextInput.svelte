<script lang="ts">
    export let label: string;
    export let value: string = "";
    export let type: "text" | "email" | "tel" = "text";
    export let required: boolean = false;
    export let id: string;

    function handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    value = target.value;
    dispatch("change", value);
    }

    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<div class="input-group">
    <label for={id}>{label}{required ? "*" : ""}</label>
    <input
    {id}
    {type}
    {required}
    {value}
    on:input={handleInput}
    class="input"
    />
</div>

<style>
    .input-group {
    margin-bottom: 1rem;
    }
    .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    }
    label {
    display: block;
    margin-bottom: 0.5rem;
    }
</style>
