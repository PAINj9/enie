import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CopyProvider } from "./lib/copy-context";
import "./styles/index.css";

const container = document.getElementById("root");
if (!container) throw new Error("#root not found in index.html");

createRoot(container).render(
  <StrictMode>
    <CopyProvider>
      <App />
    </CopyProvider>
  </StrictMode>,
);
