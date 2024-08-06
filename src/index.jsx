import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Modal from "react-modal";
import AppRouter from "./router/AppRouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@queries/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

Modal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
