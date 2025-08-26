import { Resend } from "resend";

// Initialize Resend client
const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendContactEmail = async (data: EmailData) => {
  try {
    // Check if API key is configured
    if (
      !import.meta.env.VITE_RESEND_API_KEY ||
      import.meta.env.VITE_RESEND_API_KEY === "your_resend_api_key_here"
    ) {
      throw new Error(
        "Resend API key is not configured. Please check your environment variables."
      );
    }

    const { name, email, subject, message } = data;

    const htmlContent = `
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
              <p style="margin: 0; color: #333; font-size: 16px; line-height: 1.6;">${message}</p>
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

    const fromEmail =
      import.meta.env.VITE_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = import.meta.env.VITE_TO_EMAIL;

    if (!toEmail) {
      throw new Error("TO email address is not configured.");
    }

    console.log("Sending email with config:", {
      from: fromEmail,
      to: toEmail,
      subject: `New Contact Form: ${subject}`,
      hasApiKey: !!import.meta.env.VITE_RESEND_API_KEY,
    });

    const { data: emailResponse, error } = await resend.emails.send({
      from: `UCF Alphas Contact Form <${fromEmail}>`,
      to: [toEmail],
      subject: `New Contact Form: ${subject}`,
      html: htmlContent,
      replyTo: email,
    });

    if (error) {
      console.error("Resend API error:", error);
      throw new Error(error.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResponse);
    return { success: true, data: emailResponse };
  } catch (error) {
    console.error("Email service error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    };
  }
};

export default resend;
