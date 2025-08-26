// Test file to check Resend configuration
console.log("Environment Variables Check:");
console.log(
  "VITE_RESEND_API_KEY:",
  import.meta.env.VITE_RESEND_API_KEY ? "Set" : "Not set"
);
console.log("VITE_FROM_EMAIL:", import.meta.env.VITE_FROM_EMAIL);
console.log("VITE_TO_EMAIL:", import.meta.env.VITE_TO_EMAIL);

// Test the Resend import
import { sendContactEmail } from "./lib/resend";

// Test function
window.testResend = async () => {
  const testData = {
    name: "Test User",
    email: "test@example.com",
    subject: "Test Subject",
    message: "This is a test message",
  };

  const result = await sendContactEmail(testData);
  console.log("Test result:", result);
  return result;
};

console.log(
  "Resend test function loaded. Call window.testResend() in console to test."
);
