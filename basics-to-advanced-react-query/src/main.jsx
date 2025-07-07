import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools} from "@tanstack/react-query-devtools/production";
//Creating an instance for the queryClient
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  //QueryClientProvider component has to wrap your root component

  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
      <ReactQueryDevtools/>
    </BrowserRouter>
  </QueryClientProvider>
);
