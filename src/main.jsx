import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import AuthProvider from "./contexts/authcontext/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProSidebarProvider>
      <AuthProvider>
      <App />
      <Toaster />
      </AuthProvider>

    </ProSidebarProvider>

  </React.StrictMode>
);
