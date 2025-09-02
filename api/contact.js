const { Resend } = require("resend");

module.exports = async function handler(req, res) {
  try {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== "POST") {
      return res.status(405).json({
        success: false,
        error: "Method not allowed. Only POST requests are accepted.",
      });
    }

    console.log("=== Contact API Debug ===");
    console.log("Method:", req.method);
    console.log("Body:", JSON.stringify(req.body, null, 2));
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log(
      "RESEND_API_KEY length:",
      process.env.RESEND_API_KEY?.length || 0
    );
    console.log("TO_EMAIL:", process.env.TO_EMAIL);
    console.log("FROM_EMAIL:", process.env.FROM_EMAIL);

    // Validate environment variables
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY missing");
      return res.status(500).json({
        success: false,
        error: "Email service not configured",
        debug: "RESEND_API_KEY missing",
      });
    }

    if (!process.env.TO_EMAIL) {
      console.error("TO_EMAIL missing");
      return res.status(500).json({
        success: false,
        error: "Email service not configured",
        debug: "TO_EMAIL missing",
      });
    }

    // Validate request body
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        error: "All fields are required",
        debug: {
          name: !!name,
          email: !!email,
          subject: !!subject,
          message: !!message,
        },
      });
    }

    // Initialize Resend
    console.log("Initializing Resend...");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send email
    console.log("Sending email...");
    const { data, error } = await resend.emails.send({
      from: `UCF Alphas Contact <${
        process.env.FROM_EMAIL || "onboarding@resend.dev"
      }>`,
      to: [process.env.TO_EMAIL],
      subject: `New Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        success: false,
        error: "Failed to send email",
        debug: {
          error: typeof error === "object" ? JSON.stringify(error) : error,
        },
      });
    }

    console.log("Email sent successfully:", data);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: { id: data?.id },
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred",
      debug: {
        message: error?.message || String(error),
        stack: error?.stack?.substring(0, 500),
      },
    });
  }
};
