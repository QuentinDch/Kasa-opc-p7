// Modules externes
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Composant interne
import App from "./App.jsx";

// Styles
import "./main.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
