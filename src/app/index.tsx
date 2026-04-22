import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { AuthLayout } from "@/widgets/layouts/auth";
import "./css/styles.css";

import { QueriesProvider, I18nProvider } from "./providers";
import { LoginPage } from "@/pages/auth/login";

function startApp(): void {
  const rootElement = document.getElementById("root");

  if (!rootElement) {
    throw new Error("Root element not found");
  }

  createRoot(rootElement).render(
    <StrictMode>
      <I18nProvider>
        <QueriesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/auth" Component={AuthLayout}>
                <Route path="login" Component={LoginPage} />
              </Route>
            </Routes>
          </BrowserRouter>
        </QueriesProvider>
      </I18nProvider>
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
