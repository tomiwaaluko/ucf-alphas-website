import { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Handle preflight requests
    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    console.log("Step 1: Basic function started");

    // Test environment variables
    const envCheck = {
      hasApiKey: !!process.env.RESEND_API_KEY,
      apiKeyLength: process.env.RESEND_API_KEY?.length || 0,
      apiKeyPrefix: process.env.RESEND_API_KEY?.substring(0, 5) || "none",
      hasToEmail: !!process.env.TO_EMAIL,
      toEmail: process.env.TO_EMAIL,
      hasFromEmail: !!process.env.FROM_EMAIL,
      fromEmail: process.env.FROM_EMAIL,
    };

    console.log("Step 2: Environment check completed", envCheck);

    // Test Resend import
    console.log("Step 3: Testing Resend import...");
    let resendImportResult;
    try {
      const { Resend } = await import("resend");
      console.log("Step 4: Resend imported successfully", typeof Resend);

      if (!process.env.RESEND_API_KEY) {
        throw new Error("API key missing");
      }

      console.log("Step 5: Creating Resend client...");
      const resend = new Resend(process.env.RESEND_API_KEY);
      console.log("Step 6: Resend client created successfully");

      resendImportResult = {
        imported: true,
        clientCreated: true,
        type: typeof resend,
      };
    } catch (importError) {
      console.error("Step X: Resend import/init failed:", importError);
      resendImportResult = {
        imported: false,
        error:
          importError instanceof Error
            ? importError.message
            : String(importError),
      };
    }

    return res.status(200).json({
      success: true,
      message: "Import test completed",
      environment: envCheck,
      resendTest: resendImportResult,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Function error:", error);
    return res.status(500).json({
      success: false,
      error: "Function failed",
      debug: {
        message: error instanceof Error ? error.message : String(error),
        stack:
          error instanceof Error ? error.stack?.substring(0, 500) : undefined,
      },
    });
  }
}
