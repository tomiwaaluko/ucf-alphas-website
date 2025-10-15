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
        error: "Email service not configured. Please contact the administrator.",
        debug: "RESEND_API_KEY is not set in environment variables",
      });
    }

    if (!process.env.TO_EMAIL) {
      console.error("TO_EMAIL missing");
      return res.status(500).json({
        success: false,
        error: "Email service not configured. Please contact the administrator.",
        debug: "TO_EMAIL is not set in environment variables",
      });
    }

    if (!process.env.FROM_EMAIL) {
      console.error("FROM_EMAIL missing - will use default");
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

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: "Invalid email format",
      });
    }

    // Initialize Resend
    console.log("Initializing Resend...");
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Prepare the from email - MUST be a verified domain in Resend
    // If using a custom domain, use: `UCF Alphas Contact <noreply@yourdomain.com>`
    // If using Resend's default domain, use: `onboarding@resend.dev`
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";
    
    console.log("Attempting to send email from:", fromEmail);
    console.log("Sending to:", process.env.TO_EMAIL);

    // Send email
    console.log("Sending email...");
    const { data, error } = await resend.emails.send({
      from: `UCF Alphas Contact <${fromEmail}>`,
      to: [process.env.TO_EMAIL],
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #000; padding: 30px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: #fbbf24; text-align: center; margin: 0; font-size: 28px;">
              New Contact Form Submission
            </h1>
          </div>
          
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #333; border-bottom: 2px solid #fbbf24; padding-bottom: 10px;">
              Contact Details
            </h2>
            
            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Name:</strong>
              <p style="margin: 5px 0; color: #333; font-size: 16px;">${name}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Email:</strong>
              <p style="margin: 5px 0; color: #333; font-size: 16px;">
                <a href="mailto:${email}" style="color: #fbbf24; text-decoration: none;">${email}</a>
              </p>
            </div>
            
            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Subject:</strong>
              <p style="margin: 5px 0; color: #333; font-size: 16px;">${subject}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <strong style="color: #fbbf24;">Message:</strong>
              <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 10px 0; border-left: 4px solid #fbbf24;">
                <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.6;">${message.replace(
                  /\n/g,
                  "<br>"
                )}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #666;">
            <p>This email was sent from the UCF Alphas website contact form.</p>
            <p style="font-size: 14px;">
              <strong>Alpha Phi Alpha Fraternity, Inc. - Xi Iota Chapter</strong>
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error, null, 2));
      
      // Provide specific error messages based on common Resend errors
      let errorMessage = "Failed to send email";
      let errorDetails = error;
      
      if (error.message) {
        if (error.message.includes("not verified") || error.message.includes("verify")) {
          errorMessage = "The sender email address is not verified. Please verify your domain in Resend.";
        } else if (error.message.includes("API key")) {
          errorMessage = "Invalid API key. Please check your Resend API key configuration.";
        } else if (error.message.includes("rate limit")) {
          errorMessage = "Rate limit exceeded. Please try again later.";
        } else {
          errorMessage = error.message;
        }
      }
      
      return res.status(500).json({
        success: false,
        error: errorMessage,
        debug: {
          error: typeof errorDetails === "object" ? JSON.stringify(errorDetails) : String(errorDetails),
        },
      });
    }

    console.log("Email sent successfully:", data);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully! We'll get back to you soon.",
      data: { id: data?.id },
    });
  } catch (error) {
    console.error("Contact API unexpected error:", error);
    
    // Log more detailed error information
    console.error("Error name:", error?.name);
    console.error("Error message:", error?.message);
    console.error("Error stack:", error?.stack);
    
    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred while processing your request. Please try again later.",
      debug: {
        name: error?.name,
        message: error?.message || String(error),
        stack: error?.stack?.substring(0, 500),
      },
    });
  }
};
