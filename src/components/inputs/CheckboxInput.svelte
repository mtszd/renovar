<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let name: string = "";
    export let value: string = "";
    export let label: string = "";
    export let imageUrl: string = "";
    export let checked: boolean = false;

    const dispatch = createEventDispatcher();

    function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    dispatch('change', { value: target.value, checked: target.checked });
    }
</script>

<label class="checkbox-option">
    <input
    type="checkbox"
    {name}
    {value}
    bind:checked
    on:change={handleChange}
    class="hidden-checkbox"
    />
    <div class="custom-checkbox">
    <img src={imageUrl} alt={label} />
    <span>{label}</span>
    </div>
</label>

<style>
    .hidden-checkbox {
    display: none;
    }

    .checkbox-option {
    display: inline-block;
    cursor: pointer;
    transition: transform 0.2s ease;
    }

    .custom-checkbox {
    border: 2px solid transparent;
    padding: 5px;
    text-align: center;
    border-radius: 8px;
    transition: border-color 0.2s ease;
    }

    .custom-checkbox img {
    width: 100px;
    height: 100px;
    border-radius: 8px;
    object-fit: cover;
    }

    .hidden-checkbox:checked + .custom-checkbox {
    border-color: #007bff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .custom-checkbox span {
    display: block;
    margin-top: 8px;
    font-size: 14px;
    color: #333;
    }
</style>
  