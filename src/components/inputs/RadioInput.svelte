<script>
  export let name = "";
  export let value = "";
  export let label = "";
</script>

<label class="radio-label">
  <input
    type="radio"
    name={name}
    value={value}
    class="radio-input"
  />
  <span class="radio-custom"></span>
  {label}
</label>

<style>
  .radio-label {
    display: flex;
    align-items: center;
    font-size: var(--font-size-small);
    cursor: pointer;
    margin: 8px;
    user-select: none;
  }

  .radio-input {
    display: none;
  }

  .radio-custom {
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    border: 2px solid #4a90e2; 
    margin-right: 0.5em;
    display: inline-block;
    transition: all 0.3s ease;
    position: relative;
  }

  .radio-input:checked + .radio-custom::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0.6em;
    height: 0.6em;
    background-color: #4a90e2;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: background-color 0.3s ease;
  }

  .radio-label:hover .radio-custom {
    border-color: #357abd;
  }

</style>