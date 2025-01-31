import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();
    const username = formData.get('username')?.toString();

    if (!email || !username) {
      return new Response(JSON.stringify({ 
        error: 'Email and username are required' 
      }), { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Renovar <mztade@gmail.com>",
      to: [email],
      subject: "¡Bienvenido!",
      html: `
        <h1>¡Hola ${username}!</h1>
        <p>Este es un email de prueba enviado desde nuestra aplicación.</p>
      `
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error procesando la solicitud' }), { 
      status: 500 
    });
  }
};