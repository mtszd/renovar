<!-- src/components/HeroForm.svelte -->
<script lang="ts">
    let email = '';
  
    function handleSubmit() {
      // Handle form submission
      console.log('Submitted email:', email);
      email = '';
    }
  </script>
  
  <form on:submit|preventDefault={handleSubmit} class="hero-form">
    <input type="email" placeholder="Enter your email" bind:value={email} />
    <button type="submit">Sign up</button>
  </form>
  
  <style>
    .hero-form {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  
    input {
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      width: 300px;
    }
  
    button {
      background-color: #fff;
      color: #333;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s;
    }
  
    button:hover {
      background-color: #f0f0f0;
    }
  </style>