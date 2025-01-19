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
  