/**
 * Development server for testing API endpoints locally
 * This runs on port 3001 and handles the /api/contact route
 *
 * Usage: node dev-api-server.cjs
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

// Load environment variables from .env file
function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8");
    envContent.split("\n").forEach((line) => {
      line = line.trim();
      // Skip empty lines and comments
      if (!line || line.startsWith("#")) return;

      const [key, ...valueParts] = line.split("=");
      if (key && valueParts.length > 0) {
        const value = valueParts.join("=").trim();
        process.env[key.trim()] = value;
      }
    });
    console.log("✓ Loaded environment variables from .env file\n");
  } else {
    console.log("⚠ Warning: .env file not found\n");
  }
}

// Load .env before anything else
loadEnvFile();

const contactHandler = require("./api/contact.cjs");

const PORT = 3001;

const server = http.createServer(async (req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  // Parse the URL
  const url = new URL(req.url, `http://${req.headers.host}`);

  // Handle /api/contact route
  if (url.pathname === "/api/contact" || url.pathname === "/contact") {
    let body = "";

    // Collect request body
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", async () => {
      try {
        // Parse JSON body if present
        if (body) {
          req.body = JSON.parse(body);
        }

        // Create a mock Vercel-like request/response
        const mockReq = {
          method: req.method,
          headers: req.headers,
          body: req.body,
        };

        const mockRes = {
          status: (code) => {
            res.statusCode = code;
            return mockRes;
          },
          json: (data) => {
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(data));
          },
          setHeader: (key, value) => {
            res.setHeader(key, value);
          },
          end: () => {
            res.end();
          },
        };

        // Call the contact handler
        await contactHandler(mockReq, mockRes);
      } catch (error) {
        console.error("Error handling request:", error);
        res.statusCode = 500;
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            success: false,
            error: "Internal server error",
            debug: error.message,
          })
        );
      }
    });
  } else {
    // Handle 404
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end(
      JSON.stringify({
        success: false,
        error: "Not found",
      })
    );
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Development API server running on http://localhost:${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
  console.log("\n⚙️  Environment variables:");
  console.log(
    `   RESEND_API_KEY: ${process.env.RESEND_API_KEY ? "✓ Set" : "✗ Not set"}`
  );
  console.log(`   TO_EMAIL: ${process.env.TO_EMAIL || "✗ Not set"}`);
  console.log(
    `   FROM_EMAIL: ${
      process.env.FROM_EMAIL || "✗ Not set (will use onboarding@resend.dev)"
    }`
  );
  console.log("\n💡 Press Ctrl+C to stop the server\n");
});

server.on("error", (error) => {
  if (error.code === "EADDRINUSE") {
    console.error(
      `❌ Port ${PORT} is already in use. Please stop the other server or choose a different port.`
    );
  } else {
    console.error("❌ Server error:", error);
  }
  process.exit(1);
});
