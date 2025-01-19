import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { name, email, phone, location, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: import.meta.env.EMAIL_USER,
      to: "destinatario@example.com",
      subject: "Nuevo mensaje del formulario de contacto",
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Email enviado" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error al enviar el email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
