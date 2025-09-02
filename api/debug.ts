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

    // Basic environment check
    console.log("=== Debug Info ===");
    console.log("Method:", req.method);
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("TO_EMAIL exists:", !!process.env.TO_EMAIL);
    console.log("FROM_EMAIL exists:", !!process.env.FROM_EMAIL);

    return res.status(200).json({
      success: true,
      message: "Basic endpoint is working",
      environment: {
        method: req.method,
        hasApiKey: !!process.env.RESEND_API_KEY,
        apiKeyLength: process.env.RESEND_API_KEY?.length || 0,
        hasToEmail: !!process.env.TO_EMAIL,
        hasFromEmail: !!process.env.FROM_EMAIL,
        nodeVersion: process.version,
        timestamp: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Basic function error:", error);
    return res.status(500).json({
      success: false,
      error: "Basic function failed",
      debug: {
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      },
    });
  }
}
