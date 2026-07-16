import { Toaster } from "@/components/ui/sonner";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/app/App";

import "@/app/index.css";

import { QueryProvider } from "@/app/providers/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
      <App />
      <Toaster richColors />
    </QueryProvider>
  </React.StrictMode>,
);
