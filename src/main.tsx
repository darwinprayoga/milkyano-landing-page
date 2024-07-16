import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import "@fontsource/inter";
import "@fontsource/inter/400.css"; // Normal 400
import "@fontsource/inter/400-italic.css"; // Italic 400
import "@fontsource/inter/700.css"; // Normal 700
import "@fontsource/inter/700-italic.css"; // Italic 700

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
