import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Test API endpoint (can be removed in production)
import "./test-resend";

createRoot(document.getElementById("root")!).render(<App />);
