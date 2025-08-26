import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Temporary: Import test file for debugging
import "./test-resend";

createRoot(document.getElementById("root")!).render(<App />);
