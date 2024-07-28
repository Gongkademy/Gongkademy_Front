import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Modal from "react-modal";
import AppRouter from "./router/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

Modal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
