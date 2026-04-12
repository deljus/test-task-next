import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/styles.css";

import { RoutesProvider } from "./providers";

function startApp(): void {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error("Root element not found");
  }

  createRoot(rootElement).render(
    <StrictMode>
      <RoutesProvider />
    </StrictMode>,
  );
}

// Start the app
// This allows for async initialization tasks before rendering, such as:
// - Setting up analytics
// - Fetching critical configuration
// - Initializing third-party services
// - Loading user preferences
startApp();
