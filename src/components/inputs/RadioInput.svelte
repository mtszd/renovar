<script lang="ts">  
  export let name: string = "";
  export let value: string = "";
  export let label: string = "";
  export let checked: boolean = false;
</script>

<label class="radio-label">
  {label}
  <input
      type="radio"
      {name}
      {value}
      {checked}
      class="radio-input"
      on:change
  />
  <span class="radio-custom">
    <i class="fa-solid fa-check"></i>
  </span>
</label>

<style>
  .radio-label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: var(--font-size-small);
    font-weight: 600;
    color: #727272;
    cursor: pointer;
    margin: 8px;
    user-select: none;
    padding: 14px 12px;
    background-color: #FFF;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    transition: all 0.3s ease;
    box-shadow: 2px 1px 2px rgba(0, 0, 0, 0.1);
  }

  .radio-input {
    display: none;
  }

  .radio-custom {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    border: 2px solid #f0f0f0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    background-color: #f9f9f9;
  }

  .radio-input:checked + .radio-custom .fa-check {
    display: block;
    font-size: 0.75rem;
    color: #FFF;
  }

  .fa-check {
    display: none;
  }

  .radio-input:checked ~ .radio-custom {
    border-color: #4a90e2;
    background-color: #4a90e2;
  }

  .radio-label:hover, .radio-label:hover .radio-custom {
    border-color: #79abe6;
  }

  .radio-label:has(.radio-input:checked) {
    border-color: #4a90e2;
    background-color: #edf5ff;
    color: #3957bb;
  }

</style>