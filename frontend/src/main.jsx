import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./AuthContext";
import App from "./pages/App";
import "./styles/Events.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
