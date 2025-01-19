<script lang="ts">
    let name = "";
    let email = "";
    let phone = "";
    let location = "";
    let message = "";
  
    async function submitForm() {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, location, message }),
      });
  
      const result = await res.json();
      alert(result.message);
    }
  </script>
  
  <form on:submit|preventDefault={submitForm}>
    <input type="text" bind:value={name} placeholder="Nombre y apellido" required />
    <input type="email" bind:value={email} placeholder="Correo" required />
    <input type="tel" bind:value={phone} placeholder="Teléfono" required />
    <input type="text" bind:value={location} placeholder="Localidad" />
    <textarea bind:value={message} placeholder="Consulta"></textarea>
    <button type="submit">Enviar</button>
  </form>
  
  <style>
    form {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 400px;
      margin: 2rem auto;
      padding: 1.5rem;
      background: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
  
    input, textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 1rem;
    }
  
    input:focus, textarea:focus {
      border-color: #007bff;
      outline: none;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  
    textarea {
      min-height: 120px;
      resize: vertical;
    }
  
    button {
      background: #007bff;
      color: white;
      font-size: 1rem;
      padding: 0.75rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
  
    button:hover {
      background: #0056b3;
    }
  
    @media (max-width: 576px) {
      form {
        max-width: 100%;
        padding: 1rem;
      }
    }
  </style>
  