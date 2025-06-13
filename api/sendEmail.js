// pages/api/sendEmail.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Daniel Kr Brahma <brahmadanielkr@gmail.com>",
        to: "brahmadanielkr@gmail.com", // where YOU want to receive the message
        subject: `New Contact Form Message from ${name}`,
        html: `
          <h3>New message received:</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      console.error(data);
      res.status(500).json({ error: "Failed to send email" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
