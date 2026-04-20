import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router'
import "./css/styles.css";

import { QueriesProvider } from "./providers";
import { LoginPage } from "@/pages/auth/login";

function startApp(): void {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error("Root element not found");
  }

  createRoot(rootElement).render(
    <StrictMode>
      <QueriesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/auth">
              <Route path="login" element={<LoginPage />} />

            </Route>
          </Routes>
        </BrowserRouter>
      </QueriesProvider>
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
