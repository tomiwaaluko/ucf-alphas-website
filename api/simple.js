export default function handler(req, res) {
  try {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    if (req.method === "OPTIONS") {
      return res.status(200).end();
    }

    console.log("Simple function started");
    console.log("Node version:", process.version);
    console.log("Environment keys:", Object.keys(process.env).length);

    return res.status(200).json({
      success: true,
      message: "Simple function works",
      data: {
        method: req.method,
        nodeVersion: process.version,
        timestamp: new Date().toISOString(),
        envCount: Object.keys(process.env).length,
      },
    });
  } catch (error) {
    console.error("Simple function error:", error);
    return res.status(500).json({
      success: false,
      error: "Simple function failed",
      message: String(error),
    });
  }
}
