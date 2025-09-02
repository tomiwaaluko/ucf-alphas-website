import { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Input validation helper
const validateContactData = (data: unknown): ContactFormData => {
  // Type guard to ensure data is an object
  if (!data || typeof data !== "object") {
    throw new Error("Invalid request data");
  }

  const formData = data as Record<string, unknown>;
  const { name, email, subject, message } = formData;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    throw new Error("Name is required");
  }
  if (!email || typeof email !== "string" || !email.includes("@")) {
    throw new Error("Valid email is required");
  }
  if (!subject || typeof subject !== "string" || subject.trim().length === 0) {
    throw new Error("Subject is required");
  }
  if (!message || typeof message !== "string" || message.trim().length === 0) {
    throw new Error("Message is required");
  }

  // Basic sanitization
  return {
    name: name.trim().slice(0, 100), // Limit name length
    email: email.trim().toLowerCase().slice(0, 255), // Limit email length
    subject: subject.trim().slice(0, 200), // Limit subject length
    message: message.trim().slice(0, 2000), // Limit message length
  };
};

// HTML email template
const createEmailTemplate = (data: ContactFormData): string => {
  const { name, email, subject, message } = data;

  return `
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
  `;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Debug environment variables
  console.log("=== Environment Debug ===");
  console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
  console.log(
    "RESEND_API_KEY length:",
    process.env.RESEND_API_KEY?.length || 0
  );
  console.log("TO_EMAIL exists:", !!process.env.TO_EMAIL);
  console.log("TO_EMAIL value:", process.env.TO_EMAIL);
  console.log("FROM_EMAIL exists:", !!process.env.FROM_EMAIL);
  console.log("FROM_EMAIL value:", process.env.FROM_EMAIL);
  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("VERCEL_ENV:", process.env.VERCEL_ENV);
  console.log(
    "All env vars:",
    Object.keys(process.env).filter(
      (key) => key.includes("RESEND") || key.includes("EMAIL")
    )
  );
  console.log("========================");

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

  try {
    // Check if API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      console.error(
        "Available env vars:",
        Object.keys(process.env).filter((key) => key.includes("RESEND"))
      );
      return res.status(500).json({
        success: false,
        error: "Email service is not configured. Please try again later.",
        debug: "RESEND_API_KEY missing",
      });
    }

    // Check if recipient email is configured
    if (!process.env.TO_EMAIL) {
      console.error("TO_EMAIL is not configured");
      console.error(
        "Available env vars:",
        Object.keys(process.env).filter((key) => key.includes("EMAIL"))
      );
      return res.status(500).json({
        success: false,
        error: "Email service is not configured. Please try again later.",
        debug: "TO_EMAIL missing",
      });
    }

    // Validate and sanitize input data
    const contactData = validateContactData(req.body);

    // Initialize Resend client with the API key
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Create email content
    const htmlContent = createEmailTemplate(contactData);
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    console.log("Sending email with config:", {
      from: fromEmail,
      to: process.env.TO_EMAIL,
      subject: `New Contact Form: ${contactData.subject}`,
      timestamp: new Date().toISOString(),
    });

    // Send email via Resend
    const { data: emailResponse, error } = await resend.emails.send({
      from: `UCF Alphas Contact Form <${fromEmail}>`,
      to: [process.env.TO_EMAIL],
      subject: `New Contact Form: ${contactData.subject}`,
      html: htmlContent,
      replyTo: contactData.email,
    });

    if (error) {
      console.error("Resend API error:", {
        error,
        timestamp: new Date().toISOString(),
        requestData: {
          from: fromEmail,
          to: process.env.TO_EMAIL,
          subject: `New Contact Form: ${contactData.subject}`,
        },
      });
      return res.status(500).json({
        success: false,
        error: "Failed to send email. Please try again later.",
        debug: typeof error === "object" ? JSON.stringify(error) : error,
      });
    }

    console.log("Email sent successfully:", emailResponse);

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: { id: emailResponse?.id },
    });
  } catch (error) {
    console.error("Contact API error:", error);

    // Return user-friendly error messages
    if (error instanceof Error && error.message.includes("required")) {
      return res.status(400).json({
        success: false,
        error: error.message,
      });
    }

    return res.status(500).json({
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    });
  }
}
